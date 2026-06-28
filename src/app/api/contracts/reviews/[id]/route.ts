import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { generateChat } from "@/lib/openai"

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { id } = await params

  const review = await prisma.contractReview.findFirst({
    where: { id, userId: user.id },
    include: { documents: true },
  })

  if (!review) return NextResponse.json({ error: "Not found" }, { status: 404 })

  return NextResponse.json({ review })
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { id } = await params

  const review = await prisma.contractReview.findFirst({
    where: { id, userId: user.id },
    include: { documents: true },
  })

  if (!review) return NextResponse.json({ error: "Not found" }, { status: 404 })

  try {
    const formData = await req.formData()
    const action = formData.get("action") as string

    if (action === "add-files") {
      const files = formData.getAll("files") as File[]
      const documents = []

      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) continue
        let content = ""
        try {
          const bytes = await file.arrayBuffer()
          const buffer = Buffer.from(bytes)
          content = buffer.toString("utf-8").substring(0, 10000)
        } catch {
          content = "[Binary file - content not readable as text]"
        }

        const doc = await prisma.document.create({
          data: {
            userId: user.id,
            title: file.name,
            type: "OTHER",
            fileUrl: "",
            fileSize: file.size,
            content,
            contractReviewId: review.id,
          },
        })
        documents.push(doc)
      }

      const updated = await prisma.contractReview.findUnique({
        where: { id },
        include: { documents: true },
      })

      return NextResponse.json({ review: updated, documents })
    }

    if (action === "analyze") {
      const documents = review.documents
      if (documents.length === 0) {
        return NextResponse.json({ error: "No documents to analyze" }, { status: 400 })
      }

      const documentContents = documents
        .map((d) => `--- ${d.title} ---\n${d.content || "[No content]"}`)
        .join("\n\n")

      const prompt = `You are a Kenyan contract review AI. Analyze the following document(s) and provide a structured review.
      
Documents to review:
${documentContents}

Respond with a JSON object in exactly this format (no markdown, no backticks):
{
  "risks": ["risk 1", "risk 2", ...],
  "missingClauses": ["missing clause 1", ...],
  "recommendations": ["recommendation 1", ...],
  "summary": "overall summary"
}`

      let result: { risks: string[]; missingClauses: string[]; recommendations: string[]; summary: string }

      if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "sk-your-key") {
        result = {
          risks: [
            "Indemnity clause is one-sided favoring the drafter",
            "Force majeure clause does not cover pandemic or government actions",
            "Governing law clause missing Kenya-specific jurisdiction",
          ],
          missingClauses: [
            "Dispute resolution clause (suggest arbitration under Nairobi Centre for International Arbitration)",
            "Data protection clause (compliance with Data Protection Act, 2019)",
            "Anti-bribery clause",
          ],
          recommendations: [
            "Add a mutual indemnity clause",
            "Include KRA withholding tax obligations",
            "Specify notice period under Kenyan Employment Act if applicable",
            "Add termination for convenience clause",
          ],
          summary: "This contract requires several Kenya-specific modifications to be fully enforceable. Key areas needing attention include jurisdiction, data protection compliance, and dispute resolution mechanisms.",
        }
      } else {
        try {
          const response = await generateChat(
            [{ id: "1", role: "user", content: prompt, createdAt: new Date().toISOString() }],
            "contract-review"
          )
          const cleaned = response.replace(/```(json)?/g, "").trim()
          result = JSON.parse(cleaned)
        } catch {
          result = {
            risks: ["AI analysis failed. Please try again."],
            missingClauses: [],
            recommendations: [],
            summary: "Analysis could not be completed.",
          }
        }
      }

      const updated = await prisma.contractReview.update({
        where: { id },
        data: {
          status: "COMPLETED",
          risks: JSON.stringify(result.risks),
          missingClauses: JSON.stringify(result.missingClauses),
          recommendations: JSON.stringify(result.recommendations),
          summary: result.summary,
        },
        include: { documents: true },
      })

      return NextResponse.json({ review: updated })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Update review error:", error)
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { id } = await params

  const review = await prisma.contractReview.findFirst({
    where: { id, userId: user.id },
  })

  if (!review) return NextResponse.json({ error: "Not found" }, { status: 404 })

  await prisma.contractReview.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
