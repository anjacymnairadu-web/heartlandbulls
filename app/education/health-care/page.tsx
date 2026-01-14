import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { AnimatedReveal } from "@/components/animated-reveal"
import { AnimatedText } from "@/components/animated-text"
import { ArrowLeft } from "lucide-react"

export default function HealthCarePage() {
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
            <AnimatedText text="Health & Care Guide" />
          </h1>
          <AnimatedReveal as="p" className="text-xl text-foreground/70 font-serif leading-relaxed" delayMs={120}>
            Essential information for keeping your English Bulldog healthy and happy throughout their life.
          </AnimatedReveal>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Common Health Considerations</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Like all breeds, English Bulldogs have specific health considerations that owners should be aware of.
                Understanding these helps you provide proactive care and catch potential issues early.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Brachycephalic Syndrome:</strong> Due to
                  their short muzzle, bulldogs can have breathing difficulties, especially in hot weather
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Skin Fold Care:</strong> Wrinkles need
                  regular cleaning to prevent infections
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Joint Health:</strong> Hip and elbow
                  dysplasia can occur; maintain healthy weight
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Eye Conditions:</strong> Cherry eye and
                  dry eye are common in the breed
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Preventive Care</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Prevention is always better than treatment. Establishing a regular care routine will help keep your
                bulldog healthy.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Regular veterinary check-ups (at least annually)
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Keep vaccinations up to date
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Monthly flea, tick, and heartworm prevention
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Daily wrinkle cleaning
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Regular dental care
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Maintain a healthy weight
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Temperature Sensitivity</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                English Bulldogs are sensitive to extreme temperatures, particularly heat. Their brachycephalic nature
                makes it difficult for them to regulate body temperature efficiently.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Avoid exercise during the hottest parts of the day
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Always provide access to shade and fresh water
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Air conditioning is recommended in warm climates
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Watch for signs of overheating: excessive panting,
                  drooling, lethargy
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Exercise Requirements</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Bulldogs don't require extensive exercise, but regular activity is important for maintaining a healthy
                weight and mental stimulation.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Short, moderate walks (15-20 minutes) twice daily
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Indoor play sessions
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Mental stimulation through puzzle toys
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Avoid strenuous activity and swimming (many
                  bulldogs can't swim)
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
              <Link href="/education/preparing-home">Next: Preparing Your Home</Link>
            </Button>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  )
}
