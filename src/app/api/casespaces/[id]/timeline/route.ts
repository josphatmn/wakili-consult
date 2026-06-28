import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const caseSpace = await prisma.caseSpace.findFirst({ where: { id, assignedTo: user.id } })
  if (!caseSpace) return NextResponse.json({ error: "Case not found" }, { status: 404 })

  const { title, description, type, date } = await req.json()
  if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 })

  const entry = await prisma.timelineEntry.create({
    data: {
      caseSpaceId: id,
      title,
      description,
      type: type || "NOTE",
      date: date ? new Date(date) : new Date(),
    },
  })

  return NextResponse.json({ entry })
}
