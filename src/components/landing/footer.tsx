"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Scale, Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  Features: [
    { label: "AI Research", href: "/#features" },
    { label: "Document Drafting", href: "/#features" },
    { label: "Contract Review", href: "/#features" },
    { label: "Compliance", href: "/#features" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api-reference" },
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Data Protection", href: "/data-protection" },
  ],
}

export function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer id="contact" ref={ref} className="relative border-t bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-3 lg:col-span-2"
          >
            <a href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                <Scale className="h-4 w-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">M-Wakili AI</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              Your full-time AI Kenyan lawyer. Specialised AI agents trained on Kenyan law to help you research, draft, analyze, and solve legal problems faster.
            </p>
            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.social.twitter} className="h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.social.github} className="h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.social.linkedin} className="h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            >
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {SITE_CONFIG.email}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Nairobi, Kenya</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
