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
            Stand: 30.9.2026
          </p>
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
                      Verantwortlicher für die Bearbeitung personenbezogener Daten im Sinne des schweizerischen Datenschutzgesetzes (DSG) ist:
                    </p>
                    <div>
                      <p><strong>ARCON Informatik AG</strong></p>
                      <p>Hinterbergstrasse 24</p>
                      <p>6312 Steinhausen</p>
                      <p>Schweiz</p>
                      <p>E-Mail: servicedesk@arcon.ch</p>
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
                        <li>E-Mail-Adresse und Zugangsdaten (Anmeldung)</li>
                        <li>Zugehörigkeit zu einer Organisation («Tenant») inkl. Rolle (Owner/Admin/Member)</li>
                        <li>Optional: zweiter Faktor (Zwei-Faktor-Authentisierung) zur Kontoabsicherung</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.2 Nutzungsdaten</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Anmelde- und Sitzungsdaten</li>
                        <li>IP-Adresse, Browser-Informationen und Server-Log-Dateien</li>
                        <li>Nutzung einzelner Funktionen (z. B. Websuche, Reasoning-Stufe, Inkognito-Modus)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.3 Chat- und Inhaltsdaten</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Unterhaltungen und einzelne Nachrichten (Inhalt, Quellenangaben)</li>
                        <li>Im <strong>Inkognito-Modus</strong> werden weder die Unterhaltung noch einzelne Nachrichten gespeichert</li>
                        <li>Angehängte Dateien/Bilder zu Nachrichten (Dateiname, ggf. verkleinerte Bild-Vorschau)</li>
                        <li>Im Chat ad-hoc hochgeladene Kontextdateien (nur für die aktuelle Antwort verwendet, nicht dauerhaft gespeichert)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.4 Wissensdatenbank / hochgeladene Dokumente</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Dauerhaft hochgeladene Dokumente (PDF, Word, Excel, Text) inkl. extrahiertem Text und Metadaten</li>
                        <li>Semantische Vektor-Repräsentationen des Dokumenteninhalts zur Suchfunktion (RAG)</li>
                        <li>Für Analyse-/Dashboard-Funktionen hochgeladene strukturierte Datensätze</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.5 Personalisierungs- und Profildaten</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Individuelle Personalisierungsregeln sowie die Einstellung «Erinnerungen aktiv/deaktiviert»</li>
                        <li>Automatisch aus abgeschlossenen Unterhaltungen extrahierte Nutzer-Erinnerungen zu Kommunikationsstil, Präferenzen und Profilfakten</li>
                        <li>Gespeicherte Prompt-Vorlagen</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">3.6 Von Ihnen konfigurierte Agenten</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Agenten-Konfigurationen (Name, Prompt, gewähltes Modell, Temperatur, Websuche an/aus)</li>
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
                        <li>Bereitstellung von Arcon Agent und Verwaltung des Nutzerkontos</li>
                        <li>Ausführung von Chat-Anfragen inkl. Beantwortung durch die Arcon KI oder ein von Ihnen gewähltes Modell</li>
                        <li>Durchsuchen und Bereitstellen hochgeladener Dokumente (Wissensdatenbank/RAG)</li>
                        <li>Erstellung von Diagrammen, Dashboards und Word-Exporten auf Ihre Anfrage</li>
                        <li>Technischer Support</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">4.2 Berechtigte Interessen</h3>
                      <p className="mb-2">Rechtsgrundlage: Wahrung berechtigter Interessen (Art. 31 Abs. 1 DSG)</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Verbesserung und Weiterentwicklung der Services</li>
                        <li>Automatische Extraktion von Personalisierungs-Erinnerungen zur Verbesserung der Antwortqualität (kann pro Nutzer deaktiviert werden)</li>
                        <li>Gewährleistung der IT-Sicherheit</li>
                        <li>Verhinderung von Missbrauch</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">4.3 Einwilligung / Nutzersteuerung</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Aktivierung der Websuche pro Agent und pro Anfrage</li>
                        <li>Aktivierung des Inkognito-Modus (keine Speicherung des Gesprächs)</li>
                        <li>Deaktivierung der automatischen Erinnerungsfunktion in den Einstellungen</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">4.4 Gesetzliche Pflichten</h3>
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
                      Ihre Daten werden grundsätzlich so lange aufbewahrt, bis sie aktiv gelöscht werden:
                    </p>
                    
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left">Datenkategorie</th>
                          <th className="border border-gray-300 p-3 text-left">Aufbewahrung</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Unterhaltungen/Nachrichten (nicht inkognito)</td>
                          <td className="border border-gray-300 p-3">Bis zur manuellen Löschung durch den Nutzer</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Inkognito-Chats</td>
                          <td className="border border-gray-300 p-3">Werden nicht gespeichert</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Hochgeladene Dokumente/Wissensdatenbank</td>
                          <td className="border border-gray-300 p-3">Bis zur manuellen Löschung durch Nutzer/Admin</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Nutzer-«Erinnerungen»</td>
                          <td className="border border-gray-300 p-3">Bis zur manuellen Löschung bzw. Deaktivierung der Funktion</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Kontodaten</td>
                          <td className="border border-gray-300 p-3">Bis zur Löschung des Kontos (Selbstlöschung über Kontoseite möglich)</td>
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
                      Sämtliche Datenbearbeitung und Speicherung erfolgt ausschliesslich in der Schweiz: Reverse Proxies, Applikationsserver, Datenbank sowie die Arcon KI (unser eigenes Sprachmodell) werden vollständig innerhalb der Schweiz betrieben und gehostet. Eine Übermittlung von Personendaten ins Ausland findet <strong>nicht</strong> statt – mit einer Ausnahme: Wenn Sie für einen Agenten bewusst ein <strong>externes Modell über OpenRouter</strong> auswählen (z. B. von Google, Anthropic oder OpenAI) oder die <strong>Websuche</strong> aktivieren, werden die betreffende Anfrage und die Modellantwort zur Verarbeitung an den externen Anbieter übermittelt. Diese Anbieter können ihre Infrastruktur auch im Ausland betreiben. Mit der Arcon KI und ohne aktivierte Websuche verbleiben Ihre Daten ausschliesslich in der Schweiz.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">6.2 Technische Sicherheitsmassnahmen</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Verschlüsselung der Datenübertragung</li>
                      <li>Verschlüsselung gespeicherter Daten</li>
                      <li>Zugriffskontrolle und Berechtigungsmanagement</li>
                      <li>Regelmässige Sicherheitsaudits</li>
                      <li>Automatische Backups mit Verschlüsselung</li>
                      <li>Monitoring und Intrusion Detection</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6">6.3 Organisatorische Massnahmen</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Vertraulichkeitserklärungen aller Mitarbeitenden</li>
                      <li>Regelmässige Datenschutzschulungen</li>
                      <li>Incident Response Prozesse</li>
                    </ul>
                  </div>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">7. Bekanntgabe von Daten</h2>
                  <div className="space-y-4 text-foreground">
                    <h3 className="text-lg font-semibold">7.1 Auftragsbearbeiter in der Schweiz</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payment-Service-Provider (Stripe Schweiz)</li>
                    </ul>
                    <p className="mt-2">
                      Alle Auftragsbearbeiter sind vertraglich zur Einhaltung der Datenschutzbestimmungen verpflichtet und wurden sorgfältig ausgewählt.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">7.2 Externe Verarbeitung bei Nutzung externer Modelle</h3>
                    <p>
                      Nur falls Sie ein externes Modell über OpenRouter auswählen oder die Websuche aktivieren: OpenRouter und der jeweils gewählte Modellanbieter.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">7.3 Gesetzliche Verpflichtungen</h3>
                    <p>
                      Bei entsprechender gesetzlicher Grundlage können wir verpflichtet sein, Daten an Behörden bekanntzugeben.
                    </p>

                    <h3 className="text-lg font-semibold mt-6">7.4 Wichtiger Hinweis</h3>
                    <p>
                      Ihre Chat-Inhalte, Dokumente und Anhänge werden niemals für Schulungszwecke der Arcon KI verwendet oder an Dritte weitergegeben. Eine kommerzielle Nutzung Ihrer Daten findet nicht statt. Bei Verwendung externer Modelle gelten zusätzlich die Datenschutzbestimmungen des jeweiligen Anbieters.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">8. Ihre Rechte nach DSG</h2>
                  <div className="space-y-4 text-foreground">
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
                        <p>Sie können selbstständig über Ihr Konto die Löschung Ihres Kontos veranlassen sowie einzelne Unterhaltungen, Dokumente oder Erinnerungen löschen, soweit keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">Widerspruchsrecht</h3>
                        <p>Sie können der Bearbeitung Ihrer Daten aus berechtigten Interessen widersprechen, z. B. durch Deaktivieren der automatischen Erinnerungsfunktion in den Einstellungen.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">Datenherausgabe (Art. 28 DSG)</h3>
                        <p>Sie können verlangen, dass wir Ihnen Ihre Personendaten in einem gängigen elektronischen Format übermitteln.</p>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h3 className="font-semibold mb-2">Geltendmachung Ihrer Rechte</h3>
                      <p>Kontaktieren Sie uns unter: servicedesk@arcon.ch</p>
                      <p>Wir bearbeiten Ihre Anfrage innerhalb von 3. Tagen.</p>
                    </div>
                  </div>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">9. Cookies und Tracking</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Die Anmeldesitzung wird technisch notwendig im Browser gespeichert, um Sie eingeloggt zu halten.
                    </p>
                    
                    <h3 className="text-lg font-semibold">9.1 Notwendige Cookies/Speicherung</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sitzungsdaten für Anmeldung und Sicherheit</li>
                      <li>Funktionsdaten für die ordnungsgemässe Funktion der Anwendung</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">9.2 Kein Tracking</h3>
                    <p>Wir verwenden keine:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Marketing- oder Tracking-Cookies</li>
                      <li>Analyse-Tools von Drittanbietern</li>
                      <li>Social-Media-Plugins</li>
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
                      <p>E-Mail: <a href="mailto:info@edoeb.admin.ch" className="underline">info@edoeb.admin.ch</a></p>
                      <p>Website: <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="underline">www.edoeb.admin.ch</a></p>
                    </div>
                  </div>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">11. Änderungen der Datenschutzerklärung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der Rechtslage oder unserer Services anzupassen. Wesentliche Änderungen werden wir Ihnen mitteilen. Bei wesentlichen Änderungen, die zusätzliche Bearbeitungszwecke betreffen, werden wir Ihre Einwilligung einholen.
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
                    <p>E-Mail: servicedesk@arcon.ch</p>
                    <p>Telefon: +41 41 749 10 00</p>
                    
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm">
                        <strong>Letzte Aktualisierung:</strong> 30.9.2026
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