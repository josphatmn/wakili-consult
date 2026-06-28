import { Metadata } from "next"
import Image from "next/image"
import { Briefcase, MapPin, Clock, DollarSign, Heart, Zap, BookOpen, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | M-Wakili AI",
  description: "Join the M-Wakili AI team and help transform Kenyan legal services through artificial intelligence.",
}

const perks = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical cover, gym membership, and mental health support." },
  { icon: Zap, title: "Remote-First Culture", desc: "Work from anywhere in Kenya. Flexible hours that suit your lifestyle." },
  { icon: BookOpen, title: "Learning Budget", desc: "Annual learning and development budget for courses, conferences, and books." },
  { icon: Users, title: "Inclusive Team", desc: "Diverse team of lawyers, engineers, designers, and legal researchers." },
]

const openings = [
  {
    title: "Senior AI Engineer",
    dept: "Engineering",
    location: "Nairobi / Remote",
    type: "Full-Time",
    salary: "KSh 350K - 500K",
    desc: "Build and optimise large language models for the Kenyan legal domain. Experience with NLP, transformers, and RAG systems required.",
  },
  {
    title: "Legal Research Lead",
    dept: "Legal",
    location: "Nairobi",
    type: "Full-Time",
    salary: "KSh 250K - 400K",
    desc: "Lead our legal research team in curating and validating Kenyan legal datasets. Must be an advocate with 5+ years experience.",
  },
  {
    title: "Full-Stack Developer",
    dept: "Engineering",
    location: "Nairobi / Remote",
    type: "Full-Time",
    salary: "KSh 200K - 350K",
    desc: "Build our Next.js platform, APIs, and AI agent interfaces. Experience with React, TypeScript, and Node.js required.",
  },
  {
    title: "Product Designer",
    dept: "Product",
    location: "Nairobi / Remote",
    type: "Full-Time",
    salary: "KSh 180K - 300K",
    desc: "Design intuitive experiences for complex legal AI interactions. Strong portfolio in SaaS product design required.",
  },
  {
    title: "Legal Researcher",
    dept: "Legal",
    location: "Nairobi",
    type: "Full-Time",
    salary: "KSh 120K - 200K",
    desc: "Research and annotate Kenyan legal documents, court decisions, and legislation for AI training. Law degree required.",
  },
  {
    title: "Customer Success Manager",
    dept: "Operations",
    location: "Nairobi",
    type: "Full-Time",
    salary: "KSh 150K - 250K",
    desc: "Help our users get the most out of M-Wakili AI. Onboard law firms, train teams, and gather feedback.",
  },
]

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Careers</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Help Us Build the Future of{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Kenyan Legal AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join a passionate team of lawyers, engineers, and researchers working to make Kenyan legal services accessible to everyone.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y bg-muted/30 -mt-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join M-Wakili AI?</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are building at the intersection of law and artificial intelligence — one of the most impactful technology frontiers in Kenya today. Every day, our work helps someone understand their legal rights, saves a law firm hundreds of hours, or keeps a business compliant.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {perks.map((p) => (
                  <div key={p.title} className="flex gap-3 p-3 rounded-xl bg-card">
                    <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                      <p.icon className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{p.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="M-Wakili AI team"
                  width={800}
                  height={533}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">We are growing fast and looking for talented people to join our team.</p>
          </div>
          <div className="space-y-4">
            {openings.map((role) => (
              <div key={role.title} className="group rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-violet-600 transition-colors">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {role.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {role.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {role.type}</span>
                      <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" /> {role.salary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">Apply Now</span>
                    <ArrowRight className="h-4 w-4 text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
