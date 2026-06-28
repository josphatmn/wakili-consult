import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const client = await prisma.client.findFirst({
    where: { id, userId: user.id },
    include: {
      cases: {
        include: {
          _count: { select: { tasks: true, documents: true } },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  })

  if (!client) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json({ client })
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  const data = await req.json()
  const client = await prisma.client.updateMany({
    where: { id, userId: user.id },
    data,
  })

  return NextResponse.json({ client })
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { id } = await params

  await prisma.client.deleteMany({ where: { id, userId: user.id } })
  return NextResponse.json({ success: true })
}
