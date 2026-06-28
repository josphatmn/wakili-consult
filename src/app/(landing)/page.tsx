import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Features } from "@/components/landing/features"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { Solutions } from "@/components/landing/solutions"
import { Testimonials } from "@/components/landing/testimonials"
import { PricingPreview } from "@/components/landing/pricing-preview"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <WhyChooseUs />
      <Solutions />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTA />
    </>
  )
}
