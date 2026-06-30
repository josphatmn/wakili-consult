"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CreditCard, FileText, Activity, Loader2 } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { toast } from "sonner"

interface AdminData {
  stats: {
    totalUsers: number
    totalRevenue: number
    totalDocuments: number
    totalQueries: number
  }
  recentUsers: {
    id: string
    name: string | null
    email: string
    role: string
    createdAt: string
  }[]
  recentPayments: {
    id: string
    amount: number
    currency: string
    status: string
    reference: string
    channel: string | null
    paidAt: string | null
    createdAt: string
    user: { name: string | null; email: string }
  }[]
}

export default function AdminPage() {
  const [data, setData] = useState<AdminData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => {
        if (r.status === 403) throw new Error("Forbidden")
        return r.json()
      })
      .then(setData)
      .catch(() => toast.error("Failed to load admin data"))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  const stats = data?.stats
  const statCards = [
    { label: "Total Users", value: stats?.totalUsers ?? 0, icon: Users, color: "from-violet-500 to-purple-600" },
    { label: "Revenue", value: `KES ${((stats?.totalRevenue ?? 0) / 100).toLocaleString()}`, icon: CreditCard, color: "from-blue-500 to-cyan-600" },
    { label: "Documents", value: stats?.totalDocuments ?? 0, icon: FileText, color: "from-amber-500 to-orange-600" },
    { label: "AI Queries", value: stats?.totalQueries ?? 0, icon: Activity, color: "from-emerald-500 to-teal-600" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">Platform analytics and management</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data?.recentUsers.length === 0 ? (
              <div className="text-center py-8 text-sm text-muted-foreground">No users registered yet</div>
            ) : (
              <div className="space-y-2">
                {data?.recentUsers.map((u) => (
                  <div key={u.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{u.name || "Unnamed"}</p>
                      <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted-foreground">{formatDate(u.createdAt)}</span>
                      <Badge variant={u.role === "ADMIN" ? "default" : "secondary"} className="text-[10px]">
                        {u.role}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Recent Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data?.recentPayments.length === 0 ? (
              <div className="text-center py-8 text-sm text-muted-foreground">No payments yet</div>
            ) : (
              <div className="space-y-2">
                {data?.recentPayments.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                    <div className="min-w-0">
                      <p className="text-sm font-medium">
                        {p.currency} {(p.amount / 100).toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{p.user.name || p.user.email}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-muted-foreground">
                        {p.paidAt ? formatDate(p.paidAt) : formatDate(p.createdAt)}
                      </span>
                      <Badge variant={p.status === "success" ? "success" : "secondary"} className="text-[10px]">
                        {p.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
