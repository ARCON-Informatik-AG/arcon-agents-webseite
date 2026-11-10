import IntegrationsBeamDiagram from "@/components/integrations-beam-diagram";

export default function AssistantsSection() {
  return (
    <section id="assistenten" className="bg-white px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Eigene Agenten. Mit dem Wissen Ihres Unternehmens.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-900">
            Ihr Vertrieb benötigt andere Unterstützung als Ihre Administration. Mit Arcon Agents erstellen Sie selbst Agenten für unterschiedliche Aufgaben, mit passenden Anweisungen und ausgewählten Wissensquellen. Richten Sie Ihre Agenten selbst ein oder nutzen Sie die Unterstützung unseres Teams.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-900">
            Ein Wissensagent unterstützt bei internen Fragen. Ein Vertriebsagent hilft, Kundenantworten vorzubereiten. Ein Analyseagent unterstützt dabei, Zahlen und Zusammenhänge zu verstehen.
          </p>
        </div>

        <div className="lg:order-first">
          <IntegrationsBeamDiagram />
        </div>
      </div>
    </section>
  );
}
