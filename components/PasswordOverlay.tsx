"use client";
import React, { useState } from "react";
import { ACCESS_PASSWORD, ACCESS_STORAGE_KEY } from "@/lib/constants";

export function PasswordOverlay({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === ACCESS_PASSWORD) {
      localStorage.setItem(ACCESS_STORAGE_KEY, "1");
      onUnlock();
    } else {
      setError("Falsches Passwort");
    }
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.95)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "#fff"
    }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 280 }}>
        <label htmlFor="pw">Passwort erforderlich</label>
        <input
          id="pw"
          type="password"
          autoComplete="current-password"
          value={input}
          onChange={e => { setInput(e.target.value); setError(""); }}
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          autoFocus
        />
        <button type="submit" style={{ padding: 8, borderRadius: 4, background: "#222", color: "#fff", border: "none" }}>Einloggen</button>
        {error && <div style={{ color: "#ff6b6b" }}>{error}</div>}
      </form>
    </div>
  );
}
