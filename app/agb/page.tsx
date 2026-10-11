"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-lg text-foreground mb-4">
            Rechtliche Bestimmungen für die Nutzung des Arcon Agents Services
          </p>
          <p className="text-sm text-foreground">
            Stand: {new Date().toLocaleDateString('de-CH')}
          </p>
          <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Hinweis für die Veröffentlichung:</strong> Dieser Text
            stammt noch aus dem Vorgängerprodukt Meeting Agent (Audio-Transkription,
            Abonnemente) und beschreibt nicht die Nutzung von Arcon Agents. Er muss
            vor dem Launch durch die Rechts-/Geschäftsleitung inhaltlich überarbeitet werden.
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Card className="shadow-sm bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                
                {/* Section 1 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">1. Geltungsbereich</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der ARCON Informatik AG (nachfolgend &ldquo;Anbieter&rdquo;) und ihren Kunden (nachfolgend &ldquo;Nutzer&rdquo;) über die Nutzung des KI-basierten Meeting Agent Services.
                    </p>
                    <p>
                      Der Meeting Agent ist ein Service zur automatischen Transkription, Analyse und Zusammenfassung von Meetings, optimiert für Schweizerdeutsch.
                    </p>
                    <p>
                      Mit der Registrierung und Nutzung des Services akzeptiert der Nutzer diese AGB in ihrer jeweils gültigen Fassung.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">2. Vertragsschluss und Registrierung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Der Vertrag kommt durch die erfolgreiche Registrierung des Nutzers und die Bestätigung durch den Anbieter zustande.
                    </p>
                    <p>
                      Der Nutzer ist verpflichtet, bei der Registrierung vollständige und korrekte Angaben zu machen und Änderungen seiner Daten unverzüglich mitzuteilen.
                    </p>
                    <p>
                      Der Anbieter behält sich vor, Registrierungen ohne Angabe von Gründen abzulehnen.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">3. Leistungen und Verfügbarkeit</h2>
                  <div className="space-y-4 text-foreground">
                    <p>Der Anbieter stellt dem Nutzer den Meeting Agent Service zur Verfügung, insbesondere:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>KI-basierte Transkription von Audio-Dateien und Live-Meetings</li>
                      <li>Automatische Generierung von Meeting-Zusammenfassungen</li>
                      <li>Extraktion von Aufgaben und Erkenntnissen</li>
                      <li>Export-Funktionen (z.B. Word, PDF)</li>
                      <li>Schweizerdeutsch-optimierte Spracherkennung</li>
                    </ul>
                    <p>
                      Der Service ist grundsätzlich 24/7 verfügbar. Geplante Wartungsarbeiten werden rechtzeitig angekündigt. Eine Verfügbarkeit von 100% kann nicht garantiert werden.
                    </p>
                    <p>
                      Der Anbieter behält sich vor, den Service jederzeit zu erweitern, zu ändern oder einzustellen.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">4. Preise und Zahlungsbedingungen</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Die Preise richten sich nach der jeweils gültigen Preisliste auf der Website. Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive gesetzlicher Mehrwertsteuer.
                    </p>
                    <p>
                      Die Abrechnung erfolgt monatlich im Voraus für Abonnements sowie verbrauchsabhängig für Pay-per-Use-Modelle.
                    </p>
                    <p>
                      Bei Zahlungsverzug kann der Anbieter den Zugang sperren und Mahngebühren erheben.
                    </p>
                    <p>
                      Preisänderungen werden mindestens 30 Tage im Voraus angekündigt.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">5. Datenschutz und Datensicherheit</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Der Schutz der Nutzerdaten hat höchste Priorität. Sämtliche Informationen zum Thema Datenschutz finden Sie in der <Link href="/datenschutz" className="text-primary underline">Datenschutzerklärung</Link>.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">6. Pflichten des Nutzers</h2>
                  <div className="space-y-4 text-foreground">
                    <p>Der Nutzer verpflichtet sich:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Den Service nur für rechtmässige Zwecke zu verwenden</li>
                      <li>Sicherzustellen, dass alle Meetingteilnehmenden der Verarbeitung ihrer Audio-Daten zustimmen</li>
                      <li>Keine urheberrechtlich geschützten oder vertraulichen Inhalte Dritter ohne Berechtigung zu verarbeiten</li>
                      <li>Zugangsdaten geheim zu halten und Missbrauch unverzüglich zu melden</li>
                      <li>Die geltenden Gesetze und diese AGB einzuhalten</li>
                    </ul>
                    <p>
                      Bei Verstössen kann der Anbieter den Zugang sperren oder den Vertrag fristlos kündigen.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">7. Haftung und Gewährleistung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Der Anbieter haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. Eine Haftung für leichte Fahrlässigkeit ist ausgeschlossen.
                    </p>
                    <p>
                      Es wird keine Gewähr für die Richtigkeit, Vollständigkeit oder rechtliche Verwendbarkeit der erzeugten Transkriptionen oder Zusammenfassungen übernommen. Der Nutzer ist verpflichtet, die Ergebnisse selbst zu prüfen.
                    </p>
                    <p>
                      Der Anbieter haftet nicht für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden.
                    </p>
                    <p>
                      Der Meeting Agent ist ein KI-basierter Service und ersetzt keine menschliche Prüfung.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">8. Kündigung</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Abonnements können mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.
                    </p>
                    <p>
                      Das Recht zur ausserordentlichen Kündigung bleibt unberührt.
                    </p>
                    <p>
                      Nach einer Kündigung werden alle Nutzerdaten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">9. Änderung der AGB</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Der Anbieter kann diese AGB jederzeit ändern. Änderungen werden mindestens 30 Tage vor Inkrafttreten per E-Mail mitgeteilt.
                    </p>
                    <p>
                      Widerspricht der Nutzer den Änderungen nicht innerhalb von 30 Tagen, gelten diese als angenommen.
                    </p>
                    <p>
                      Widerspricht der Nutzer, kann der Anbieter den Vertrag auf den Zeitpunkt des Inkrafttretens der Änderungen kündigen.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">10. Schlussbestimmungen</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Es gilt schweizerisches Recht unter Ausschluss des UN-Kaufrechts.
                    </p>
                    <p>
                      Gerichtsstand ist der Sitz des Anbieters.
                    </p>
                    <p>
                      Sollten einzelne Bestimmungen dieser AGB ungültig sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
                    </p>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Kontakt</h3>
                  <div className="">
                    <p><strong>ARCON Informatik AG</strong></p>
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