"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Search, Loader2 } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface AdminUser {
  id: string
  name: string | null
  email: string
  role: string
  credits: number
  createdAt: string
  subscription: { plan: string; status: string } | null
  _count: { payments: number; documents: number; researches: number }
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([])
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

    fetch(`/api/admin/users?${params}`)
      .then((r) => r.json())
      .then((d) => {
        setUsers(d.users)
        setTotal(d.total)
        setTotalPages(d.totalPages)
      })
      .finally(() => setLoading(false))
  }, [query, page])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground mt-1">{total} total registered users</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or email..."
          className="pl-9"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1) }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Users className="h-4 w-4" />
            All Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
          ) : users.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground">No users found</div>
          ) : (
            <div className="space-y-2">
              {users.map((u) => (
                <div key={u.id} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{u.name || "Unnamed"}</p>
                    <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-xs text-muted-foreground">{formatDate(u.createdAt)}</span>
                    <Badge variant={u.role === "ADMIN" || u.role === "SUPER_ADMIN" ? "default" : "secondary"} className="text-[10px]">
                      {u.role}
                    </Badge>
                    <Badge variant={u.subscription?.status === "ACTIVE" ? "success" : "secondary"} className="text-[10px]">
                      {u.subscription?.plan || "FREE"}
                    </Badge>
                    <div className="text-xs text-muted-foreground text-right">
                      <div>{u._count.documents} docs</div>
                      <div>{u._count.researches} queries</div>
                    </div>
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
