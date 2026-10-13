"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { BOOKINGS_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/#anwendungsfaelle", label: "Anwendungen" },
  { href: "/#plattform", label: "Funktionen" },
  { href: "/#pricing", label: "Preise" },
  { href: "/news", label: "News" },
  { href: "/#daten-vertrauen", label: "Sicherheit" },
  { href: "/#onboarding", label: "Onboarding" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-border/40 z-50">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto max-w-7xl px-6 lg:px-0"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 transition-opacity hover:opacity-80"
            >
              <Image
                src="/ARCON_Element_RGB_Green-Light.svg"
                alt="Arcon Agents Logo"
                width={18}
                height={18}
                className="mb-0.5"
              />
              <span className="text-lg text-gray-900">Arcon Agents</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium transition-colors hover:text-[#1bcb80]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              asChild
              size="default"
              className="text-base bg-[#1bcb80] text-white hover:bg-[#00b36b] transition-colors duration-200"
            >
              <a href={BOOKINGS_URL} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Demo anfragen</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Menü schliessen" : "Menü öffnen"}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden -mx-6 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-md font-medium text-gray-900 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-2 pb-1">
                <Button
                  asChild
                  size="sm"
                  className="w-full text-md bg-[#1bcb80] text-white hover:bg-[#00b36b] transition-colors duration-200"
                >
                  <a
                    href={BOOKINGS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Demo anfragen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
