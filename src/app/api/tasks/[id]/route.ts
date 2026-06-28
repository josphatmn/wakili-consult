import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const data = await req.json()
  if (data.status === "DONE") data.completedAt = new Date()
  if (data.dueDate) data.dueDate = new Date(data.dueDate)

  const task = await prisma.task.updateMany({
    where: { id, assignedTo: user.id },
    data,
  })

  return NextResponse.json({ task })
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  await prisma.task.deleteMany({ where: { id, assignedTo: user.id } })
  return NextResponse.json({ success: true })
}
