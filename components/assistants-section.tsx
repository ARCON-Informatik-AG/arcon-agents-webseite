import IntegrationsBeamDiagram from "@/components/integrations-beam-diagram";

export default function AssistantsSection() {
  return (
    <section id="assistenten" className="bg-white px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ein Assistent für jede Aufgabe. Mit dem Wissen Ihres
            Unternehmens.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-800">
            Ihr Vertrieb benötigt andere Unterstützung als Ihre
            Administration. Mit Arcon Agents erstellen Sie eigene
            KI-Assistenten für unterschiedliche Aufgaben – mit passenden
            Anweisungen und ausgewählten Wissensquellen.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-800">
            Ein Wissensassistent beantwortet interne Fragen. Ein
            Vertriebsassistent unterstützt bei Kundenanfragen. Ein
            Analyseassistent hilft, Zahlen und Zusammenhänge zu verstehen.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-800">
            Sie können Ihre Assistenten selbst einrichten. Oder wir
            übernehmen die Einrichtung gemeinsam mit Ihnen.
          </p>
        </div>

        <div className="lg:order-first">
          <IntegrationsBeamDiagram />
        </div>
      </div>
    </section>
  );
}
