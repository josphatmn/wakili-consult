"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600" />
      <div className="absolute inset-0">
        <div className="animated-blob absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />
        <div className="animated-blob absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" style={{ animationDelay: "3s" }} />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Experience the Future of{" "}
          <span className="text-white/90">Kenyan Legal AI?</span>
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join thousands of legal professionals, businesses, and individuals who trust M-Wakili AI for their legal needs. Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="xl"
              className="bg-white text-violet-700 hover:bg-white/90 shadow-xl shadow-black/20 text-base px-10"
              asChild
            >
              <a href="/register">
                Start Free
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-base px-10"
            >
              <Play className="h-5 w-5 mr-2" />
              Schedule a Demo
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
