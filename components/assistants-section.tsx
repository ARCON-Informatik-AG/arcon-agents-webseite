const steps = ["Unterlagen bereitstellen", "Aufgabe festlegen", "Im Team nutzen"];

export default function AssistantsSection() {
  return (
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
            {steps.map((step, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
