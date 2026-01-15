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
            width={128}
            height={128}
            className="h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16 rounded-full object-cover border border-primary/20 bg-background"
            priority
          />
          <div>
            <div className="text-2xl md:text-3xl xl:text-2xl font-bold text-primary font-sans">
              Heartland Bulls
            </div>
            <div className="text-sm md:text-base xl:text-lg text-secondary font-serif">
              English Bulldog Breeder — Est. 2015
            </div>
          </div>
        </Link>

        {/* Desktop Navigation (only show on xl + fine pointer, so iPads don't get "desktop" nav) */}
        <div className="hidden xl:pointer-fine:flex items-center gap-6">
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

        <div className="hidden xl:pointer-fine:block">
          <Button
            asChild
            size="xl"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/contact">Request Information</Link>
          </Button>
        </div>

        {/* Mobile/Tablet Menu Button (also used for xl touch devices like iPad "desktop" mode) */}
        <button
          className="xl:pointer-fine:hidden text-primary"
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
        <div className="xl:pointer-fine:hidden bg-background border-t border-primary/20 px-6 py-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "relative block text-sm font-medium py-2 transition-colors duration-200 ease-out",
                "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-16 after:bg-secondary after:origin-left after:transition-transform after:duration-300 after:ease-out",
                isActive(link.href)
                  ? "text-primary after:scale-x-100"
                  : "text-foreground hover:text-primary after:scale-x-0 hover:after:scale-x-100",
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
