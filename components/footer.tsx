import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 font-sans">Heartland Bulls</h3>
            <p className="text-primary-foreground/80 text-sm font-serif mb-4">
              English Bulldog Breeder in New Zealand and Australia. Established 2015.
            </p>
            <p className="text-primary-foreground/80 text-sm font-serif">Auckland, New Zealand</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide font-sans">Navigate</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/" className="hover:text-primary-foreground transition font-serif">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition font-serif">
                  About Heartland Bulls
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-primary-foreground transition font-serif">
                  Our Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide font-sans">Learn</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/education" className="hover:text-primary-foreground transition font-serif">
                  Breed Education
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-foreground transition font-serif">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide font-sans">Connect</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition font-serif">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 font-serif">
              Heartland Bulls — English Bulldog Breeder in New Zealand and Australia. Established 2015.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link href="/" className="hover:text-primary-foreground transition font-serif">
                Home
              </Link>
              <Link href="/about" className="hover:text-primary-foreground transition font-serif">
                About
              </Link>
              <Link href="/program" className="hover:text-primary-foreground transition font-serif">
                Our Program
              </Link>
              <Link href="/education" className="hover:text-primary-foreground transition font-serif">
                Breed Education
              </Link>
              <Link href="/faq" className="hover:text-primary-foreground transition font-serif">
                FAQ
              </Link>
              <Link href="/contact" className="hover:text-primary-foreground transition font-serif">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
