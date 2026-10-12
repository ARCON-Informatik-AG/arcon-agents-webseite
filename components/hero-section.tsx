import Image from "next/image";
import ButtonArrow from "@/components/ui/button-arrow";
import ButtonArrowWhite from "@/components/ui/button-arrow-white";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";
import { BOOKINGS_URL } from "@/lib/constants";
import {
  AgentNetwork,
  type AgentLink,
  type AgentNode,
} from "@/components/agent-network";

const agentNodes: AgentNode[] = [
  { id: "h1", x: 120, y: 160, hub: true },
  { id: "h2", x: 430, y: 90, hub: true },
  { id: "h3", x: 760, y: 150, hub: true },
  { id: "h4", x: 1090, y: 110, hub: true },
  { id: "h5", x: 60, y: 430, hub: true },
  { id: "h6", x: 640, y: 400, hub: true },
  { id: "h7", x: 980, y: 420, hub: true },
  { id: "h8", x: 200, y: 700, hub: true },
  { id: "h9", x: 560, y: 640, hub: true },
  { id: "h10", x: 900, y: 700, hub: true },
  { id: "s1", x: 60, y: 330 },
  { id: "s2", x: 250, y: 260 },
  { id: "s3", x: 370, y: 250 },
  { id: "s4", x: 560, y: 250 },
  { id: "s5", x: 830, y: 280 },
  { id: "s6", x: 1000, y: 230 },
  { id: "s7", x: 1160, y: 300 },
  { id: "s8", x: 400, y: 560 },
  { id: "s9", x: 760, y: 560 },
  { id: "s10", x: 1040, y: 540 },
  { id: "s11", x: 120, y: 520 },
  { id: "s12", x: 520, y: 760 },
  { id: "s13", x: 700, y: 740 },
  { id: "s14", x: 1150, y: 720 },
];

const agentLinks: AgentLink[] = [
  ["h1", "h2"], ["h2", "h3"], ["h3", "h4"],
  ["h1", "s1"], ["s1", "s11"], ["s11", "h5"],
  ["h1", "s2"], ["s2", "h2"], ["s2", "h5"],
  ["h2", "s3"], ["s3", "s4"], ["s4", "h3"],
  ["s4", "h6"], ["h3", "s5"], ["s5", "s6"], ["s6", "h4"],
  ["s6", "h7"], ["h4", "s7"], ["s7", "h7"],
  ["h5", "h6"], ["h6", "h7"], ["h5", "s8"], ["s8", "h9"],
  ["h6", "s9"], ["s9", "h7"], ["s9", "h9"],
  ["h9", "h8"], ["h8", "s12"], ["s12", "h9"], ["s12", "s13"],
  ["s13", "h10"], ["h10", "h9"], ["h10", "s14"],
  ["h7", "s10"], ["s10", "s14"], ["s8", "s11"], ["h8", "s11"],
  ["h9", "s13"], ["s13", "s9"],
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 py-20 pt-28 text-white sm:px-6 sm:pt-32 lg:px-12"
    >
      {/* No section bg-color, so this -z-10 layer stays visible */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-arcon-dark-green" />
        <AgentNetwork nodes={agentNodes} links={agentLinks} skipPulseEvery={3} />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-6 gap-2 border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white"
          >
            <Image
              src="/swiss-flag.png"
              alt="Schweizer Flagge"
              width={16}
              height={16}
              className="inline-block"
            />
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
            <ButtonArrow href={BOOKINGS_URL} target="_blank" name="Kostenlos Testen" />
            <ButtonArrowWhite href={BOOKINGS_URL} name="Demo Buchen" />
          </div>
        </div>

        {/* Example dialog mockup – illustrative only, no real product screenshot exists */}
        <div className="animate-fade-in-up">
          <Card className="border-0 bg-white text-gray-900 shadow-2xl">
            <CardContent className="p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1bcb80]/15 text-arcon-light-green">
                    <Bot className="h-4 w-4" aria-hidden="true" />
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
                  <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-xs text-gray-700 ring-1 ring-gray-200">
                    Quelle: Spesenreglement.pdf, S. 3
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
