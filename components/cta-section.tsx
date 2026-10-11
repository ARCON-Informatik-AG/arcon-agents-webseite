"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ButtonArrowWhite from "@/components/ui/button-arrow-white";

interface CtaSectionProps {
  description?: string;
}

export default function CtaSection({
  description = "Starten Sie noch heute mit Ihrer kostenlosen Testphase. Keine Kreditkarte erforderlich.",
}: CtaSectionProps) {
  const [ctaVisible, setCtaVisible] = useState(false);
  const ctaHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ctaHeadingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderCtaLetters = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block"
        style={{
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "translateY(0)" : "translateY(8px)",
          transition: `opacity 0.35s ease ${i * 40}ms, transform 0.35s ease ${i * 40}ms`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="px-6 pb-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Card className="border-0 bg-gradient-to-r from-[#1bcb80] via-[#00b36b] to-[#00a05c] text-white">
          <CardContent className="p-12 text-center">
            <h2 ref={ctaHeadingRef} className="text-3xl font-bold sm:text-4xl">
              {renderCtaLetters("Bereit für intelligentere Meetings?")}
            </h2>
            <p className="mt-4 text-lg text-white">{description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <ButtonArrowWhite
                href="/welcome"
                name="Kostenlos testen"
              />
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8"
                onClick={() =>
                  (window.location.href =
                    "https://outlook.office.com/bookwithme/user/e175b8ddd9de44d1876d015d64bf0088@arcon.ch/meetingtype/QkUmFBh-WUmtxFymyygOUA2?anonymous&ismsaljsauthenabled&ep=mcard")
                }
              >
                Demo buchen
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
