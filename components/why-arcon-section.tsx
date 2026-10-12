import Image from "next/image";

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

export default function WhyArconSection() {
  return (
    <section id="warum-arcon" className="bg-gray-50 px-4 py-20 text-gray-900 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ihre KI-Plattform. Unser Team dahinter.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-900">
            Arcon entwickelt die Plattform stetig weiter, verbindet Ihre Daten und Anwendungen und
            begleitet Ihr Team bei der Nutzung. Entwicklung, Einführung,
            Hosting und Betreuung kommen aus einer Hand.
          </p>

          <div className="mt-8 space-y-6">
            {carePoints.map((point) => (
              <div key={point.title} className="pt-1">
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-1.5 text-base leading-7 text-gray-900">{point.text}</p>
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
  );
}
