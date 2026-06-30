import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { initializePayment } from "@/lib/paystack"

const PLAN_PRICES: Record<string, number> = {
  professional: 99900,
  business: 499900,
}

const CALLBACK_URL = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard/billing/callback`

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { plan } = await req.json()
    const amount = PLAN_PRICES[plan]

    if (!amount) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    const result = await initializePayment(user.email!, amount, {
      userId: user.id,
      plan,
    }, CALLBACK_URL)

    if (result.status && result.data) {
      return NextResponse.json({ url: result.data.authorization_url })
    }

    return NextResponse.json({ error: "Payment initialization failed" }, { status: 400 })
  } catch (error) {
    console.error("Payment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
