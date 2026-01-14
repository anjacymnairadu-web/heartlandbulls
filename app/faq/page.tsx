import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedReveal } from "@/components/animated-reveal";
import { AnimatedText } from "@/components/animated-text";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "About Heartland Bulls",
      questions: [
        {
          q: "How long have you been breeding English Bulldogs?",
          a: "Heartland Bulls was established in 2015. We have spent nearly a decade developing a responsible breeding program focused on health, temperament, and ethical standards.",
        },
        {
          q: "Where are you located?",
          a: "We are based in New Zealand and support families across New Zealand and Australia.",
        },
        {
          q: "What makes Heartland Bulls different from other breeders?",
          a: "Our program is built on quality, not quantity. We prioritise health testing, sound structure, stable temperament, family-raised development, and long-term owner support. We operate with full transparency and ethical responsibility.",
        },
        {
          q: "Can I visit your facility?",
          a: "We welcome visits from serious prospective families. Please contact us to arrange a time to meet us and our bulldogs. We believe it's important for you to see where your puppy is raised.",
        },
      ],
    },
    {
      title: "Health & Care",
      questions: [
        {
          q: "How do you prioritise health in your breeding program?",
          a: "We carefully select breeding pairs based on health history, genetic strength, and temperament. We work closely with veterinary professionals and continuously refine our practices to support the long-term wellbeing of the breed.",
        },
        {
          q: "How are your dogs raised?",
          a: "Our dogs are raised in our home environment, surrounded by everyday activity, people, and positive social experiences. This early exposure supports emotional stability and confident development.",
        },
        {
          q: "Do you provide guidance to new owners?",
          a: "Yes. We believe education is essential for successful lifelong ownership. We provide guidance on care, nutrition, training, and general breed knowledge and remain available for ongoing support.",
        },
        {
          q: "Do your puppies come with a health guarantee?",
          a: "Yes, all Heartland Bulls puppies come with a comprehensive health guarantee. We stand behind the health of our puppies and provide ongoing support to address any concerns.",
        },
      ],
    },
    {
      title: "Ownership & Commitment",
      questions: [
        {
          q: "Is the English Bulldog a good family companion?",
          a: "Yes. English Bulldogs are known for their loyalty, affection, and gentle temperament. They form strong bonds with their families and thrive in loving home environments.",
        },
        {
          q: "What should potential owners consider before choosing an English Bulldog?",
          a: "Prospective owners should understand the breed's exercise needs, health considerations, grooming requirements, and the long-term commitment involved in responsible ownership.",
        },
        {
          q: "Do you stay in contact with families after they take their dog home?",
          a: "Absolutely. We maintain long-term relationships with our Heartland Bulls families and remain a resource for advice, support, and guidance throughout the dog's life.",
        },
        {
          q: "Can English Bulldogs live in apartments?",
          a: "Absolutely. English Bulldogs are well-suited to apartment living due to their moderate exercise needs and calm demeanor. They're happy as long as they're with their family, regardless of home size.",
        },
      ],
    },
    {
      title: "Getting in Touch",
      questions: [
        {
          q: "How can I learn more about Heartland Bulls?",
          a: "You can reach out through our Request Information form. We are happy to answer questions, provide guidance, and share more about our program and the English Bulldog breed.",
        },
        {
          q: "Do you work with families across New Zealand and Australia?",
          a: "Yes. We welcome families from across New Zealand and Australia who are committed to responsible ownership.",
        },
        {
          q: "How do you choose families for your puppies?",
          a: "We carefully screen all prospective families to ensure our puppies go to loving, committed homes. We consider factors like lifestyle, living situation, experience with dogs, and understanding of the breed's needs. Our goal is to match each puppy with the right family.",
        },
        {
          q: "What if my circumstances change and I can no longer keep my bulldog?",
          a: "We have a lifetime take-back policy. If you ever find yourself unable to care for your Heartland Bulls puppy, we will take them back—no questions asked. We're committed to ensuring every puppy we breed has a loving home for life.",
        },
      ],
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
              className="text-base md:text-lg  font-bold text-secondary tracking-wide uppercase mb-3"
              variant="slide-up"
            >
              FAQ
            </AnimatedReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 text-balance font-heading">
              <AnimatedText text="Frequently Asked Questions" />
            </h1>
            <AnimatedReveal
              as="p"
              className="text-xl text-foreground/70 font-serif leading-relaxed"
              delayMs={120}
            >
              Find answers to common questions about our breeding program,
              English Bulldogs, and the process of bringing home a Heartland
              Bulls puppy.
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem
                      key={qIndex}
                      value={`${index}-${qIndex}`}
                      className="border-2 border-primary/10 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4 font-sans">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 font-serif pb-4 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 p-8 bg-accent/10 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
              Still Have Questions?
            </h3>
            <p className="text-foreground/70 font-serif mb-6">
              We're happy to answer any additional questions you may have about
              our bulldogs or our program.
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Take the Next Step?"
        description="If your questions have been answered and you're ready to learn more, we'd love to hear from you."
      />

      <Footer />
    </div>
  );
}
