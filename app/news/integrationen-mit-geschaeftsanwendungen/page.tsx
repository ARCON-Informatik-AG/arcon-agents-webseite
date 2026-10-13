import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import ButtonArrow from "@/components/ui/button-arrow";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostBySlug } from "@/app/news/blog";
import ContactCtaSection from "@/components/blog-contact-cta-section";
import { BOOKINGS_URL } from "@/lib/constants";

const post = getPostBySlug("integrationen-mit-geschaeftsanwendungen")!;

export default function NewsArticlePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <article className="pt-50 pb-24">
        {/* Header */}
        <header className="px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/news"
              className="inline-flex items-center text-sm text-gray-900 hover:text-[#00a05c] transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              Zurück zu News
            </Link>

            <div className="flex items-center gap-3 flex-wrap mb-6">
              <Badge className="bg-[#1bcb80]/10 text-[#00a05c] hover:bg-[#1bcb80]/15 border-0">
                {post.category}
              </Badge>
              <span className="inline-flex items-center text-sm text-gray-900 gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.dateFormatted}
              </span>
              <span className="inline-flex items-center text-sm text-gray-900 gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full overflow-hidden bg-gray-100 ring-2 ring-white shadow-sm">
                <Image
                  src={post.author.image}
                  alt={`Foto von ${post.author.name}`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {post.author.name}
                </span>
                <span className="text-xs text-gray-900">{post.author.role}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="px-4 sm:px-6 lg:px-12 mt-10">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-4 sm:px-6 lg:px-12 mt-10">
          <div className="mx-auto max-w-4xl space-y-12 text-[17px] leading-relaxed text-gray-900">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Eine Kundenfrage lässt sich selten mit einer einzigen Information
                beantworten. Die Produktbeschreibung liegt in einem Dokument, der
                Bearbeitungsstand in einer Fachanwendung und die Rechnungsübersicht
                in Abacus.
              </p>
              <p>
                Wer diese Angaben benötigt, wechselt zwischen verschiedenen Systemen
                und führt die Ergebnisse zusammen. Eine passende KI-Integration kann
                einzelne Schritte dieses Ablaufs vereinfachen.
              </p>
              <p>
                Arcon Agents lässt sich individuell mit Geschäftsanwendungen verbinden.
                Welche Informationen und Funktionen dabei zur Verfügung stehen, wird
                anhand Ihrer Systeme und Anforderungen festgelegt.
              </p>
            </div>

            {/* Was bringt die Verbindung zwischen KI und Geschäftsanwendungen? */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Was bringt die Verbindung zwischen KI und Geschäftsanwendungen?
              </h2>
              <p>
                Ein Assistent mit einer Dokumentensammlung arbeitet mit den
                bereitgestellten Unterlagen. Eine Integration kann zusätzlich
                Informationen aus einem angebundenen System zugänglich machen.
              </p>
              <p>
                Das ist vor allem dann interessant, wenn Angaben regelmässig ändern
                oder direkt aus der zuständigen Anwendung stammen sollen.
              </p>
              <p>
                Ein möglicher Anwendungsfall ist eine Kundenübersicht: Eine
                Mitarbeiterin stellt eine Frage, der Assistent ruft dafür die
                vereinbarten Informationen ab und bereitet sie verständlich auf.
                Umfang und Aktualität der Antwort hängen dabei von der konkreten
                Anbindung ab.
              </p>
              <p>
                Das Ziel ist ein klarer Arbeitsablauf, bei dem weniger Informationen
                manuell übertragen und zusammengesucht werden müssen.
              </p>
            </section>

            {/* Abacus als mögliche Datenquelle */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Abacus als mögliche Datenquelle
              </h2>
              <p>
                Abacus enthält Informationen, die für viele Geschäftsprozesse relevant
                sind. Welche davon ein KI-Assistent nutzen soll, hängt von Ihrer Aufgabe
                und der vorhandenen Umgebung ab.
              </p>
              <p>Ein denkbares Beispiel ist die Frage:</p>
              <p className="font-semibold">
                «Welche Rechnungen dieses Kunden sind noch offen?»
              </p>
              <p>
                Bei einer entsprechend eingerichteten Anbindung könnte der Assistent die
                benötigten Angaben abrufen und eine Übersicht erstellen. Ob dieser Ablauf
                in Ihrer Umgebung umgesetzt werden kann, wird vorab geprüft.
              </p>
              <p>
                Dieses Beispiel beschreibt eine mögliche individuelle Integration. Es ist
                keine Aussage darüber, dass jede Abacus-Installation ohne weitere
                Einrichtung bereits diese Funktion bereitstellt.
              </p>
              <p>
                Arcon verbindet die Erfahrung mit Abacus mit der Entwicklung Ihrer
                KI-Lösung. So können fachliche Anforderungen und technische Möglichkeiten
                gemeinsam beurteilt werden.
              </p>
            </section>

            {/* Informationen abrufen und Änderungen ausführen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Informationen abrufen und Änderungen ausführen
              </h2>
              <p>
                Bei der Planung sollten zwei Arten von Funktionen getrennt betrachtet
                werden.
              </p>
              <p className="font-semibold">Informationen abrufen:</p>
              <p>
                Der Assistent liest vereinbarte Daten und bereitet sie auf, beispielsweise
                für eine Übersicht oder eine Antwort.
              </p>
              <p className="font-semibold">Änderungen ausführen:</p>
              <p>
                Der Assistent löst einen Vorgang aus oder verändert Daten in einer
                Anwendung.
              </p>
              <p>
                Für den Einstieg bietet sich häufig ein lesender Anwendungsfall an. Sein
                Nutzen lässt sich prüfen, während das führende System unverändert bleibt.
              </p>
              <p>
                Wenn später auch Änderungen gewünscht sind, sollten Berechtigungen,
                Freigaben und der Umgang mit Fehlern ausdrücklich festgelegt werden. Eine
                solche Funktion gehört zum vereinbarten Integrationsumfang und sollte nicht
                allein aus einer allgemeinen Chat-Anweisung entstehen.
              </p>
            </section>

            {/* Mit einem konkreten Ablauf starten */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Mit einem konkreten Ablauf starten
              </h2>
              <p>
                Eine sinnvolle Integration beginnt mit der Frage: Welche wiederkehrende
                Aufgabe soll einfacher werden?
              </p>
              <p>Beschreiben Sie den heutigen Ablauf möglichst konkret:</p>
              <ul className="space-y-2 list-disc pl-6 marker:text-[#1bcb80]">
                <li>Wer benötigt welche Information?</li>
                <li>In welcher Anwendung liegt sie?</li>
                <li>Wie aktuell muss sie sein?</li>
                <li>Wer darf darauf zugreifen?</li>
                <li>Was soll mit dem Ergebnis geschehen?</li>
              </ul>
              <p>
                Anschliessend prüfen wir die Anbindung und testen einen abgegrenzten
                Ablauf. Auch Sonderfälle gehören dazu: etwa ein nicht eindeutig
                zugeordneter Kunde, fehlende Daten oder eine vorübergehend nicht
                erreichbare Anwendung.
              </p>
            </section>

            {/* Abschluss */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Ein Partner für Plattform und Integration
              </h2>
              <p>
                Geschäftsanwendungen und Abläufe verändern sich. Deshalb gehört zur
                Integration auch die Frage, wer die Verbindung betreut und bei
                Anpassungen unterstützt.
              </p>
              <p>
                Arcon entwickelt die Plattform und begleitet die Anbindung Ihrer Systeme.
                Gemeinsam legen wir einen realistischen Umfang fest und erweitern die
                Lösung dort, wo sie Ihrem Team im Alltag hilft.
              </p>
              <p className="font-semibold">
                Zwischen welchen Anwendungen überträgt Ihr Team heute Informationen von
                Hand? Besprechen Sie den Ablauf mit uns – wir prüfen, wo eine Integration
                sinnvoll ist.
              </p>
              <div className="pt-2">
                <ButtonArrow
                  href={BOOKINGS_URL}
                  target="_blank"
                  name="Integration besprechen"
                />
              </div>
            </section>
          </div>
        </div>
      </article>

      <ContactCtaSection />

      <Footer />
    </div>
  );
}
