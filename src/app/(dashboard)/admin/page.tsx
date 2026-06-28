"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CreditCard, FileText, TrendingUp, Activity } from "lucide-react"

const adminStats = [
  { label: "Total Users", value: "0", icon: Users, color: "from-violet-500 to-purple-600", change: "+0%" },
  { label: "Revenue", value: "KES 0", icon: CreditCard, color: "from-blue-500 to-cyan-600", change: "+0%" },
  { label: "Documents", value: "0", icon: FileText, color: "from-amber-500 to-orange-600", change: "+0%" },
  { label: "AI Queries", value: "0", icon: Activity, color: "from-emerald-500 to-teal-600", change: "+0%" },
]

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Platform analytics and management</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-emerald-500 font-medium">{stat.change}</span>
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
            <div className="text-center py-8 text-sm text-muted-foreground">
              No users registered yet
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { label: "API Status", status: "Operational", color: "text-emerald-500" },
                { label: "Database", status: "Connected", color: "text-emerald-500" },
                { label: "AI Service", status: "Ready", color: "text-emerald-500" },
                { label: "Storage", status: "Active", color: "text-emerald-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2">
                  <span className="text-sm">{item.label}</span>
                  <span className={`text-sm font-medium ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
