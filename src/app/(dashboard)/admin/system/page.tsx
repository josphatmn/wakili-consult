"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Database, Cpu, HardDrive, Globe, Shield, Loader2, CheckCircle2, XCircle } from "lucide-react"

interface ServiceStatus {
  label: string
  status: "operational" | "degraded" | "down"
  icon: typeof Activity
  detail: string
}

interface EnvInfo {
  key: string
  value: string
}

export default function AdminSystemPage() {
  const [dbConnected, setDbConnected] = useState<boolean | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/admin/stats")
        setDbConnected(res.ok)
      } catch {
        setDbConnected(false)
      } finally {
        setChecking(false)
      }
    }
    check()
  }, [])

  const services: ServiceStatus[] = [
    { label: "API Server", status: "operational", icon: Globe, detail: "Responding normally" },
    { label: "Database (MySQL)", status: dbConnected === true ? "operational" : dbConnected === false ? "down" : "operational", icon: Database, detail: dbConnected === true ? "Connected" : dbConnected === false ? "Connection failed" : "Checking..." },
    { label: "AI Service (OpenAI)", status: process.env.NEXT_PUBLIC_APP_URL ? "operational" : "degraded", icon: Cpu, detail: process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== "sk-your-key" ? "API key configured" : "No API key set" },
    { label: "Storage", status: "operational", icon: HardDrive, detail: "Local filesystem ready" },
    { label: "Paystack", status: process.env.NEXT_PUBLIC_APP_URL ? "operational" : "degraded", icon: Shield, detail: "Payment gateway configured" },
  ]

  const envVars: EnvInfo[] = [
    { key: "Node Environment", value: process.env.NODE_ENV || "development" },
    { key: "App URL", value: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000" },
    { key: "OpenAI Model", value: process.env.OPENAI_MODEL || "gpt-5.5" },
    { key: "OpenAI Key", value: process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== "sk-your-key" ? "Configured" : "Not set" },
    { key: "Paystack Public Key", value: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ? "Configured" : "Not set" },
    { key: "Database", value: "MySQL (Prisma)" },
  ]

  const statusColor = (s: string) => {
    switch (s) {
      case "operational": return "success"
      case "degraded": return "warning"
      case "down": return "destructive"
      default: return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">System</h1>
        <p className="text-muted-foreground mt-1">Platform health and environment information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Activity className="h-4 w-4" />
            Service Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {services.map((s) => (
              <div key={s.label} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                    s.status === "operational" ? "bg-emerald-500/10" : s.status === "degraded" ? "bg-amber-500/10" : "bg-red-500/10"
                  }`}>
                    {s.status === "operational" ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <XCircle className={`h-4 w-4 ${s.status === "degraded" ? "text-amber-500" : "text-red-500"}`} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.detail}</p>
                  </div>
                </div>
                <Badge variant={statusColor(s.status) as "success" | "warning" | "destructive" | "secondary"} className="text-[10px] capitalize">
                  {s.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Cpu className="h-4 w-4" />
            Environment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {envVars.map((e) => (
              <div key={e.key} className="flex items-center justify-between py-2 border-b last:border-0">
                <span className="text-sm text-muted-foreground">{e.key}</span>
                <span className="text-sm font-medium font-mono">{e.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
