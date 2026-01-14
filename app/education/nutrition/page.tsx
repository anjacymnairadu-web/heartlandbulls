import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { AnimatedReveal } from "@/components/animated-reveal"
import { AnimatedText } from "@/components/animated-text"
import { ArrowLeft } from "lucide-react"

export default function NutritionPage() {
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
            <AnimatedText text="Nutrition & Development" />
          </h1>
          <AnimatedReveal as="p" className="text-xl text-foreground/70 font-serif leading-relaxed" delayMs={120}>
            A guide to feeding your English Bulldog from puppyhood through their senior years.
          </AnimatedReveal>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Puppy Nutrition (0-12 months)</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Proper nutrition during puppyhood sets the foundation for lifelong health. Puppies need nutrient-dense
                food to support their rapid growth.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Feed a high-quality puppy food formulated for
                  medium breeds
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> 8-12 weeks: 4 meals per day
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> 3-6 months: 3 meals per day
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> 6-12 months: 2 meals per day
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Avoid overfeeding—bulldog puppies should grow
                  steadily, not rapidly
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Adult Nutrition (1-7 years)</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Adult bulldogs need a balanced diet that maintains healthy weight without excess calories.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Transition to adult food around 12 months
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Feed 2 meals per day at consistent times
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Monitor weight closely—obesity is a common issue
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Choose foods with moderate protein and fat levels
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Avoid foods with common allergens if sensitivities
                  develop
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Senior Nutrition (7+ years)</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Older bulldogs have different nutritional needs and may benefit from senior-specific formulas.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Consider senior formulas with joint support
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Reduce calories if activity level decreases
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Monitor for digestive changes
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Regular vet check-ups to adjust diet as needed
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Foods to Avoid</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Some common foods are toxic or harmful to dogs:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Chocolate, coffee, and caffeine
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Grapes and raisins
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Onions and garlic
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Xylitol (artificial sweetener)
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Macadamia nuts
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Alcohol
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/education/responsible-ownership">Next: Responsible Ownership</Link>
            </Button>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  )
}
