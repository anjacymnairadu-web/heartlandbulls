"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import {
  Award,
  Bed,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Heart,
  HeartPulse,
  Package,
  Scissors,
  Shield,
  Tag,
  ToyBrick,
  Users,
  Utensils,
} from "lucide-react"

const testimonials = [
  {
    quote:
      "Our bulldog from Heartland Bulls has been the most wonderful addition to our family. The care and support we received throughout the process was exceptional.",
    family: "The Thompson Family",
    location: "Auckland",
  },
  {
    quote:
      "From the first call to bringing our puppy home, the experience was amazing. Our bulldog is healthy, happy, and has the best temperament. Highly recommend!",
    family: "The Mitchell Family",
    location: "Wellington",
  },
  {
    quote:
      "We've had bulldogs before, but never one raised with such care. You can tell the difference in both health and personality. Heartland Bulls truly cares.",
    family: "The Patel Family",
    location: "Christchurch",
  },
  {
    quote:
      "The ongoing support has been invaluable. Even two years later, they still check in and answer our questions. That's rare to find in a breeder.",
    family: "The Williams Family",
    location: "Hamilton",
  },
  {
    quote:
      "Our kids absolutely adore their new best friend. The puppy was already so well-socialized when we brought her home. Thank you, Heartland Bulls!",
    family: "The Chen Family",
    location: "Tauranga",
  },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const categories = [
    { label: "Toys", icon: ToyBrick },
    { label: "Food", icon: Utensils },
    { label: "Beds", icon: Bed },
    { label: "Collars", icon: Tag },
    { label: "Grooming", icon: Scissors },
    { label: "Training", icon: GraduationCap },
    { label: "Health", icon: HeartPulse },
    { label: "Accessories", icon: Package },
  ] as const

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/calm-bulldog-banner.jpg" alt="Calm English Bulldog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3 drop-shadow-md">
              Established 2015 — Auckland, New Zealand
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 text-balance font-sans drop-shadow-lg">
              Heartland Bulls
            </h1>
            <p className="text-xl text-primary-foreground/90 font-serif mb-8 drop-shadow-md leading-relaxed">
              Where every bulldog is raised with love, care, and a commitment to the breed's best standards. We are
              passionate English Bulldog breeders dedicated to health, temperament, and family companionship.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-sans">
              <Link href="/contact">Request Information</Link>
            </Button>

            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Link
                      key={category.label}
                      href="/contact"
                      className="group inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-background/90 px-5 py-3 text-primary shadow-sm transition hover:bg-background hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70"
                      aria-label={`Ask about ${category.label}`}
                    >
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="font-sans font-semibold leading-none">{category.label}</span>
                    </Link>
                  )
                })}
              </div>
              <p className="mt-3 text-sm text-primary-foreground/80 drop-shadow-sm">
                Looking for something specific? Tap a category to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance font-sans">
                A Family Dedicated to English Bulldogs
              </h2>
              <p className="text-foreground/70 font-serif mb-6 leading-relaxed">
                At Heartland Bulls, we are more than breeders—we are bulldog enthusiasts who have dedicated over a
                decade to raising healthy, happy English Bulldogs. Our bulldogs are part of our family first, and we
                ensure each puppy receives the love, socialization, and care they deserve.
              </p>
              <p className="text-foreground/70 font-serif mb-8 leading-relaxed">
                We believe in transparency, ethical breeding practices, and supporting our puppy families for life. When
                you welcome a Heartland Bulls puppy into your home, you become part of our extended family.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="h-96 bg-muted rounded-lg overflow-hidden border-2 border-primary/20">
              <img
                src="/friendly-english-bulldog-smiling.jpg"
                alt="Friendly English Bulldog with a warm expression"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-24 bg-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-sans">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Health First",
                description: "Comprehensive health testing and veterinary care for all our bulldogs.",
              },
              {
                icon: Heart,
                title: "Raised with Love",
                description: "Every puppy is raised in our home with daily socialization and care.",
              },
              {
                icon: Award,
                title: "Breed Standards",
                description: "Committed to preserving the best qualities of the English Bulldog breed.",
              },
              {
                icon: Users,
                title: "Lifetime Support",
                description: "We're here for you and your bulldog throughout their entire life.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-sans">{value.title}</h3>
                <p className="text-foreground/70 font-serif">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Trusted Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 h-96 bg-muted rounded-lg overflow-hidden border-2 border-primary/20">
              <img
                src="/adorable-bulldog-puppies-sitting-together.jpg"
                alt="Adorable English Bulldog puppies sitting together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Why We're Trusted</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance font-sans">
                A Decade of Excellence
              </h2>
              <ul className="space-y-5">
                {[
                  "Over 10 years of dedicated English Bulldog breeding experience",
                  "Comprehensive health testing and genetic screening",
                  "Puppies raised in a loving home environment",
                  "Ongoing support and guidance for all puppy families",
                  "Transparent practices and open communication",
                  "Strong reputation across New Zealand and Australia",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                    <span className="text-foreground/70 font-serif">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3 text-center">From Our Families</p>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 text-center px-4">
                    <blockquote className="text-2xl md:text-3xl font-serif text-primary mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-foreground/70 font-sans font-medium">
                      — {testimonial.family}, {testimonial.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Journey"
        description="Ready to welcome a Heartland Bulls puppy into your family? We'd love to hear from you."
      />

      <Footer />
    </div>
  )
}
