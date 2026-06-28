import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const caseSpace = await prisma.caseSpace.findFirst({
    where: { id, assignedTo: user.id },
    include: {
      client: true,
      documents: { orderBy: { createdAt: "desc" } },
      tasks: { orderBy: { createdAt: "desc" } },
      timeline: { orderBy: { date: "desc" } },
      hearings: { orderBy: { date: "desc" } },
    },
  })

  if (!caseSpace) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json({ caseSpace })
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const data = await req.json()
  const cleaned: Record<string, unknown> = {}
  for (const [key, val] of Object.entries(data)) {
    if (val === "" || val === undefined) {
      cleaned[key] = null
    } else if (key === "filedDate") {
      cleaned[key] = new Date(val as string)
    } else {
      cleaned[key] = val
    }
  }

  const caseSpace = await prisma.caseSpace.updateMany({
    where: { id, assignedTo: user.id },
    data: cleaned,
  })

  return NextResponse.json({ caseSpace })
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  await prisma.caseSpace.deleteMany({ where: { id, assignedTo: user.id } })
  return NextResponse.json({ success: true })
}
