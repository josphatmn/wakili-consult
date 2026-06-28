"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft, Briefcase, FileText, CheckSquare, Calendar, Clock,
  Plus, Upload, Trash2, Phone, Mail, User, Building2, Gavel,
  Scale, Circle, AlertCircle, MoreHorizontal, Users, Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ConfirmDialog } from "@/components/ui/confirm-dialog"
import { Select, SelectItem } from "@/components/ui/select"
import { toast } from "sonner"
import { formatDate } from "@/lib/utils"
import { cn } from "@/lib/utils"

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "bg-emerald-500", PENDING: "bg-amber-500", CLOSED: "bg-gray-500",
  ARCHIVED: "bg-slate-500", ON_HOLD: "bg-red-500",
}
const PRIORITY_COLORS: Record<string, string> = {
  HIGH: "text-red-500", MEDIUM: "text-amber-500", LOW: "text-blue-500",
}

interface CaseDetail {
  id: string
  title: string
  caseNumber: string | null
  description: string | null
  status: string
  caseType: string | null
  court: string | null
  judge: string | null
  filedDate: string | null
  priority: string
  opponents: string | null
  client: { id: string; name: string; email: string | null; phone: string | null }
  documents: Array<{ id: string; title: string; fileSize: number | null; createdAt: string }>
  tasks: Array<{ id: string; title: string; status: string; priority: string; dueDate: string | null; createdAt: string }>
  timeline: Array<{ id: string; title: string; description: string | null; type: string; date: string }>
  hearings: Array<{ id: string; title: string; date: string; court: string | null; judge: string | null; notes: string | null; outcome: string | null; nextDate: string | null }>
}

export default function CaseSpaceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [caseSpace, setCaseSpace] = useState<CaseDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [showNewTask, setShowNewTask] = useState(false)
  const [showNewHearing, setShowNewHearing] = useState(false)
  const [showTimelineNote, setShowTimelineNote] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editForm, setEditForm] = useState({
    title: "", caseNumber: "", description: "", caseType: "", court: "", judge: "",
    priority: "MEDIUM", status: "ACTIVE", opponents: "", filedDate: "",
  })
  const [deleteTaskTarget, setDeleteTaskTarget] = useState<{ id: string; title: string } | null>(null)
  const [deleteDocTarget, setDeleteDocTarget] = useState<{ id: string; title: string } | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [taskForm, setTaskForm] = useState({ title: "", description: "", priority: "MEDIUM", dueDate: "" })
  const [hearingForm, setHearingForm] = useState({ title: "", date: "", court: "", judge: "", notes: "" })
  const [timelineForm, setTimelineForm] = useState({ title: "", description: "", type: "NOTE" })

  function openEdit() {
    if (!caseSpace) return
    setEditForm({
      title: caseSpace.title,
      caseNumber: caseSpace.caseNumber || "",
      description: caseSpace.description || "",
      caseType: caseSpace.caseType || "",
      court: caseSpace.court || "",
      judge: caseSpace.judge || "",
      priority: caseSpace.priority,
      status: caseSpace.status,
      opponents: caseSpace.opponents || "",
      filedDate: caseSpace.filedDate ? caseSpace.filedDate.split("T")[0] : "",
    })
    setShowEditModal(true)
  }

  async function saveCase(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch(`/api/casespaces/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      })
      if (!res.ok) throw new Error()
      toast.success("Case updated")
      setShowEditModal(false)
      fetchCase()
    } catch { toast.error("Failed to update case") }
  }

  useEffect(() => { fetchCase() }, [id])

  async function fetchCase() {
    const res = await fetch(`/api/casespaces/${id}`)
    const data = await res.json()
    setCaseSpace(data.caseSpace || null)
    setLoading(false)
  }

  async function createTask(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch(`/api/casespaces/${id}/tasks`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(taskForm),
      })
      if (!res.ok) throw new Error()
      toast.success("Task added")
      setShowNewTask(false)
      setTaskForm({ title: "", description: "", priority: "MEDIUM", dueDate: "" })
      fetchCase()
    } catch { toast.error("Failed to add task") }
  }

  async function updateTaskStatus(taskId: string, status: string) {
    await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }),
    })
    fetchCase()
  }

  async function confirmDeleteTask() {
    if (!deleteTaskTarget) return
    setDeleting(true)
    try {
      await fetch(`/api/tasks/${deleteTaskTarget.id}`, { method: "DELETE" })
      toast.success("Task deleted")
      setDeleteTaskTarget(null)
      fetchCase()
    } catch { toast.error("Delete failed") }
    finally { setDeleting(false) }
  }

  async function createHearing(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch(`/api/casespaces/${id}/hearings`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(hearingForm),
      })
      if (!res.ok) throw new Error()
      toast.success("Hearing scheduled")
      setShowNewHearing(false)
      setHearingForm({ title: "", date: "", court: "", judge: "", notes: "" })
      fetchCase()
    } catch { toast.error("Failed to schedule hearing") }
  }

  async function addTimelineEntry(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch(`/api/casespaces/${id}/timeline`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(timelineForm),
      })
      if (!res.ok) throw new Error()
      toast.success("Note added")
      setShowTimelineNote(false)
      setTimelineForm({ title: "", description: "", type: "NOTE" })
      fetchCase()
    } catch { toast.error("Failed to add note") }
  }

  async function handleDocumentUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const formData = new FormData()
    formData.append("file", file)
    try {
      const res = await fetch(`/api/casespaces/${id}/documents`, { method: "POST", body: formData })
      if (!res.ok) throw new Error()
      toast.success("Document uploaded")
      fetchCase()
    } catch { toast.error("Upload failed") }
  }

  function updateStatus(newStatus: string) {
    fetch(`/api/casespaces/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: newStatus }),
    }).then(() => fetchCase())
  }

  if (loading) return <div className="h-96 animate-pulse bg-muted rounded-2xl" />
  if (!caseSpace) return <div>Case not found</div>

  const TIMELINE_ICONS: Record<string, any> = {
    MILESTONE: Scale, HEARING: Gavel, DOCUMENT: FileText, TASK: CheckSquare, NOTE: Circle, FILING: FileText, MEETING: Users,
  }

  return (
    <div className="space-y-6">
      <button onClick={() => router.push("/casespaces")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> All Cases
      </button>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
            <Briefcase className="h-7 w-7 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold">{caseSpace.title}</h1>
              <Badge variant={(STATUS_COLORS[caseSpace.status]?.includes("emerald") ? "success" : caseSpace.status === "PENDING" ? "warning" : caseSpace.status === "CLOSED" ? "secondary" : "outline") as any}>
                {caseSpace.status}
              </Badge>
              <span className={cn("text-sm font-medium", PRIORITY_COLORS[caseSpace.priority])}>
                {caseSpace.priority} Priority
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-muted-foreground">
              {caseSpace.caseNumber && <span>{caseSpace.caseNumber}</span>}
              {caseSpace.caseType && <Badge variant="outline" className="text-xs">{caseSpace.caseType}</Badge>}
              {caseSpace.court && <span>{caseSpace.court}</span>}
              {caseSpace.filedDate && <span>Filed: {formatDate(caseSpace.filedDate)}</span>}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Select value={caseSpace.status} onValueChange={updateStatus}>
            <SelectItem value="ACTIVE">Active</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="CLOSED">Closed</SelectItem>
            <SelectItem value="ON_HOLD">On Hold</SelectItem>
            <SelectItem value="ARCHIVED">Archived</SelectItem>
          </Select>
          <Button variant="outline" onClick={openEdit}>Edit</Button>
        </div>
      </div>

      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-xl">
          <DialogHeader><DialogTitle>Edit Case</DialogTitle></DialogHeader>
          <form onSubmit={saveCase} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={editForm.status} onValueChange={(v) => setEditForm({ ...editForm, status: v })}>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="CLOSED">Closed</SelectItem>
                  <SelectItem value="ON_HOLD">On Hold</SelectItem>
                  <SelectItem value="ARCHIVED">Archived</SelectItem>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Priority</Label>
                <Select value={editForm.priority} onValueChange={(v) => setEditForm({ ...editForm, priority: v })}>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Case Number</Label>
                <Input value={editForm.caseNumber} onChange={(e) => setEditForm({ ...editForm, caseNumber: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Case Type</Label>
                <Select value={editForm.caseType} onValueChange={(v) => setEditForm({ ...editForm, caseType: v })} placeholder="Select">
                  <SelectItem value="CIVIL">Civil</SelectItem>
                  <SelectItem value="CRIMINAL">Criminal</SelectItem>
                  <SelectItem value="FAMILY">Family</SelectItem>
                  <SelectItem value="LAND">Land</SelectItem>
                  <SelectItem value="EMPLOYMENT">Employment</SelectItem>
                  <SelectItem value="COMMERCIAL">Commercial</SelectItem>
                  <SelectItem value="CONSTITUTIONAL">Constitutional</SelectItem>
                  <SelectItem value="">Other</SelectItem>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Court</Label>
                <Input value={editForm.court} onChange={(e) => setEditForm({ ...editForm, court: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Judge</Label>
                <Input value={editForm.judge} onChange={(e) => setEditForm({ ...editForm, judge: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Filed Date</Label>
                <Input type="date" value={editForm.filedDate} onChange={(e) => setEditForm({ ...editForm, filedDate: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Opponents</Label>
                <Input value={editForm.opponents} onChange={(e) => setEditForm({ ...editForm, opponents: e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <textarea
                className="flex min-h-[80px] w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm"
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <Button type="button" variant="outline" onClick={() => setShowEditModal(false)}>Cancel</Button>
              <Button type="submit" variant="gradient">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents ({caseSpace.documents.length})</TabsTrigger>
          <TabsTrigger value="tasks">Tasks ({caseSpace.tasks.length})</TabsTrigger>
          <TabsTrigger value="timeline">Timeline ({caseSpace.timeline.length})</TabsTrigger>
          <TabsTrigger value="hearings">Hearings ({caseSpace.hearings.length})</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>Client Information</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{caseSpace.client.name}</p>
                    {caseSpace.client.phone && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><Phone className="h-3 w-3" /> {caseSpace.client.phone}</p>
                    )}
                    {caseSpace.client.email && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><Mail className="h-3 w-3" /> {caseSpace.client.email}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Case Details</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between py-1"><span className="text-muted-foreground">Type</span><span>{caseSpace.caseType || "N/A"}</span></div>
                <div className="flex justify-between py-1"><span className="text-muted-foreground">Court</span><span>{caseSpace.court || "N/A"}</span></div>
                <div className="flex justify-between py-1"><span className="text-muted-foreground">Judge</span><span>{caseSpace.judge || "N/A"}</span></div>
                <div className="flex justify-between py-1"><span className="text-muted-foreground">Opponents</span><span>{caseSpace.opponents || "N/A"}</span></div>
                <div className="flex justify-between py-1"><span className="text-muted-foreground">Priority</span>
                  <span className={cn("font-medium", PRIORITY_COLORS[caseSpace.priority])}>{caseSpace.priority}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {caseSpace.description && (
            <Card>
              <CardHeader><CardTitle>Description</CardTitle></CardHeader>
              <CardContent><p className="text-sm">{caseSpace.description}</p></CardContent>
            </Card>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Documents", value: caseSpace.documents.length, icon: FileText, color: "from-blue-500 to-cyan-600" },
              { label: "Tasks", value: caseSpace.tasks.filter((t) => t.status !== "DONE").length, icon: CheckSquare, color: "from-amber-500 to-orange-600" },
              { label: "Timeline Entries", value: caseSpace.timeline.length, icon: Clock, color: "from-emerald-500 to-teal-600" },
              { label: "Hearings", value: caseSpace.hearings.length, icon: Gavel, color: "from-violet-500 to-purple-600" },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* DOCUMENTS TAB */}
        <TabsContent value="documents" className="space-y-4">
          <div className="flex justify-end">
            <div className="relative">
              <input type="file" onChange={handleDocumentUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
              <Button variant="gradient"><Upload className="h-4 w-4 mr-2" /> Upload Document</Button>
            </div>
          </div>
          {caseSpace.documents.length === 0 ? (
            <Card><CardContent className="py-12 text-center"><FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" /><p className="text-sm text-muted-foreground">No documents uploaded yet</p></CardContent></Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {caseSpace.documents.map((doc) => (
                <motion.div key={doc.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="group hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{doc.title}</p>
                          <p className="text-xs text-muted-foreground">{doc.fileSize ? `${(doc.fileSize / 1024).toFixed(1)} KB` : ""} · {formatDate(doc.createdAt)}</p>
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          <button className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setDeleteDocTarget({ id: doc.id, title: doc.title })}
                            className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>

        {/* TASKS TAB */}
        <TabsContent value="tasks" className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">{caseSpace.tasks.filter((t) => t.status !== "DONE").length} pending · {caseSpace.tasks.filter((t) => t.status === "DONE").length} completed</p>
            <Dialog open={showNewTask} onOpenChange={setShowNewTask}>
              <DialogTrigger asChild><Button variant="gradient" size="sm"><Plus className="h-4 w-4 mr-2" /> Add Task</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>New Task</DialogTitle></DialogHeader>
                <form onSubmit={createTask} className="space-y-4">
                  <div className="space-y-2"><Label>Title *</Label><Input value={taskForm.title} onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })} required /></div>
                  <div className="space-y-2"><Label>Description</Label><Input value={taskForm.description} onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Priority</Label>
                      <Select value={taskForm.priority} onValueChange={(v) => setTaskForm({ ...taskForm, priority: v })}>
                        <SelectItem value="HIGH">High</SelectItem><SelectItem value="MEDIUM">Medium</SelectItem><SelectItem value="LOW">Low</SelectItem>
                      </Select>
                    </div>
                    <div className="space-y-2"><Label>Due Date</Label><Input type="date" value={taskForm.dueDate} onChange={(e) => setTaskForm({ ...taskForm, dueDate: e.target.value })} /></div>
                  </div>
                  <Button type="submit" variant="gradient" className="w-full">Create Task</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {caseSpace.tasks.length === 0 ? (
            <Card><CardContent className="py-12 text-center"><CheckSquare className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" /><p className="text-sm text-muted-foreground">No tasks yet</p></CardContent></Card>
          ) : (
            <div className="space-y-2">
              {caseSpace.tasks.map((task) => (
                <motion.div key={task.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                  <div className={cn("flex items-center gap-3 p-4 rounded-xl border transition-all", task.status === "DONE" && "opacity-60")}>
                    <button
                      onClick={() => updateTaskStatus(task.id, task.status === "DONE" ? "TODO" : "DONE")}
                      className={cn(
                        "h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                        task.status === "DONE" ? "bg-primary border-primary" : "border-muted-foreground hover:border-primary"
                      )}
                    >
                      {task.status === "DONE" && <CheckSquare className="h-3 w-3 text-white" />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-sm font-medium", task.status === "DONE" && "line-through")}>{task.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{task.status.replace("_", " ")}</Badge>
                        <span className={cn("text-xs", PRIORITY_COLORS[task.priority])}>{task.priority}</span>
                        {task.dueDate && <span className="text-xs text-muted-foreground">Due {formatDate(task.dueDate)}</span>}
                      </div>
                    </div>
                    <button onClick={() => setDeleteTaskTarget({ id: task.id, title: task.title })} className="text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>

        {/* TIMELINE TAB */}
        <TabsContent value="timeline" className="space-y-4">
          <div className="flex justify-end">
            <Dialog open={showTimelineNote} onOpenChange={setShowTimelineNote}>
              <DialogTrigger asChild><Button variant="gradient" size="sm"><Plus className="h-4 w-4 mr-2" /> Add Entry</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Add Timeline Entry</DialogTitle></DialogHeader>
                <form onSubmit={addTimelineEntry} className="space-y-4">
                  <div className="space-y-2"><Label>Title *</Label><Input value={timelineForm.title} onChange={(e) => setTimelineForm({ ...timelineForm, title: e.target.value })} required /></div>
                  <div className="space-y-2"><Label>Description</Label><Input value={timelineForm.description} onChange={(e) => setTimelineForm({ ...timelineForm, description: e.target.value })} /></div>
                  <div className="space-y-2"><Label>Type</Label>
                    <Select value={timelineForm.type} onValueChange={(v) => setTimelineForm({ ...timelineForm, type: v })}>
                      <SelectItem value="NOTE">Note</SelectItem><SelectItem value="MILESTONE">Milestone</SelectItem>
                      <SelectItem value="FILING">Filing</SelectItem><SelectItem value="MEETING">Meeting</SelectItem>
                      <SelectItem value="HEARING">Hearing</SelectItem>
                    </Select>
                  </div>
                  <Button type="submit" variant="gradient" className="w-full">Add Entry</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {caseSpace.timeline.length === 0 ? (
            <Card><CardContent className="py-12 text-center"><Clock className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" /><p className="text-sm text-muted-foreground">No timeline entries yet</p></CardContent></Card>
          ) : (
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-4">
                {caseSpace.timeline.map((entry) => {
                  const Icon = TIMELINE_ICONS[entry.type] || Circle
                  return (
                    <motion.div key={entry.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="relative pl-14">
                      <div className={cn(
                        "absolute left-4 p-1.5 rounded-full border-2 bg-background",
                        entry.type === "MILESTONE" ? "border-primary text-primary" : "border-muted-foreground/30 text-muted-foreground"
                      )}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="glass-card rounded-xl p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium">{entry.title}</p>
                            {entry.description && <p className="text-xs text-muted-foreground mt-1">{entry.description}</p>}
                          </div>
                          <Badge variant="outline" className="text-xs shrink-0">{entry.type}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{formatDate(entry.date)}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}
        </TabsContent>

        {/* HEARINGS TAB */}
        <TabsContent value="hearings" className="space-y-4">
          <div className="flex justify-end">
            <Dialog open={showNewHearing} onOpenChange={setShowNewHearing}>
              <DialogTrigger asChild><Button variant="gradient" size="sm"><Plus className="h-4 w-4 mr-2" /> Schedule Hearing</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Schedule Hearing</DialogTitle></DialogHeader>
                <form onSubmit={createHearing} className="space-y-4">
                  <div className="space-y-2"><Label>Title *</Label><Input value={hearingForm.title} onChange={(e) => setHearingForm({ ...hearingForm, title: e.target.value })} required placeholder="e.g. Mention / Hearing" /></div>
                  <div className="space-y-2"><Label>Date *</Label><Input type="datetime-local" value={hearingForm.date} onChange={(e) => setHearingForm({ ...hearingForm, date: e.target.value })} required /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Court</Label><Input value={hearingForm.court} onChange={(e) => setHearingForm({ ...hearingForm, court: e.target.value })} /></div>
                    <div className="space-y-2"><Label>Judge</Label><Input value={hearingForm.judge} onChange={(e) => setHearingForm({ ...hearingForm, judge: e.target.value })} /></div>
                  </div>
                  <div className="space-y-2"><Label>Notes</Label><Input value={hearingForm.notes} onChange={(e) => setHearingForm({ ...hearingForm, notes: e.target.value })} /></div>
                  <Button type="submit" variant="gradient" className="w-full">Schedule</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {caseSpace.hearings.length === 0 ? (
            <Card><CardContent className="py-12 text-center"><Gavel className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" /><p className="text-sm text-muted-foreground">No hearings scheduled</p></CardContent></Card>
          ) : (
            <div className="space-y-3">
              {caseSpace.hearings.map((hearing) => (
                <motion.div key={hearing.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Gavel className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{hearing.title}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-xs text-muted-foreground">{new Date(hearing.date).toLocaleDateString("en-KE", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                              {hearing.court && <Badge variant="outline" className="text-xs">{hearing.court}</Badge>}
                              {hearing.judge && <Badge variant="secondary" className="text-xs">{hearing.judge}</Badge>}
                            </div>
                          </div>
                        </div>
                      </div>
                      {hearing.notes && <p className="text-sm text-muted-foreground mt-3">{hearing.notes}</p>}
                      {hearing.outcome && (
                        <div className="mt-3 p-3 rounded-xl bg-muted/50">
                          <p className="text-xs font-medium text-muted-foreground mb-1">Outcome</p>
                          <p className="text-sm">{hearing.outcome}</p>
                        </div>
                      )}
                      {hearing.nextDate && (
                        <p className="text-xs text-primary mt-2">Next hearing: {formatDate(hearing.nextDate)}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <ConfirmDialog
        open={!!deleteDocTarget}
        onOpenChange={(o) => !o && setDeleteDocTarget(null)}
        title="Delete Document"
        description={`Are you sure you want to delete "${deleteDocTarget?.title}"? This action cannot be undone.`}
        onConfirm={async () => {
          if (!deleteDocTarget) return
          setDeleting(true)
          try {
            await fetch(`/api/casespaces/${id}/documents/${deleteDocTarget.id}`, { method: "DELETE" })
            toast.success("Document deleted")
            setDeleteDocTarget(null)
            fetchCase()
          } catch { toast.error("Delete failed") }
          finally { setDeleting(false) }
        }}
        loading={deleting}
      />
      <ConfirmDialog
        open={!!deleteTaskTarget}
        onOpenChange={(o) => !o && setDeleteTaskTarget(null)}
        title="Delete Task"
        description={`Are you sure you want to delete "${deleteTaskTarget?.title}"? This action cannot be undone.`}
        onConfirm={confirmDeleteTask}
        loading={deleting}
      />
    </div>
  )
}
