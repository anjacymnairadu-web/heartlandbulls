import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
}

export function CTASection({
  title = "Ready to Learn More?",
  description = "We'd love to hear from you and answer any questions about our English Bulldogs.",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-secondary/10 border-y-2 border-secondary">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-4xl font-bold text-primary font-heading">{title}</h2>
        <p className="text-lg text-foreground/70 font-serif max-w-2xl mx-auto">{description}</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
          <Link href="/contact">Request Information</Link>
        </Button>
      </div>
    </section>
  )
}
