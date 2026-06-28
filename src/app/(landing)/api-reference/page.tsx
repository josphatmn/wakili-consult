import { Metadata } from "next"
import { Key, Globe, Gauge, Code2, Shield, ChevronRight, Bot, FileText, Search, Scale, MessageSquare, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "API Reference | M-Wakili AI",
  description: "Complete API reference for M-Wakili AI. Authentication, endpoints, rate limits, and SDKs for integrating Kenyan legal AI into your applications.",
}

const endpoints = [
  {
    method: "POST",
    path: "/api/research",
    desc: "Perform legal research across Kenyan statutes, case law, and regulations. Returns cited sources with confidence scores.",
    icon: Search,
  },
  {
    method: "POST",
    path: "/api/draft",
    desc: "Generate legal documents including pleadings, contracts, legal opinions, and correspondence based on natural language instructions.",
    icon: FileText,
  },
  {
    method: "POST",
    path: "/api/contract-review",
    desc: "Analyse contracts for risks, missing clauses, and compliance with Kenyan law. Supports PDF and DOCX input formats.",
    icon: Scale,
  },
  {
    method: "POST",
    path: "/api/compliance",
    desc: "Check business practices and documents against Kenyan regulatory requirements. Covers Data Protection Act, tax, and sector-specific regulations.",
    icon: Shield,
  },
  {
    method: "POST",
    path: "/api/chat",
    desc: "Conversational legal AI with context retention. Supports multi-turn conversations, document context, and agent switching.",
    icon: MessageSquare,
  },
  {
    method: "GET",
    path: "/api/agents",
    desc: "List all available AI agents and their capabilities. Returns metadata about each specialised legal agent.",
    icon: Bot,
  },
]

const sdks = [
  { name: "Python SDK", desc: "Official Python client for M-Wakili AI API. Supports async, streaming, and batch operations.", version: "v2.4.1" },
  { name: "Node.js SDK", desc: "JavaScript/TypeScript SDK for Node.js and browser environments. Full TypeScript definitions included.", version: "v2.3.0" },
  { name: "Go SDK", desc: "High-performance Go client for server-side integrations. Built-in retry and circuit breaker patterns.", version: "v1.8.2" },
  { name: "REST API", desc: "Direct REST API access with comprehensive documentation. No SDK required — use any HTTP client.", version: "v2" },
]

export default function ApiReferencePage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute top-20 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">API Reference</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            M-Wakili AI{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">API Reference</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Integrate Kenyan legal AI capabilities into your applications with our RESTful API. Secure, scalable, and built for Kenyan law.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Authentication</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All API requests require authentication via API keys. Include your key in the <code className="text-sm bg-muted px-2 py-0.5 rounded font-mono text-violet-600">Authorization</code> header as a Bearer token.
              </p>
              <div className="rounded-2xl border bg-card p-4 font-mono text-sm space-y-2">
                <div className="flex items-center gap-2 text-green-600">
                  <ChevronRight className="h-4 w-4" />
                  <span>curl -X POST https://api.m-wakili.ai/v2/research</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-green-600">-H</span>
                  <span>&quot;Authorization: Bearer YOUR_API_KEY&quot;</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-green-600">-H</span>
                  <span>&quot;Content-Type: application/json&quot;</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <Key className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">API Key Management</p>
                  <p className="text-xs text-muted-foreground">Generate and rotate keys from your dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <Gauge className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Usage Tracking</p>
                  <p className="text-xs text-muted-foreground">Monitor requests, tokens, and costs in real-time</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Enterprise Security</p>
                  <p className="text-xs text-muted-foreground">SSO, IP whitelisting, and audit logs available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Endpoints</h2>
            <p className="text-muted-foreground">Base URL: <code className="text-sm bg-muted px-2 py-0.5 rounded font-mono text-violet-600">https://api.m-wakili.ai/v2</code></p>
          </div>
          <div className="space-y-4">
            {endpoints.map((ep) => (
              <div key={ep.path} className="group rounded-2xl border bg-card p-5 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                      <ep.icon className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          ep.method === "GET" ? "bg-green-500/10 text-green-600" : "bg-violet-500/10 text-violet-600"
                        }`}>{ep.method}</span>
                        <code className="text-sm font-mono font-semibold">{ep.path}</code>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{ep.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rate Limits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Fair usage limits to ensure platform stability and performance for all users.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">100</p>
              <p className="text-sm font-semibold mt-2">Requests / Min</p>
              <p className="text-xs text-muted-foreground mt-1">Free Tier</p>
            </div>
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">1,000</p>
              <p className="text-sm font-semibold mt-2">Requests / Min</p>
              <p className="text-xs text-muted-foreground mt-1">Pro Tier</p>
            </div>
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <p className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Custom</p>
              <p className="text-sm font-semibold mt-2">Requests / Min</p>
              <p className="text-xs text-muted-foreground mt-1">Enterprise Tier</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SDKs & Client Libraries</h2>
            <p className="text-muted-foreground">Official client libraries for popular programming languages.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{sdk.name}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{sdk.version}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{sdk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
