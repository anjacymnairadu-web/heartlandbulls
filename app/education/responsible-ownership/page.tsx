import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { AnimatedReveal } from "@/components/animated-reveal"
import { AnimatedText } from "@/components/animated-text"
import { ArrowLeft } from "lucide-react"

export default function ResponsibleOwnershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-primary/5 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Breed Education
          </Link>
        </div>
      </div>

      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            <AnimatedText text="Responsible Ownership" />
          </h1>
          <AnimatedReveal as="p" className="text-xl text-foreground/70 font-serif leading-relaxed" delayMs={120}>
            Understanding the long-term commitment of owning an English Bulldog.
          </AnimatedReveal>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">The Long-Term Commitment</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Bringing an English Bulldog into your life is a commitment that spans 8-12 years or more. Before making
                this decision, honestly assess your lifestyle and resources.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Time for daily care, exercise, and companionship
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Stable living situation that allows pets
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Financial resources for ongoing care and
                  emergencies
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Willingness to adjust your lifestyle for your
                  dog's needs
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Financial Considerations</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                English Bulldogs can have higher-than-average care costs. Be prepared for:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Initial costs:</strong> Purchase price,
                  supplies, initial vet visits
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Ongoing costs:</strong> Quality food,
                  regular vet care, grooming
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Potential medical costs:</strong>{" "}
                  Breed-specific health issues may require treatment
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Pet insurance:</strong> Highly recommended
                  for bulldogs
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Lifestyle Considerations</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Consider how a bulldog will fit into your daily life:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Bulldogs don't tolerate heat well—air conditioning
                  is often necessary
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> They're not suited for highly active outdoor
                  lifestyles
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> They may snore, drool, and pass gas—endearing to
                  some, challenging for others
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Travel requires special consideration due to
                  breathing sensitivities
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Choosing an Ethical Breeder</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                If you decide an English Bulldog is right for you, choosing a responsible breeder is crucial:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Look for breeders who health test their dogs
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Visit the breeding facility and meet the parents
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Ask about health guarantees and support after
                  purchase
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Avoid breeders who prioritize profit over health
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Be wary of unusually low prices or pressure to buy
                  quickly
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Our Commitment to Responsible Breeding</h2>
              <p className="text-foreground/70 font-serif leading-relaxed">
                At Heartland Bulls, we take our responsibility to the breed seriously. We health test all our breeding
                dogs, provide lifetime support to puppy families, and are always available to take back any puppy we've
                bred if circumstances change. We want every Heartland Bulls puppy to have a loving home for life.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10 flex gap-4">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/faq">Read Our FAQ</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  )
}
