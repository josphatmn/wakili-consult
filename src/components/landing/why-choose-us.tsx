"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Sparkles, Shield, Zap, Clock, Users, BookOpen, FileCheck } from "lucide-react"

const benefits = [
  { icon: BookOpen, title: "Kenyan Law Specialists", desc: "Our AI agents are trained exclusively on Kenyan legislation, case law, and legal procedures." },
  { icon: Sparkles, title: "AI with Citations", desc: "Every answer comes with verified sources and citations you can trust and reference." },
  { icon: Zap, title: "Accurate Legal Research", desc: "Deep search across all Kenyan Acts, the Constitution, regulations, and Gazette notices." },
  { icon: FileCheck, title: "Fast Document Drafting", desc: "Generate professionally formatted legal documents in minutes, not hours." },
  { icon: Shield, title: "Enterprise Security", desc: "Your data is encrypted in transit and at rest. SOC 2 compliant infrastructure." },
  { icon: Clock, title: "Available 24/7", desc: "Get legal assistance anytime, anywhere. No appointments, no waiting." },
]

function BenefitCard({ icon: Icon, title, desc, index }: typeof benefits[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
    >
      <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-violet-600" />
      </div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
      </div>
    </motion.div>
  )
}

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                alt="Kenyan legal professionals in a modern law firm"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4 backdrop-blur-md bg-white/90 dark:bg-black/60">
                  <p className="text-sm font-semibold">Trusted by Kenyan law firms</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Over 2,000 legal professionals use M-Wakili AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Why M-Wakili AI</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
                Built for{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Kenyan Law</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unlike generic AI chatbots, M-Wakili AI is purpose-built for the Kenyan legal system. Our agents understand Kenyan statutes, court hierarchy, and legal procedures.
              </p>
            </motion.div>

            <div className="space-y-1">
              {benefits.map((benefit, i) => (
                <BenefitCard key={benefit.title} {...benefit} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
