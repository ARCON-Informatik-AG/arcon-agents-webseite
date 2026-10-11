"use client";

import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

interface MaintenanceBannerProps {
  message?: string;
}

const DEFAULT_MESSAGE =
  "Am Montag 14.09.2029 von 20:00 Uhr - 22:00 Uhr werden Wartungsarbeiten durchgeführt. In diesem Zeitraum steht der Meeting Agent nicht zur Verfügung. Wir danken für Ihr Verständnis.";

export default function MaintenanceBanner({
  message = DEFAULT_MESSAGE,
}: MaintenanceBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="status"
      className="w-full border-b border-amber-200/60 bg-amber-50/90 backdrop-blur-sm animate-fade-in dark:border-amber-800/30 dark:bg-amber-950/60"
    >
      <div className="mx-auto flex w-fit items-center justify-center gap-3 whitespace-nowrap px-4 py-3 text-left sm:px-6 lg:px-12">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <p className="text-sm leading-snug text-amber-900 dark:text-amber-100">
          <span className="font-semibold">Wartungsarbeiten geplant: </span>
          {message}
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Hinweis schliessen"
          className="shrink-0 rounded-md p-1 text-amber-600 transition-colors hover:bg-amber-500/10 hover:text-amber-800 dark:text-amber-400 dark:hover:bg-amber-500/20 dark:hover:text-amber-200"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
