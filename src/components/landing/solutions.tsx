"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Building2, Briefcase, HeartHandshake, Landmark, GraduationCap, Rocket } from "lucide-react"

const solutions = [
  { icon: Users, title: "Individuals", desc: "Get affordable legal advice, draft demand letters, understand your rights, and navigate Kenyan legal processes without expensive lawyer consultations." },
  { icon: Building2, title: "Law Firms", desc: "Supercharge your practice with AI-powered legal research, document drafting, contract review, and case analysis — saving hundreds of billable hours." },
  { icon: Briefcase, title: "Businesses", desc: "Ensure compliance with KRA, NSSF, SHA, Employment Act, and company filings. Draft contracts, policies, and shareholder agreements in minutes." },
  { icon: HeartHandshake, title: "NGOs", desc: "Manage compliance, draft MOUs, navigate NGO board regulations, and access pro-bono quality legal research for your organisational needs." },
  { icon: Landmark, title: "Government", desc: "Access comprehensive legal research across all Kenyan statutes, regulations, and case law for policy development and legal advisory work." },
  { icon: GraduationCap, title: "Universities", desc: "Empower law students and faculty with AI-powered legal research tools, case law analysis, and academic writing assistance." },
  { icon: Rocket, title: "Startups", desc: "Incorporate your company, draft founder agreements, protect IP, manage employment contracts, and navigate regulatory compliance affordably." },
]

function SolutionCard({ icon: Icon, title, desc, index }: typeof solutions[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="group relative h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-500/20"
      >
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </motion.div>
    </motion.div>
  )
}

export function Solutions() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.02] via-transparent to-violet-500/[0.02] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you are an individual seeking legal guidance or a law firm managing hundreds of cases, M-Wakili AI scales to meet your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} {...solution} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
