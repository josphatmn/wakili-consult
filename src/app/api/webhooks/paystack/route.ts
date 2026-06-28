import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const signature = req.headers.get("x-paystack-signature")

    const event = JSON.parse(body)

    if (event.event === "charge.success") {
      const { reference, amount, customer, metadata } = event.data

      const payment = await prisma.payment.create({
        data: {
          userId: metadata?.userId || "",
          amount,
          currency: "KES",
          status: "success",
          reference: reference,
          paystackRef: reference,
          channel: event.data.channel,
          paidAt: new Date(),
        },
      })

      if (metadata?.plan) {
        await prisma.subscription.update({
          where: { userId: metadata.userId },
          data: {
            plan: metadata.plan.toUpperCase(),
            status: "ACTIVE",
          },
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 })
  }
}
