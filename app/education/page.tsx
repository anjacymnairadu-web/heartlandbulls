import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { AnimatedReveal } from "@/components/animated-reveal";
import { AnimatedText } from "@/components/animated-text";
import { BookOpen, Heart, Home, Apple, ShieldCheck } from "lucide-react";

export default function EducationPage() {
  const educationTopics = [
    {
      icon: BookOpen,
      title: "Understanding the English Bulldog",
      description:
        "Learn about the history, characteristics, and unique personality traits that make English Bulldogs such beloved companions.",
      href: "/education/understanding",
    },
    {
      icon: Heart,
      title: "Health & Care Guide",
      description:
        "Essential information about common health considerations, preventive care, and keeping your bulldog healthy and happy.",
      href: "/education/health-care",
    },
    {
      icon: Home,
      title: "Preparing Your Home",
      description:
        "Everything you need to know to prepare your home and family for welcoming a new English Bulldog puppy.",
      href: "/education/preparing-home",
    },
    {
      icon: Apple,
      title: "Nutrition & Development",
      description:
        "A comprehensive guide to feeding your bulldog at every life stage, from puppyhood through their senior years.",
      href: "/education/nutrition",
    },
    {
      icon: ShieldCheck,
      title: "Responsible Ownership",
      description:
        "What it means to be a responsible bulldog owner, including long-term commitment, costs, and lifestyle considerations.",
      href: "/education/responsible-ownership",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedReveal
              as="p"
              className="text-base md:text-lg font-bold text-secondary tracking-wide uppercase mb-3"
              variant="slide-up"
            >
              Learn
            </AnimatedReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 text-balance font-heading">
              <AnimatedText text="Breed Education" />
            </h1>
            <AnimatedReveal
              as="p"
              className="text-xl text-foreground/70 font-serif leading-relaxed"
              delayMs={120}
            >
              Knowledge is the foundation of responsible ownership. Explore our
              educational resources to learn everything you need to know about
              English Bulldogs.
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-foreground/70 font-serif leading-relaxed">
            Whether you're considering adding an English Bulldog to your family
            or you're already a proud bulldog owner, our educational resources
            are designed to help you provide the best possible care for your
            companion.
          </p>
        </div>
      </section>

      {/* Education Topics Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group p-8 bg-card rounded-lg border-2 border-primary/10 hover:border-secondary transition-all"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <topic.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 font-heading group-hover:text-secondary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-foreground/70 font-serif leading-relaxed">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions?"
        description="Our education resources are just the beginning. Reach out for personalized guidance."
      />

      <Footer />
    </div>
  );
}
