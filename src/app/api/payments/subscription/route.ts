import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const subscription = await prisma.subscription.findUnique({
    where: { userId: user.id },
  })

  const recentPayments = await prisma.payment.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 10,
    select: {
      id: true,
      amount: true,
      currency: true,
      status: true,
      reference: true,
      channel: true,
      paidAt: true,
      createdAt: true,
    },
  })

  return NextResponse.json({
    plan: subscription?.plan || "FREE",
    status: subscription?.status || "TRIAL",
    credits: user.credits,
    trialEndsAt: subscription?.trialEndsAt,
    payments: recentPayments,
  })
}
