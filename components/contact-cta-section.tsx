import { Card, CardContent } from "@/components/ui/card";
import ButtonArrowWhite from "@/components/ui/button-arrow-white";
import { BOOKINGS_URL } from "@/lib/constants";
import {
  AgentNetwork,
  type AgentLink,
  type AgentNode,
} from "@/components/agent-network";

const agentNodes: AgentNode[] = [
  { id: "a", x: 260, y: 280, hub: true },
  { id: "b", x: 600, y: 240, hub: true },
  { id: "c", x: 940, y: 280, hub: true },
  { id: "d", x: 420, y: 451, hub: true },
  { id: "e", x: 780, y: 474, hub: true },
  { id: "f", x: 150, y: 383 },
  { id: "g", x: 340, y: 354 },
  { id: "h", x: 680, y: 360 },
  { id: "i", x: 1050, y: 406 },
  { id: "j", x: 560, y: 560 },
  { id: "l", x: 960, y: 560 },
  { id: "m", x: 120, y: 250 },
  { id: "n", x: 500, y: 300 },
  { id: "o", x: 1110, y: 520 },
  // Outside the visible area: beams enter the card from beyond its edges.
  { id: "p", x: -90, y: 240, hub: true },
  { id: "q", x: -70, y: 500 },
  { id: "r", x: 1290, y: 260, hub: true },
  { id: "s", x: 1270, y: 470 },
  { id: "t", x: 330, y: 90 },
  { id: "u", x: 820, y: 720, hub: true },
];

const agentLinks: AgentLink[] = [
  ["a", "b"],
  ["b", "c"],
  ["a", "g"],
  ["g", "d"],
  ["b", "h"],
  ["h", "c"],
  ["h", "e"],
  ["c", "i"],
  ["d", "e"],
  ["d", "j"],
  ["e", "l"],
  ["a", "f"],
  ["j", "l"],
  ["g", "f"],
  ["i", "l"],
  ["m", "a"],
  ["m", "f"],
  ["n", "b"],
  ["n", "g"],
  ["n", "h"],
  ["o", "i"],
  ["o", "l"],
  ["p", "f"],
  ["p", "m"],
  ["q", "f"],
  ["q", "j"],
  ["q", "d"],
  ["r", "c"],
  ["r", "i"],
  ["s", "i"],
  ["s", "l"],
  ["s", "o"],
  ["t", "b"],
  ["t", "a"],
  ["u", "j"],
  ["u", "e"],
  ["u", "l"],
];

export default function ContactCtaSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl animate-fade-in-up">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-[#004132] via-[#004e3c] to-[#004132] text-white">
          <AgentNetwork nodes={agentNodes} links={agentLinks} />
          <CardContent className="relative z-10 p-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Lernen Sie uns kennen
            </h2>
            <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie mehr über Arcon Agents
              erfahren? Wir freuen uns auf den Austausch mit Ihnen.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonArrowWhite
                href={BOOKINGS_URL}
                name="Persönliche Demo anfragen"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
