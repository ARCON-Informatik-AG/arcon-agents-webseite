"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "ma-consent-v1";
export const CONSENT_REOPEN_EVENT = "ma-consent:reopen";

type StoredConsent = {
  analytics: ConsentChoice;
  ads: ConsentChoice;
  timestamp: string;
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(choice: ConsentChoice) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}

function readStored(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredConsent;
  } catch {
    return null;
  }
}

function writeStored(choice: ConsentChoice) {
  try {
    const value: StoredConsent = {
      analytics: choice,
      ads: choice,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // ignore (private mode, etc.)
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const stored = readStored();
    if (stored) {
      // Re-apply previous decision on every load so Consent Mode stays in sync.
      pushConsent(stored.analytics);
      return;
    }
    setVisible(true);
  }, []);

  React.useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    writeStored(choice);
    pushConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einwilligung"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-background/95 p-5 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm leading-6 text-foreground/90">
            <p className="font-semibold text-foreground">
              Wir respektieren Ihre Privatsphäre
            </p>
            <p className="mt-1 text-gray-900">
              Wir verwenden Cookies und ähnliche Technologien für Analyse und
              Marketing, um unsere Website zu verbessern. Sie können jederzeit
              widerrufen. Details in der{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-4 hover:text-[#1bcb80] text-gray-900"
                target="_blank"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleChoice("denied")}
            >
              Ablehnen
            </Button>
            <Button size="lg" className="bg-[#1bcb80] hover:bg-[#17b872]" onClick={() => handleChoice("granted")}>
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
