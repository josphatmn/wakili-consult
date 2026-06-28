"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "250", suffix: "K+", label: "Legal Questions Answered" },
  { value: "99", suffix: "%", label: "AI Accuracy with Sources" },
  { value: "24", suffix: "/7", label: "Always Available" },
  { value: "500", suffix: "+", label: "Kenyan Laws & Acts Indexed" },
  { value: "50", suffix: "K+", label: "Documents Generated" },
]

function AnimatedCounter({ value, suffix, label, index }: { value: string; suffix: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-bold mb-1">
        <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          {value}
        </span>
        <span className="text-foreground">{suffix}</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 border-y bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-purple-500/5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <AnimatedCounter key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
