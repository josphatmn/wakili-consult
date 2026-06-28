import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const caseSpace = await prisma.caseSpace.findFirst({ where: { id, assignedTo: user.id } })
  if (!caseSpace) return NextResponse.json({ error: "Case not found" }, { status: 404 })

  const { title, date, court, judge, notes, outcome, nextDate } = await req.json()
  if (!title || !date) return NextResponse.json({ error: "Title and date are required" }, { status: 400 })

  const hearing = await prisma.hearing.create({
    data: {
      caseSpaceId: id,
      title,
      date: new Date(date),
      court,
      judge,
      notes,
      outcome,
      nextDate: nextDate ? new Date(nextDate) : null,
    },
  })

  await prisma.timelineEntry.create({
    data: {
      caseSpaceId: id,
      title: `Hearing Scheduled: ${title}`,
      description: `${court ? `Court: ${court}` : ""} ${judge ? `| Judge: ${judge}` : ""}`,
      date: new Date(date),
      type: "HEARING",
    },
  })

  return NextResponse.json({ hearing })
}
