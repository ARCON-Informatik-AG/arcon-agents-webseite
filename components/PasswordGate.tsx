"use client";
import React, { useEffect, useState } from "react";
import { ACCESS_STORAGE_KEY } from "@/lib/constants";
import { PasswordOverlay } from "./PasswordOverlay";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  // null = not yet checked, avoids flashing the overlay for already-unlocked visitors
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    setUnlocked(localStorage.getItem(ACCESS_STORAGE_KEY) === "1");
  }, []);

  if (unlocked === null) return null;
  if (!unlocked) return <PasswordOverlay onUnlock={() => setUnlocked(true)} />;
  return <>{children}</>;
}
