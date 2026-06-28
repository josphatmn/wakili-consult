"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Phone, Mail, FileText, MapPin, IdCard, Plus, Briefcase, Calendar, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { formatDate } from "@/lib/utils"
import { toast } from "sonner"

interface ClientDetail {
  id: string
  name: string
  email: string | null
  phone: string | null
  idNumber: string | null
  kraPin: string | null
  address: string | null
  type: string
  notes: string | null
  cases: Array<{
    id: string
    title: string
    caseNumber: string | null
    status: string
    caseType: string | null
    _count: { tasks: number; documents: number }
  }>
}

export default function ClientDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [client, setClient] = useState<ClientDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [showEdit, setShowEdit] = useState(false)
  const [editing, setEditing] = useState(false)

  const emptyForm = { name: "", email: "", phone: "", idNumber: "", kraPin: "", address: "", type: "INDIVIDUAL", notes: "" }
  const [editForm, setEditForm] = useState(emptyForm)

  useEffect(() => {
    fetch(`/api/clients/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setClient(d.client)
        setEditForm({
          name: d.client.name || "",
          email: d.client.email || "",
          phone: d.client.phone || "",
          idNumber: d.client.idNumber || "",
          kraPin: d.client.kraPin || "",
          address: d.client.address || "",
          type: d.client.type || "INDIVIDUAL",
          notes: d.client.notes || "",
        })
      })
      .finally(() => setLoading(false))
  }, [id])

  async function updateClient(e: React.FormEvent) {
    e.preventDefault()
    setEditing(true)
    try {
      const res = await fetch(`/api/clients/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setClient((prev) => prev ? { ...prev, ...editForm } : null)
      toast.success("Client updated")
      setShowEdit(false)
    } catch {
      toast.error("Failed to update client")
    } finally {
      setEditing(false)
    }
  }

  if (loading) return <div className="h-96 animate-pulse bg-muted rounded-2xl" />
  if (!client) return <div>Client not found</div>

  return (
    <div className="space-y-6 max-w-4xl">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{client.name}</h1>
            <Badge variant="secondary" className="mt-1">{client.type === "CORPORATE" ? "Corporate" : "Individual"}</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Dialog open={showEdit} onOpenChange={setShowEdit}>
            <DialogTrigger asChild>
              <Button variant="outline"><Pencil className="h-4 w-4 mr-2" /> Edit</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Edit Client</DialogTitle></DialogHeader>
              <form onSubmit={updateClient} onKeyDown={(e) => e.key === "Enter" && e.preventDefault()} className="space-y-4">
                <div className="space-y-2">
                  <Label>Client Type</Label>
                  <Select value={editForm.type} onValueChange={(v) => setEditForm({ ...editForm, type: v })}>
                    <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                    <SelectItem value="CORPORATE">Corporate</SelectItem>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Full Name / Company Name</Label>
                  <Input value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={editForm.phone} onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>ID Number</Label>
                  <Input value={editForm.idNumber} onChange={(e) => setEditForm({ ...editForm, idNumber: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>KRA PIN</Label>
                  <Input value={editForm.kraPin} onChange={(e) => setEditForm({ ...editForm, kraPin: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input value={editForm.address} onChange={(e) => setEditForm({ ...editForm, address: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Notes</Label>
                  <Input value={editForm.notes} onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })} />
                </div>
                <Button type="submit" variant="gradient" className="w-full" disabled={editing}>
                  {editing ? "Saving..." : "Save Changes"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={() => router.push("/casespaces/new?clientId=" + client.id)}>
            <Plus className="h-4 w-4 mr-2" /> New Case
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader><CardTitle className="text-sm">Contact</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            {client.email && (
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /> {client.email}</p>
            )}
            {client.phone && (
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" /> {client.phone}</p>
            )}
            {client.address && (
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" /> {client.address}</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm">Identification</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            {client.idNumber && (
              <p className="flex items-center gap-2"><IdCard className="h-4 w-4 text-muted-foreground" /> ID: {client.idNumber}</p>
            )}
            {client.kraPin && (
              <p className="flex items-center gap-2"><FileText className="h-4 w-4 text-muted-foreground" /> KRA PIN: {client.kraPin}</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm">Summary</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-muted-foreground" /> {client.cases.length} Active Cases</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cases ({client.cases.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {client.cases.length === 0 ? (
            <div className="text-center py-8 text-sm text-muted-foreground">No cases yet</div>
          ) : (
            <div className="space-y-3">
              {client.cases.map((c) => (
                <motion.div
                  key={c.id}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => router.push(`/casespaces/${c.id}`)}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{c.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {c.caseNumber && <span className="text-xs text-muted-foreground">{c.caseNumber}</span>}
                        {c.caseType && <Badge variant="outline" className="text-xs">{c.caseType}</Badge>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={c.status === "ACTIVE" ? "success" : "secondary"}>{c.status}</Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
