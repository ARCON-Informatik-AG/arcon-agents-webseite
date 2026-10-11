import Link from "next/link";
import ButtonArrow from "@/components/ui/button-arrow";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { BOOKINGS_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 py-20 pt-28 text-white sm:px-6 sm:pt-32 lg:px-12"
    >
      {/* Animated background: gradient mesh + floating shapes (section has no bg-color of its own, so it can't paint over this -z-10 layer) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004132] via-[#00583d] to-[#004132]" />

        <div className="absolute top-20 left-20 h-4 w-4 rounded-full bg-white/10 animate-float-random-1 animation-delay-500" />
        <div className="absolute top-40 right-40 h-6 w-6 rounded-square bg-white/10 animate-float-random-2 animation-delay-700" />
        <div className="absolute bottom-40 left-40 h-3 w-3 rounded-full bg-white/10 animate-float-random-3 animation-delay-1200" />
        <div className="absolute bottom-20 right-20 h-5 w-5 rounded-square bg-white/10 animate-float-random-4 animation-delay-1500" />

        <div className="absolute top-1/3 left-1/3 h-2 w-2 rounded-full bg-white/10 animate-drift-horizontal animation-delay-2000" />
        <div className="absolute top-2/3 right-1/3 h-3 w-3 rounded-square bg-white/10 animate-drift-diagonal animation-delay-3000" />
        <div className="absolute top-1/2 left-16 h-4 w-4 rounded-full bg-white/10 animate-float-random-1 animation-delay-4000" />
        <div className="absolute bottom-1/3 right-16 h-2 w-2 rounded-square bg-white/10 animate-float-random-3 animation-delay-1000" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-6 border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white"
          >
            Die Schweizer KI-Plattform für Unternehmen
          </Badge>
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            KI, die Ihr Unternehmen kennt. Und Ihr Team entlastet.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">
            Finden Sie Antworten in Ihren Unternehmensunterlagen, erstellen
            Sie Inhalte und verbinden Sie KI mit Ihren Geschäftsanwendungen.
            Mit Arcon Agents erhalten Sie eine KI-Plattform, die zu Ihrem
            Arbeitsalltag passt – persönlich betreut und in der Schweiz
            gehostet.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonArrow href={BOOKINGS_URL} target="_blank" name="Persönliche Demo anfragen" />
            <Link
              href="/#anwendungsfaelle"
              className="text-base font-medium text-white underline underline-offset-4 hover:text-[#1bcb80]"
            >
              Anwendungsfälle entdecken
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Unverbindlich. Mit Ihrem Anwendungsfall im Mittelpunkt.
          </p>
        </div>

        {/* Example dialog mockup – illustrative only, no real product screenshot exists */}
        <div className="animate-fade-in-up">
          <Card className="border-0 bg-white text-gray-900 shadow-2xl">
            <CardContent className="p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1bcb80]/15 text-[#005f41]">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">Wissensassistent</span>
                </div>
                <Badge variant="outline" className="text-xs font-normal text-gray-600">
                  Beispieldialog
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#004132] px-4 py-2.5 text-sm text-white">
                  Was gilt bei uns für die Abrechnung von Reisespesen?
                </div>
                <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3 text-sm text-gray-800">
                  <p>
                    Reisespesen werden bis CHF 50 pauschal und darüber hinaus
                    gegen Beleg erstattet. Reichen Sie die Abrechnung über
                    das interne Formular innerhalb von 30 Tagen ein.
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-xs text-gray-500 ring-1 ring-gray-200">
                    Quelle: Spesenreglement.pdf, S. 3
                  </span>
                </div>
              </div>

              <p className="mt-5 text-xs text-gray-500">
                Fiktive Inhalte zur Veranschaulichung.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
