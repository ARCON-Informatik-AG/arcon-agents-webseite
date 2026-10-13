import ButtonArrow from "@/components/ui/button-arrow";
import { BOOKINGS_URL } from "@/lib/constants";
import { Plug, Workflow, Users2 } from "lucide-react";

export default function IntegrationsSection() {
  return (
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
            <ButtonArrow href={BOOKINGS_URL} target="_blank" name="Ihren Anwendungsfall besprechen" variant="dark" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 rounded-xl border p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-arcon-dark-green text-white">
              <Plug className="h-5 w-5 text-arcon-light-green" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold">Abacus trifft KI</h3>
              <p className="mt-1.5 text-base leading-7 text-gray-800">
                Wir verbinden unsere Erfahrung mit Abacus mit der
                Entwicklung Ihrer KI-Lösung. Gemeinsam bestimmen wir, welche
                Daten und Abläufe sinnvoll angebunden werden.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-arcon-dark-green text-white">
              <Workflow className="h-5 w-5 text-arcon-light-green" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold">Schnittstellen</h3>
              <p className="mt-1.5 text-base leading-7 text-gray-800">
                Ob bestehende Datenquellen oder individuelle
                Schnittstellen: Wir prüfen die Möglichkeiten und entwickeln
                eine Integration, die zu Ihren Prozessen passt.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl border p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-arcon-dark-green text-white">
              <Users2 className="h-5 w-5 text-arcon-light-green" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold">Ein Ansprechpartner für die Umsetzung</h3>
              <p className="mt-1.5 text-base leading-7 text-gray-800">
                Von der Abklärung bis zum laufenden Betrieb begleitet Sie
                unser Team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
