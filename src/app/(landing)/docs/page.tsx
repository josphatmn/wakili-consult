import { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Bot, Search, FileText, CheckCircle, HelpCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation | M-Wakili AI",
  description: "Comprehensive documentation for M-Wakili AI — getting started guides, API references, legal research tutorials, and best practices.",
}

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    desc: "Learn the basics of M-Wakili AI. Create your account, set up your profile, and start using our AI agents for legal research and document drafting.",
    links: ["Quickstart Guide", "Account Setup", "Platform Overview", "First AI Agent Interaction"],
  },
  {
    icon: Bot,
    title: "AI Agents API",
    desc: "Integrate M-Wakili AI agents directly into your applications. RESTful API with WebSocket support for real-time legal assistance.",
    links: ["API Authentication", "Agent Endpoints", "WebSocket Integration", "Webhook Events"],
  },
  {
    icon: Search,
    title: "Legal Research Guide",
    desc: "Master legal research with our AI agents. Learn effective querying, citation verification, and case law analysis techniques.",
    links: ["Effective Searching", "Citation Formats", "Case Law Analysis", "Statutory Interpretation"],
  },
  {
    icon: FileText,
    title: "Document Drafting Guide",
    desc: "Draft legal documents faster with AI assistance. Pleadings, contracts, legal opinions, and correspondence templates.",
    links: ["Pleading Drafting", "Contract Templates", "Legal Opinions", "Correspondence"],
  },
  {
    icon: CheckCircle,
    title: "Best Practices",
    desc: "Optimise your workflow with proven patterns. Prompt engineering, quality assurance, and collaboration tips for legal teams.",
    links: ["Prompt Engineering", "Quality Checks", "Team Workflows", "Security Best Practices"],
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    desc: "Frequently asked questions about M-Wakili AI. Troubleshooting, billing, data privacy, and technical support information.",
    links: ["General Questions", "Billing & Plans", "Data Privacy", "Technical Support"],
  },
]

export default function DocsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Documentation</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Build with M-Wakili AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive guides, API references, and best practices to help you get the most out of Kenya's leading legal AI platform.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                  <cat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="flex items-center justify-between text-sm text-violet-600 hover:text-violet-700 group/link">
                        {link}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30 border-t border-b">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Our documentation is continuously updated. If you cannot find what you are looking for, our support team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/help" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 font-medium shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all">
              Visit Help Center
            </Link>
            <Link href="/api-reference" className="inline-flex items-center gap-2 rounded-xl border bg-card text-foreground px-8 py-3 font-medium hover:shadow-lg transition-all">
              API Reference
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
