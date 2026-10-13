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

const post = getPostBySlug("eigene-ki-assistenten-fuer-ihr-unternehmen")!;

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
                Eine Kundenanfrage beantworten, Informationen aus einem Handbuch
                suchen oder einen Bericht vorbereiten: Viele Aufgaben im
                Unternehmen wiederholen sich. Trotzdem beginnt die Arbeit oft
                jedes Mal von vorne. Unterlagen werden zusammengesucht,
                Anforderungen erklärt und Texte neu formuliert.
              </p>
              <p>
                Eigene KI-Assistenten können solche Aufgaben erleichtern. In
                Arcon Agents legen Sie fest, wobei ein Assistent unterstützen
                soll, welche Unterlagen er verwenden darf und wie seine
                Antworten aussehen sollen. So entsteht eine Unterstützung, die
                auf Ihren Arbeitsalltag abgestimmt ist.
              </p>
            </div>

            {/* Was macht einen eigenen KI-Assistenten aus? */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Was macht einen eigenen KI-Assistenten aus?
              </h2>
              <p>
                Ein allgemeiner KI-Chat kann bei vielen Themen helfen. Ein
                eigener Assistent erhält zusätzlich einen klaren Auftrag und
                den passenden Kontext für Ihr Unternehmen.
              </p>
              <p>
                Ein Vertriebsassistent kann beispielsweise mit Produktunterlagen
                arbeiten und Kundenantworten vorbereiten. Ein interner
                Wissensassistent unterstützt Mitarbeitende bei Fragen zu
                Abläufen. Ein Dokumentationsassistent bringt Stichpunkte in eine
                vorgegebene Berichtsstruktur.
              </p>
              <p>
                Dafür müssen Sie kein eigenes KI-Modell entwickeln. Sie
                konfigurieren einen Assistenten innerhalb der Plattform und
                stellen ihm die Informationen bereit, die er für seine Aufgabe
                benötigt.
              </p>
            </section>

            {/* 1. Klare Aufgabe */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                1. Mit einer klaren Aufgabe beginnen
              </h2>
              <p>
                Der beste Ausgangspunkt ist eine wiederkehrende Tätigkeit mit
                einem erkennbaren Ergebnis. Je genauer Sie die Aufgabe
                beschreiben, desto leichter lässt sich prüfen, ob der Assistent
                hilfreich arbeitet.
              </p>
              <p>
                «Unterstütze unseren Vertrieb» lässt viel offen. Konkreter wäre:
              </p>
              <p>
                «Erstelle erste Entwürfe für Antworten auf Produktanfragen.
                Verwende unsere freigegebenen Produktunterlagen und weise darauf
                hin, wenn Informationen fehlen.»
              </p>
              <p>Für einen ersten Assistenten eignen sich beispielsweise:</p>
              <ul className="space-y-2 list-disc pl-6 marker:text-[#1bcb80]">
                <li>Häufige Fragen zu internen Abläufen beantworten.</li>
                <li>Kundenantworten anhand von Produktinformationen vorbereiten.</li>
                <li>Stichpunkte in strukturierte Berichte umwandeln.</li>
                <li>Dokumente für eine bestimmte Zielgruppe zusammenfassen.</li>
              </ul>
              <p>
                Wählen Sie eine Aufgabe, deren Ergebnis jemand im Team fachlich
                beurteilen kann. Das erleichtert den Einstieg und die spätere
                Verbesserung.
              </p>
            </section>

            {/* 2. Unterlagen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                2. Die passenden Unterlagen bereitstellen
              </h2>
              <p>
                Ein Assistent für Produktfragen benötigt andere Quellen als ein
                Assistent für interne Richtlinien. Stellen Sie deshalb gezielt
                die Unterlagen zusammen, die zu seiner Aufgabe gehören.
              </p>
              <p>
                In Arcon Agents können Sie unter anderem PDF-Dateien,
                Word-Dokumente, Excel-Tabellen und Textdateien in
                Wissenssammlungen organisieren und einem Assistenten zuordnen.
              </p>
              <p>
                Beginnen Sie mit einer überschaubaren Auswahl aktueller
                Dokumente. Ein gültiges Produkthandbuch und eine gepflegte
                Fragenliste sind häufig eine bessere Ausgangsbasis als eine
                grosse Sammlung mit widersprüchlichen Versionen.
              </p>
              <p>
                Prüfen Sie auch, ob die vorgesehenen Nutzerinnen und Nutzer diese
                Inhalte sehen dürfen. Vertrauliche Unterlagen sollten nicht
                beiläufig in einer allgemein verwendeten Wissenssammlung landen.
              </p>
            </section>

            {/* 3. Arbeitsanweisungen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                3. Gute Arbeitsanweisungen formulieren
              </h2>
              <p>
                Beschreiben Sie, wie der Assistent arbeiten soll. Dazu gehören
                seine Aufgabe, die Zielgruppe, der gewünschte Ton und das
                Antwortformat.
              </p>
              <p>Eine Anweisung könnte so aussehen:</p>
              <p>
                «Du unterstützt unseren Kundendienst bei Produktanfragen.
                Formuliere sachlich, freundlich und verständlich. Nutze die
                bereitgestellten Produktunterlagen. Wenn eine Angabe fehlt,
                benenne die offene Frage. Erfinde keine Preise, Liefertermine
                oder Leistungsversprechen. Liefere einen Antwortentwurf zur
                Prüfung durch unsere Mitarbeitenden.»
              </p>
              <p>
                Solche Vorgaben helfen dabei, Erwartungen zu vereinheitlichen.
                Sie ersetzen jedoch keine fachliche Kontrolle: Auch ein gut
                eingerichteter Assistent kann Inhalte falsch einordnen oder
                wichtige Details übersehen.
              </p>
            </section>

            {/* 4. Modell und Funktionen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                4. Modell und Funktionen passend auswählen
              </h2>
              <p>
                In Arcon Agents lassen sich unterschiedliche KI-Modelle nutzen.
                Ausserdem können je nach Assistent zusätzliche Funktionen wie
                Websuche oder Bilderstellung eingesetzt werden.
              </p>
              <p>
                Wählen Sie diese Möglichkeiten anhand der Aufgabe. Für Fragen zu
                einer internen Richtlinie sind die eigenen Dokumente die
                relevante Grundlage. Für eine Recherche zu aktuellen
                Entwicklungen kann eine Websuche sinnvoll sein.
              </p>
              <p>
                Berücksichtigen Sie dabei auch die Datenverarbeitung. Welche
                Modelle und Funktionen für vertrauliche Inhalte geeignet sind,
                sollte vor der Nutzung feststehen.
              </p>
            </section>

            {/* 5. Testen */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                5. Mit echten Fragen testen
              </h2>
              <p>
                Bevor ein Assistent im ganzen Team eingesetzt wird, lohnt sich
                ein kleiner Praxistest. Sammeln Sie typische Fragen und prüfen
                Sie die Ergebnisse gemeinsam mit den Personen, die die Aufgabe
                kennen.
              </p>
              <p>
                Testen Sie bewusst unterschiedliche Situationen: eine eindeutig
                beantwortbare Frage, eine unklare Anfrage und eine Frage, zu der
                die Unterlagen keine Antwort enthalten.
              </p>
              <p>
                Achten Sie darauf, ob der Assistent die richtigen Informationen
                verwendet, Unsicherheiten benennt und ein brauchbares Ergebnis
                liefert. Halten Sie wiederkehrende Fehler fest und verbessern Sie
                anschliessend Anweisungen oder Wissensquellen.
              </p>
            </section>

            {/* Abschluss */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Gemeinsam starten und weiterentwickeln
              </h2>
              <p>
                Nach dem ersten Test kann ein kleiner Nutzerkreis mit dem
                Assistenten arbeiten. Vereinbaren Sie, wer die Unterlagen aktuell
                hält und Rückmeldungen sammelt. So bleibt der Assistent auch dann
                hilfreich, wenn sich Produkte oder Abläufe verändern.
              </p>
              <p>
                Arcon unterstützt Sie bei der Auswahl geeigneter Aufgaben, der
                Einrichtung Ihrer Assistenten und der Einführung im Team. Sie
                können Ihre Lösung selbst weiterentwickeln oder unsere
                persönliche Begleitung nutzen.
              </p>
              <p className="font-semibold">
                Welche wiederkehrende Aufgabe möchten Sie vereinfachen? In einer
                persönlichen Demo zeigen wir Ihnen, wie ein passender Assistent
                für Ihr Unternehmen aussehen kann.
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
