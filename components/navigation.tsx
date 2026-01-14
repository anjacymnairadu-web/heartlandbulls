"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Program", href: "/program" },
    { name: "Breed Education", href: "/education" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b-2 border-primary">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Heartland Bulldogs logo"
            width={64}
            height={64}
            className="md:h-12 md:w-12 h-10 w-10 rounded-full object-cover border border-primary/20 bg-background"
            priority
          />
          <div>
            <div className="text-xl md:text-2xl font-bold text-primary font-sans">
              Heartland Bulls
            </div>
            <div className="text-xs md:text-lg italic text-secondary font-serif">
              English Bulldog Breeder — Est. 2015
            </div>
          </div>
        </Link>

        {/* Desktop Navigation (start at xl so tablets stay on hamburger) */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "relative text-lg font-medium transition-colors duration-200 ease-out",
                "hover:-translate-y-0.5 transition-transform duration-200 ease-out",
                "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-secondary after:origin-left after:transition-transform after:duration-300 after:ease-out",
                isActive(link.href)
                  ? "text-primary after:scale-x-100"
                  : "text-foreground hover:text-primary after:scale-x-0 hover:after:scale-x-100",
              ].join(" ")}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden xl:block">
          <Button
            asChild
            size="xl"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/contact">Request Information</Link>
          </Button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="xl:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-background border-t border-primary/20 px-6 py-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "block text-sm font-medium py-2 transition-colors duration-200 ease-out",
                isActive(link.href)
                  ? "text-primary"
                  : "text-foreground hover:text-primary",
              ].join(" ")}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
          >
            <Link href="/contact">Request Information</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
