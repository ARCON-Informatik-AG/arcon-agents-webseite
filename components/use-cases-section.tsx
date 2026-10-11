import { FileSearch, FileText, BarChart3 } from "lucide-react";

const useCases = [
  {
    title: "Antworten aus Ihrem Unternehmenswissen",
    text: "Handbücher, Richtlinien und Produktunterlagen werden zu einer direkt nutzbaren Wissensquelle. Ihre Mitarbeitenden stellen Fragen und erhalten Antworten mit Quellenhinweisen.",
    example: "«Was gilt bei uns für die Abrechnung von Reisespesen?»",
    icon: <FileSearch className="h-5 w-5" />,
  },
  {
    title: "Inhalte schneller vorbereiten",
    text: "Erstellen Sie Kundenantworten, Berichte und Textentwürfe mit Ihren Unterlagen und Vorgaben. Exportieren Sie Ergebnisse als Word-Dokument in Ihrem Firmenauftritt.",
    example: "«Formuliere eine Kundenantwort auf Basis dieser Produktinformationen.»",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Daten einfacher verstehen",
    text: "Lassen Sie Tabellen analysieren, Entwicklungen vergleichen und Ergebnisse als übersichtliche Diagramme oder interaktive Auswertungen aufbereiten.",
    example: "«Welche Veränderungen fallen in unserer Monatsauswertung auf?»",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

export default function UseCasesSection() {
  return (
    <section id="anwendungsfaelle" className="px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Was wäre, wenn Ihr Team weniger suchen und mehr erledigen könnte?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-800">
            Wissen schneller finden, Routineaufgaben vereinfachen und
            Informationen verständlich aufbereiten: Arcon Agents unterstützt
            Ihr Team dort, wo im Alltag Zeit verloren geht.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-background p-8 sm:first:pl-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1bcb80]/10 text-[#005f41]">
                {useCase.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{useCase.title}</h3>
              <p className="mt-3 text-base leading-7 text-gray-700">{useCase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
