import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { verifyPayment } from "@/lib/paystack"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { reference } = await req.json()
    if (!reference) {
      return NextResponse.json({ error: "Missing reference" }, { status: 400 })
    }

    const existing = await prisma.payment.findUnique({ where: { reference } })
    if (existing) {
      return NextResponse.json({ payment: existing, alreadyProcessed: true })
    }

    const result = await verifyPayment(reference)
    if (!result.status || !result.data) {
      return NextResponse.json({ error: "Verification failed" }, { status: 400 })
    }

    const data = result.data
    if (data.status !== "success") {
      return NextResponse.json({ error: "Payment not successful", status: data.status }, { status: 400 })
    }

    const payment = await prisma.payment.create({
      data: {
        userId: user.id,
        amount: data.amount,
        currency: data.currency || "KES",
        status: "success",
        reference,
        paystackRef: reference,
        channel: data.channel,
        paidAt: data.paidAt ? new Date(data.paidAt) : new Date(),
      },
    })

    const metadata = data.metadata || {}
    if (metadata.plan) {
      const planType = metadata.plan.toUpperCase()
      if (planType === "PROFESSIONAL" || planType === "BUSINESS") {
        await prisma.subscription.upsert({
          where: { userId: user.id },
          update: { plan: planType, status: "ACTIVE" },
          create: {
            userId: user.id,
            plan: planType,
            status: "ACTIVE",
            startsAt: new Date(),
          },
        })
      }

      await prisma.invoice.create({
        data: {
          userId: user.id,
          amount: data.amount,
          currency: data.currency || "KES",
          status: "paid",
          invoiceCode: `INV-${reference.slice(-8).toUpperCase()}`,
          paidAt: new Date(),
          paymentId: payment.id,
        },
      })
    }

    return NextResponse.json({ payment, plan: metadata.plan || null })
  } catch (error) {
    console.error("Verify payment error:", error)
    return NextResponse.json({ error: "Verification failed" }, { status: 500 })
  }
}
