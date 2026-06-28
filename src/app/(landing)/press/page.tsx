import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Download, FileText, Image as ImageIcon, Volume2, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Press & Media | M-Wakili AI",
  description: "Press releases, media kit, and brand assets for M-Wakili AI — Kenya's leading legal AI platform.",
}

const releases = [
  {
    date: "15 Jun 2026",
    title: "M-Wakili AI Launches Enterprise Plan for Kenyan Law Firms",
    excerpt: "New enterprise tier includes custom AI agent training, dedicated infrastructure, and priority support for law firms with 50+ users.",
    category: "Product Launch",
  },
  {
    date: "28 May 2026",
    title: "M-Wakili AI Partners with Law Society of Kenya for CPD Training",
    excerpt: "Strategic partnership to provide AI-powered Continuing Professional Development courses to LSK members across Kenya.",
    category: "Partnership",
  },
  {
    date: "10 May 2026",
    title: "M-Wakili AI Reaches 10,000 Active Users Milestone",
    excerpt: "The platform has grown to serve over 10,000 lawyers, paralegals, and legal professionals across all 47 counties in Kenya.",
    category: "Milestone",
  },
  {
    date: "22 Apr 2026",
    title: "New AI Agent for Kenyan Land Law Launched",
    excerpt: "Specialised agent trained on the Land Registration Act, Land Act, and over 2,000 land-related court decisions.",
    category: "Product Update",
  },
  {
    date: "5 Apr 2026",
    title: "M-Wakili AI Raises $2M Seed Round for Pan-African Expansion",
    excerpt: "Funding led by Nairobi-based venture capital firm to accelerate product development and expansion into Nigeria and South Africa.",
    category: "Funding",
  },
  {
    date: "18 Mar 2026",
    title: "Constitutional Law AI Agent Now Available",
    excerpt: "Comprehensive agent covering the Constitution of Kenya 2010, Bill of Rights, devolution, and constitutional petitions.",
    category: "Product Update",
  },
]

export default function PressPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Press & Media</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Press &{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Media</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Latest news, press releases, and brand assets from M-Wakili AI. For media inquiries, contact press@m-wakili.ai.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Press Releases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Recent announcements and news from the M-Wakili AI team.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map((r) => (
              <div key={r.title} className="group rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-3 py-1 rounded-full">{r.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {r.date}</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-violet-600 transition-colors">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.excerpt}</p>
                <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:gap-2 transition-all">
                  Read Full Release <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Kit</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Download brand assets, logos, and media resources for your coverage.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-card p-8 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Brand Guidelines</h3>
              <p className="text-sm text-muted-foreground mb-4">Logo usage, colour palette, typography, and brand voice guidelines.</p>
              <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:gap-2 transition-all">
                <Download className="h-4 w-4" /> Download PDF
              </Link>
            </div>
            <div className="rounded-2xl border bg-card p-8 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Logos & Assets</h3>
              <p className="text-sm text-muted-foreground mb-4">Company logo in SVG, PNG, and EPS formats for print and digital use.</p>
              <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:gap-2 transition-all">
                <Download className="h-4 w-4" /> Download ZIP
              </Link>
            </div>
            <div className="rounded-2xl border bg-card p-8 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Volume2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Press Kit</h3>
              <p className="text-sm text-muted-foreground mb-4">Executive bios, company fact sheet, screenshots, and product imagery.</p>
              <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:gap-2 transition-all">
                <Download className="h-4 w-4" /> Download ZIP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30 border-t">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Are you a journalist covering legal technology, AI in Africa, or the future of legal services? We would love to hear from you. Our team is available for interviews, commentary, and speaking engagements.
          </p>
          <Link href="mailto:press@m-wakili.ai" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 font-medium shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all">
            press@m-wakili.ai
          </Link>
        </div>
      </section>
    </>
  )
}
