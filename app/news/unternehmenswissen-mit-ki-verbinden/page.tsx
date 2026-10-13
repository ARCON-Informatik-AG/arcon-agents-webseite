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

const post = getPostBySlug("unternehmenswissen-mit-ki-verbinden")!;

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
              <p className="text-lg leading-relaxed font-medium">
                Die Information ist vorhanden. Die Frage ist nur: Wo?
              </p>
              <p>
                In vielen Unternehmen verteilt sich Wissen auf Handbücher,
                Produktunterlagen, interne Richtlinien und Projektdokumente. Wer
                eine Antwort sucht, muss zunächst die richtige Datei finden, die
                passende Stelle lesen und den Inhalt auf die eigene Frage
                übertragen.
              </p>
              <p>
                Mit Arcon Agents können ausgewählte Unternehmensunterlagen zur
                Wissensquelle Ihrer KI-Assistenten werden. Mitarbeitende stellen
                ihre Fragen in Alltagssprache und erhalten Antworten, die sich
                auf diese Unterlagen stützen können.
              </p>
              <p>
                Wie hilfreich das funktioniert, hängt wesentlich davon ab, welches
                Wissen Sie bereitstellen und wie Sie es pflegen.
              </p>
            </div>

            {/* Wie aus Dokumenten eine Antwort entsteht */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Wie aus Dokumenten eine Antwort entsteht
              </h2>
              <p>
                Stellen Sie sich vor, eine neue Mitarbeiterin fragt: «Wie beantrage
                ich eine Weiterbildung?»
              </p>
              <p>
                Die relevanten Informationen stehen möglicherweise in einer
                Personalrichtlinie und einem ergänzenden Merkblatt. Ein Assistent
                mit Zugriff auf diese Wissensquellen kann passende Inhalte
                heranziehen und daraus eine verständliche Antwort formulieren.
              </p>
              <p>
                In Arcon Agents organisieren Sie Dokumente in Wissenssammlungen und
                verbinden diese mit Ihren Assistenten. So können Sie beispielsweise
                einen Assistenten für Produktwissen und einen weiteren für interne
                Arbeitsabläufe einrichten.
              </p>
              <p>
                Dabei wird nicht automatisch ein neues KI-Modell auf Ihren
                Dokumenten trainiert. Die Unterlagen dienen als Informationsgrundlage
                für die Beantwortung von Fragen. Welche weiteren
                Verarbeitungsbedingungen gelten, hängt zusätzlich vom gewählten Modell
                und den eingesetzten Diensten ab.
              </p>
            </section>

            {/* Welche Unterlagen eignen sich? */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Welche Unterlagen eignen sich?
              </h2>
              <p>
                Besonders geeignet sind Dokumente, zu denen regelmässig Fragen
                entstehen:
              </p>
              <ul className="space-y-2 list-disc pl-6 marker:text-[#1bcb80]">
                <li>Produktbeschreibungen und Bedienungsanleitungen.</li>
                <li>Interne Richtlinien und Prozessbeschreibungen.</li>
                <li>Schulungsunterlagen und Einführungshilfen.</li>
                <li>Freigegebene Antworten auf häufige Kundenfragen.</li>
                <li>Dokumentationen zu wiederkehrenden Aufgaben.</li>
              </ul>
              <p>
                Arcon Agents unterstützt unter anderem PDF-, Word-, Excel- und
                Textdateien. Entscheidend ist jedoch nicht allein das Dateiformat.
                Die enthaltenen Informationen müssen verständlich, aktuell und für
                den jeweiligen Zweck geeignet sein.
              </p>
              <p>
                Ein sauber gegliedertes Handbuch ist meist leichter nutzbar als eine
                Sammlung unbeschrifteter Tabellen und Abkürzungen. Auch die
                Lesbarkeit einer Datei spielt eine Rolle: Eine gescannte Seite oder
                eine komplexe Tabelle kann schwieriger auszuwerten sein als klar
                strukturierter Text.
              </p>
            </section>

            {/* Aktualität ist wichtiger als die Menge */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Aktualität ist wichtiger als die Menge
              </h2>
              <p>
                Wer Unternehmenswissen mit KI verbinden möchte, muss nicht sofort das
                gesamte Dokumentenarchiv übernehmen.
              </p>
              <p>
                Ein sinnvoller erster Schritt ist ein klar abgegrenztes Thema. Wählen
                Sie beispielsweise die aktuellen Unterlagen zu einer Produktgruppe und
                ergänzen Sie häufige Fragen aus dem Kundendienst.
              </p>
              <p>Prüfen Sie dabei:</p>
              <p className="font-semibold">Welche Version ist gültig?</p>
              <p>
                Entfernen oder kennzeichnen Sie überholte Unterlagen. Wenn zwei
                Dokumente unterschiedliche Angaben enthalten, kann ein Assistent den
                Widerspruch nicht immer zuverlässig auflösen.
              </p>
              <p className="font-semibold">Wer ist für den Inhalt verantwortlich?</p>
              <p>
                Bestimmen Sie eine Person oder ein Team, das Änderungen kennt und die
                Wissenssammlung pflegt.
              </p>
              <p className="font-semibold">Was fehlt noch?</p>
              <p>
                Wissen, das nur in den Köpfen einzelner Mitarbeitender vorhanden ist,
                steht dem Assistenten nicht zur Verfügung. Häufige Rückfragen zeigen,
                wo eine kurze Ergänzung hilfreich wäre.
              </p>
              <p className="font-semibold">Für wen gelten die Informationen?</p>
              <p>
                Eine Regel kann sich nur auf einen Standort, eine Produktversion oder
                einen bestimmten Kundenkreis beziehen. Solche Einschränkungen sollten im
                Dokument ausdrücklich stehen.
              </p>
            </section>

            {/* Struktur hilft beim richtigen Einordnen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Struktur hilft beim richtigen Einordnen
              </h2>
              <p>
                Gute Unterlagen beantworten nicht nur eine Frage, sondern liefern den
                Zusammenhang.
              </p>
              <p>
                Eine Überschrift wie «Reisekosten – gültig ab Januar 2026» ist
                aussagekräftiger als «Sonstiges». Eine Produktbeschreibung sollte
                erkennen lassen, zu welcher Ausführung sie gehört. Eine Tabelle benötigt
                verständliche Spaltennamen und Angaben zu Einheiten oder Zeiträumen.
              </p>
              <p>
                Sie müssen deshalb nicht jedes Dokument neu schreiben. Oft reichen
                gezielte Verbesserungen:
              </p>
              <ul className="space-y-2 list-disc pl-6 marker:text-[#1bcb80]">
                <li>Aussagekräftige Titel und Zwischenüberschriften.</li>
                <li>Klare Gültigkeitsangaben.</li>
                <li>Erläuterungen zu internen Abkürzungen.</li>
                <li>Eindeutige Zuständigkeiten.</li>
                <li>Vollständige Angaben zu Bedingungen und Ausnahmen.</li>
              </ul>
              <p>
                Diese Arbeit hilft gleichzeitig Ihren Mitarbeitenden. Eine gut gepflegte
                Wissensbasis bleibt auch ausserhalb der KI-Anwendung nützlich.
              </p>
            </section>

            {/* Quellenhinweise machen Antworten nachvollziehbar */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Quellenhinweise machen Antworten nachvollziehbar
              </h2>
              <p>
                Eine flüssig formulierte Antwort wirkt schnell überzeugend. Für die
                tägliche Arbeit ist aber ebenso relevant, worauf sie beruht.
              </p>
              <p>
                Quellenhinweise helfen, eine Antwort mit den zugrunde liegenden
                Unterlagen abzugleichen. Mitarbeitende können dadurch prüfen, ob die
                richtige Richtlinie verwendet wurde und ob die Aussage zur konkreten
                Situation passt.
              </p>
              <p>
                Ein Quellenhinweis ist allerdings noch kein Beweis für eine fehlerfreie
                Antwort. Der Assistent kann eine Passage unvollständig wiedergeben oder
                eine Ausnahme übersehen. Bei verbindlichen Auskünften und wichtigen
                Entscheidungen bleibt deshalb die Prüfung der Originalquelle sinnvoll.
              </p>
              <p>
                Auch fehlende Informationen sollten sichtbar werden. Ein hilfreicher
                Assistent benennt eine offene Frage, statt eine vermeintlich passende
                Regel zu ergänzen. Dieses Verhalten sollten Sie in seinen Anweisungen
                festlegen und im Test überprüfen.
              </p>
            </section>

            {/* Wissen gezielt zugänglich machen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Wissen gezielt zugänglich machen
              </h2>
              <p>
                Nicht jede Unterlage ist für jede Person bestimmt. Produktinformationen
                für den Vertrieb und vertrauliche Personaldokumente stellen
                unterschiedliche Anforderungen an den Zugriff.
              </p>
              <p>
                Beginnen Sie mit Dokumenten, die für die gesamte vorgesehene Nutzergruppe
                freigegeben sind. Klären Sie weitergehende Anforderungen an Berechtigungen
                gesondert.
              </p>
              <p>
                Gehen Sie insbesondere bei angebundenen Datenquellen nicht davon aus, dass
                bestehende Zugriffsrechte automatisch unverändert übernommen werden.
                Welche Informationen ein Assistent verwenden und weitergeben darf, gehört
                zur Planung der Lösung.
              </p>
            </section>

            {/* Einen kleinen Wissensbereich im Alltag prüfen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Einen kleinen Wissensbereich im Alltag prüfen
              </h2>
              <p>
                Für einen Pilot eignet sich eine Sammlung, deren Nutzen Sie konkret
                beurteilen können. Ein mögliches Vorgehen ist:
              </p>
              <ol className="space-y-2 list-decimal pl-6 marker:text-[#1bcb80]">
                <li>Einen Themenbereich und die vorgesehenen Nutzer auswählen.</li>
                <li>Aktuelle, freigegebene Unterlagen zusammenstellen.</li>
                <li>Typische Fragen und erwartete Antworten sammeln.</li>
                <li>
                  Den Assistenten mit einfachen, mehrdeutigen und unbeantwortbaren
                  Fragen testen.
                </li>
                <li>Rückmeldungen nutzen, um Dokumente und Anweisungen zu verbessern.</li>
              </ol>
              <p>
                Bewerten Sie dabei nicht nur, ob Antworten richtig sind. Prüfen Sie auch,
                ob Mitarbeitende schneller zu einer brauchbaren Information gelangen und
                wie viel Nacharbeit erforderlich bleibt.
              </p>
            </section>

            {/* Abschluss */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Vom Dokumentenbestand zur nutzbaren Wissensquelle
              </h2>
              <p>
                Eine KI kann vorhandenes Wissen leichter zugänglich machen. Ihr Nutzen
                wächst, wenn die zugrunde liegenden Inhalte verlässlich und gut organisiert
                sind.
              </p>
              <p>
                Arcon begleitet Sie beim Aufbau geeigneter Wissenssammlungen und bei der
                Einrichtung Ihrer Assistenten. Gemeinsam wählen wir einen sinnvollen
                Einstieg und prüfen die Ergebnisse anhand Ihrer tatsächlichen Fragen.
              </p>
              <p className="font-semibold">
                Welche Informationen sucht Ihr Team immer wieder? Wir zeigen Ihnen, wie
                Sie daraus eine nutzbare Wissensquelle für Ihre KI-Assistenten machen.
              </p>
              <div className="pt-2">
                <ButtonArrow
                  href={BOOKINGS_URL}
                  target="_blank"
                  name="Persönliche Demo anfragen"
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
