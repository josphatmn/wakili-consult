import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string; docId: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id, docId } = await params

  const caseSpace = await prisma.caseSpace.findFirst({ where: { id, assignedTo: user.id } })
  if (!caseSpace) return NextResponse.json({ error: "Not found" }, { status: 404 })

  await prisma.caseDocument.deleteMany({ where: { id: docId, caseSpaceId: id } })
  return NextResponse.json({ success: true })
}
