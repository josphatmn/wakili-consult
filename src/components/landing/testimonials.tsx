"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Hon. Justice Kamau",
    position: "High Court Judge",
    company: "Kenyan Judiciary",
    quote: "M-Wakili AI has transformed how I approach legal research. The AI's ability to surface relevant case law from the Court of Appeal and Supreme Court is remarkable. It cites authorities accurately and saves hours of manual work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Sarah Wanjiku",
    position: "Managing Partner",
    company: "Wanjiku & Associates Advocates",
    quote: "Our firm handles over 200 active cases. M-Wakili AI's document drafting and contract review capabilities have cut our preparation time by 60%. The AI understands Kenyan legal formats perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
  },
  {
    name: "Dr. Peter Ochieng",
    position: "Legal Counsel",
    company: "Equity Bank Kenya",
    quote: "The compliance assistant is invaluable. It keeps us updated on KRA, NSSF, SHA, and Data Protection requirements. We use it daily for regulatory compliance checks and policy drafting.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    name: "Grace Akinyi",
    position: "SME Owner",
    company: "Akinyi Enterprises Ltd",
    quote: "As a small business owner, I couldn't afford a full-time lawyer. M-Wakili AI helps me review contracts, understand employment law, and ensure compliance — all at a fraction of the cost.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
  },
  {
    name: "James Mwangi",
    position: "Dean, School of Law",
    company: "University of Nairobi",
    quote: "We've integrated M-Wakili AI into our legal research curriculum. Students now have access to a powerful research assistant that helps them understand complex legal concepts and find relevant authorities.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
]

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/[0.03] to-purple-500/[0.03]" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Legal Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what legal professionals, businesses, and individuals say about M-Wakili AI.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="text-center">
                  <Quote className="h-8 w-8 text-violet-600/30 mx-auto mb-6" />
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-500/20"
                    />
                    <div className="text-left">
                      <p className="font-semibold">{testimonials[current].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].position}, {testimonials[current].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full border hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current ? "w-8 bg-violet-600" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full border hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
