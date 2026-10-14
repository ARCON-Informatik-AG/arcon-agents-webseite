import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Innovation",
    description:
      "Wir setzen auf modernste KI-Technologie, um Meetings effizienter und wertvoller zu gestalten. Dabei denken wir stets einen Schritt voraus.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Vertrauen & Sicherheit",
    description:
      "Schweizer Hosting, ISO 27001 Zertifizierung und vollständige DSG-Konformität. Ihre Daten sind bei uns in den besten Händen.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Menschlichkeit",
    description:
      "Technologie soll Menschen unterstützen, nicht ersetzen. Wir entwickeln Lösungen, die den Arbeitsalltag spürbar verbessern.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Zusammenarbeit",
    description:
      "Gute Zusammenarbeit beginnt mit guter Kommunikation. Wir helfen Teams, das Beste aus jedem Meeting herauszuholen.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Präzision",
    description:
      "Schweizer Qualitätsanspruch in jeder Zeile Code. Unsere Transkriptionen erreichen höchste Genauigkeit – auch auf Schweizerdeutsch.",
  },
  {
    icon: (
      <Image
        src="/arcon_icons/Location-Pin-1--Streamline-Sharp.png"
        alt="Swissness"
        width={24}
        height={24}
      />
    ),
    title: "Swissness",
    description:
      "Von der Entwicklung bis zum Hosting – alles bleibt in der Schweiz. Swiss Made ist für uns nicht nur ein Label, sondern eine Überzeugung.",
  },
];

export default function ValuesCarouselSection() {
  return (
    <section className="px-4 py-32 sm:px-6 lg:px-12 bg-arcon-dark-green text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Was uns antreibt
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Unsere Werte sind das Fundament von allem, was wir tun. Sie leiten
            uns bei jeder Entscheidung und jedem Feature, das wir entwickeln.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 bg-gradient-to-r from-arcon-dark-green to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 bg-gradient-to-l from-arcon-dark-green to-transparent" />

          <div className="overflow-hidden">
            <div
              className="flex gap-6 hover:[animation-play-state:paused]"
              style={{ animation: "carouselScroll 30s linear infinite" }}
            >
              {/* Duplicated for a seamless loop */}
              {[...values, ...values].map((value, index) => (
                <Card
                  key={index}
                  className="border-1 border-white/15 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 shadow-sm hover:bg-white/10 hover:shadow-xl hover:shadow-[#1bcb80]/20 flex-shrink-0 w-[320px] sm:w-[360px]"
                >
                  <CardContent className="p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1bcb80]/15 text-arcon-light-green mb-5">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
