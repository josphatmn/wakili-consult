"use client"

import { motion } from "framer-motion"
import { Search, FileText, MessageSquare, TrendingUp, Clock, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Research Credits", value: "10", icon: Search, color: "from-violet-500 to-purple-600" },
  { label: "Documents", value: "0", icon: FileText, color: "from-blue-500 to-cyan-600" },
  { label: "Conversations", value: "0", icon: MessageSquare, color: "from-amber-500 to-orange-600" },
  { label: "Cases Saved", value: "0", icon: TrendingUp, color: "from-emerald-500 to-teal-600" },
]

const recentActivity = [
  { action: "Welcome to M-Wakili AI!", time: "Just now", type: "system" },
]

const quickActions = [
  { label: "New Research", href: "/dashboard/research", icon: Search, color: "from-violet-500 to-purple-600" },
  { label: "Upload Document", href: "/dashboard/documents", icon: FileText, color: "from-blue-500 to-cyan-600" },
  { label: "AI Chat", href: "/dashboard/chat", icon: MessageSquare, color: "from-amber-500 to-orange-600" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to your AI legal workspace</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary">{stat.value}</Badge>
                </div>
                <p className="text-sm font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivity.length > 0 ? (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Star className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">No activity yet</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                className="w-full justify-start gap-3 h-12"
                asChild
              >
                <a href={action.href}>
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  {action.label}
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
