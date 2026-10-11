"use client";

import React from "react";
import { CONSENT_REOPEN_EVENT } from "@/components/consent-banner";

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT))}
      className="hover:text-[#1bcb80] transition-colors text-left cursor-pointer"
    >
      Cookies
    </button>
  );
}
