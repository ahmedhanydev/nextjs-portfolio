"use client";

import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

// Custom dot + trailing ring cursor, plus magnetic hover on [data-magnetic] elements
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return;
    const body = document.body;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    body.classList.add("cursor");

    let mx = -99, my = -99, rx = -99, ry = -99, raf = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      const card = !!t.closest(".p-card");
      const hero = !!t.closest(".hero") && !t.closest("a,button");
      body.classList.toggle("on-card", card);
      body.classList.toggle("on-hero", hero && !card);
      body.classList.toggle("on-link", !card && !!t.closest("a,button,summary,.box li"));
    };

    const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const pull = (e: MouseEvent) => {
      const b = e.currentTarget as HTMLElement;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    };
    const release = (e: MouseEvent) => ((e.currentTarget as HTMLElement).style.transform = "");

    addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    magnets.forEach((b) => {
      b.addEventListener("mousemove", pull);
      b.addEventListener("mouseleave", release);
    });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      magnets.forEach((b) => {
        b.removeEventListener("mousemove", pull);
        b.removeEventListener("mouseleave", release);
      });
      body.classList.remove("cursor", "on-card", "on-hero", "on-link");
    };
  }, []);

  return (
    <>
      <div className="c-dot" aria-hidden="true" ref={dotRef} />
      <div className="c-ring" aria-hidden="true" ref={ringRef}>
        <span>Open</span>
      </div>
    </>
  );
}
