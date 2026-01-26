"use client";

import type React from "react";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedReveal } from "@/components/animated-reveal";
import { AnimatedText } from "@/components/animated-text";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Ensure form element type
    e.preventDefault();
    if (isSubmitting) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured.", {
        description: "Missing EmailJS environment variables.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Ensure required template variable exists in the form at send-time.
      const time = new Date().toLocaleString();
      const timeInput = e.currentTarget.elements.namedItem(
        "time"
      ) as HTMLInputElement | null;
      if (timeInput) timeInput.value = time;

      await emailjs.sendForm(
        serviceId,
        templateId, // Template expects: {{subject}} {{email}} {{name}} {{phone}} {{time}}
        e.currentTarget, // Pass the form element
        publicKey
      );

      toast.success("Contact request sent!", {
        description:
          "We've received your inquiry and will contact you within 24 hours.",
      });
      setSubmitted(true);
      setFormData({
        // Reset form data
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        time: "",
      });
    } catch (error) {
      console.error("Failed to send contact request:", error);
      toast.error("Failed to send request.", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedReveal
              as="p"
              className="text-xl text-foreground/70 font-serif leading-relaxed mb-4"
              variant="slide-up"
            >
              We're here to help you learn, plan, and decide — at your own pace.
            </AnimatedReveal>
            <AnimatedReveal
              as="p"
              className="text-xl text-foreground/70 font-serif leading-relaxed mb-4"
              delayMs={60}
            >
              Whether you're just beginning to research the English Bulldog breed or you're considering a future placement, we're happy to answer questions and share honest guidance about our program.
            </AnimatedReveal>
            <AnimatedReveal
              as="p"
              className="text-xl text-foreground/70 font-serif leading-relaxed"
              delayMs={120}
            >
              There's no obligation and no pressure — just clear information and thoughtful replies.
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
                Request Information
              </h2>
            <p className="text-foreground/70 font-serif leading-relaxed">
              We respond to all enquiries within 24–48 hours.
            </p>
          </div>

              {submitted ? (
            <div className="p-8 bg-secondary/10 rounded-lg border-2 border-secondary mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                    Thank You!
                  </h3>
                  <p className="text-foreground/70 font-serif">
                    We've received your enquiry and will be in touch soon. We
                    typically respond within 24-48 hours.
                  </p>
                </div>
              ) : (
            <form onSubmit={handleSubmit} className="space-y-8 mb-16">
                  <input type="hidden" name="time" value={formData.time} />
              
              {/* Your Details Section */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                  Your Details
                </h3>
                <div className="space-y-6">
                    <div className="space-y-2">
                    <Label htmlFor="name" className="font-sans text-base">
                      Full Name
                      </Label>
                    <p className="text-sm text-foreground/60 font-serif mb-2">
                      (So we know who we're speaking with)
                    </p>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="border-2 border-primary/20 focus:border-secondary"
                      placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                    <Label htmlFor="email" className="font-sans text-base">
                      Email Address
                      </Label>
                    <p className="text-sm text-foreground/60 font-serif mb-2">
                      (This is our main way of replying)
                    </p>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="border-2 border-primary/20 focus:border-secondary"
                        placeholder="your@email.com"
                      />
                  </div>

                    <div className="space-y-2">
                    <Label htmlFor="phone" className="font-sans text-base">
                      Phone Number (optional)
                      </Label>
                    <p className="text-sm text-foreground/60 font-serif mb-2">
                      Optional — email works perfectly. If you'd prefer a call, you can mention a good time below.
                    </p>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="border-2 border-primary/20 focus:border-secondary"
                        placeholder="Your phone number"
                      />
                    </div>
                </div>
              </div>

              {/* Location Section */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                  About Your Enquiry
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="location" className="font-sans text-base">
                    Where are you located?
                  </Label>
                  <p className="text-sm text-foreground/60 font-serif mb-2">
                    (City / region — helps us give relevant guidance)
                  </p>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="border-2 border-primary/20 focus:border-secondary"
                    placeholder="Your city or region"
                  />
                </div>
              </div>

              {/* Your Message Section */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                  Your Message
                </h3>
                <div className="space-y-3 mb-4">
                  <p className="text-sm text-foreground/70 font-serif">
                    • Tell us a little about what brought you here today.
                  </p>
                  <p className="text-sm text-foreground/70 font-serif">
                    • You're welcome to share:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-foreground/70 font-serif">
                    <li>What stage of research you're in</li>
                    <li>Any questions you have about the breed</li>
                    <li>Your general timeline (if you have one)</li>
                  </ul>
                  <p className="text-sm text-foreground/70 font-serif">
                    • There's no "right" amount to write — even a short message is perfectly fine.
                  </p>
                </div>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                  rows={8}
                      className="border-2 border-primary/20 focus:border-secondary resize-none"
                  placeholder="Your message..."
                    />
                  </div>

              {/* Before You Submit Section */}
              <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/10">
                <h3 className="text-lg font-bold text-primary mb-3 font-heading">
                  Before You Submit
                </h3>
                <ul className="space-y-2 text-foreground/70 font-serif text-sm">
                  <li>• We work with families across New Zealand & Australia</li>
                  <li>• We focus on responsible breeding, health, and temperament</li>
                  <li>• We're happy to answer early-stage questions</li>
                  <li>• If you'd like a phone conversation, just let us know</li>
                </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg py-6"
                    disabled={isSubmitting}
                  >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </Button>
                </form>
              )}

          {/* What Happens Next Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
              What Happens Next?
              </h2>
            <div className="space-y-4 text-foreground/70 font-serif leading-relaxed">
              <p className="text-lg font-semibold text-primary">
                Once your message is sent:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>You'll hear back from us within 24–48 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>We'll respond by email unless you request otherwise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>If helpful, we can arrange a phone conversation at a time that suits you</span>
                </li>
              </ul>
              <p className="mt-4">
                In the meantime, you may enjoy exploring our{" "}
                <a href="/education" className="text-secondary hover:underline font-semibold">
                  Breed Information
                </a>{" "}
                or{" "}
                <a href="/program" className="text-secondary hover:underline font-semibold">
                  Our Program
                </a>{" "}
                pages to learn more about our approach.
                    </p>
                  </div>
                </div>

          {/* Thank You Section */}
          <div className="text-center p-8 bg-secondary/10 rounded-lg border-2 border-secondary">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
              Thank you for reaching out
                    </h3>
            <p className="text-foreground/70 font-serif leading-relaxed mb-6">
              We appreciate families who take the time to research carefully and ask thoughtful questions.
            </p>
            <p className="text-primary font-sans font-medium">
              — Heartland Bulldogs
            </p>
            <p className="text-foreground/60 font-serif text-sm mt-2">
              Serving New Zealand & Australia since 2015
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
