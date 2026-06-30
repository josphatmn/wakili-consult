"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Search, Loader2 } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface AdminPayment {
  id: string
  amount: number
  currency: string
  status: string
  reference: string
  channel: string | null
  paidAt: string | null
  createdAt: string
  user: { name: string | null; email: string }
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<AdminPayment[]>([])
  const [total, setTotal] = useState(0)
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const params = new URLSearchParams()
    if (query) params.set("q", query)
    params.set("page", String(page))

    fetch(`/api/admin/payments?${params}`)
      .then((r) => r.json())
      .then((d) => {
        setPayments(d.payments)
        setTotal(d.total)
        setTotalPages(d.totalPages)
      })
      .finally(() => setLoading(false))
  }, [query, page])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>
        <p className="text-muted-foreground mt-1">{total} total transactions</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by reference or email..."
          className="pl-9"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1) }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CreditCard className="h-4 w-4" />
            All Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
          ) : payments.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground">No payments found</div>
          ) : (
            <div className="space-y-2">
              {payments.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      {p.currency} {(p.amount / 100).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{p.user.name || p.user.email}</p>
                    <p className="text-xs text-muted-foreground font-mono">Ref: {p.reference.slice(0, 16)}...</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-xs text-muted-foreground">
                      {p.paidAt ? formatDate(p.paidAt) : formatDate(p.createdAt)}
                    </span>
                    {p.channel && <span className="text-xs text-muted-foreground capitalize">{p.channel}</span>}
                    <Badge variant={p.status === "success" ? "success" : "secondary"} className="text-[10px]">
                      {p.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <p className="text-xs text-muted-foreground">Page {page} of {totalPages}</p>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1.5 text-xs rounded-lg border hover:bg-muted disabled:opacity-40"
                  disabled={page <= 1}
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </button>
                <button
                  className="px-3 py-1.5 text-xs rounded-lg border hover:bg-muted disabled:opacity-40"
                  disabled={page >= totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
