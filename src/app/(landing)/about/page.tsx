import { Metadata } from "next"
import Image from "next/image"
import { Scale, Target, Eye, Heart, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | M-Wakili AI",
  description: "Learn about M-Wakili AI's mission to transform Kenyan legal services through artificial intelligence.",
}

const values = [
  { icon: Scale, title: "Justice for All", desc: "We believe everyone deserves access to quality legal information and guidance, regardless of their financial means." },
  { icon: Target, title: "Accuracy First", desc: "Every legal answer and citation is verified against authoritative Kenyan sources before delivery." },
  { icon: Eye, title: "Transparency", desc: "We clearly show our sources, confidence scores, and limitations — no black boxes, no hidden agendas." },
  { icon: Heart, title: "Kenyan at Heart", desc: "Built by Kenyans for Kenyans. Our AI agents are trained exclusively on Kenyan law, procedure, and precedent." },
  { icon: Users, title: "Empowering Professionals", desc: "We augment legal professionals with AI superpowers, freeing them to focus on high-value strategic work." },
  { icon: Award, title: "Continuous Improvement", desc: "Our models are updated weekly with new legislation, court decisions, and regulatory changes." },
]

const timeline = [
  { year: "2023 Q3", title: "The Idea", desc: "Our founders recognised that most Kenyans cannot afford a lawyer, yet legal problems affect everyone." },
  { year: "2024 Q1", title: "Research & Development", desc: "We spent months training AI models on the Constitution of Kenya 2010, over 500 Acts, and thousands of court decisions." },
  { year: "2024 Q3", title: "Beta Launch", desc: "M-Wakili AI launched in private beta with 50 law firms and 200 individual users across Kenya." },
  { year: "2025 Q1", title: "Public Launch", desc: "We opened the platform to the public with 12 specialised AI agents covering every major area of Kenyan law." },
  { year: "2025 Q3", title: "Enterprise", desc: "Launched enterprise plans for law firms, corporations, and government agencies with custom AI agent training." },
  { year: "2026", title: "Pan-African Expansion", desc: "M-Wakili AI begins expanding to other African jurisdictions, starting with Nigeria and South Africa." },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Transforming Kenyan Law with{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Artificial Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            M-Wakili AI is on a mission to make Kenyan legal services accessible, affordable, and efficient for everyone through the power of specialised AI agents.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="M-Wakili AI team collaborating"
                  width={800}
                  height={533}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kenya has fewer than 20,000 registered lawyers serving a population of over 50 million people. This means most Kenyans cannot access legal advice when they need it most — during disputes, business decisions, family matters, or legal compliance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                M-Wakili AI was founded to bridge this gap. We have trained 12 specialised AI agents on the entire body of Kenyan law, from the Constitution and Acts of Parliament to regulations, case law, and legal procedures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our AI agents do not replace lawyers — they empower them. They give individuals access to legal information they could never afford before. They save law firms hundreds of hours in research and drafting. They help businesses stay compliant without expensive legal retainers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision we make at M-Wakili AI.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">The story of M-Wakili AI from idea to impact.</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-pink-500/50" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <div key={t.year} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 pl-12 md:pl-0">
                    <span className="text-sm font-bold text-violet-600">{t.year}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            We are always looking for talented individuals who share our passion for legal technology and social impact. Whether you are a lawyer, engineer, designer, or legal researcher — there is a place for you at M-Wakili AI.
          </p>
          <a href="/careers" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 font-medium shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all">
            View Open Positions
          </a>
        </div>
      </section>
    </>
  )
}
