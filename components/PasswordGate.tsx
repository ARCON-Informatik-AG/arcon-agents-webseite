"use client";
import React, { useEffect, useState } from "react";
import { PasswordOverlay } from "./PasswordOverlay";

const STORAGE_KEY = "maw_pw";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    }
  }, []);

  return (
    <>
      {!unlocked && <PasswordOverlay onUnlock={() => setUnlocked(true)} />}
      {unlocked && children}
    </>
  );
}
