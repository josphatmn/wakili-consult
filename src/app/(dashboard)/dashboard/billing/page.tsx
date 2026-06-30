"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CreditCard, Check, Loader2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PRICING_PLANS } from "@/lib/constants"
import { toast } from "sonner"

interface SubscriptionData {
  plan: string
  status: string
  credits: number
  trialEndsAt: string | null
  payments: {
    id: string
    amount: number
    currency: string
    status: string
    reference: string
    channel: string | null
    paidAt: string | null
    createdAt: string
  }[]
}

export default function BillingPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const [sub, setSub] = useState<SubscriptionData | null>(null)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    fetch("/api/payments/subscription")
      .then((r) => r.json())
      .then((data) => setSub(data))
      .catch(() => toast.error("Failed to load subscription"))
      .finally(() => setFetching(false))
  }, [])

  async function handleSubscribe(plan: string) {
    setLoading(plan)
    try {
      const res = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        toast.error("Payment initialization failed")
      }
    } catch {
      toast.error("Something went wrong")
    } finally {
      setLoading(null)
    }
  }

  const currentPlan = sub?.plan || "FREE"
  const isOnTrial = sub?.status === "TRIAL"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Billing</h1>
        <p className="text-muted-foreground mt-1">Manage your subscription and payments</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Current Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          {fetching ? (
            <div className="h-12 animate-pulse bg-muted rounded-lg" />
          ) : (
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-bold">{currentPlan}</p>
                  {isOnTrial && (
                    <Badge variant="warning" className="text-xs">Trial</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentPlan === "FREE"
                    ? `${sub?.credits ?? 10} AI questions remaining`
                    : "Unlimited access"}
                </p>
                {sub?.trialEndsAt && isOnTrial && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Trial ends {new Date(sub.trialEndsAt).toLocaleDateString()}
                  </p>
                )}
              </div>
              <Badge variant={currentPlan === "FREE" ? "secondary" : "success"}>
                {currentPlan}
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRICING_PLANS.map((plan) => {
          const isCurrent = currentPlan === plan.name.toUpperCase()
          return (
            <motion.div
              key={plan.name}
              whileHover={{ y: -2 }}
              className={cn(
                "glass-card rounded-2xl p-6",
                plan.popular && "ring-2 ring-primary"
              )}
            >
              {plan.popular && (
                <Badge className="mb-3 gradient-primary border-0">Most Popular</Badge>
              )}
              <h3 className="font-semibold mb-1">{plan.name}</h3>
              <div className="mb-4">
                {plan.price === 0 ? (
                  <span className="text-2xl font-bold">Free</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">KES</span>
                    <span className="text-3xl font-bold">{(plan.price / 100).toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">/{plan.interval}</span>
                  </div>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "gradient" : "outline"}
                disabled={loading === plan.name || isCurrent}
                onClick={() => handleSubscribe(plan.name.toLowerCase())}
              >
                {loading === plan.name ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isCurrent ? (
                  "Current Plan"
                ) : plan.price === 0 ? (
                  "Downgrade"
                ) : (
                  plan.cta
                )}
              </Button>
            </motion.div>
          )
        })}
      </div>

      {sub?.payments && sub.payments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-4 w-4" />
              Payment History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {sub.payments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                  <div>
                    <p className="text-sm font-medium">
                      {payment.currency} {(payment.amount / 100).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {payment.paidAt ? new Date(payment.paidAt).toLocaleDateString() : new Date(payment.createdAt).toLocaleDateString()}
                      {payment.channel && ` via ${payment.channel}`}
                    </p>
                  </div>
                  <Badge variant={payment.status === "success" ? "success" : "secondary"}>
                    {payment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
