import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { researchQuery } from "@/lib/agents"

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { query } = await req.json()

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    const result = await researchQuery(query)

    return NextResponse.json({
      summary: result.content.split("\n\n")[0] || result.content,
      analysis: result.content,
      sources: result.citations.map((c) => c.source),
      citations: result.citations,
      confidence: result.confidence,
      recommendations: result.citations.slice(0, 3).map((c) => c.title),
    })
  } catch (error) {
    console.error("Research error:", error)
    const message = error instanceof Error ? error.message : "Research failed"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
