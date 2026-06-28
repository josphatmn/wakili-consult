"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, File, Trash2, Eye, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ConfirmDialog } from "@/components/ui/confirm-dialog"
import { toast } from "sonner"
import { formatDate } from "@/lib/utils"

interface DocItem {
  id: string
  title: string
  type: string
  fileSize: number | null
  createdAt: string
  content: string | null
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<DocItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [previewDoc, setPreviewDoc] = useState<DocItem | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<DocItem | null>(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => { fetchDocuments() }, [])

  async function fetchDocuments() {
    try {
      const res = await fetch("/api/documents")
      const data = await res.json()
      setDocuments(data.documents || [])
    } catch {
      toast.error("Failed to load documents")
    } finally {
      setLoading(false)
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await fetch("/api/upload", { method: "POST", body: formData })
      if (!res.ok) throw new Error()
      toast.success("Document uploaded")
      fetchDocuments()
    } catch {
      toast.error("Upload failed")
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete() {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/documents/${deleteTarget.id}`, { method: "DELETE" })
      if (!res.ok) throw new Error()
      setDocuments((prev) => prev.filter((d) => d.id !== deleteTarget.id))
      toast.success(`"${deleteTarget.title}" deleted`)
      setDeleteTarget(null)
    } catch {
      toast.error("Delete failed")
    } finally {
      setDeleting(false)
    }
  }

  function formatSize(bytes: number | null) {
    if (!bytes) return ""
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground mt-1">Upload and manage your legal documents</p>
        </div>
        <div className="relative">
          <input type="file" onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.docx,.txt" disabled={uploading} />
          <Button variant="gradient" disabled={uploading}>
            {uploading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />Uploading...</> : <><Upload className="h-4 w-4 mr-2" />Upload Document</>}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => <Card key={i}><CardContent className="p-6"><div className="h-24 animate-pulse bg-muted rounded-lg" /></CardContent></Card>)}
        </div>
      ) : documents.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <File className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No documents yet</h3>
            <p className="text-sm text-muted-foreground mb-6">Upload PDF, DOCX, or TXT files for AI analysis</p>
            <div className="relative inline-block">
              <input type="file" onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.docx,.txt" />
              <Button variant="outline"><Upload className="h-4 w-4 mr-2" />Upload your first document</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <motion.div key={doc.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}>
              <Card className="group hover:shadow-md transition-all">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setPreviewDoc(doc)}
                        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setDeleteTarget(doc)}
                        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-medium truncate">{doc.title}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
                    <span className="text-xs text-muted-foreground">{formatSize(doc.fileSize)}</span>
                    <span className="text-xs text-muted-foreground">{formatDate(doc.createdAt)}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      <Dialog open={!!previewDoc} onOpenChange={(o) => !o && setPreviewDoc(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{previewDoc?.title}</span>
              <Badge variant="secondary">{previewDoc?.type}</Badge>
            </DialogTitle>
          </DialogHeader>
          <pre className="whitespace-pre-wrap text-sm font-mono bg-muted rounded-xl p-4 max-h-[60vh] overflow-y-auto">
            {previewDoc?.content || "No preview available"}
          </pre>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        title="Delete Document"
        description={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        loading={deleting}
      />
    </div>
  )
}
