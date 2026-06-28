"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { PRICING_PLANS } from "@/lib/constants"
import { toast } from "sonner"

export default function BillingPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const currentPlan = "FREE"

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
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{currentPlan}</p>
              <p className="text-sm text-muted-foreground">
                {currentPlan === "FREE" ? "10 AI questions remaining" : "Unlimited access"}
              </p>
            </div>
            <Badge variant="secondary">{currentPlan}</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRICING_PLANS.map((plan) => (
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
              disabled={loading === plan.name || currentPlan === plan.name.toUpperCase()}
              onClick={() => handleSubscribe(plan.name.toLowerCase())}
            >
              {loading === plan.name ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : currentPlan === plan.name.toUpperCase() ? (
                "Current Plan"
              ) : (
                plan.cta
              )}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
