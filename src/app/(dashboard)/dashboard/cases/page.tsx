"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Search, Gavel, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const mockCases = [
  { name: "Petition 1 of 2020", court: "Supreme Court", year: 2020, relevance: 95, topic: "Constitutional Law" },
  { name: "Civil Appeal 200 of 2018", court: "Court of Appeal", year: 2018, relevance: 88, topic: "Employment Law" },
  { name: "ELC Case 150 of 2019", court: "Environment and Land Court", year: 2019, relevance: 82, topic: "Land Law" },
]

export default function CasesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Case Law Research</h1>
        <p className="text-muted-foreground mt-1">Search Kenyan case law and precedents</p>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search cases by name, court, judge, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14"
          />
        </div>
        <Button variant="gradient" size="lg">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="space-y-3">
        {mockCases.map((caseItem, index) => (
          <motion.div
            key={caseItem.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:shadow-md transition-all cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Gavel className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{caseItem.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{caseItem.court}</Badge>
                        <span className="text-xs text-muted-foreground">{caseItem.year}</span>
                        <Badge variant="outline" className="text-xs">{caseItem.topic}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={caseItem.relevance > 90 ? "success" : "secondary"}>
                      {caseItem.relevance}% relevant
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
