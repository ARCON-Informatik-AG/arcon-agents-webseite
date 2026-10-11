"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/footer";

export default function ImpressumPage() {
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
            Impressum
          </h1>
          <p className="text-lg text-foreground mb-4">
            Angaben gemäss schweizerischem Recht über den Anbieter dieser Website
          </p>
          <p className="text-sm text-foreground">
            Stand: {new Date().toLocaleDateString('de-CH')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Card className="border">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-12">
                
                {/* Section 1 - Company Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Anbieter</h2>
                  <div className="space-y-4 text-foreground">
                    <div>
                      <p><strong>ARCON Informatik AG</strong></p>
                      <p>Hinterbergstrasse 24</p>
                      <p>6312 Steinhausen</p>
                      <p>Schweiz</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p>Telefon: +41 41 749 10 00</p>
                      <p>Handelsregister: Kanton Zug</p>
                      <p>CHE-101.538.745</p>
                    </div>
                  </div>
                </div>

                {/* Section 2 - Disclaimer */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Haftungsausschluss</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Die ARCON Informatik AG bemüht sich, die Informationen auf dieser Website 
                      aktuell und korrekt zu halten. Dennoch kann keine Gewähr für die 
                      Vollständigkeit, Richtigkeit und Aktualität übernommen werden.
                    </p>
                    <p>
                      Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                      Eine weitergehende Haftung ist ausgeschlossen, soweit gesetzlich zulässig.
                    </p>
                  </div>
                </div>

                {/* Section 3 - Applicable Law */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Anwendbares Recht</h2>
                  <div className="space-y-4 text-foreground">
                    <p>
                      Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist Steinhausen, Schweiz.
                    </p>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Kontakt</h3>
                  <div className="text-foreground">
                    <p><strong>ARCON Informatik AG</strong></p>
                    <p>Hinterbergstrasse 24</p>
                    <p>6312 Steinhausen, Schweiz</p>
                    <p>Telefon: +41 41 749 10 00</p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t">
                    <p className="text-sm">
                      <strong>Letzte Aktualisierung:</strong> {new Date().toLocaleDateString('de-CH')}
                    </p>
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