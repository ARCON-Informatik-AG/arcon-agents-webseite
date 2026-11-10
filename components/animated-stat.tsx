"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimatedPrice } from "@/hooks/use-animated-price";

type AnimatedStatProps = {
  value: string;
  className?: string;
};

export default function AnimatedStat({ value, className }: AnimatedStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  // Count up from 0 once the stat is in view
  const display = useAnimatedPrice(visible ? target : 0, 1200);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timeout = setTimeout(() => setVisible(true), 200);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {match ? `${display}${suffix}` : value}
    </p>
  );
}
