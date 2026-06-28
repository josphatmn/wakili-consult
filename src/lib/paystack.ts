const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY
const PAYSTACK_API = "https://api.paystack.co"

interface PaystackResponse {
  status: boolean
  message: string
  data?: any
}

async function paystackRequest(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${PAYSTACK_API}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  })
  return response.json() as Promise<PaystackResponse>
}

export async function initializePayment(email: string, amount: number, metadata?: Record<string, any>) {
  return paystackRequest("/transaction/initialize", {
    method: "POST",
    body: JSON.stringify({
      email,
      amount,
      currency: "KES",
      metadata,
    }),
  })
}

export async function verifyPayment(reference: string) {
  return paystackRequest(`/transaction/verify/${reference}`)
}

export async function createSubscription(email: string, planCode: string) {
  return paystackRequest("/subscription", {
    method: "POST",
    body: JSON.stringify({
      customer: email,
      plan: planCode,
    }),
  })
}

export async function createPlan(name: string, amount: number, interval: string = "monthly") {
  return paystackRequest("/plan", {
    method: "POST",
    body: JSON.stringify({
      name,
      amount,
      interval,
      currency: "KES",
    }),
  })
}
