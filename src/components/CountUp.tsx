"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  delay?: number;
  duration?: number;
};

// Server-renders the final value, then counts up from 0 (easeOutQuart) after `delay`
export default function CountUp({ value, suffix = "", delay = 800, duration = 1800 }: CountUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    el.textContent = "0" + suffix;
    let raf = 0;
    const timer = setTimeout(() => {
      const t0 = performance.now();
      const step = (t: number) => {
        const k = Math.min((t - t0) / duration, 1);
        el.textContent = Math.round(value * (1 - Math.pow(1 - k, 4))) + suffix;
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      el.textContent = value + suffix;
    };
  }, [value, suffix, delay, duration]);

  return (
    <strong ref={ref}>
      {value}
      {suffix}
    </strong>
  );
}
