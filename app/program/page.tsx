import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Heart, Stethoscope, Users, Home, Shield, HeartHandshake } from "lucide-react"

export default function ProgramPage() {
  const programSections = [
    {
      icon: Heart,
      title: "Breeding Philosophy",
      image: "/lovable-bulldog-relaxed-pose.jpg",
      description:
        "Our breeding philosophy centers on health, temperament, and breed preservation. We carefully select breeding pairs based on genetic health, conformation, and personality. Every breeding decision is made with the long-term welfare of the breed in mind, not for profit or convenience.",
      points: [
        "Selective pairing based on health and temperament",
        "Focus on genetic diversity and breed improvement",
        "Quality over quantity—limited litters per year",
        "Continuous education on breed standards and genetics",
      ],
    },
    {
      icon: Stethoscope,
      title: "Health & Wellness",
      image: "/healthy-bulldog-walking-outdoors.jpg",
      description:
        "Health is our top priority. All our breeding dogs undergo comprehensive health testing before breeding. We work closely with veterinary specialists to ensure our bulldogs receive the best possible care throughout their lives.",
      points: [
        "Comprehensive genetic health testing",
        "Regular veterinary check-ups and screenings",
        "Age-appropriate vaccinations and preventive care",
        "Health guarantees for all puppies",
      ],
    },
    {
      icon: Users,
      title: "Temperament & Socialization",
      image: "/playful-bulldog-puppies-friendly.jpg",
      description:
        "A well-socialized puppy becomes a confident, well-adjusted adult. From day one, our puppies are exposed to various sounds, textures, people, and experiences. We use proven early neurological stimulation techniques to help develop resilient, adaptable dogs.",
      points: [
        "Early neurological stimulation protocols",
        "Daily handling and human interaction",
        "Exposure to household sounds and activities",
        "Introduction to children and other animals",
      ],
    },
    {
      icon: Home,
      title: "Home Environment",
      image: "/cozy-bulldog-on-comfortable-sofa.jpg",
      description:
        "Our bulldogs live in our home as part of our family—not in kennels or commercial facilities. This home-raised approach ensures our puppies are comfortable in a family environment and well-prepared for life in their new homes.",
      points: [
        "Raised in a loving family home",
        "Comfortable with household routines",
        "Crate training introduction",
        "Basic house training started",
      ],
    },
    {
      icon: Shield,
      title: "Ethical Standards",
      image: "/well-groomed-bulldog-proud-stance.jpg",
      description:
        "We adhere to the highest ethical standards in breeding. This means making responsible decisions about breeding frequency, retirement of breeding dogs, and being selective about puppy placements. We never compromise on ethics for profit.",
      points: [
        "Limited breeding frequency for dam health",
        "Proper retirement and rehoming of breeding dogs",
        "Thorough screening of prospective families",
        "Lifetime take-back policy for our puppies",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Owner Support",
      image: "/sweet-bulldog-puppy-closeup.jpg",
      description:
        "Our relationship with puppy families doesn't end at pickup. We provide comprehensive support including puppy care guides, ongoing advice, and a community of fellow Heartland Bulls families. We're always just a message away.",
      points: [
        "Comprehensive puppy starter kit and guide",
        "24/7 availability for urgent questions",
        "Ongoing training and care advice",
        "Access to our community of bulldog families",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Our Program</p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance font-heading">
              How We Raise Our Bulldogs
            </h1>
            <p className="text-xl text-foreground/70 font-serif leading-relaxed">
              A comprehensive look at our breeding program, health practices, and the care we provide to every bulldog
              in our care.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-foreground/70 font-serif leading-relaxed">
            At Heartland Bulls, we believe that exceptional bulldogs are the result of exceptional care at every stage
            of their development. Our program is built on six pillars that guide everything we do—from selecting
            breeding pairs to supporting families long after they take their puppy home.
          </p>
        </div>
      </section>

      {/* Program Sections */}
      {programSections.map((section, index) => (
        <section key={section.title} className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-accent/10"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <section.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary font-heading">{section.title}</h2>
                </div>
                <p className="text-foreground/70 font-serif mb-8 leading-relaxed">{section.description}</p>
                <ul className="space-y-4">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-5 h-5 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      </div>
                      <span className="text-foreground/70 font-serif">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`h-80 bg-muted rounded-lg overflow-hidden border-2 border-primary/20 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Summary Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 font-heading">Our Promise to You</h2>
          <p className="text-lg text-foreground/70 font-serif mb-8 leading-relaxed">
            Every Heartland Bulls puppy is raised with intention, care, and love. We stand behind our program and our
            puppies, and we're committed to being a resource for you throughout your bulldog's life. When you choose
            Heartland Bulls, you're choosing a breeder who truly cares.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/faq">Read Our FAQ</Link>
          </Button>
        </div>
      </section>

      <CTASection
        title="Ready to Learn More?"
        description="Have questions about our program? We'd love to walk you through our process."
      />

      <Footer />
    </div>
  )
}
