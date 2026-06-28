import { NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const search = req.nextUrl.searchParams.get("search") || ""

  const clients = await prisma.client.findMany({
    where: {
      userId: user.id,
      OR: search
        ? [
            { name: { contains: search } },
            { email: { contains: search } },
            { phone: { contains: search } },
            { idNumber: { contains: search } },
          ]
        : undefined,
    },
    include: { _count: { select: { cases: true } } },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json({ clients })
}

export async function POST(req: Request) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { name, email, phone, idNumber, kraPin, address, type, notes } = await req.json()

  if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 })

  const client = await prisma.client.create({
    data: { name, email, phone, idNumber, kraPin, address, type: type || "INDIVIDUAL", notes, userId: user.id },
  })

  return NextResponse.json({ client })
}
