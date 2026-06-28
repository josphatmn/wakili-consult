import { Metadata } from "next"
import { Cookie, Settings, Globe, ShieldOff, SlidersHorizontal, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy | M-Wakili AI",
  description: "M-Wakili AI Cookie Policy — how we use cookies and similar tracking technologies on our platform. Learn about your choices and preferences.",
}

const sections = [
  {
    icon: Cookie,
    title: "What Are Cookies",
    content: "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and provide information to website owners. Cookies enable websites to remember your preferences, login status, and browsing behaviour over time.\n\nCookies can be &ldquo;session cookies&rdquo; which expire when you close your browser, or &ldquo;persistent cookies&rdquo; which remain on your device for a set period or until you delete them. First-party cookies are set by the website you are visiting, while third-party cookies are set by domains other than the one you are visiting. M-Wakili AI uses both types of cookies to deliver and improve our services."
  },
  {
    icon: Settings,
    title: "How We Use Cookies",
    content: "M-Wakili AI uses cookies and similar tracking technologies for several purposes. Essential cookies are necessary for the Platform to function properly — they enable you to log in securely, navigate the site, and use our AI agents. Without these cookies, the Platform cannot operate effectively.\n\nWe use functional cookies to remember your preferences, such as language settings, font size, and display preferences. Performance cookies help us understand how users interact with the Platform, which pages are most popular, and where users encounter errors. This data helps us optimise the user experience. We use analytics cookies from services such as PostHog (self-hosted in Kenya) to collect aggregated usage statistics. Preference cookies remember choices you make to provide enhanced, personalised features."
  },
  {
    icon: Globe,
    title: "Types of Cookies We Use",
    content: "Essential/Strictly Necessary Cookies: These cookies are required for the basic operation of our Platform. They include authentication cookies that verify your identity and maintain your session, security cookies that help detect fraudulent activity, and load-balancing cookies that ensure reliable performance. These cookies cannot be disabled.\n\nFunctional Cookies: These cookies enhance your experience by remembering your preferences. They store your chosen AI agent settings, document format preferences, and interface customisations. Disabling these cookies may affect Platform performance.\n\nAnalytics/Performance Cookies: We use analytics cookies to collect information about how users interact with our Platform. This includes page visits, feature usage, error rates, and response times. All analytics data is anonymised and aggregated. We self-host our analytics infrastructure within Kenya to maintain data sovereignty.\n\nMarketing Cookies: With your consent, we may use marketing cookies to track your interaction with our marketing campaigns and advertisements. These cookies help us measure the effectiveness of our marketing efforts. We do not use third-party advertising networks."
  },
  {
    icon: ShieldOff,
    title: "Third-Party Cookies",
    content: "Some cookies on M-Wakili AI are placed by trusted third-party services. Our payment processor uses cookies to securely process transactions and prevent fraud. Live chat and customer support tools may use cookies to maintain conversation continuity.\n\nWe use developer tools from GitHub and Vercel that may set cookies for error logging and performance monitoring. These services are contractually bound to use data only for the purposes we specify. We do not allow third-party advertising cookies on our Platform.\n\nOur social media sharing links (LinkedIn, Twitter/X, GitHub) may set cookies when you interact with them. These are controlled by the respective platforms&apos; own cookie policies, which we encourage you to review."
  },
  {
    icon: SlidersHorizontal,
    title: "Your Choices & Preferences",
    content: "When you first visit M-Wakili AI, we display a cookie consent banner that allows you to choose which categories of cookies you accept. You can change your preferences at any time through the cookie settings panel accessible from our website footer.\n\nMost web browsers allow you to control cookies through browser settings. You can typically block or delete cookies, and configure browser privacy settings. However, please note that blocking essential cookies may prevent the Platform from functioning correctly. You can set your browser to notify you when cookies are placed and refuse them individually.\n\nFor analytics cookies specifically, you can opt out of data collection by our self-hosted analytics platform through your account privacy settings. We respect Do Not Track (DNT) browser signals and will honour them when processing analytics data."
  },
  {
    icon: Shield,
    title: "Updates & Contact",
    content: "We may update this Cookie Policy from time to time to reflect changes in our practices, legal requirements, or technology. Changes become effective when we post the revised policy on our website. We will notify registered users of material changes via email or platform notification.\n\nIf you have questions about our use of cookies or would like more information, please contact our Data Protection Officer:\n\nEmail: dpo@m-wakili.ai\nPost: M-Wakili AI Ltd, P.O. Box 12345-00100, Nairobi, Kenya\nPhone: +254 709 123 000\n\nThis Cookie Policy was last updated on 1 January 2026."
  },
]

export default function CookiesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 right-1/3 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Cookie Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Last updated: 1 January 2026. How M-Wakili AI uses cookies and similar technologies on our platform.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              This Cookie Policy explains how M-Wakili AI Ltd (&ldquo;M-Wakili AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website and platform. It explains what these technologies are, why we use them, and your rights to control their use. We are committed to being transparent about our data practices and providing you with meaningful choices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This policy should be read together with our Privacy Policy, which provides more detailed information about how we collect, use, and protect your personal data. By using our Platform, you consent to our use of cookies in accordance with this policy, subject to your cookie preferences.
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
