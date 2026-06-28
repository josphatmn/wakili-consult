"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, FileSearch, Loader2, FileText, Trash2, Plus, Clock, CheckCircle2, AlertCircle, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ConfirmDialog } from "@/components/ui/confirm-dialog"
import { toast } from "sonner"
import { formatDate } from "@/lib/utils"

interface ReviewDoc {
  id: string
  title: string
  fileSize: number | null
  createdAt: string
}

interface ReviewResult {
  risks: string[]
  missingClauses: string[]
  recommendations: string[]
  summary: string
}

interface ReviewItem {
  id: string
  title: string | null
  status: string
  risks: string | null
  missingClauses: string | null
  recommendations: string | null
  summary: string | null
  createdAt: string
  _count?: { documents: number }
  documents?: ReviewDoc[]
}

export default function ContractsPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>([])
  const [currentReview, setCurrentReview] = useState<ReviewItem | null>(null)
  const [currentDocuments, setCurrentDocuments] = useState<ReviewDoc[]>([])
  const [uploading, setUploading] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [loadingReviews, setLoadingReviews] = useState(true)
  const [deleteTarget, setDeleteTarget] = useState<ReviewItem | null>(null)
  const [deleting, setDeleting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { fetchReviews() }, [])

  async function fetchReviews() {
    try {
      const res = await fetch("/api/contracts/reviews")
      const data = await res.json()
      setReviews(data.reviews || [])
    } catch {
      toast.error("Failed to load reviews")
    } finally {
      setLoadingReviews(false)
    }
  }

  async function handleNewReview() {
    try {
      const res = await fetch("/api/contracts/reviews", { method: "POST" })
      const data = await res.json()
      if (!res.ok) throw new Error()
      setCurrentReview(data.review)
      setCurrentDocuments([])
      setReviews((prev) => [data.review, ...prev])
      toast.success("New review session created")
    } catch {
      toast.error("Failed to create review")
    }
  }

  async function handleUploadFiles(files: FileList | File[]) {
    if (!currentReview) {
      toast.error("Start a new review first")
      return
    }
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("action", "add-files")
      for (const file of files) {
        formData.append("files", file)
      }
      const res = await fetch(`/api/contracts/reviews/${currentReview.id}`, { method: "PATCH", body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error()
      setCurrentReview(data.review)
      setCurrentDocuments(data.review?.documents || data.documents || [])
      toast.success(`${files.length} file(s) uploaded`)
    } catch {
      toast.error("Upload failed")
    } finally {
      setUploading(false)
    }
  }

  async function handleAnalyze() {
    if (!currentReview || currentDocuments.length === 0) {
      toast.error("Upload documents first")
      return
    }
    setAnalyzing(true)
    try {
      const formData = new FormData()
      formData.append("action", "analyze")
      const res = await fetch(`/api/contracts/reviews/${currentReview.id}`, { method: "PATCH", body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error()
      setCurrentReview(data.review)
      setReviews((prev) => prev.map((r) => r.id === data.review.id ? data.review : r))
      toast.success("Review complete")
    } catch {
      toast.error("Analysis failed")
    } finally {
      setAnalyzing(false)
    }
  }

  async function loadReview(review: ReviewItem) {
    try {
      const res = await fetch(`/api/contracts/reviews/${review.id}`)
      const data = await res.json()
      if (!res.ok) throw new Error()
      setCurrentReview(data.review)
      setCurrentDocuments(data.review.documents || [])
    } catch {
      toast.error("Failed to load review")
    }
  }

  async function handleDeleteReview() {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/contracts/reviews/${deleteTarget.id}`, { method: "DELETE" })
      if (!res.ok) throw new Error()
      setReviews((prev) => prev.filter((r) => r.id !== deleteTarget.id))
      if (currentReview?.id === deleteTarget.id) {
        setCurrentReview(null)
        setCurrentDocuments([])
      }
      toast.success("Review deleted")
      setDeleteTarget(null)
    } catch {
      toast.error("Delete failed")
    } finally {
      setDeleting(false)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    if (e.dataTransfer.files.length) handleUploadFiles(e.dataTransfer.files)
  }

  function getReviewResult(review: ReviewItem): ReviewResult | null {
    if (!review.risks) return null
    try {
      return {
        risks: JSON.parse(review.risks),
        missingClauses: review.missingClauses ? JSON.parse(review.missingClauses) : [],
        recommendations: review.recommendations ? JSON.parse(review.recommendations) : [],
        summary: review.summary || "",
      }
    } catch {
      return null
    }
  }

  const result = currentReview ? getReviewResult(currentReview) : null

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contract Review</h1>
          <p className="text-muted-foreground mt-1">Upload contracts for AI-powered legal review</p>
        </div>
        <Button variant="gradient" onClick={handleNewReview} disabled={loadingReviews}>
          <Plus className="h-4 w-4 mr-2" />New Review
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Upload className="h-4 w-4" />
              {currentReview ? "Upload Documents" : "No Active Review"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentReview ? (
              <>
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                  className="relative border-2 border-dashed rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={(e) => e.target.files && handleUploadFiles(e.target.files)}
                    className="hidden"
                    accept=".pdf,.docx,.txt"
                    disabled={uploading}
                  />
                  {uploading ? (
                    <div className="space-y-2">
                      <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                      <p className="text-xs text-muted-foreground">Uploading...</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                      <p className="text-sm font-medium">Drop files here</p>
                      <p className="text-xs text-muted-foreground">PDF, DOCX, TXT (max 10MB each)</p>
                    </div>
                  )}
                </div>

                {currentDocuments.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      {currentDocuments.length} document(s) uploaded
                    </p>
                    <ScrollArea className="max-h-48">
                      <div className="space-y-1.5">
                        {currentDocuments.map((doc) => (
                          <div key={doc.id} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                            <FileText className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="text-xs truncate flex-1">{doc.title}</span>
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                              {doc.fileSize ? `${(doc.fileSize / 1024).toFixed(0)}KB` : ""}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                )}

                <Button
                  className="w-full"
                  variant="gradient"
                  onClick={handleAnalyze}
                  disabled={analyzing || currentDocuments.length === 0}
                >
                  {analyzing ? (
                    <><Loader2 className="h-4 w-4 animate-spin mr-2" />Analyzing...</>
                  ) : (
                    <><Play className="h-4 w-4 mr-2" />Analyze All</>
                  )}
                </Button>
              </>
            ) : (
              <div className="text-center py-8">
                <FileSearch className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Click &quot;New Review&quot; to start</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <FileSearch className="h-4 w-4" />
              Review Results
              {currentReview && (
                <Badge variant={currentReview.status === "COMPLETED" ? "success" : "secondary"} className="ml-auto">
                  {currentReview.status === "COMPLETED" ? "Completed" : "In Progress"}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <Tabs defaultValue="risks">
                <TabsList className="mb-4">
                  <TabsTrigger value="risks">Risks</TabsTrigger>
                  <TabsTrigger value="missing">Missing Clauses</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                </TabsList>

                <TabsContent value="risks" className="space-y-3">
                  {result.risks.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">No risks identified</p>
                  ) : (
                    result.risks.map((risk, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-500/5">
                        <Badge variant="destructive" className="shrink-0 mt-0.5">Risk {i + 1}</Badge>
                        <p className="text-sm">{risk}</p>
                      </div>
                    ))
                  )}
                </TabsContent>

                <TabsContent value="missing" className="space-y-3">
                  {result.missingClauses.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">No missing clauses detected</p>
                  ) : (
                    result.missingClauses.map((clause, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/5">
                        <Badge variant="warning" className="shrink-0 mt-0.5">Missing</Badge>
                        <p className="text-sm">{clause}</p>
                      </div>
                    ))
                  )}
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-3">
                  {result.recommendations.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">No recommendations</p>
                  ) : (
                    result.recommendations.map((rec, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/5">
                        <Badge variant="success" className="shrink-0 mt-0.5">Suggestion</Badge>
                        <p className="text-sm">{rec}</p>
                      </div>
                    ))
                  )}
                </TabsContent>

                <TabsContent value="summary">
                  <p className="text-sm leading-relaxed">{result.summary || "No summary available"}</p>
                </TabsContent>
              </Tabs>
            ) : currentReview && currentReview.status === "IN_PROGRESS" ? (
              <div className="text-center py-16">
                <Clock className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Upload documents and click &quot;Analyze All&quot; to see results</p>
              </div>
            ) : (
              <div className="text-center py-16">
                <FileSearch className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">Select a review or start a new one</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Previous Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          {loadingReviews ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => <div key={i} className="h-16 animate-pulse bg-muted rounded-xl" />)}
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-8">
              <FileSearch className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No reviews yet. Click &quot;New Review&quot; to start.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-colors cursor-pointer ${
                    currentReview?.id === review.id ? "bg-primary/5 border border-primary/20" : "hover:bg-muted"
                  }`}
                  onClick={() => loadReview(review)}
                >
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                    review.status === "COMPLETED" ? "bg-emerald-500/10" : "bg-muted"
                  }`}>
                    {review.status === "COMPLETED" ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{review.title || "Untitled Review"}</p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-xs text-muted-foreground">
                        {review._count?.documents ?? review.documents?.length ?? 0} document(s)
                      </span>
                      <span className="text-xs text-muted-foreground">{formatDate(review.createdAt)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant={review.status === "COMPLETED" ? "success" : "secondary"} className="text-[10px]">
                      {review.status === "COMPLETED" ? "Done" : "Draft"}
                    </Badge>
                    <button
                      onClick={(e) => { e.stopPropagation(); setDeleteTarget(review) }}
                      className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={(o) => !o && setDeleteTarget(null)}
        title="Delete Review"
        description={`Are you sure you want to delete "${deleteTarget?.title || "this review"}"? All uploaded documents will be unlinked.`}
        onConfirm={handleDeleteReview}
        loading={deleting}
      />
    </div>
  )
}
