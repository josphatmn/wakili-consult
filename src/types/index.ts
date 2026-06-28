import type { AgentType } from "@prisma/client"

export interface ChatMessage {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  citations?: Citation[]
  createdAt: string
}

export interface Citation {
  id: string
  title: string
  source: string
  section?: string
  relevance?: number
  url?: string
  text?: string
}

export interface ResearchResponse {
  summary: string
  analysis: string
  sources: string[]
  citations: Citation[]
  confidence: number
  recommendations?: string[]
}

export interface AIAgent {
  id: AgentType
  name: string
  description: string
  icon: string
  color: string
  capabilities: string[]
  returns: string[]
}

export interface Stat {
  value: string
  label: string
  suffix: string
}

export interface PricingPlan {
  name: string
  price: number
  currency: string
  interval: string
  description: string
  features: string[]
  cta: string
  popular: boolean
}

export type SubscriptionPlan = "FREE" | "PROFESSIONAL" | "BUSINESS" | "ENTERPRISE"
