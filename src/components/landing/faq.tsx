"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "What is M-Wakili AI?",
    a: "M-Wakili AI is a specialised AI-powered legal platform built exclusively for Kenyan law. It features 12 AI agents trained on Kenyan legislation, case law, and legal procedures to help individuals, businesses, and law firms with legal research, document drafting, contract review, compliance, and more.",
  },
  {
    q: "How accurate is M-Wakili AI?",
    a: "M-Wakili AI achieves over 99% accuracy on legal research queries when verified against source material. Every response includes citations from Kenyan Acts, regulations, or case law so you can verify the information. Our AI is continuously updated with new legislation and court decisions.",
  },
  {
    q: "Is M-Wakili AI a replacement for a human lawyer?",
    a: "No. M-Wakili AI is a powerful legal assistant designed to augment legal professionals, not replace them. It helps with research, drafting, and analysis — but we always recommend consulting a qualified lawyer for complex legal matters and before making legal decisions.",
  },
  {
    q: "What areas of Kenyan law does it cover?",
    a: "Our AI covers over 500 Kenyan Acts and regulations including the Constitution of Kenya 2010, Civil Procedure, Criminal Procedure, Employment Act, Land Laws, Family Law, Company Law, Tax Laws, Data Protection, and more. We also index decisions from the Supreme Court, Court of Appeal, and High Court.",
  },
  {
    q: "Can I upload documents for review?",
    a: "Yes. M-Wakili AI supports document upload in DOCX, PDF, and text formats. Our Contract Review Agent analyzes uploaded documents for risks, missing clauses, and provides recommendations — all in plain English.",
  },
  {
    q: "How secure is my data?",
    a: "We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Our infrastructure is hosted on secure cloud providers. We are compliant with Kenya's Data Protection Act, 2019. Your documents and conversations are private and never shared.",
  },
  {
    q: "How much does M-Wakili AI cost?",
    a: "We offer a free Starter plan with 10 AI questions to try the platform. Our Professional plan is KSh 999/month for unlimited access. Enterprise plans are custom-priced for large organizations. All paid plans include a 14-day free trial.",
  },
  {
    q: "Can my law firm use M-Wakili AI?",
    a: "Absolutely. Many Kenyan law firms use M-Wakili AI to handle research, drafting, and document review. Our Professional and Enterprise plans support team usage. We offer custom onboarding for law firms.",
  },
]

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-l from-violet-500/[0.03] to-transparent" />
      <div ref={ref} className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about M-Wakili AI.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={cn(
                  "rounded-2xl border transition-all duration-300",
                  isOpen ? "border-violet-500/30 shadow-lg" : "hover:border-violet-500/10"
                )}
              >
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
