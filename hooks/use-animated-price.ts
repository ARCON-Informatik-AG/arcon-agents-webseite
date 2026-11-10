"use client";

import { useEffect, useRef, useState } from "react";

// Lightweight animated number hook — no extra dependency
export function useAnimatedPrice(target: number | null, duration = 400) {
  const [display, setDisplay] = useState(target);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef(target);

  useEffect(() => {
    fromRef.current = display;
    startRef.current = null;
    let raf: number;

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const from = fromRef.current ?? target ?? 0;
      const to = target ?? 0;
      const current = Math.round(from + (to - from) * progress);
      setDisplay(current);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return display;
}
