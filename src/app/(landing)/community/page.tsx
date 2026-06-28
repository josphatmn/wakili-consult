import { Metadata } from "next"
import Link from "next/link"
import { MessageCircle, Github, Twitter, Linkedin, Calendar, Users, BookOpen, ArrowRight, Star, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Community | M-Wakili AI",
  description: "Join the M-Wakili AI community. Connect with fellow legal professionals, developers, and AI enthusiasts building the future of Kenyan law.",
}

const platforms = [
  { icon: MessageCircle, name: "Discord", desc: "Join our Discord server for real-time discussion, Q&A, and community events.", href: "#", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-500/10 text-indigo-600" },
  { icon: Github, name: "GitHub", desc: "Contribute to open-source projects, SDKs, and sample code for legal AI integration.", href: "#", color: "from-gray-700 to-gray-900", bg: "bg-gray-500/10 text-gray-600" },
  { icon: Twitter, name: "Twitter / X", desc: "Follow us for product updates, legal tech news, and community highlights.", href: "#", color: "from-sky-500 to-blue-600", bg: "bg-sky-500/10 text-sky-600" },
  { icon: Linkedin, name: "LinkedIn", desc: "Connect with the team and stay informed about company news and career opportunities.", href: "#", color: "from-blue-600 to-blue-700", bg: "bg-blue-500/10 text-blue-600" },
]

const events = [
  { date: "25 Jul 2026", title: "Legal Tech Nairobi Meetup", desc: "Monthly gathering of legal professionals exploring AI tools for Kenyan law practice.", type: "In-Person" },
  { date: "12 Aug 2026", title: "Webinar: AI for Legal Research", desc: "Live demonstration of advanced research techniques using M-Wakili AI agents.", type: "Online" },
  { date: "5 Sep 2026", title: "M-Wakili AI Hackathon", desc: "48-hour virtual hackathon building innovative legal applications on our platform.", type: "Hybrid" },
]

const spotlight = [
  { name: "Njeri & Associates", desc: "Reduced legal research time by 70% using M-Wakili AI for constitutional law cases.", role: "Law Firm, Nairobi" },
  { name: "Strathmore Law School", desc: "Integrated M-Wakili AI into the legal research curriculum for final-year students.", role: "Academic Institution" },
  { name: "Kituo Cha Sheria", desc: "Using our platform to provide free legal information to underserved communities across Kenya.", role: "Legal Aid NGO" },
]

export default function CommunityPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="animated-blob absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Community</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">M-Wakili AI Community</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect with lawyers, developers, and legal tech enthusiasts building the future of Kenyan legal services together.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground">Connect with us across platforms and be part of the conversation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p) => (
              <Link key={p.name} href={p.href} className="group">
                <div className="rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300 h-full">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-violet-600 transition-colors">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Join Now <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Webinars</h2>
            <p className="text-muted-foreground">Upcoming community events and educational webinars.</p>
          </div>
          <div className="space-y-4">
            {events.map((ev) => (
              <div key={ev.title} className="group rounded-2xl border bg-card p-5 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="text-center shrink-0">
                    <div className="text-xs font-medium text-violet-600 uppercase">{ev.date.split(" ")[1]}</div>
                    <div className="text-2xl font-bold text-violet-600">{ev.date.split(" ")[0]}</div>
                    <div className="text-xs text-muted-foreground">{ev.date.split(" ")[2]}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-violet-600 transition-colors">{ev.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{ev.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-violet-500/10 text-violet-600">{ev.type}</span>
                    <ArrowRight className="h-4 w-4 text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Spotlight</h2>
            <p className="text-muted-foreground">Organisations and individuals using M-Wakili AI to transform legal services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {spotlight.map((s) => (
              <div key={s.name} className="rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{s.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{s.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{s.desc}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contributing Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Help us improve M-Wakili AI. Contributions from lawyers, researchers, and developers are always welcome.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Legal Datasets</h3>
              <p className="text-sm text-muted-foreground">Contribute to our open legal dataset collection — court decisions, legislation, and legal annotations.</p>
            </div>
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Open Source</h3>
              <p className="text-sm text-muted-foreground">Contribute to our SDKs, sample apps, and developer tools on GitHub.</p>
            </div>
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Feedback & Testing</h3>
              <p className="text-sm text-muted-foreground">Join our beta testing programme and help shape the future of legal AI in Kenya.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
