import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const caseSpace = await prisma.caseSpace.findFirst({ where: { id, assignedTo: user.id } })
  if (!caseSpace) return NextResponse.json({ error: "Case not found" }, { status: 404 })

  const formData = await req.formData()
  const file = formData.get("file") as File | null
  const description = (formData.get("description") as string) || ""

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 })

  const doc = await prisma.caseDocument.create({
    data: {
      caseSpaceId: id,
      title: file.name,
      type: "OTHER",
      fileUrl: "",
      fileSize: file.size,
      description,
      uploadedBy: user.id,
    },
  })

  await prisma.timelineEntry.create({
    data: {
      caseSpaceId: id,
      title: `Document Uploaded: ${file.name}`,
      type: "DOCUMENT",
    },
  })

  return NextResponse.json({ document: doc })
}
