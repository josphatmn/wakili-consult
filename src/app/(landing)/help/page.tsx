import { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Wrench, CreditCard, HeadphonesIcon, ChevronDown, Mail, MessageCircle, Phone, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Help Center | M-Wakili AI",
  description: "Get help with M-Wakili AI. Guides, troubleshooting, account support, billing information, and contact options for Kenyan legal AI users.",
}

const guides = [
  { title: "Creating Your Account", desc: "Step-by-step walkthrough for signing up and setting up your M-Wakili AI profile." },
  { title: "Running Your First Legal Research", desc: "Learn how to ask legal questions, interpret citations, and verify sources." },
  { title: "Drafting Documents with AI Agents", desc: "Guide to generating pleadings, contracts, and legal opinions using natural language." },
  { title: "Managing Your Subscription", desc: "How to upgrade, downgrade, or cancel your plan. Understanding billing cycles." },
  { title: "Team Collaboration Features", desc: "Invite team members, share research, and manage permissions within your organisation." },
]

const faqs = [
  { q: "What areas of Kenyan law does M-Wakili AI cover?", a: "M-Wakili AI covers all major areas of Kenyan law including constitutional law, criminal law, civil procedure, land law, employment law, family law, commercial law, tax law, and regulatory compliance. Our 12 specialised AI agents are trained on the Constitution of Kenya 2010, over 500 Acts of Parliament, and thousands of court decisions." },
  { q: "How accurate is the legal information provided?", a: "Our AI agents achieve over 94% accuracy on legal citation and reasoning benchmarks. Every response includes source citations with links to the original legal texts. We recommend verifying critical information with a qualified lawyer, especially for complex matters." },
  { q: "Can M-Wakili AI replace my lawyer?", a: "No. M-Wakili AI is designed to augment legal professionals and provide legal information to the public. It does not provide legal advice, represent clients in court, or form an advocate-client relationship. Always consult a qualified Kenyan lawyer for personalised legal advice." },
  { q: "Is my data secure and confidential?", a: "Yes. We encrypt all data in transit and at rest using AES-256 encryption. We are compliant with the Kenya Data Protection Act 2019. Legal queries and documents are not used for model training unless explicitly opted in. See our privacy policy for details." },
  { q: "What payment methods do you accept?", a: "We accept M-Pesa, Airtel Money, bank transfers, and international credit/debit cards (Visa, Mastercard). Enterprise customers can request invoicing with net-30 payment terms." },
  { q: "How do I integrate M-Wakili AI into my practice management software?", a: "We offer a RESTful API with SDKs for Python, Node.js, and Go. Our API supports legal research, document drafting, contract review, and compliance checking. Visit our API Reference page for detailed documentation." },
]

export default function HelpPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Help Center</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            How Can We{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Help You?</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find guides, troubleshooting tips, and answers to common questions about M-Wakili AI.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting Started Guides</h2>
            <p className="text-muted-foreground">Everything you need to start using M-Wakili AI effectively.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <div key={g.title} className="group rounded-2xl border bg-card p-6 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-violet-600 transition-colors">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border bg-card p-8 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Having issues? Check our common solutions for login problems, API errors, document formatting issues, and agent performance concerns. Most issues are resolved within minutes.
              </p>
              <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:gap-2 transition-all">
                View Troubleshooting Guide <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="rounded-2xl border bg-card p-8 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Account & Billing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Manage your subscription, update payment methods, view invoices, and understand your usage. Enterprise accounts have dedicated account managers.
              </p>
              <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:gap-2 transition-all">
                Manage Account <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30 border-y">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to the most common questions about M-Wakili AI.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border bg-card hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <details className="group p-6 cursor-pointer">
                  <summary className="flex items-center justify-between list-none">
                    <h3 className="font-semibold text-sm md:text-base pr-4">{faq.q}</h3>
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Support</h2>
            <p className="text-muted-foreground">Our team is here to help. Choose the method that works best for you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-3">We respond within 4 hours</p>
              <Link href="mailto:support@m-wakili.ai" className="text-sm font-medium text-violet-600">support@m-wakili.ai</Link>
            </div>
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-3">Available 8 AM - 8 PM EAT</p>
              <Link href="#" className="text-sm font-medium text-violet-600">Start Chat</Link>
            </div>
            <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground mb-3">Enterprise customers only</p>
              <Link href="tel:+254709123000" className="text-sm font-medium text-violet-600">+254 709 123 000</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
