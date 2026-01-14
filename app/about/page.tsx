import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance font-sans">
              About Heartland Bulls
            </h1>
            <p className="text-xl text-foreground/70 font-serif leading-relaxed">
              A family-run breeding program built on love, dedication, and an unwavering commitment to the English
              Bulldog breed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Our Story</p>
              <h2 className="text-4xl font-bold text-primary mb-6 font-sans">How It All Began</h2>
              <p className="text-foreground/70 font-serif mb-6 leading-relaxed">
                Heartland Bulls was born from a deep love for English Bulldogs that started over a decade ago. What
                began as a personal passion quickly grew into a mission—to raise bulldogs that are not only beautiful
                but healthy, well-tempered, and ready to become beloved family members.
              </p>
              <p className="text-foreground/70 font-serif mb-6 leading-relaxed">
                In 2015, we officially established Heartland Bulls in Auckland, New Zealand. Since then, we have
                dedicated ourselves to learning, growing, and refining our breeding practices to ensure every puppy we
                raise meets the highest standards of health and temperament.
              </p>
              <p className="text-foreground/70 font-serif leading-relaxed">
                Our journey has been one of continuous improvement, guided by the latest veterinary research, breeder
                education, and most importantly, the wellbeing of our bulldogs.
              </p>
            </div>
            <div className="h-96 bg-muted rounded-lg overflow-hidden border-2 border-primary/20">
              <img
                src="/gentle-english-bulldog-portrait.jpg"
                alt="Gentle English Bulldog with kind eyes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 h-96 bg-muted rounded-lg overflow-hidden border-2 border-primary/20">
              <img
                src="/happy-bulldog-in-sunny-garden.jpg"
                alt="Happy English Bulldog enjoying a sunny garden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Our Mission</p>
              <h2 className="text-4xl font-bold text-primary mb-6 font-sans">Breeding for Health & Happiness</h2>
              <p className="text-foreground/70 font-serif mb-6 leading-relaxed">
                Our mission is simple: to produce healthy, well-adjusted English Bulldogs that bring joy to families
                across New Zealand and Australia. We believe that responsible breeding is the foundation of a dog's
                lifelong health and happiness.
              </p>
              <p className="text-foreground/70 font-serif leading-relaxed">
                Every decision we make—from selecting breeding pairs to socializing puppies—is guided by our commitment
                to the breed's best interests. We don't cut corners, and we never compromise on the health or welfare of
                our dogs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Our Values</p>
            <h2 className="text-4xl font-bold text-primary font-sans">What Guides Us Every Day</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We are transparent in all our practices. From health testing results to our breeding philosophy, we believe you deserve to know exactly what goes into raising a Heartland Bulls puppy.",
              },
              {
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in breeding, health care, and puppy socialization. Every aspect of our program is designed to produce exceptional bulldogs.",
              },
              {
                title: "Compassion",
                description:
                  "Love is at the heart of everything we do. Our bulldogs are family, and we treat them with the same care and affection we would want for our own pets.",
              },
              {
                title: "Education",
                description:
                  "We are committed to ongoing learning and sharing our knowledge with puppy families. An informed owner is the best owner.",
              },
              {
                title: "Responsibility",
                description:
                  "We take our responsibility to the breed seriously. This means making ethical decisions, even when they're difficult, to protect the future of English Bulldogs.",
              },
              {
                title: "Community",
                description:
                  "We believe in building lasting relationships with our puppy families. When you get a Heartland Bulls puppy, you join a supportive community.",
              },
            ].map((value, index) => (
              <div key={index} className="p-8 bg-card rounded-lg border-2 border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-4 font-sans">{value.title}</h3>
                <p className="text-foreground/70 font-serif leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Our Commitment</p>
          <h2 className="text-4xl font-bold text-primary mb-6 font-sans">To You and Your Bulldog</h2>
          <p className="text-lg text-foreground/70 font-serif mb-8 leading-relaxed">
            When you choose Heartland Bulls, you're not just getting a puppy—you're gaining a partner in your bulldog's
            lifelong journey. We commit to being there for you with advice, support, and guidance, from the day you take
            your puppy home and for years to come.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/program">Explore Our Program</Link>
          </Button>
        </div>
      </section>

      <CTASection
        title="Get to Know Us Better"
        description="Have questions about our story or our bulldogs? We'd love to connect with you."
      />

      <Footer />
    </div>
  )
}
