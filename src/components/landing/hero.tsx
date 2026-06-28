"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Scale, FileSearch, Gavel, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingCards = [
  {
    Icon: Scale,
    label: "AI Research",
    desc: "Kenyan case law & statutes",
    color: "from-violet-500 to-purple-600",
    x: [-160, -120],
    y: [-60, -40],
  },
  {
    Icon: FileSearch,
    label: "Contract Review",
    desc: "Risk analysis in seconds",
    color: "from-blue-500 to-cyan-600",
    x: [180, 140],
    y: [-80, -60],
  },
  {
    Icon: Gavel,
    label: "Case Law",
    desc: "Relevant precedents",
    color: "from-amber-500 to-orange-600",
    x: [-140, -100],
    y: [100, 80],
  },
  {
    Icon: Shield,
    label: "Compliance",
    desc: "KRA, NSSF, SHA, Data",
    color: "from-emerald-500 to-teal-600",
    x: [170, 130],
    y: [80, 60],
  },
]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 gradient-hero opacity-[0.03] dark:opacity-[0.07]" style={{ y: bgY }} />

      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: blobY }}>
        <div className="animated-blob absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="animated-blob absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-pink-500/15 blur-[120px]" style={{ animationDelay: "2s" }} />
        <div className="animated-blob absolute -bottom-40 left-1/4 h-[550px] w-[550px] rounded-full bg-amber-500/15 blur-[120px]" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/4 left-1/2 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] animate-pulse" style={{ animationDelay: "3s", animationDuration: "8s" }} />
      </motion.div>

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border bg-secondary/60 backdrop-blur-sm px-4 py-1.5 text-sm mb-6 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-600" />
              <span>12 AI Agents trained on <span className="font-semibold text-foreground">Kenyan Law</span></span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Your Full-Time{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                AI Kenyan Lawyer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Specialised AI Agents trained on Kenyan law that help individuals, businesses and advocates research, draft documents, analyze contracts and solve legal problems faster. Receive instant legal advice, legal research, citations and document drafting 24 hours a day.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="xl" variant="gradient" asChild className="shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/30">
                  <a href="/register">
                    Start Free
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="xl" variant="outline" className="border-2">
                  <Play className="h-5 w-5 mr-1" />
                  Book Demo
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-10 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> No credit card</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Cancel anytime</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Kenyan law focused</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />

            <div className="relative mx-auto h-full w-full rounded-2xl bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 p-[2px] shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-card overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-muted-foreground ml-2 font-mono">M-Wakili AI — Dashboard</span>
                  </div>
                  <div className="flex-1 grid grid-cols-12 gap-4">
                    <div className="col-span-3 space-y-3">
                      <div className="h-8 rounded-lg bg-violet-500/10" />
                      <div className="h-8 rounded-lg bg-violet-500/10" />
                      <div className="h-8 rounded-lg bg-violet-500/10" />
                      <div className="h-8 rounded-lg bg-violet-500/5" />
                    </div>
                    <div className="col-span-9 space-y-4">
                      <div className="h-10 w-3/4 rounded-lg bg-gradient-to-r from-violet-500/20 to-purple-500/20" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-24 rounded-xl bg-gradient-to-br from-violet-500/15 to-purple-500/15 p-3 flex flex-col justify-between">
                          <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">98%</span>
                          <span className="text-xs text-muted-foreground">Accuracy</span>
                        </div>
                        <div className="h-24 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 p-3 flex flex-col justify-between">
                          <span className="text-2xl font-bold text-amber-600">500+</span>
                          <span className="text-xs text-muted-foreground">Laws Indexed</span>
                        </div>
                        <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 p-3 flex flex-col justify-between">
                          <span className="text-2xl font-bold text-emerald-600">24/7</span>
                          <span className="text-xs text-muted-foreground">Available</span>
                        </div>
                      </div>
                      <div className="h-32 rounded-xl bg-muted/50 p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                            <Scale className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-medium">AI Research Agent</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          Analyzing the Constitution of Kenya, 2010 — Article 40 on protection of right to property...
                        </p>
                        <div className="flex gap-1.5">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-600 font-medium">3 sources found</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium">Citations ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {floatingCards.map(({ Icon, label, desc, color, x, y }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className="absolute hidden xl:flex items-center gap-3 glass-card rounded-2xl p-3.5 shadow-xl shadow-black/5"
                style={{
                  transform: `translate(${x[1]}px, ${y[1]}px)`,
                }}
              >
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shrink-0`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
