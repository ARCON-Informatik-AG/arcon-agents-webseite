import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bot,
  MessageSquareText,
  FileOutput,
  FolderKanban,
  Plug,
  ShieldCheck,
} from "lucide-react";

const platformFeatures = [
  {
    title: "Die passende KI für Ihre Aufgabe",
    text: "Nutzen Sie verschiedene leistungsfähige KI-Modelle und die von Arcon betriebene KI in einer gemeinsamen Oberfläche. Wir unterstützen Sie bei der Auswahl passend zu Ihren Aufgaben und Anforderungen.",
    icon: <Bot className="h-6 w-6" />,
  },
  {
    title: "Mehr als Text",
    text: "Analysieren Sie Bilder, erstellen Sie Grafiken und Diagramme oder recherchieren Sie aktuelle Informationen mit Quellenangaben. Nutzen Sie die Ergebnisse direkt in Ihren Projekten.",
    icon: <MessageSquareText className="h-6 w-6" />,
  },
  {
    title: "Ergebnisse direkt weiterverwenden",
    text: "Verwandeln Sie Antworten in Dokumente, Auswertungen und Inhalte, mit denen Ihr Team weiterarbeiten kann. Sei es als Word, Excel, PDF oder anderen Formaten.",
    icon: <FileOutput className="h-6 w-6" />,
  },
  {
    title: "Ordnung im Arbeitsalltag",
    text: "Speichern Sie Anfragen als Vorlagen, erstellen Sie eigene Agenten für wiederkehrende Aufgaben und profitieren Sie vom modellübergreifenden Gedächtnis der Plattform.",
    icon: <FolderKanban className="h-6 w-6" />,
  },
  {
    title: "Integrationen in Ihre Systemlandschaft",
    text: "Verbinden Sie die Plattform mit Abacus, SharePoint, Confluence und weiteren Anwendungen. So greifen Ihre Agenten direkt auf Ihr Unternehmenswissen zu und arbeiten dort, wo Ihr Team bereits arbeitet.",
    icon: <Plug className="h-6 w-6" />,
  },
  {
    title: "KI für sensible Inhalte",
    text: "Für vertrauliche Informationen betreiben wir eigene Hochleistungs-LLMs. Ihre Anfragen und Dokumente werden auf unserer Infrastruktur in der Schweiz verarbeitet und nicht an externe Anbieter weitergegeben.",
    icon: <ShieldCheck className="h-6 w-6" />,
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
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-arcon-dark-green text-arcon-light-green">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 text-large">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-gray-800">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
