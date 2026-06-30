"use client"

import { Suspense, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle2, XCircle, Loader2, ArrowLeft, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Status = "verifying" | "success" | "error"

function CallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<Status>("verifying")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const reference = searchParams.get("reference") || searchParams.get("trxref")
    if (!reference) {
      setStatus("error")
      setErrorMsg("No payment reference found")
      return
    }

    async function verify() {
      try {
        const res = await fetch("/api/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference }),
        })
        const data = await res.json()
        if (res.ok) {
          setStatus("success")
        } else {
          setStatus("error")
          setErrorMsg(data.error || "Payment verification failed")
        }
      } catch {
        setStatus("error")
        setErrorMsg("Network error — please contact support")
      }
    }

    const timer = setTimeout(verify, 800)
    return () => clearTimeout(timer)
  }, [searchParams])

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="w-[420px] max-w-full">
          <CardContent className="p-10 text-center">
            {status === "verifying" && (
              <div className="space-y-5">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Verifying Payment</h2>
                  <p className="text-sm text-muted-foreground">Confirming your payment with Paystack...</p>
                </div>
              </div>
            )}

            {status === "success" && (
              <div className="space-y-5">
                <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Payment Successful!</h2>
                  <p className="text-sm text-muted-foreground">
                    Your plan has been upgraded. You now have full access to all features.
                  </p>
                </div>
                <Button variant="gradient" className="w-full" onClick={() => router.push("/dashboard/billing")}>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Back to Billing
                </Button>
              </div>
            )}

            {status === "error" && (
              <div className="space-y-5">
                <div className="h-16 w-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto">
                  <XCircle className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Verification Failed</h2>
                  <p className="text-sm text-muted-foreground">{errorMsg}</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => router.push("/dashboard/billing")}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button variant="gradient" className="flex-1" onClick={() => router.refresh()}>
                    Try Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default function PaymentCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    }>
      <CallbackContent />
    </Suspense>
  )
}
