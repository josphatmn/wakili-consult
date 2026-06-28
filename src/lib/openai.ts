import OpenAI from "openai"
import type { ChatMessage } from "@/types"

let openai: OpenAI | null = null

function getOpenAI() {
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || "",
    })
  }
  return openai
}

export async function streamChat(
  messages: ChatMessage[],
  agentType: string = "research",
  onToken: (token: string) => void,
  onComplete?: (fullText: string) => void,
  onError?: (error: Error) => void
) {
  const systemPrompt = getSystemPrompt(agentType)

  try {
    const stream = await getOpenAI().chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-5.5",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role as "user" | "assistant" | "system", content: m.content })),
      ],
      stream: true,
      temperature: 0.7,
    })

    let fullText = ""

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || ""
      if (content) {
        fullText += content
        onToken(content)
      }
    }

    onComplete?.(fullText)
  } catch (error) {
    onError?.(error as Error)
  }
}

export async function generateChat(messages: ChatMessage[], agentType: string = "research"): Promise<string> {
  const systemPrompt = getSystemPrompt(agentType)

  try {
    const response = await getOpenAI().chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-5.5",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role as "user" | "assistant" | "system", content: m.content })),
      ],
      temperature: 0.7,
    })

    return response.choices[0]?.message?.content || ""
  } catch (error) {
    console.error("OpenAI error:", error)
    throw error
  }
}

export async function generateResearch(query: string) {
  const systemPrompt = `You are a Kenyan legal research AI assistant. Provide comprehensive legal research on Kenyan law.

For every legal claim you make, you MUST cite the specific:
- Act of Parliament (e.g., Employment Act, Cap. 226)
- Section number
- Constitution Article
- Relevant case law with case name and citation

Structure your response as:
1. Executive Summary (2-3 sentences)
2. Legal Analysis (detailed)
3. Relevant Acts and Sections
4. Case Law Precedents
5. Constitutional Provisions
6. Recommendations
7. Sources

Rate your confidence level (0-100%) based on how clearly the law addresses the query.`

  const response = await getOpenAI().chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-5.5",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: query },
    ],
    temperature: 0.5,
  })

  return response.choices[0]?.message?.content || ""
}

function getSystemPrompt(agentType: string): string {
  const prompts: Record<string, string> = {
    research: `You are an expert Kenyan legal research AI assistant. You have comprehensive knowledge of:
- The Constitution of Kenya 2010
- All Acts of Parliament
- Kenyan case law from Court of Appeal, Supreme Court, High Court
- Regulations and legal notices
- Gazette notices
- Legal opinions and academic commentary

Always cite specific Acts, Sections, and Articles. Include relevant case law with proper citations.`,

    drafting: `You are an expert Kenyan legal drafting AI assistant. You can draft:
- Contracts and agreements compliant with Kenyan law
- Demand letters
- Employment agreements
- Court pleadings and legal submissions
- Affidavits
- Company resolutions
- Legal policies and notices
- Business agreements

Ensure all drafts comply with Kenyan legal requirements and include proper jurisdictional clauses.`,

    "contract-review": `You are a Kenyan contract review AI assistant. Analyze contracts for:
- Legal risks under Kenyan law
- Missing or inadequate clauses
- Unenforceable provisions
- Compliance with Kenyan regulations
- Provide plain English explanations of complex clauses
- Suggest specific amendments`,

    "case-law": `You are a Kenyan case law research AI assistant. Find and analyze:
- Court of Appeal decisions
- Supreme Court cases
- High Court judgments
- Employment and Labour Relations Court cases
- Environmental and Land Court cases
Provide relevance scores, key holdings, and proper citations.`,

    litigation: `You are a Kenyan litigation assistant AI. Help with:
- Preparing court submissions
- Organizing evidence
- Generating case timelines
- Cross-referencing documents
- Preparing witness summaries
- Identifying procedural requirements under Kenyan civil and criminal procedure`,
  }

  return prompts[agentType] || prompts.research
}
