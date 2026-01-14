import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ArrowLeft } from "lucide-react"

export default function PreparingHomePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-sans">Preparing Your Home</h1>
          <p className="text-xl text-foreground/70 font-serif leading-relaxed">
            Everything you need to set up your home for a new English Bulldog puppy.
          </p>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-sans">Essential Supplies</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Before bringing your puppy home, ensure you have these essentials ready:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Crate:</strong> Appropriately sized for
                  training and a safe space
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Bed:</strong> Comfortable, easy-to-clean
                  bedding
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Food & Water Bowls:</strong> Shallow, wide
                  bowls work best for bulldogs
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Quality Puppy Food:</strong> We'll provide
                  recommendations
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Collar, Harness & Lead:</strong> A harness
                  is recommended for bulldogs
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Grooming Supplies:</strong> Wrinkle wipes,
                  soft brush, nail clippers
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> <strong>Toys:</strong> Durable, size-appropriate
                  toys
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-sans">Puppy-Proofing Your Home</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Puppies are curious and will explore everything. Make your home safe:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Secure electrical cords and cables
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Remove or secure toxic plants
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Store chemicals and medications out of reach
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Block access to stairs (bulldogs can struggle with
                  stairs)
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Remove small objects that could be swallowed
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Secure rubbish bins
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-sans">Creating a Safe Space</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Your puppy needs a designated area where they feel secure:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Choose a quiet corner away from high-traffic areas
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Set up their crate with comfortable bedding
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Keep food and water nearby but outside the crate
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Ensure the area is climate-controlled
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4 font-sans">Preparing Your Family</h2>
              <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                Everyone in the household should be prepared for the new arrival:
              </p>
              <ul className="space-y-3 text-foreground/70 font-serif">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Establish house rules and ensure everyone follows
                  them consistently
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Teach children how to interact gently with the
                  puppy
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Plan a schedule for feeding, potty breaks, and
                  training
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span> Decide who will be responsible for primary care
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
              <Link href="/education/nutrition">Next: Nutrition & Development</Link>
            </Button>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  )
}
