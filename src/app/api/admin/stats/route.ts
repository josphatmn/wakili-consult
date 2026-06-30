import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const user = await getCurrentUser()
  if (!user || (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const [totalUsers, totalRevenue, totalDocuments, totalResearch, totalConversations, recentUsers, recentPayments] =
    await Promise.all([
      prisma.user.count(),
      prisma.payment.aggregate({ where: { status: "success" }, _sum: { amount: true } }),
      prisma.document.count(),
      prisma.research.count(),
      prisma.conversation.count(),
      prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
        select: { id: true, name: true, email: true, role: true, createdAt: true },
      }),
      prisma.payment.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
        include: { user: { select: { name: true, email: true } } },
      }),
    ])

  return NextResponse.json({
    stats: {
      totalUsers,
      totalRevenue: totalRevenue._sum.amount || 0,
      totalDocuments,
      totalQueries: totalResearch + totalConversations,
    },
    recentUsers,
    recentPayments,
  })
}
