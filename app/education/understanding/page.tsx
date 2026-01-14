import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { AnimatedReveal } from "@/components/animated-reveal"
import { AnimatedText } from "@/components/animated-text"
import { ArrowLeft } from "lucide-react"

export default function UnderstandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
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

      {/* Hero Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            <AnimatedText text="Understanding the English Bulldog" />
          </h1>
          <AnimatedReveal as="p" className="text-xl text-foreground/70 font-serif leading-relaxed" delayMs={120}>
            A comprehensive guide to the history, characteristics, and personality of this beloved breed.
          </AnimatedReveal>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">A Rich History</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                The English Bulldog has a fascinating history that dates back centuries. Originally bred in England for
                bull-baiting, the breed underwent a remarkable transformation after the practice was banned in 1835.
                Dedicated breeders worked to preserve the breed while eliminating aggressive traits, creating the
                gentle, affectionate companion we know today.
              </p>
              <p className="text-foreground/70 font-serif leading-relaxed">
                Modern English Bulldogs retain their distinctive appearance—the broad head, pushed-in nose, and muscular
                build—while possessing a calm, friendly temperament that makes them excellent family pets.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Physical Characteristics</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                English Bulldogs are medium-sized dogs with a distinctive, unmistakable appearance. They typically weigh
                between 18-25 kg (40-55 lbs) and stand about 31-40 cm (12-16 inches) tall at the shoulder.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Broad, wrinkled head with a short muzzle
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Wide-set, dark eyes with a gentle expression
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Rose or button ears
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Thick, muscular neck and broad chest
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Short, smooth coat in various colors
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Temperament & Personality</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Despite their tough appearance, English Bulldogs are incredibly gentle, affectionate, and loyal. They
                form strong bonds with their families and are known for their patience with children.
              </p>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Bulldogs are often described as "couch potatoes" who enjoy relaxing with their owners, but they also
                have playful moments and can be quite entertaining with their unique personalities.
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Gentle and patient with children
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Loyal and devoted to their families
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Calm demeanor, ideal for apartment living
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Can be stubborn but respond well to positive
                  training
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Generally good with other pets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Is an English Bulldog Right for You?</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                English Bulldogs make wonderful companions for the right families. They thrive in homes where they can
                be close to their people and don't require excessive exercise. However, they do require commitment to
                their health care and are best suited for owners who understand and can meet their unique needs.
              </p>
              <p className="text-foreground/70 font-serif leading-relaxed">
                Consider reading our other educational guides to learn more about the commitment involved in bulldog
                ownership.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/education/health-care">Next: Health & Care Guide</Link>
            </Button>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  )
}
