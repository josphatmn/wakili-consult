"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-card shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className={cn(
        "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}>
        <a href="/" className="flex items-center gap-2 text-xl font-bold shrink-0">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <Scale className="h-4 w-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">M-Wakili AI</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="/login">Login</a>
          </Button>
          <Button variant="gradient" size="sm" asChild className="shadow-lg shadow-violet-500/25">
            <a href="/register">Start Free</a>
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t glass-card overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2.5 rounded-xl hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-6 mt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="/login">Login</a>
                </Button>
                <Button variant="gradient" size="sm" className="flex-1 shadow-lg shadow-violet-500/25" asChild>
                  <a href="/register">Start Free</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
