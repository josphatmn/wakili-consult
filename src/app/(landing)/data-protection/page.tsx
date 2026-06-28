import { Metadata } from "next"
import { ShieldCheck, Lock, Scale, Eye, Clock, Globe, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Protection | M-Wakili AI",
  description: "M-Wakili AI's commitment to data protection. Learn about our compliance with the Kenya Data Protection Act 2019, your rights, and our security measures.",
}

const sections = [
  {
    icon: ShieldCheck,
    title: "Our Commitment to Data Protection",
    content: "At M-Wakili AI, data protection is not just a legal obligation — it is a core value embedded in everything we build. Our platform processes sensitive legal information, and we recognise the profound responsibility that comes with this. We have designed our systems, policies, and practices from the ground up to protect the privacy and security of your data.\n\nWe comply fully with the Kenya Data Protection Act 2019 (DPA 2019) and align our practices with international standards including the GDPR where applicable. Our data protection programme is overseen by a dedicated Data Protection Officer (DPO) who reports directly to the Board of Directors. We undergo annual independent audits to verify our compliance and security posture."
  },
  {
    icon: Scale,
    title: "Data Protection Principles",
    content: "We adhere to the following data protection principles as enshrined in the Kenya Data Protection Act 2019. Lawfulness, fairness, and transparency: We process personal data lawfully, fairly, and transparently. You will always know what data we collect and why. Purpose limitation: We collect data only for specified, explicit, and legitimate purposes related to providing our legal AI services. We do not process data in ways incompatible with these purposes.\n\nData minimisation: We collect only the personal data that is adequate, relevant, and necessary for the purposes for which it is processed. We do not hoard data. Accuracy: We take reasonable steps to ensure personal data is accurate and kept up to date. Storage limitation: We retain personal data only for as long as necessary for the purposes for which it was collected. Integrity and confidentiality: We process personal data in a manner that ensures appropriate security, including protection against unauthorised or unlawful processing and accidental loss, destruction, or damage."
  },
  {
    icon: UserCheck,
    title: "Your Rights Under the Data Protection Act 2019",
    content: "The Kenya Data Protection Act 2019 grants you comprehensive rights over your personal data. Right to be informed: You have the right to be informed about the collection and use of your personal data. This Privacy Policy and our other legal notices fulfil this obligation. Right of access: You have the right to access your personal data and obtain a copy of the information we hold about you. We will respond to access requests within 30 days.\n\nRight to rectification: You have the right to request correction of inaccurate or incomplete personal data. Right to erasure: You have the right to request deletion of your personal data where it is no longer necessary for the purposes for which it was collected, or where you withdraw consent. This right is subject to legal retention obligations. Right to restrict processing: You have the right to restrict processing of your data in certain circumstances, such as where you contest its accuracy. Right to data portability: You have the right to receive your personal data in a structured, commonly used, machine-readable format and transmit it to another data controller. Right to object: You have the right to object to processing of your personal data for direct marketing purposes or where processing is based on legitimate interests."
  },
  {
    icon: Lock,
    title: "Data Security Measures",
    content: "We implement a comprehensive security programme to protect your data against unauthorised access, alteration, disclosure, or destruction. Our technical measures include: end-to-end encryption using TLS 1.3 for all data in transit and AES-256 encryption for data at rest. All data is stored in SOC 2-compliant data centres with 24/7 physical security, biometric access controls, and redundant power and cooling systems.\n\nOur organisational measures include: mandatory security awareness training for all employees, strict access controls based on the principle of least privilege, multi-factor authentication for all system access, comprehensive audit logging of all data access events, and a dedicated incident response team available 24/7. We conduct quarterly vulnerability assessments and annual penetration tests performed by independent third-party security firms. Our vendors and sub-processors undergo rigorous security assessments before engagement and are monitored throughout the relationship."
  },
  {
    icon: Clock,
    title: "Data Retention",
    content: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Account data: We retain your account information for the duration of your account plus 90 days after account closure to facilitate reactivation. After this period, personal data is anonymised or securely deleted.\n\nUsage data: Aggregated usage statistics are retained indefinitely in anonymised form. Detailed usage logs are retained for 12 months. Legal query data: The legal queries and documents you submit are retained for the duration of your subscription to provide continuity of service. After account closure, this data is deleted within 90 days unless required for legal compliance or dispute resolution. Billing data: Financial transaction records are retained for 7 years as required by Kenyan tax law. Communication records: Support and correspondence records are retained for 3 years from the date of last communication."
  },
  {
    icon: Globe,
    title: "International Data Transfers",
    content: "M-Wakili AI primarily stores and processes data within Kenya. For enterprise customers who require it, we offer the option to maintain data residency exclusively within Kenyan data centres. Where data is transferred outside Kenya (for example, to our cloud infrastructure providers who maintain data centres in the European Union), we ensure appropriate safeguards are in place.\n\nThese safeguards include: Standard Contractual Clauses (SCCs) adopted by the European Commission, data processing agreements that reflect DPA 2019 requirements, and adequacy decisions where applicable. We conduct Transfer Impact Assessments for all cross-border data transfers to ensure the level of protection required by Kenyan law is maintained. We will update this policy as the legal framework for international data transfers develops, including in light of any adequacy decisions by the Office of the Data Protection Commissioner."
  },
  {
    icon: ShieldCheck,
    title: "Contact Our Data Protection Officer",
    content: "If you have any questions about our data protection practices, wish to exercise your rights, or need to report a data protection concern, please contact our Data Protection Officer:\n\nM-Wakili AI Ltd\nAttention: Data Protection Officer\nP.O. Box 12345-00100\nNairobi, Kenya\nEmail: dpo@m-wakili.ai\nPhone: +254 709 123 000\n\nWe take all data protection concerns seriously and will respond to your inquiry within 30 days. If you are not satisfied with our response, you have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) at complaints@odpc.go.ke or through their website at www.odpc.go.ke."
  },
]

export default function DataProtectionPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="animated-blob absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Data Protection</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            How M-Wakili AI protects your personal data in compliance with the Kenya Data Protection Act 2019 and international standards.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              M-Wakili AI Ltd (&ldquo;M-Wakili AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy and security of personal data processed through our legal AI platform. This Data Protection page provides detailed information about our data protection framework, your rights under the Kenya Data Protection Act 2019, and the measures we take to safeguard your information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a platform that processes sensitive legal information, we have built data protection into the design of our systems from the outset. We believe that strong data protection is fundamental to earning and maintaining the trust of our users, and we continuously invest in improving our data protection practices.
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
