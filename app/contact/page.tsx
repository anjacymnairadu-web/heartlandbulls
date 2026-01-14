"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-secondary tracking-wide uppercase mb-3">Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance font-heading">Contact Us</h1>
            <p className="text-xl text-foreground/70 font-serif leading-relaxed">
              We'd love to hear from you. Whether you have questions about our bulldogs, our program, or are ready to
              enquire about a puppy, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Request Information</h2>
              <p className="text-foreground/70 font-serif mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible. We look forward to learning about
                you and answering any questions you may have.
              </p>

              {submitted ? (
                <div className="p-8 bg-secondary/10 rounded-lg border-2 border-secondary">
                  <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Thank You!</h3>
                  <p className="text-foreground/70 font-serif">
                    We've received your enquiry and will be in touch soon. We typically respond within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-sans">
                        Full Name <span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-2 border-primary/20 focus:border-secondary"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sans">
                        Email Address <span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-2 border-primary/20 focus:border-secondary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-sans">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 border-primary/20 focus:border-secondary"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-sans">
                        Subject <span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-2 border-primary/20 focus:border-secondary"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-sans">
                      Your Message <span className="text-secondary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-2 border-primary/20 focus:border-secondary resize-none"
                      placeholder="Tell us about yourself, your family, and what you're looking for..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Get in Touch</h2>
              <p className="text-foreground/70 font-serif mb-8 leading-relaxed">
                We welcome enquiries from families who are seriously considering adding an English Bulldog to their
                home. Don't hesitate to reach out—we're happy to answer questions even if you're still in the early
                stages of your research.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary font-heading mb-1">Location</h3>
                    <p className="text-foreground/70 font-serif">New Zealand & Australia</p>
                    <p className="text-foreground/50 font-serif text-sm">
                      Serving families across New Zealand and Australia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary font-heading mb-1">Email</h3>
                    <p className="text-foreground/70 font-serif">info@heartlandbulls.com</p>
                    <p className="text-foreground/50 font-serif text-sm">We typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary font-heading mb-1">Phone</h3>
                    <p className="text-foreground/70 font-serif">Available upon request</p>
                    <p className="text-foreground/50 font-serif text-sm">Please email first to arrange a call</p>
                  </div>
                </div>
              </div>

              {/* Trust Message */}
              <div className="p-8 bg-primary/5 rounded-lg border-2 border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-4 font-heading">A Personal Note</h3>
                <p className="text-foreground/70 font-serif leading-relaxed mb-4">
                  When you reach out to us, you're not contacting a business—you're connecting with a family who truly
                  loves this breed. We take the time to get to know every prospective family because we want to ensure
                  the best possible match for both you and your future bulldog.
                </p>
                <p className="text-foreground/70 font-serif leading-relaxed">
                  We're not just breeders; we're bulldog lovers who want to share that joy with others. We look forward
                  to hearing from you.
                </p>
                <p className="text-primary font-sans font-medium mt-4">— The Heartland Bulls Family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Established Banner */}
      <section className="py-12 bg-secondary/10 border-y-2 border-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg text-primary font-sans font-medium">
            Heartland Bulls — English Bulldog Breeder in New Zealand and Australia — Established 2015
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
