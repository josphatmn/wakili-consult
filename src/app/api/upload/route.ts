import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export const maxDuration = 30
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File | null
    const action = (formData.get("action") as string) || "upload"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 })
    }

    let content = ""
    try {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      content = buffer.toString("utf-8").substring(0, 10000)
    } catch {
      content = "[Binary file - content not readable as text]"
    }

    const document = await prisma.document.create({
      data: {
        userId: user.id,
        title: file.name,
        type: "OTHER",
        fileUrl: "",
        fileSize: file.size,
        content,
      },
    })

    if (action === "review") {
      return NextResponse.json({
        id: document.id,
        review: {
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
        },
      })
    }

    return NextResponse.json({
      id: document.id,
      name: file.name,
      size: file.size,
    })
  } catch (error) {
    console.error("Upload error:", error)
    const message = error instanceof Error ? error.message : "Upload failed"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
