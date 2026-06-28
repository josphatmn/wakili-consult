"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Plus, Search, Briefcase, Calendar, CheckSquare, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectItem } from "@/components/ui/select"
import { toast } from "sonner"

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "success",
  PENDING: "warning",
  CLOSED: "secondary",
  ARCHIVED: "outline",
  ON_HOLD: "destructive",
}

interface CaseItem {
  id: string
  title: string
  caseNumber: string | null
  status: string
  caseType: string | null
  priority: string
  client: { id: string; name: string; phone: string | null }
  _count: { tasks: number; documents: number; timeline: number; hearings: number }
}

export default function CaseSpacesPage() {
  const router = useRouter()
  const [cases, setCases] = useState<CaseItem[]>([])
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [loading, setLoading] = useState(true)
  const [showNew, setShowNew] = useState(false)
  const [clients, setClients] = useState<Array<{ id: string; name: string }>>([])
  const [form, setForm] = useState({
    title: "", caseNumber: "", caseType: "", court: "", priority: "MEDIUM", clientId: "", opponents: "",
  })

  useEffect(() => {
    fetchCases()
    fetch("/api/clients").then((r) => r.json()).then((d) => setClients(d.clients || []))
  }, [search, statusFilter])

  async function fetchCases() {
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (statusFilter) params.set("status", statusFilter)
    const res = await fetch(`/api/casespaces?${params}`)
    const data = await res.json()
    setCases(data.cases || [])
    setLoading(false)
  }

  async function createCase(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch("/api/casespaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      toast.success("Case created")
      setShowNew(false)
      setForm({ title: "", caseNumber: "", caseType: "", court: "", priority: "MEDIUM", clientId: "", opponents: "" })
      fetchCases()
    } catch {
      toast.error("Failed to create case")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Case Spaces</h1>
          <p className="text-muted-foreground mt-1">Manage your legal cases from start to finish</p>
        </div>
        <Dialog open={showNew} onOpenChange={setShowNew}>
          <DialogTrigger asChild>
            <Button variant="gradient">
              <Plus className="h-4 w-4 mr-2" /> New Case
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader><DialogTitle>New Case Space</DialogTitle></DialogHeader>
            <form onSubmit={createCase} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Client *</Label>
                  <Select value={form.clientId} onValueChange={(v) => setForm({ ...form, clientId: v })} placeholder="Select client">
                    {clients.map((c) => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v })}>
                    <SelectItem value="HIGH">High</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="LOW">Low</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Case Title *</Label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="e.g. Commercial Dispute - Kamau vs Njenga" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Case Number</Label>
                  <Input value={form.caseNumber} onChange={(e) => setForm({ ...form, caseNumber: e.target.value })} placeholder="e.g. CMC Civil Case 123/24" />
                </div>
                <div className="space-y-2">
                  <Label>Case Type</Label>
                  <Select value={form.caseType || ""} onValueChange={(v) => setForm({ ...form, caseType: v })} placeholder="Select type">
                    <SelectItem value="CIVIL">Civil</SelectItem>
                    <SelectItem value="CRIMINAL">Criminal</SelectItem>
                    <SelectItem value="FAMILY">Family</SelectItem>
                    <SelectItem value="LAND">Land</SelectItem>
                    <SelectItem value="EMPLOYMENT">Employment</SelectItem>
                    <SelectItem value="COMMERCIAL">Commercial</SelectItem>
                    <SelectItem value="CONSTITUTIONAL">Constitutional</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Court</Label>
                <Input value={form.court} onChange={(e) => setForm({ ...form, court: e.target.value })} placeholder="e.g. Milimani Law Courts" />
              </div>
              <div className="space-y-2">
                <Label>Opponents (optional)</Label>
                <Input value={form.opponents} onChange={(e) => setForm({ ...form, opponents: e.target.value })} placeholder="e.g. Jane Njenga" />
              </div>
              <Button type="submit" variant="gradient" className="w-full">Create Case Space</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search cases by title, number, or client..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-12" />
        </div>
        <Tabs defaultValue="" value={statusFilter} onValueChange={setStatusFilter}>
          <TabsList>
            <TabsTrigger value="">All</TabsTrigger>
            <TabsTrigger value="ACTIVE">Active</TabsTrigger>
            <TabsTrigger value="PENDING">Pending</TabsTrigger>
            <TabsTrigger value="CLOSED">Closed</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {loading ? (
        <div className="space-y-3">{[1, 2, 3].map((i) => <Card key={i}><CardContent className="p-6"><div className="h-16 animate-pulse bg-muted rounded-lg" /></CardContent></Card>)}</div>
      ) : cases.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Briefcase className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No cases yet</h3>
            <p className="text-sm text-muted-foreground mb-6">Create your first case space</p>
            <Button variant="gradient" onClick={() => setShowNew(true)}><Plus className="h-4 w-4 mr-2" /> New Case</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Card className="cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all" onClick={() => router.push(`/casespaces/${c.id}`)}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{c.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1.5">
                          {c.caseNumber && <span className="text-xs text-muted-foreground">{c.caseNumber}</span>}
                          <Badge variant="outline" className="text-xs">{c.client.name}</Badge>
                          {c.caseType && <Badge variant="secondary" className="text-xs">{c.caseType}</Badge>}
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {c._count.documents}</span>
                          <span className="flex items-center gap-1"><CheckSquare className="h-3 w-3" /> {c._count.tasks}</span>
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {c._count.hearings}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={(STATUS_COLORS[c.status] || "secondary") as any}>{c.status}</Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
