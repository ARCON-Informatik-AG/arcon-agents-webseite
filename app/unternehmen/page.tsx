import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ButtonArrow from "@/components/ui/button-arrow";
import { Badge } from "@/components/ui/badge";
import SwissQualitySection from "@/components/swiss-quality-section";
import ContactCtaSection from "@/components/contact-cta-section";
import ValuesCarouselSection from "@/components/values-carousel-section";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "Die Mission von Arcon Agents und Arcon Informatik AG: durchdachte Digitalisierung, KI-Lösungen und Abacus-Integrationen aus der Schweiz.",
};

export default function UnternehmenPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mt-16 mb-16">
        <section className="relative overflow-hidden px-4 pt-32 pb-22 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Digitalisierung, die{" "}
              <span className="bg-gradient-to-r from-[#1bcb80] to-[#00a05c] bg-clip-text text-transparent">
                im Alltag funktioniert.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray-900 leading-relaxed">
              Wir sind die Arcon Informatik AG aus der Zentralschweiz: seit über
              35 Jahren Partner für Abacus und moderne ICT-Lösungen. Hier
              erfahren Sie, wofür wir stehen und wie Arcon Agents Ihr
              Unternehmen unterstützt.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-in-up">
              <div className="space-y-4 text-lg leading-8 text-gray-800">
                <p>
                  Wir möchten, dass Schweizer Unternehmen von Künstlicher
                  Intelligenz profitieren, ohne dafür ihre Abläufe auf den Kopf
                  zu stellen. Arcon Agents verbindet Ihr Unternehmenswissen mit
                  modernen KI-Assistenten, damit Ihr Team schneller findet, was
                  es braucht.
                </p>
                <p>
                  Unser Anspruch ist eine KI, die verständlich, sicher und
                  persönlich betreut ist: in der Schweiz gehostet und eng an den
                  Bedürfnissen Ihres Unternehmens ausgerichtet.
                </p>
                <p>
                  Digitalisierung ist für uns kein Selbstzweck. Wir wollen Ihren
                  Mitarbeitenden Zeit für die Arbeit zurückgeben, die wirklich
                  zählt, und Ihnen Sicherheit geben, dass neue Technologie
                  verantwortungsvoll eingeführt wird. Dafür begleiten wir Sie
                  von der ersten Idee bis zum täglichen Betrieb.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl animate-fade-in-up">
              <Image
                src="/arcon-images/Digital-Collaboration_WEB-1.jpg"
                alt="Arcon Team bei der Zusammenarbeit im Büro"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ihr Partner für durchdachte Digitalisierung
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-800">
              <p>
                Arcon ist Ihr Partner für durchdachte Digitalisierung. Seit
                über 35 Jahren unterstützen wir Unternehmen dabei, ihre
                Prozesse effizient, transparent und zukunftsfähig zu gestalten:
                mit einem starken Fokus auf Abacus Business Software, moderne
                ICT-Lösungen und innovative Technologien.
              </p>
              <p>
                Mit unserem interdisziplinären Team aus Beratung, Entwicklung
                und Betrieb verbinden wir Fachwissen mit Praxisnähe. So
                entstehen Lösungen, die nicht nur technisch überzeugen,
                sondern im Alltag wirklich funktionieren.
              </p>
              <p>
                Auch beim Meeting Agent verfolgen wir genau diesen Anspruch:
                Wir denken Prozesse weiter, kombinieren bestehende Systeme mit
                neuen Möglichkeiten und schaffen echten Mehrwert für unsere
                Kundinnen und Kunden.
              </p>
            </div>
            <div className="mt-10">
              <ButtonArrow
                href="https://www.arcn.ch"
                target="_blank"
                name="Mehr Informationen"
              />
            </div>
          </div>
        </section>

        <ValuesCarouselSection />
        <div className="bg-gray-50 pt-20">
          <SwissQualitySection />
        </div>
        <ContactCtaSection />
      </main>
      <Footer />
    </div>
  );
}
