import { Metadata } from "next"
import { Shield, Database, Share2, Lock, FileText, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | M-Wakili AI",
  description: "M-Wakili AI Privacy Policy — how we collect, use, and protect your personal data in compliance with the Kenya Data Protection Act 2019.",
}

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: "We collect information you provide when creating an account, including your name, email address, phone number, and professional credentials. When you use our AI agents, we process the legal queries, documents, and case details you submit. We automatically collect technical data such as IP addresses, browser type, device information, and usage patterns to improve our service. For billing purposes, we collect payment information through our secure payment processors — we do not store full credit card numbers on our servers.\n\nWe may also collect information from law society registries and public legal databases to verify professional credentials and improve our AI models. If you participate in our beta programmes or provide feedback, we collect your responses and usage data to enhance our platform."
  },
  {
    icon: Shield,
    title: "How We Use Information",
    content: "We use your information to provide, maintain, and improve M-Wakili AI services. This includes processing your legal research queries, generating documents, reviewing contracts, and delivering compliance analysis. Your data enables our AI agents to provide accurate, contextually relevant responses grounded in Kenyan law.\n\nWe use usage data to train and improve our AI models, but only with your explicit consent or in anonymised form. We communicate with you about service updates, security alerts, and support requests. We may send marketing communications if you have opted in, with the ability to opt out at any time. We use billing information to process payments, manage subscriptions, and generate invoices."
  },
  {
    icon: Share2,
    title: "Data Sharing & Disclosure",
    content: "We do not sell your personal data to third parties. We share data only with trusted service providers who help us operate our platform, including cloud infrastructure providers (hosted in Kenya and the EU), payment processors, and customer support tools. These providers are contractually bound to protect your data and use it only for the services they provide to us.\n\nWe may disclose information if required by law, court order, or government request. If M-Wakili AI is involved in a merger, acquisition, or sale of assets, your data will be transferred subject to this Privacy Policy. We may share aggregated, anonymised data for research, reporting, or marketing purposes."
  },
  {
    icon: Lock,
    title: "Data Security",
    content: "We implement industry-standard security measures to protect your data. All data transmitted between your devices and our servers is encrypted using TLS 1.3. Data at rest is encrypted using AES-256 encryption. We conduct regular security audits, penetration testing, and vulnerability assessments.\n\nOur systems employ strict access controls, multi-factor authentication, and comprehensive audit logging. We maintain incident response procedures and notify affected users within 72 hours of any data breach that may compromise personal data. Our security programme is reviewed regularly to address emerging threats and comply with evolving regulatory requirements."
  },
  {
    icon: FileText,
    title: "Your Rights Under the Data Protection Act 2019",
    content: "Under the Kenya Data Protection Act 2019, you have the right to access your personal data held by us and request corrections to inaccurate or incomplete data. You may request deletion of your data, subject to legal retention requirements. You have the right to restrict or object to processing of your data in certain circumstances.\n\nYou may request data portability to receive your data in a structured, commonly used format. You have the right to withdraw consent at any time where processing is based on consent. To exercise any of these rights, contact our Data Protection Officer at dpo@m-wakili.ai. We will respond to your request within 30 days as required by law."
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: "If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:\n\nM-Wakili AI Ltd\nData Protection Officer\nP.O. Box 12345-00100\nNairobi, Kenya\nEmail: dpo@m-wakili.ai\nPhone: +254 709 123 000\n\nYou also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) if you believe we have violated your data protection rights."
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Privacy Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Last updated: 1 January 2026. This Privacy Policy explains how M-Wakili AI Ltd collects, uses, and protects your personal data.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              M-Wakili AI Ltd (&ldquo;M-Wakili AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy of all individuals who use our platform. This Privacy Policy describes how we collect, use, process, and disclose your personal information when you access or use M-Wakili AI&apos;s legal AI platform, website, and related services. It applies to all users of our platform, including legal professionals, individual users, and enterprise clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We process personal data in accordance with the Kenya Data Protection Act 2019, the General Data Protection Regulation (GDPR) where applicable to our users in the European Economic Area, and other relevant data protection laws. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border bg-card p-8 hover:shadow-lg hover:border-violet-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0 mt-1">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">{paragraph}</p>
                    ))}
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
