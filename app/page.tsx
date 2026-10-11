import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ButtonArrow from "@/components/ui/button-arrow";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqJsonLd } from "@/components/json-ld";
import { BOOKINGS_URL } from "@/lib/constants";
import {
  FileSearch,
  FileText,
  BarChart3,
  Workflow,
  Plug,
  Users2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Arcon Agents | KI für Unternehmen aus der Schweiz",
  description:
    "Eigene KI-Assistenten, Ihr Unternehmenswissen und individuelle Abacus-Integrationen. In der Schweiz gehostet und persönlich von Arcon betreut.",
};

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

const platformFeatures = [
  {
    title: "Die passende KI für Ihre Aufgabe",
    text: "Nutzen Sie verschiedene leistungsfähige KI-Modelle und die von Arcon betriebene KI in einer gemeinsamen Oberfläche. Wir unterstützen Sie bei der Auswahl passend zu Ihren Aufgaben und Anforderungen.",
    icon: (
      <Image
        src="/arcon_icons/Ai-Chat-Spark--Streamline-Sharp.png"
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Mehr als Text",
    text: "Analysieren Sie Bilder, erstellen Sie Grafiken und Diagramme oder recherchieren Sie aktuelle Informationen mit Quellenangaben.",
    icon: (
      <Image
        src="/arcon_icons/Chat-Bubble-Text-Square--Streamline-Sharp.png"
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Ergebnisse direkt weiterverwenden",
    text: "Verwandeln Sie Antworten in Dokumente, Auswertungen und Inhalte, mit denen Ihr Team weiterarbeiten kann.",
    icon: (
      <Image
        src="/arcon_icons/Copy-Document--Streamline-Sharp.png"
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Ordnung im Arbeitsalltag",
    text: "Organisieren Sie Gespräche in Projekten und speichern Sie häufig verwendete Anfragen als Vorlagen.",
    icon: (
      <Image
        src="/arcon_icons/Dictionary-Language-Book--Streamline-Sharp.png"
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
      />
    ),
  },
];

const carePoints = [
  {
    title: "Wir machen den Einstieg gemeinsam.",
    text: "Wir identifizieren passende Anwendungen, unterstützen bei der Aufbereitung Ihrer Unterlagen und richten Ihre ersten Assistenten mit Ihnen ein.",
  },
  {
    title: "Sie erreichen Menschen, die Ihre Lösung kennen.",
    text: "Bei Fragen haben Sie direkten Kontakt zu unserem Team. Wir unterstützen Sie bei der Anwendung und kümmern uns um Ihre Anliegen.",
  },
  {
    title: "Ihre Lösung entwickelt sich mit Ihnen weiter.",
    text: "Neue Anforderungen, weitere Datenquellen oder zusätzliche Integrationen: Wir erweitern Ihre Lösung dort, wo sie Ihrem Unternehmen weiterhilft.",
  },
];

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

const faqs = [
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

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <FaqJsonLd faqs={faqs} />
      <Header />

      {/* 1. Hero */}
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
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
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

      {/* 2. Konkreter Nutzen / Anwendungsfälle */}
      <section id="anwendungsfaelle" className="px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Was wäre, wenn Ihr Team weniger suchen und mehr erledigen könnte?
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Wissen schneller finden, Routineaufgaben vereinfachen und
              Informationen verständlich aufbereiten: Arcon Agents unterstützt
              Ihr Team dort, wo im Alltag Zeit verloren geht.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-background p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1bcb80]/10 text-[#005f41]">
                  {useCase.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-700">{useCase.text}</p>
                <p className="mt-4 text-sm italic text-gray-500">{useCase.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Eigene KI-Assistenten */}
      <section id="assistenten" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ein Assistent für jede Aufgabe. Mit dem Wissen Ihres
              Unternehmens.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Ihr Vertrieb benötigt andere Unterstützung als Ihre
              Administration. Mit Arcon Agents erstellen Sie eigene
              KI-Assistenten für unterschiedliche Aufgaben – mit passenden
              Anweisungen und ausgewählten Wissensquellen.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Ein Wissensassistent beantwortet interne Fragen. Ein
              Vertriebsassistent unterstützt bei Kundenanfragen. Ein
              Analyseassistent hilft, Zahlen und Zusammenhänge zu verstehen.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Sie können Ihre Assistenten selbst einrichten. Oder wir
              übernehmen die Einrichtung gemeinsam mit Ihnen.
            </p>
          </div>

          <div className="rounded-2xl border bg-background p-8">
            <p className="text-sm font-medium text-gray-500">Kurzer Ablauf</p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
              {["Unterlagen bereitstellen", "Aufgabe festlegen", "Im Team nutzen"].map(
                (step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border px-4 py-2 text-sm font-medium">
                      {step}
                    </span>
                    {index < 2 && (
                      <span className="hidden text-gray-400 sm:inline" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integrationen */}
      <section id="integrationen" className="px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ihre KI soll dort helfen, wo Ihre Arbeit stattfindet.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Wichtige Informationen liegen bereits in Ihren
              Geschäftsanwendungen. Wir verbinden Arcon Agents mit Abacus und
              weiteren Systemen, damit Ihre Assistenten diese Informationen
              für Ihre Aufgaben nutzen können.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              So lassen sich Daten aus angebundenen Anwendungen abrufen,
              Informationen verständlich zusammenfassen und wiederkehrende
              Arbeitsschritte gezielt unterstützen.
            </p>

            <div className="mt-8">
              <ButtonArrow href={BOOKINGS_URL} target="_blank" name="Ihren Anwendungsfall besprechen" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 rounded-xl border p-5">
              <Plug className="mt-0.5 h-5 w-5 shrink-0 text-[#005f41]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Abacus trifft KI</h3>
                <p className="mt-1.5 text-base leading-7 text-gray-700">
                  Wir verbinden unsere Erfahrung mit Abacus mit der
                  Entwicklung Ihrer KI-Lösung. Gemeinsam bestimmen wir, welche
                  Daten und Abläufe sinnvoll angebunden werden.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border p-5">
              <Workflow className="mt-0.5 h-5 w-5 shrink-0 text-[#005f41]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Ihre weiteren Anwendungen</h3>
                <p className="mt-1.5 text-base leading-7 text-gray-700">
                  Ob bestehende Datenquellen oder individuelle
                  Fachanwendungen: Wir prüfen die Möglichkeiten und entwickeln
                  eine Integration, die zu Ihren Prozessen passt.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border p-5">
              <Users2 className="mt-0.5 h-5 w-5 shrink-0 text-[#005f41]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Ein Ansprechpartner für die Umsetzung</h3>
                <p className="mt-1.5 text-base leading-7 text-gray-700">
                  Von der Abklärung bis zum laufenden Betrieb begleitet Sie
                  unser Team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Plattform */}
      <section id="plattform" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ein gemeinsamer KI-Arbeitsplatz für Ihr Team.
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4 border-t pt-6">
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1.5 text-base leading-7 text-gray-700">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Persönliche Betreuung */}
      <section id="warum-arcon" className="bg-[#005f41] px-4 py-20 text-white sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ihre KI-Plattform. Unser Team dahinter.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              Arcon entwickelt die Plattform, verbindet Ihre Anwendungen und
              begleitet Ihr Team bei der Nutzung. Entwicklung, Einführung,
              Hosting und Betreuung kommen aus einer Hand.
            </p>

            <div className="mt-8 space-y-6">
              {carePoints.map((point) => (
                <div key={point.title} className="border-t border-white/15 pt-5">
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-1.5 text-base leading-7 text-white/80">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
            <Image
              src="/arcon-images/Digital-Collaboration_WEB-1.jpg"
              alt="Mitarbeitende von Arcon Informatik AG im Gespräch"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. Daten und Vertrauen */}
      <section id="daten-vertrauen" className="px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Schweizer Hosting. Transparente Datenverarbeitung.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Arcon Agents wird in der Schweiz entwickelt und gehostet.
              Gemeinsam mit Ihnen legen wir fest, welche KI-Modelle,
              Datenquellen und Funktionen zu Ihren Anforderungen passen.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Für vertrauliche Anwendungen prüfen wir den Einsatz der von uns
              betriebenen KI. Bei der Nutzung externer KI-Modelle oder
              zusätzlicher Dienste kann eine Verarbeitung ausserhalb der
              Schweiz stattfinden.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Sie erfahren vor der Einführung, wie Ihre gewählte Lösung mit
              Ihren Daten umgeht.
            </p>
            <div className="mt-8">
              <ButtonArrow href={BOOKINGS_URL} target="_blank" name="Anforderungen besprechen" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 rounded-2xl border p-8">
            <ShieldCheck className="h-8 w-8 text-[#005f41]" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-6">
              <Image
                src="/swiss-hosting-big.png"
                alt="Swiss Hosting – Arcon Informatik AG hostet in der Schweiz"
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/ISO-27001-Zert-red.png"
                alt="ISO 27001 Zertifizierung der Arcon Informatik AG"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Hosting der Plattform und Verarbeitung durch KI-Modelle sind
              zwei unterschiedliche Dinge – wir ordnen das gemeinsam mit Ihnen
              für Ihre konkrete Konfiguration ein.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Einstieg und Kosten */}
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

      {/* 9. FAQ */}
      <section id="faq" className="px-4 py-20 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Häufige Fragen
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10. Demo-Anfrage */}
      <section
        id="demo-anfrage"
        className="bg-[#004132] px-4 py-20 text-white sm:px-6 lg:px-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welche Aufgabe möchten Sie Ihrem Team erleichtern?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/85">
            Zeigen Sie uns, wo heute Zeit verloren geht. Wir zeigen Ihnen,
            wie Arcon Agents dabei unterstützen kann.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonArrow
              href={BOOKINGS_URL}
              target="_blank"
              name="Persönliche Demo anfragen"
            />
          </div>
          <p className="mt-4 text-sm text-white/60">
            Unverbindlich. Persönlich. Auf Ihr Unternehmen abgestimmt.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
