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

const post = getPostBySlug("ki-hosting-in-der-schweiz")!;

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
                Ein KI-Assistent erhält einen internen Bericht, beantwortet Fragen zu
                Kundenunterlagen oder fasst Geschäftszahlen zusammen. Damit werden
                Informationen verarbeitet, bei denen Unternehmen wissen möchten, wo sie
                liegen und wer damit arbeitet.
              </p>
              <p>
                Schweizer Hosting kann dafür eine wichtige Grundlage sein. Für die
                Beurteilung einer KI-Lösung lohnt es sich jedoch, genauer hinzusehen: Der
                Standort der Plattform beantwortet noch nicht jede Frage zur Verarbeitung
                von Chat-Inhalten und Dokumenten.
              </p>
            </div>

            {/* Was Schweizer Hosting aussagt */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Was Schweizer Hosting aussagt
              </h2>
              <p>
                Wenn eine Plattform in der Schweiz gehostet wird, wird die dafür
                eingesetzte Infrastruktur hier betrieben. Für Unternehmen schafft ein klar
                definierter Standort eine Grundlage, um den Betrieb und die vertraglich
                vereinbarten Leistungen zu beurteilen.
              </p>
              <p>
                Bei Arcon Agents gehört Schweizer Hosting zum Angebot. Hinzu kommen die
                eigene Entwicklung der Plattform und die persönliche Betreuung durch Arcon.
              </p>
              <p>
                Für Ihre Entscheidung sollten Sie klären, welche Bestandteile vom Hosting
                umfasst sind. Neben den unmittelbar sichtbaren Dateien können auch
                Gesprächsverläufe, Sicherungskopien und Betriebsdaten relevant sein.
              </p>
              <p>
                Die Aussage «Hosting in der Schweiz» sollte deshalb immer zusammen mit der
                konkreten Ausgestaltung der Lösung betrachtet werden.
              </p>
            </section>

            {/* Speicherung und KI-Verarbeitung unterscheiden */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Speicherung und KI-Verarbeitung unterscheiden
              </h2>
              <p>
                Ein Beispiel verdeutlicht den Unterschied: Sie laden ein Dokument auf eine
                in der Schweiz betriebene Plattform und bitten um eine Zusammenfassung.
              </p>
              <p>
                Das Dokument kann in der Schweiz gespeichert sein. Wird die Zusammenfassung
                jedoch durch einen externen KI-Anbieter erstellt, müssen die dafür
                benötigten Inhalte an diesen Dienst übermittelt werden. Die Verarbeitung
                kann dadurch ausserhalb der Schweiz stattfinden.
              </p>
              <p>
                Auch ergänzende Funktionen wie Websuche oder Bilderstellung können weitere
                Dienste einbeziehen.
              </p>
              <p>
                Für die Beurteilung sind daher zwei Fragen wichtig: Wo werden Ihre Daten
                gespeichert, und welche Systeme erhalten sie bei der Bearbeitung einer
                Anfrage?
              </p>
            </section>

            {/* Die passende Konfiguration für Ihre Inhalte */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Die passende Konfiguration für Ihre Inhalte
              </h2>
              <p>
                Nicht jede Aufgabe benötigt dieselben Funktionen. Für eine öffentlich
                verwendbare Produktbeschreibung können andere Anforderungen gelten als für
                einen vertraulichen internen Bericht.
              </p>
              <p>
                Arcon Agents ermöglicht die Nutzung unterschiedlicher KI-Modelle. Dazu
                gehört auch eine von Arcon betriebene KI. Welche Kombination für Ihr
                Unternehmen geeignet ist, sollte anhand Ihrer Aufgaben und Daten festgelegt
                werden.
              </p>
              <p>
                Wenn eine ausschliessliche Verarbeitung innerhalb einer Schweizer Umgebung
                erforderlich ist, muss diese Anforderung für den gesamten vorgesehenen Ablauf
                geprüft werden. Die Auswahl eines lokal betriebenen Modells allein beantwortet
                noch nicht, ob zusätzliche Funktionen Daten an weitere Dienste übermitteln.
              </p>
              <p>
                Eine klare Konfiguration hilft Ihren Mitarbeitenden, die Plattform passend
                zum jeweiligen Anwendungsfall einzusetzen.
              </p>
            </section>

            {/* Schweizer Hosting ersetzt keine sorgfältige Datenschutzprüfung */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Schweizer Hosting ersetzt keine sorgfältige Datenschutzprüfung
              </h2>
              <p>
                Der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte hält fest,
                dass das Schweizer Datenschutzgesetz auch auf KI-gestützte
                Datenbearbeitungen anwendbar ist. Bei KI-Anwendungen sind unter anderem
                Transparenz über die Verarbeitung und den Umgang mit eingegebenen Daten
                relevant.
              </p>
              <p>
                Für Unternehmen bedeutet das: Neben dem Standort zählen der Zweck der
                Nutzung, die beteiligten Anbieter und die vereinbarten Bedingungen. Auch bei
                einer Auslagerung an einen Cloud-Anbieter bleibt das verantwortliche
                Unternehmen für eine datenschutzkonforme Bearbeitung verantwortlich.
                Datenübermittlungen ins Ausland müssen gesondert beurteilt werden.
              </p>
              <p>
                Ein Schweizer Serverstandort ist somit ein Auswahlkriterium innerhalb einer
                umfassenderen Beurteilung.
              </p>
            </section>

            {/* Fünf Fragen vor der Einführung */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Fünf Fragen vor der Einführung
              </h2>
              <p>
                Mit wenigen konkreten Fragen lässt sich das Gespräch mit einem KI-Anbieter
                strukturieren:
              </p>
              <p className="font-semibold">1. Welche Inhalte werden wo gespeichert?</p>
              <p>
                Klären Sie den Umgang mit hochgeladenen Dateien, Chat-Verläufen und
                Ergebnissen. Beziehen Sie Sicherungskopien und Aufbewahrungsfristen ein.
              </p>
              <p className="font-semibold">2. Welche Dienste verarbeiten unsere Anfragen?</p>
              <p>
                Fragen Sie nach den eingesetzten KI-Modellen und zusätzlichen Funktionen.
                Entscheidend ist die tatsächlich gewählte Konfiguration.
              </p>
              <p className="font-semibold">3. Wofür werden unsere Eingaben verwendet?</p>
              <p>
                Lassen Sie sich erklären, ob Daten ausschliesslich zur Leistungserbringung
                oder auch für weitere Zwecke verarbeitet werden. Leiten Sie aus dem
                Hosting-Standort keine pauschale Zusage zur Verwendung für KI-Training ab.
              </p>
              <p className="font-semibold">4. Wer kann auf die Informationen zugreifen?</p>
              <p>
                Besprechen Sie sowohl die Nutzung im eigenen Unternehmen als auch notwendige
                Zugriffe für Betrieb und Support.
              </p>
              <p className="font-semibold">
                5. Wie werden Änderungen und die Beendigung der Nutzung geregelt?
              </p>
              <p>
                Klären Sie, was bei einem Modellwechsel, einer zusätzlichen Integration oder
                dem Ende der Zusammenarbeit mit Ihren Daten geschieht.
              </p>
              <p>
                Die Antworten sollten zur angebotenen Lösung passen und dort verbindlich
                festgehalten werden, wo dies erforderlich ist.
              </p>
            </section>

            {/* Sicherheit im Arbeitsalltag verständlich machen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Sicherheit im Arbeitsalltag verständlich machen
              </h2>
              <p>
                Neben der Auswahl der Plattform benötigt Ihr Team einfache Vorgaben: Welche
                Unterlagen dürfen verwendet werden? Welche Modelle sind für welche Aufgaben
                vorgesehen? An wen wenden sich Mitarbeitende bei Unsicherheiten?
              </p>
              <p>
                Solche Regeln sind besonders hilfreich, wenn mehrere KI-Modelle und Funktionen
                zur Verfügung stehen. Sie verbinden die gewählte Lösung mit der täglichen
                Arbeit.
              </p>
              <p>
                Arcon begleitet Sie bei diesen Abklärungen. Gemeinsam betrachten wir Ihre
                Daten, die gewünschten Funktionen und mögliche Integrationen. Daraus entsteht
                eine Konfiguration, deren Einsatz Sie nachvollziehbar beurteilen können.
              </p>
              <p className="font-semibold">
                Möchten Sie wissen, wie Arcon Agents mit Ihren Anforderungen an Datenstandort
                und Vertraulichkeit zusammenpasst? Wir besprechen Ihre Anwendungsfälle und
                zeigen Ihnen die verfügbaren Möglichkeiten.
              </p>
              <div className="pt-2">
                <ButtonArrow
                  href={BOOKINGS_URL}
                  target="_blank"
                  name="Anforderungen besprechen"
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
