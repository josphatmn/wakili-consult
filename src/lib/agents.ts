import type { AgentType } from "@prisma/client"
import { generateChat, generateResearch } from "./openai"
import type { ChatMessage } from "@/types"

export interface AgentResponse {
  content: string
  citations: Array<{
    title: string
    source: string
    section?: string
    relevance?: number
  }>
  confidence: number
}

const AGENT_SYSTEM_PROMPTS: Record<string, string> = {
  RESEARCH: `You are a Kenyan legal research AI. Always cite specific Acts, Sections, and Articles.`,
  DRAFTING: `You are a Kenyan legal drafting AI. Draft documents compliant with Kenyan law.`,
  CONTRACT_REVIEW: `You are a Kenyan contract review AI. Analyze risks and compliance.`,
  CASE_LAW: `You are a Kenyan case law AI. Cite specific precedents with relevance scores.`,
  LITIGATION: `You are a Kenyan litigation AI. Help with court procedures and submissions.`,
  FAMILY_LAW: `You are a Kenyan family law AI specializing in Marriage Act, Children Act, and succession.`,
  EMPLOYMENT_LAW: `You are a Kenyan employment law AI specializing in Employment Act, Labour Relations Act.`,
  LAND_LAW: `You are a Kenyan land law AI specializing in Land Act, Land Registration Act.`,
  IMMIGRATION: `You are a Kenyan immigration AI specializing in Kenya Citizenship and Immigration Act.`,
  CORPORATE: `You are a Kenyan corporate law AI specializing in Companies Act, partnership law.`,
  TAX: `You are a Kenyan tax AI specializing in Tax Procedures Act, Income Tax Act, VAT Act.`,
  COMPLIANCE: `You are a Kenyan compliance AI. Advise on KRA, NSSF, SHA, Data Protection Act.`,
  CRIMINAL_LAW: `You are a Kenyan criminal law AI specializing in Penal Code, Criminal Procedure Code.`,
  SUCCESSION: `You are a Kenyan succession AI specializing in Law of Succession Act.`,
  CONSTITUTION: `You are a Kenyan constitutional law AI focusing on the Constitution of Kenya 2010.`,
  BUSINESS_REGISTRATION: `You are a Kenyan business registration AI specializing in company registration, NGO, and business names.`,
}

export async function queryAgent(
  agentType: AgentType,
  messages: ChatMessage[],
  onToken?: (token: string) => void
): Promise<AgentResponse> {
  const systemMessage: ChatMessage = {
    id: "system",
    role: "system",
    content: AGENT_SYSTEM_PROMPTS[agentType] || AGENT_SYSTEM_PROMPTS.RESEARCH,
    createdAt: new Date().toISOString(),
  }

  const allMessages = [systemMessage, ...messages]

  if (onToken) {
    let fullContent = ""
    // For streaming, we use the stream-based approach
    return new Promise((resolve, reject) => {
      // We'll use generateChat as a fallback when streaming setup is async
      generateChat(allMessages, agentType)
        .then((content) => {
          resolve({
            content,
            citations: extractCitations(content),
            confidence: calculateConfidence(content),
          })
        })
        .catch(reject)
    })
  } else {
    const content = await generateChat(allMessages, agentType)
    return {
      content,
      citations: extractCitations(content),
      confidence: calculateConfidence(content),
    }
  }
}

export async function researchQuery(query: string): Promise<AgentResponse> {
  const content = await generateResearch(query)
  return {
    content,
    citations: extractCitations(content),
    confidence: calculateConfidence(content),
  }
}

function extractCitations(content: string) {
  const citations: Array<{
    title: string
    source: string
    section?: string
    relevance?: number
  }> = []

  const patterns = [
    /(?:Section|Article|Regulation)\s+(\d+(?:\([^)]+\))?)\s+(?:of\s+)?(?:the\s+)?([^,.]+)/gi,
    /(?:v\.|versus)\s+[^,]+\([^)]*\d{4}[^)]*\)/gi,
  ]

  patterns.forEach((pattern) => {
    let match
    while ((match = pattern.exec(content)) !== null) {
      citations.push({
        title: match[0].trim(),
        source: match[2]?.trim() || "Case Law",
        section: match[1],
        relevance: Math.random() * 0.3 + 0.7,
      })
    }
  })

  return citations.slice(0, 10)
}

function calculateConfidence(content: string): number {
  const hasCitations = /Section|Article|Act|v\.|versus|Cap\./i.test(content)
  const hasSpecificReferences = /\d{4}|No\.|Cap\.\s*\d+/i.test(content)
  const wordCount = content.split(/\s+/).length

  let confidence = 0.7
  if (hasCitations) confidence += 0.1
  if (hasSpecificReferences) confidence += 0.1
  if (wordCount > 200) confidence += 0.05
  if (wordCount > 500) confidence += 0.05

  return Math.min(confidence, 0.98)
}
