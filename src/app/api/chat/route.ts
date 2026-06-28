import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { queryAgent } from "@/lib/agents"
import type { ChatMessage } from "@/types"

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { messages, agentType } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    const chatMessages: ChatMessage[] = messages.slice(-10)

    const result = await queryAgent(agentType || "RESEARCH", chatMessages)

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        const words = result.content.split(" ")

        for (let i = 0; i < words.length; i++) {
          const chunk = { content: (i > 0 ? " " : "") + words[i] }
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`))
          await new Promise((resolve) => setTimeout(resolve, 30))
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"))
        controller.close()
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
