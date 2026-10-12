import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const faqs = [
  {
    question: "Wir nutzen bereits KI. Was bringt uns Arcon Agents zusätzlich?",
    answer:
      "Arcon Agents verbindet die Nutzung verschiedener KI-Modelle mit Ihren eigenen Assistenten, Ihrem Unternehmenswissen und individuellen Integrationen. Unser Team begleitet Sie bei der Einrichtung und im laufenden Einsatz.",
  },
  {
    question: "Müssen wir eigene KI-Kenntnisse mitbringen?",
    answer:
      "Sie benötigen keine Programmierkenntnisse, um die Plattform zu nutzen und eigene Assistenten einzurichten. Für die Einführung und individuelle Anbindungen steht Ihnen unser Team zur Seite.",
  },
  {
    question: "Welche Unterlagen können wir verwenden?",
    answer:
      "Sie können beispielsweise PDF-Dateien, Word-Dokumente, Excel-Tabellen und Textdateien bereitstellen und als Wissensquelle für Ihre Assistenten nutzen.",
  },
  {
    question: "Kann unsere Abacus-Umgebung angebunden werden?",
    answer:
      "Wir prüfen Ihre bestehende Umgebung und definieren gemeinsam die gewünschten Daten und Abläufe. Der konkrete Funktionsumfang wird im Rahmen der Anbindung vereinbart.",
  },
  {
    question: "Bleiben alle Daten in der Schweiz?",
    answer:
      "Die Plattform wird in der Schweiz gehostet. Wo Inhalte verarbeitet werden, hängt zusätzlich von den gewählten KI-Modellen und Funktionen ab. Wir klären mit Ihnen, welche Konfiguration zu Ihren Anforderungen passt.",
  },
  {
    question: "Können wir die Lösung vor einer Einführung kennenlernen?",
    answer:
      "Ja. In einer persönlichen Demo erhalten Sie einen Einblick in die Plattform. Anschliessend können wir einen Pilot mit klar definiertem Umfang vereinbaren.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Fragen & Antworten
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unserem
            Meeting Agent. Haben Sie weitere Fragen? Kontaktieren Sie uns
            gerne.
          </p>
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 animate-fade-in-up animation-delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 py-2 bg-background/50 hover:bg-background/80 transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
