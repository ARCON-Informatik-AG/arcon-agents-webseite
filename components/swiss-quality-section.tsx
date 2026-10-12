"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SwissQualitySection() {
  const [swissVisible, setSwissVisible] = useState(false);
  const swissHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = swissHeadingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSwissVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderLetters = (text: string, offset: number = 0) => {
    const words = text.split(" ");
    let charIndex = 0;
    return words.map((word, wi) => (
      <span key={wi} className="inline-flex whitespace-nowrap">
        {word.split("").map((char, ci) => {
          const i = charIndex++;
          return (
            <span
              key={ci}
              className="inline-block"
              style={{
                opacity: swissVisible ? 1 : 0,
                transform: swissVisible ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.35s ease ${(offset + i) * 55}ms, transform 0.35s ease ${(offset + i) * 55}ms`,
              }}
            >
              {char}
            </span>
          );
        })}
        {wi < words.length - 1 && (
          <span
            className="inline-block"
            style={{
              opacity: swissVisible ? 1 : 0,
              transition: `opacity 0.35s ease ${(offset + charIndex) * 55}ms`,
            }}
          >
            {"\u00A0"}
          </span>
        )}
        {wi < words.length - 1 && (() => { charIndex++; return null; })()}
      </span>
    ));
  };

  return (
    <section id="daten-vertrauen" className="bg-gray-50 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Card className="border-1 bg-card/50 backdrop-blur-sm shadow-sm animate-fade-in-up">
          <CardContent className="p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-6 px-4 py-1.5 text-sm font-medium"
                >
                  <Image
                    src="/swiss-flag.png"
                    alt="Swiss Flag"
                    width={16}
                    height={16}
                    className="inline-block mr-1"
                  />
                  Swiss Quality
                </Badge>
                <h2 ref={swissHeadingRef} className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  {renderLetters("100% Schweiz. ")}
                  <span className="text-[#1bcb80]">{renderLetters("100% Vertrauen.", "100% Schweiz. ".length)}</span>
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed">
                  <p>
                    Arcon Agents wird vollständig in der Schweiz entwickelt
                    und betrieben. Sämtliche Daten werden in unserem ISO
                    27001 zertifizierten Rechenzentrum in der Schweiz
                    verarbeitet und gespeichert.
                  </p>
                  <p>
                    Als Teil der ARCON Informatik AG verfügen wir über
                    jahrelange Erfahrung im Betrieb sicherer
                    IT-Infrastrukturen. Ihr Vertrauen ist unser höchstes Gut.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <Image
                    src="/swiss-hosting-big.png"
                    alt="Swiss Hosting"
                    width={200}
                    height={100}
                    className="object-contain h-14 sm:h-18 w-auto"
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/ISO-27001-Zert-red.png"
                    alt="ISO 27001 Zertifizierung"
                    width={120}
                    height={120}
                    className="object-contain h-20 sm:h-24 w-auto"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
