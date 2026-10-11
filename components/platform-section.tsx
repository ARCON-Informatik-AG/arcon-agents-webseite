import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquareText, FileOutput, FolderKanban } from "lucide-react";

const platformFeatures = [
  {
    title: "Die passende KI für Ihre Aufgabe",
    text: "Nutzen Sie verschiedene leistungsfähige KI-Modelle und die von Arcon betriebene KI in einer gemeinsamen Oberfläche. Wir unterstützen Sie bei der Auswahl passend zu Ihren Aufgaben und Anforderungen.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Mehr als Text",
    text: "Analysieren Sie Bilder, erstellen Sie Grafiken und Diagramme oder recherchieren Sie aktuelle Informationen mit Quellenangaben.",
    icon: <MessageSquareText className="h-6 w-6" />,
  },
  {
    title: "Ergebnisse direkt weiterverwenden",
    text: "Verwandeln Sie Antworten in Dokumente, Auswertungen und Inhalte, mit denen Ihr Team weiterarbeiten kann.",
    icon: <FileOutput className="h-6 w-6" />,
  },
  {
    title: "Ordnung im Arbeitsalltag",
    text: "Organisieren Sie Gespräche in Projekten und speichern Sie häufig verwendete Anfragen als Vorlagen.",
    icon: <FolderKanban className="h-6 w-6" />,
  },
];

export default function PlatformSection() {
  return (
    <section id="plattform" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ein gemeinsamer KI-Arbeitsplatz für Ihr Team.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {platformFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="gap-3 border bg-background shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1bcb80]/10 text-[#005f41]">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 text-large">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-gray-700">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
