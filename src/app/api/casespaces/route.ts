import { NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const status = req.nextUrl.searchParams.get("status") || ""
  const search = req.nextUrl.searchParams.get("search") || ""

  const where: any = { assignedTo: user.id }
  if (status) where.status = status
  if (search) {
    where.OR = [
      { title: { contains: search } },
      { caseNumber: { contains: search } },
      { client: { name: { contains: search } } },
    ]
  }

  const cases = await prisma.caseSpace.findMany({
    where,
    include: {
      client: { select: { id: true, name: true, phone: true } },
      _count: { select: { tasks: true, documents: true, timeline: true, hearings: true } },
    },
    orderBy: { updatedAt: "desc" },
  })

  return NextResponse.json({ cases })
}

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { caseNumber, title, description, caseType, court, filedDate, priority, clientId, opponents } = await req.json()

  if (!title || !clientId) {
    return NextResponse.json({ error: "Title and client are required" }, { status: 400 })
  }

  const caseSpace = await prisma.caseSpace.create({
    data: {
      caseNumber,
      title,
      description,
      caseType,
      court,
      filedDate: filedDate ? new Date(filedDate) : null,
      priority: priority || "MEDIUM",
      clientId,
      assignedTo: user.id,
      opponents,
    },
  })

  await prisma.timelineEntry.create({
    data: {
      caseSpaceId: caseSpace.id,
      title: "Case Created",
      description: "Case space was created",
      type: "MILESTONE",
    },
  })

  return NextResponse.json({ caseSpace })
}
