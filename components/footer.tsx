import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./ui/logo";
import CookieSettingsLink from "./cookie-settings-link";
import { BOOKINGS_URL } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 px-6 pt-12 pb-4 sm:px-8 lg:px-12" role="contentinfo">
      <div className="mx-auto max-w-7xl animate-fade-in-up">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-3 leading-7 text-base">
              Die Schweizer KI-Plattform für Unternehmen: eigene KI-Assistenten, Ihr
              Unternehmenswissen und individuelle Integrationen.<br />Entwickelt und
              gehostet von der ARCON Informatik AG in der Zentralschweiz.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Plattform</h4>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <Link
                  href="/#anwendungsfaelle"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  Anwendungen
                </Link>
              </li>
              <li>
                <Link
                  href="/#integrationen"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  Integrationen
                </Link>
              </li>
              <li>
                <Link
                  href="/#plattform"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  Möglichkeiten
                </Link>
              </li>
              <li>
                <Link
                  href="/#daten-vertrauen"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  Daten &amp; Vertrauen
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Unternehmen</h4>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <a
                  href={BOOKINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  Demo anfragen
                </a>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="hover:text-[#1bcb80] transition-colors"
                >
                  AGB
                </Link>
              </li>
              <li>
                <CookieSettingsLink />
              </li>
            </ul>
          </div>
        </div>

        {/* Certification logos */}
        <div className="mt-8 sm:-mt-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-start gap-6 sm:gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/swiss-hosting-big.png"
              alt="Swiss Hosting – Arcon Informatik AG hostet in der Schweiz"
              width={200}
              height={100}
              className="object-contain h-20 sm:h-20 w-auto max-w-[160px] sm:max-w-[200px]"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/ISO-27001-Zert-red.png"
              alt="ISO 27001 Zertifizierung – Informationssicherheit nach internationalem Standard"
              width={100}
              height={100}
              className="object-contain max-w-[80px] sm:max-w-[100px]"
            />
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          © 2026 ARCON Informatik AG. Alle Rechte vorbehalten. Made in
          Switzerland.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
