import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const reviews = await prisma.contractReview.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { documents: true } },
    },
  })

  return NextResponse.json({ reviews })
}

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const contentType = req.headers.get("content-type") || ""
    let title: string | null = null
    let files: File[] = []

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData()
      title = (formData.get("title") as string) || null
      files = formData.getAll("files") as File[]
    } else if (contentType.includes("application/json")) {
      const body = await req.json()
      title = body.title || null
    }

    const review = await prisma.contractReview.create({
      data: {
        userId: user.id,
        title: title || `Review ${new Date().toLocaleDateString()}`,
      },
    })

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

    return NextResponse.json({ review, documents })
  } catch (error) {
    console.error("Create review error:", error)
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 })
  }
}
