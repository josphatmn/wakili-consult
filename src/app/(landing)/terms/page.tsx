import { Metadata } from "next"
import { CheckCircle, Briefcase, CreditCard, Scale, FileWarning, Ban, Gavel } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | M-Wakili AI",
  description: "M-Wakili AI Terms of Service — the terms governing your use of Kenya's leading legal AI platform. Last updated 1 January 2026.",
}

const sections = [
  {
    icon: CheckCircle,
    title: "1. Acceptance of Terms",
    content: "By accessing or using M-Wakili AI (&ldquo;the Platform&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to any part of these Terms, you must not use the Platform. These Terms constitute a legally binding agreement between you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and M-Wakili AI Ltd (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a company registered in Kenya.\n\nWe reserve the right to modify these Terms at any time. Changes become effective immediately upon posting to our website. Your continued use of the Platform after changes constitutes acceptance of the modified Terms. We will notify registered users of material changes via email or platform notification at least 14 days before they take effect."
  },
  {
    icon: Briefcase,
    title: "2. Description of Services",
    content: "M-Wakili AI provides an artificial intelligence-powered legal research, document drafting, and compliance analysis platform. Our AI agents are trained on Kenyan law and legal materials to assist users in understanding legal concepts, conducting legal research, drafting documents, and identifying compliance requirements.\n\nThe Platform is a tool for legal information and assistance — it does not provide legal advice, form an advocate-client relationship, or replace the professional judgment of a qualified lawyer. We make reasonable efforts to ensure accuracy, but legal information provided by the Platform should be independently verified. We reserve the right to modify, suspend, or discontinue any aspect of the Platform at any time with reasonable notice."
  },
  {
    icon: FileWarning,
    title: "3. User Obligations",
    content: "You agree to use the Platform in compliance with all applicable Kenyan laws and regulations. You must provide accurate, current, and complete information during registration and keep your account credentials confidential. You are responsible for all activities that occur under your account.\n\nYou agree not to: (a) use the Platform for any unlawful purpose or in violation of any applicable law; (b) attempt to reverse engineer, decompile, or extract the source code of our AI models; (c) use automated tools, bots, or scrapers without our express written permission; (d) upload malicious code, viruses, or any content that could harm our systems; (e) interfere with other users&apos; access to the Platform; (f) use the Platform to harass, threaten, or harm others. Violation of these obligations may result in immediate termination of your account."
  },
  {
    icon: CreditCard,
    title: "4. Payment Terms",
    content: "We offer various subscription plans as described on our website. All fees are payable in advance and are non-refundable except as expressly stated in our refund policy. We accept payment via M-Pesa, Airtel Money, bank transfers, and credit/debit cards.\n\nSubscription fees may change with 30 days&apos; notice. Price changes do not affect your current billing period. Enterprise customers may be subject to custom pricing and payment terms as specified in their service agreement. Late payments may result in service suspension. You are responsible for all applicable taxes. Usage beyond plan limits will be charged at the overage rates specified in your plan."
  },
  {
    icon: Scale,
    title: "5. Intellectual Property",
    content: "The Platform, including its software, AI models, algorithms, user interface, content, and brand assets, is the intellectual property of M-Wakili AI Ltd and is protected by Kenyan and international intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Platform for your internal business or personal use.\n\nYou retain ownership of any legal documents, queries, and data you input into the Platform (&ldquo;User Content&rdquo;). You grant us a license to process your User Content to provide the services. We do not claim ownership of your User Content. You may not reproduce, distribute, modify, or create derivative works of the Platform without our prior written consent."
  },
  {
    icon: Ban,
    title: "6. Limitation of Liability",
    content: "To the maximum extent permitted by law, M-Wakili AI Ltd, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform. This includes but is not limited to loss of profits, data, goodwill, or business opportunities.\n\nThe Platform is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied. We do not warrant that the Platform will be uninterrupted, error-free, or that legal information provided is complete or up-to-date. Our total liability for any claim arising from your use of the Platform shall not exceed the amount you have paid us in the 12 months preceding the claim. Some jurisdictions do not allow certain limitations of liability, so these limitations may not apply to you."
  },
  {
    icon: Gavel,
    title: "7. Termination & Governing Law",
    content: "Either party may terminate these Terms at any time. We may suspend or terminate your access to the Platform immediately if you violate these Terms or applicable law. Upon termination, your right to use the Platform ceases immediately. Sections 5 (Intellectual Property), 6 (Limitation of Liability), and 7 (Termination & Governing Law) survive termination.\n\nThese Terms are governed by the laws of the Republic of Kenya. Any disputes arising from these Terms shall be resolved through good-faith negotiations. If negotiation fails, disputes shall be submitted to the exclusive jurisdiction of the courts of Kenya. The parties agree to first attempt mediation through the Nairobi Centre for International Arbitration before commencing litigation."
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Terms of Service</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Last updated: 1 January 2026. Please read these terms carefully before using M-Wakili AI.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to M-Wakili AI. By accessing our platform, you agree to these Terms of Service (&ldquo;Terms&rdquo;). If you are using the Platform on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms. Please read these Terms carefully before using the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms apply to all users of M-Wakili AI, including but not limited to individual subscribers, law firms, corporate clients, and government agencies. If you have entered into a separate written agreement with us regarding specific services, the terms of that agreement will prevail where they conflict with these Terms.
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
