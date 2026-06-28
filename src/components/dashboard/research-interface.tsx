"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, BookOpen, Scale, FileText, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import type { ResearchResponse } from "@/types"

export function ResearchInterface() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ResearchResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim() || loading) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch("/api/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })

      if (!res.ok) throw new Error("Research failed")

      const data = await res.json()
      setResult(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Legal Research</h1>
        <p className="text-muted-foreground mt-1">Deep legal research across Kenyan law</p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="e.g., Can an employer terminate someone without notice in Kenya?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 h-14 text-base"
          />
        </div>
        <Button type="submit" disabled={loading || !query.trim()} variant="gradient" size="lg">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Researching...
            </>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Research
            </>
          )}
        </Button>
      </form>

      {loading && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-muted rounded w-3/4 mx-auto" />
              <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
              <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">Searching Kenyan legal databases...</p>
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-red-500/50">
          <CardContent className="p-6 text-center text-red-500">
            {error}
          </CardContent>
        </Card>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{result.summary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Legal Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {result.analysis.split("\n").map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {result.citations.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Citations & Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {result.citations.map((citation, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{citation.title}</p>
                        <p className="text-xs text-muted-foreground">{citation.source}</p>
                        {citation.section && (
                          <p className="text-xs text-muted-foreground">Section: {citation.section}</p>
                        )}
                      </div>
                      {citation.relevance && (
                        <Badge variant="secondary" className="shrink-0">
                          {Math.round(citation.relevance * 100)}% match
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {result.sources && result.sources.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.sources.map((source, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                      {source}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {result.recommendations && result.recommendations.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="flex items-center justify-center gap-2">
            <Badge variant={result.confidence > 0.8 ? "success" : result.confidence > 0.6 ? "warning" : "secondary"}>
              Confidence: {Math.round(result.confidence * 100)}%
            </Badge>
          </div>
        </motion.div>
      )}
    </div>
  )
}
