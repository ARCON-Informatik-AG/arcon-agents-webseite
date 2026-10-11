import ButtonArrow from "@/components/ui/button-arrow";
import { BOOKINGS_URL } from "@/lib/constants";

const steps = [
  {
    title: "Kennenlernen",
    text: "In einer persönlichen Demo zeigen wir Ihnen Arcon Agents und besprechen, wo Ihr Team Unterstützung benötigt.",
  },
  {
    title: "Gezielt erproben",
    text: "In einem vereinbarten Pilotprojekt prüfen wir die Lösung anhand ausgewählter Aufgaben. Gemeinsam legen wir fest, woran Sie den Nutzen beurteilen.",
  },
  {
    title: "Im Unternehmen einführen",
    text: "Wenn sich die Lösung bewährt, begleiten wir die Einführung und unterstützen Ihr Team im Alltag.",
  },
];

export default function GettingStartedSection() {
  return (
    <section id="einstieg" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Starten Sie mit einer Aufgabe, die sich zu lösen lohnt.
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="text-sm font-semibold text-[#1bcb80]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-base leading-7 text-gray-700">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 rounded-2xl border bg-background p-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <h3 className="text-xl font-semibold">
              Klare Leistungen. Nachvollziehbare Kosten.
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-700">
              Sie erhalten eine Offerte mit klar ausgewiesenen Kosten für
              die Plattformnutzung, die Einrichtung und gewünschte
              Integrationen. Den Umfang der persönlichen Betreuung stimmen
              wir mit Ihnen ab.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <ButtonArrow href={BOOKINGS_URL} target="_blank" name="Persönliche Demo anfragen" />
          </div>
        </div>
      </div>
    </section>
  );
}
