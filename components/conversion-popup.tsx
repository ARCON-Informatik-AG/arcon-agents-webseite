"use client";

import React from "react";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "ma-popup-v1";
const TIMER_DELAY = 15_000;

function isDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "dismissed";
  } catch {
    return false;
  }
}

function markDismissed() {
  try {
    localStorage.setItem(STORAGE_KEY, "dismissed");
  } catch {
    // ignore (private mode, quota, etc.)
  }
}

export default function ConversionPopup() {
  const [open, setOpen] = React.useState(false);
  const hasOpened = React.useRef(false);

  function show() {
    if (hasOpened.current || isDismissed()) return;
    hasOpened.current = true;
    setOpen(true);
  }

  function dismiss() {
    setOpen(false);
    markDismissed();
  }

  // Don't show on /welcome
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname === "/welcome") return;

    // 15-second timer trigger
    const timer = setTimeout(show, TIMER_DELAY);

    // Exit intent trigger
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        show();
      }
    }
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ESC key to dismiss
  React.useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Focus close button when opened
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="fixed left-1/2 top-1/2 z-[201] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-[0_32px_80px_rgba(0,0,0,0.25)] animate-fade-in-up"
      >
        {/* Header section with gradient */}
        <div className="relative bg-gradient-to-br from-[#0d1f14] to-[#1a3d28] px-8 pt-10 pb-8">
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={dismiss}
            aria-label="Schließen"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-white/50 transition-all duration-150 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Icon badge */}
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1bcb80]/20 ring-1 ring-[#1bcb80]/30">
            <img
              src="/ARCON_Element_RGB_Green-Light.svg"
              alt=""
              aria-hidden="true"
              className="h-7 w-7"
            />
          </div>

          <h2
            id="popup-title"
            className="text-2xl font-bold leading-tight text-white"
          >
            Nie wieder ein<br />Meeting-Protokoll schreiben
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 pt-7 pb-8">
          <p className="mb-6 text-base leading-relaxed text-gray-900">
            Meeting Agent transkribiert, fasst zusammen und erstellt das
            Protokoll. Testen Sie kostenlos und uneingeschränkt für einen ganzen Monat!
          </p>

          {/* Feature bullets */}
          <ul className="mb-7 space-y-2.5 text-base text-gray-900">
            {[
              "Transkriptionen auf Schweizerdeutsch",
              "KI-Zusammenfassung & Aufgabenerkennung",
              "100% DSG-konform",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-900 text-base">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1bcb80]/15">
                  <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 text-[#1bcb80]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Primary CTA */}
          <a
            href="/welcome"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1bcb80] px-6 py-4 text-base font-semibold text-white shadow-[0_4px_20px_rgba(27,203,128,0.35)] transition-all duration-200 hover:bg-[#00b36b] hover:shadow-[0_4px_24px_rgba(27,203,128,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1bcb80] focus-visible:ring-offset-2"
          >
            Kostenlos testen
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </>
  );
}
