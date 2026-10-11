"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/footer";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                <Image
                  src="/ARCON_Element_RGB_Green-Light.svg"
                  alt="Logo"
                  width={18}
                  height={18}
                  className="mb-0.5"
                />

                <span className="text-lg gray-900">
                  Arcon Agents
                </span>
              </Link>
            </div>

            {/* Back Button */}
            <Link href="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Hauptseite
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-foreground mb-4">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten nach schweizerischem Datenschutzgesetz (DSG)
          </p>
          <p className="text-sm text-foreground">
            Stand: {new Date().toLocaleDateString('de-CH')}
          </p>
          <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Hinweis für die Veröffentlichung:</strong> Dieser Text
            stammt noch aus dem Vorgängerprodukt Meeting Agent (Audiodaten, Transkripte,
            Teams/Zoom-Integration) und beschreibt nicht die Datenverarbeitung von Arcon
            Agents. Er muss vor dem Launch durch die Rechts-/Geschäftsleitung inhaltlich
            überarbeitet werden.
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Card className="border">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-12">
                
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">1. Verantwortlicher der Datenbearbeitung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Verantwortlicher für die Bearbeitung personenbezogener Daten im Sinne des schweizerischen 
                      Datenschutzgesetzes (DSG) ist:
                    </p>
                    <div>
                      <p><strong>ARCON Informatik AG</strong></p>
                      <p>Hinterbergstrasse 24</p>
                      <p>6312 Steinhausen</p>
                      <p>Schweiz</p>
                      <p>Telefon: +41 41 749 10 00</p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">2. Grundsätze der Datenbearbeitung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Wir bearbeiten Ihre personenbezogenen Daten nach den Grundsätzen des DSG:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Rechtmässigkeit und Verhältnismässigkeit der Bearbeitung</li>
                      <li>Bearbeitung nach Treu und Glauben</li>
                      <li>Zweckbindung: Daten werden nur für den angegebenen Zweck bearbeitet</li>
                      <li>Datenminimierung: Nur erforderliche Daten werden bearbeitet</li>
                      <li>Richtigkeit: Falsche Daten werden berichtigt oder gelöscht</li>
                      <li>Transparenz: Betroffene werden über die Datenbearbeitung informiert</li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">3. Kategorien bearbeiteter Daten</h2>
                  <div className="space-y-6 text-foreground">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.1 Stammdaten</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Vor- und Nachname</li>
                        <li>E-Mail-Adresse</li>
                        <li>Firmenbezeichnung</li>
                        <li>Rechnungsadresse</li>
                        <li>Telefonnummer (optional)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.2 Nutzungsdaten</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Anmeldedaten und Zugriffszeiten</li>
                        <li>IP-Adresse</li>
                        <li>Browser-Informationen</li>
                        <li>Genutzte Funktionen und Dienste</li>
                        <li>Log-Dateien</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.3 Audiodaten</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Hochgeladene Audio-Dateien (temporär)</li>
                        <li>Transkribierte Texte (temporär)</li>
                        <li>Meeting-Protokolle (temporär)</li>
                        <li>Automatisch generierte Zusammenfassungen, Erkenntnisse und Aufgaben (temporär)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">4. Zweck und Rechtsgrundlage der Bearbeitung</h2>
                  <div className="space-y-6 text-foreground">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">4.1 Vertragserfüllung</h3>
                      <p className="mb-2">Rechtsgrundlage: Erfüllung des Nutzungsvertrags</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Bereitstellung der Meeting Agent Services</li>
                        <li>Verwaltung des Nutzerkontos</li>
                        <li>Transkription und Analyse von Audiodateien</li>
                        <li>Rechnungsstellung und Zahlungsabwicklung</li>
                        <li>Technischer Support</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">4.2 Berechtigte Interessen</h3>
                      <p className="mb-2">Rechtsgrundlage: Wahrung berechtigter Interessen (Art. 31 Abs. 1 DSG)</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Verbesserung und Weiterentwicklung der Services</li>
                        <li>Gewährleistung der IT-Sicherheit</li>
                        <li>Verhinderung von Missbrauch</li>
                        <li>Analyse zur Serviceoptimierung (anonymisiert)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">4.3 Gesetzliche Pflichten</h3>
                      <p className="mb-2">Rechtsgrundlage: Erfüllung rechtlicher Verpflichtungen</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Aufbewahrung von Rechnungsdaten (Mehrwertsteuergesetz)</li>
                        <li>Meldepflichten gegenüber Behörden</li>
                        <li>Compliance mit regulatorischen Anforderungen</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">5. Aufbewahrung und Löschung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Ihre Daten werden nur so lange aufbewahrt, wie es für die Zweckerfüllung erforderlich ist:
                    </p>
                    
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left">Datenkategorie</th>
                          <th className="border border-gray-300 p-3 text-left">Aufbewahrungsdauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Audio Dateien (Original)</td>
                          <td className="border border-gray-300 p-3">Audio Dateien werden nach 72h gelöscht.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Transkripte und Protokolle</td>
                          <td className="border border-gray-300 p-3">Transkripte und Protokolle werden innerhalb von 7 Tagen gelöscht.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Stammdaten</td>
                          <td className="border border-gray-300 p-3">Bis Vertragsende + 10 Jahre (Geschäftsbücher)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Nutzungs- und Log-Daten</td>
                          <td className="border border-gray-300 p-3">12 Monate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Rechnungsdaten</td>
                          <td className="border border-gray-300 p-3">10 Jahre (gesetzliche Aufbewahrungspflicht)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">6. Datenbearbeitung und -sicherheit</h2>
                  <div className="space-y-4 text-foreground">
                    <h3 className="text-lg font-semibold">6.1 Datenstandort Schweiz</h3>
                    <p>
                      Sämtliche Datenbearbeitung und Speicherung erfolgt ausschliesslich im Arcon Data Center in der Schweiz.
                      Eine Übermittlung von Personendaten ins Ausland findet nicht statt, ausser im Falle der Benutzung der Teams, Zoom, Google Meet Integration oder bei der Verwendung externer KI Modelle (jegliche andere Modelle als die Arcon KI).
                      In diesem Fall werden die Daten auch über externe Systeme verarbeitet, welche sich teilweise im Ausland befinden können (Bspw. könnte Microsoft Teams die Daten weiterverarbeiten). Mit der Funktion &quot;einfache Aufnahme&quot; und dem lokalen KI Modell der
                      ARCON Informatik AG werden die Daten ausschliesslich in der Schweiz im Arcon Data Center verabeitet und gespeichert.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">6.2 Technische Sicherheitsmassnahmen</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Verschlüsselung der Datenübertragung</li>
                      <li>Verschlüsselung gespeicherter Daten</li>
                      <li>Zugriffskontrolle und Berechtigungsmanagement</li>
                      <li>Regelmässige Sicherheitsaudits</li>
                      <li>Automatische Backups mit Verschlüsselung</li>
                      <li>Monitoring und Intrusion Detection</li>
                      <li>etc.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6">6.3 Organisatorische Massnahmen</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Vertraulichkeitserklärungen aller Mitarbeitenden</li>
                      <li>Regelmässige Datenschutzschulungen</li>
                      <li>Incident Response Prozesse</li>
                      <li>etc.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">7. Bekanntgabe von Daten</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Eine Bekanntgabe Ihrer Personendaten erfolgt nur in folgenden Fällen:
                    </p>
                    
                    <h3 className="text-lg font-semibold mt-6">7.1 Auftragsbearbeiter in der Schweiz</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payment-Service-Provider (Stripe Schweiz)</li>
                    </ul>
                    <p className="mt-2">
                      Alle Auftragsbearbeiter sind vertraglich zur Einhaltung der Datenschutzbestimmungen verpflichtet 
                      und wurden sorgfältig ausgewählt.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">7.2 Gesetzliche Verpflichtungen</h3>
                    <p>
                      Bei entsprechender gesetzlicher Grundlage können wir verpflichtet sein, Daten an Behörden 
                      (Steuerverwaltung, Strafverfolgungsbehörden) bekanntzugeben.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">7.3 Wichtiger Hinweis</h3>
                    <p className="font-semibold">
                      Ihre Audio-Inhalte und Transkripte werden niemals für Schulungszwecke verwendet oder 
                      an Dritte weitergegeben. Eine kommerzielle Nutzung Ihrer Daten findet nicht statt.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">8. Ihre Rechte nach DSG</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">Auskunftsrecht (Art. 25 DSG)</h3>
                        <p>Sie können jederzeit Auskunft über die zu Ihrer Person bearbeiteten Daten verlangen.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">Berichtigungsrecht (Art. 32 Abs. 1 DSG)</h3>
                        <p>Sie können die Berichtigung unrichtiger Personendaten verlangen.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">Löschungsrecht (Art. 32 Abs. 1 DSG)</h3>
                        <p>Sie können die Löschung Ihrer Personendaten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">Widerspruchsrecht</h3>
                        <p>Sie können der Bearbeitung Ihrer Daten aus berechtigten Interessen widersprechen.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">Datenherausgabe (Art. 28 DSG)</h3>
                        <p>Sie können verlangen, dass wir Ihnen Ihre Personendaten in einem gängigen elektronischen Format übermitteln.</p>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h3 className="font-semibold mb-2">Geltendmachung Ihrer Rechte</h3>
                      <p>Kontaktieren Sie uns telefonisch unter <strong>+41 41 749 10 00</strong> oder postalisch an die oben genannte Adresse.</p>
                      <p>Wir bearbeiten Ihre Anfrage innerhalb von 3 Tagen.</p>
                    </div>
                  </div>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">9. Cookies und Tracking</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Unsere Website verwendet ausschliesslich technisch notwendige Cookies:
                    </p>
                    
                    <h3 className="text-lg font-semibold">9.1 Notwendige Cookies</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Session-Cookies für die Anmeldung und Sicherheit</li>
                      <li>Funktions-Cookies für die ordnungsgemässe Funktion der Website</li>
                      <li>Sicherheits-Cookies zum Schutz vor CSRF-Angriffen</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">9.2 Kein Tracking</h3>
                    <p>Wir verwenden keine:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Marketing- oder Tracking-Cookies</li>
                      <li>Analyse-Tools von Drittanbietern</li>
                      <li>Social Media Plugins</li>
                      <li>Retargeting- oder Remarketing-Tools</li>
                    </ul>
                  </div>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">10. Beschwerderecht</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:
                    </p>
                    
                    <div className="">
                      <h3 className="font-semibold mb-2">Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB)</h3>
                      <p>Feldeggweg 1</p>
                      <p>3003 Bern</p>
                      <p>Telefon: +41 58 462 43 95</p>
                      <p>E-Mail: info@edoeb.admin.ch</p>
                      <p>Website: www.edoeb.admin.ch</p>
                    </div>
                  </div>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">11. Änderungen der Datenschutzerklärung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der Rechtslage oder 
                      unserer Services anzupassen.
                    </p>
                    <p>
                      Wesentliche Änderungen werden wir Ihnen per E-Mail mitteilen. Die jeweils aktuelle 
                      Version ist auf unserer Website verfügbar.
                    </p>
                    <p>
                      Bei wesentlichen Änderungen, die zusätzliche Bearbeitungszwecke betreffen, 
                      werden wir Ihre Einwilligung einholen.
                    </p>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Kontakt Datenschutz</h3>
                  <div className="">
                    <p><strong>ARCON Informatik AG</strong></p>
                    <p>Datenschutzverantwortlicher</p>
                    <p>Hinterbergstrasse 24</p>
                    <p>6312 Steinhausen</p>
                    <p>Schweiz</p>
                    <p>Telefon: +41 41 749 10 00</p>
                    
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm">
                        <strong>Letzte Aktualisierung:</strong> {new Date().toLocaleDateString('de-CH')}
                      </p>
                      <p className="text-sm">
                        <strong>Version:</strong> 1.0
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}