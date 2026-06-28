"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Search, FileText, Scale, Shield, Users, Gavel,
  Heart, Building2, Globe, Map, Sword, FileSearch,
} from "lucide-react"

const features = [
  { icon: Search, title: "AI Legal Research", desc: "Deep legal research across Kenyan Acts, Constitution, case law, regulations, and Gazette notices with citation-backed results.", color: "from-violet-500 to-purple-600" },
  { icon: FileSearch, title: "Contract Analysis", desc: "Upload DOCX or PDF for instant AI-powered contract review with risk identification, missing clauses, and recommendations.", color: "from-blue-500 to-cyan-600" },
  { icon: FileText, title: "Legal Document Drafting", desc: "Draft contracts, demand letters, court pleadings, affidavits, and more with AI trained on Kenyan legal formats.", color: "from-emerald-500 to-teal-600" },
  { icon: Scale, title: "Case Law Research", desc: "Find relevant precedents from Court of Appeal, Supreme Court, and High Court with relevance scoring.", color: "from-amber-500 to-orange-600" },
  { icon: Shield, title: "Compliance Assistant", desc: "Business compliance with KRA, NSSF, SHA, Company filings, Employment Act, Tax, AML, and Data Protection.", color: "from-red-500 to-rose-600" },
  { icon: Sword, title: "Litigation Support", desc: "Prepare submissions, organize evidence, generate timelines, cross-reference documents, and summarize witnesses.", color: "from-orange-500 to-red-600" },
  { icon: Users, title: "Employment Law", desc: "Hiring, termination, disciplinary process, redundancy, leave, benefits, and employee rights under Kenyan law.", color: "from-sky-500 to-indigo-600" },
  { icon: Heart, title: "Family Law", desc: "Divorce, custody, succession, marriage, Children Act, inheritance, and maintenance guidance.", color: "from-pink-500 to-rose-600" },
  { icon: Building2, title: "Business Law", desc: "Company registration, NGOs, partnerships, business names, compliance filings, and corporate governance.", color: "from-violet-500 to-indigo-600" },
]

function FeatureCard({ icon: Icon, title, desc, color, index }: typeof features[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="group relative h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-500/20"
      >
        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </motion.div>
    </motion.div>
  )
}

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-500/[0.02] to-background pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Powerful Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Everything You Need in{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">One Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            12 specialised AI agents covering every area of Kenyan law — from legal research to document drafting, compliance, and litigation support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
