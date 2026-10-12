import ButtonArrow from "@/components/ui/button-arrow";
import IntegrationsBeamDiagram from "@/components/integrations-beam-diagram";
import { BOOKINGS_URL } from "@/lib/constants";

export default function IntegrationsBeamSection() {
  return (
    <section id="integrationen" className="px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
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

        <IntegrationsBeamDiagram />
      </div>
    </section>
  );
}
