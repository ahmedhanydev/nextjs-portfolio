"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { projects, site } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

const pad = (n: number) => String(n).padStart(2, "0");
const github = site.socials.find((s) => s.label === "GitHub")!.href;

// Vertical scroll drives a horizontal track while the section is pinned (desktop only)
export default function Work() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const outer = outerRef.current!, track = trackRef.current!, bar = barRef.current!;
    const reduce = prefersReducedMotion();
    let on = false;

    const onScroll = () => {
      if (!on) return;
      const r = outer.getBoundingClientRect(), max = track.scrollWidth - innerWidth;
      const p = Math.min(Math.max(-r.top / (outer.offsetHeight - innerHeight), 0), 1);
      track.style.transform = `translateX(${-p * max}px)`;
      bar.style.transform = `scaleX(${p})`;
    };
    const layout = () => {
      on = !reduce && innerWidth > 900;
      document.body.classList.toggle("no-h", !on);
      outer.style.height = on ? track.scrollWidth - innerWidth + innerHeight + "px" : "auto";
      if (!on) track.style.transform = "";
      onScroll();
    };
    // Keyboard: when tabbing through cards, scroll the page so the focused card is in view
    const onFocus = (e: FocusEvent) => {
      if (!on) return;
      const card = (e.target as Element).closest<HTMLElement>(".p-card");
      if (!card) return;
      const max = track.scrollWidth - innerWidth;
      const p = Math.min(Math.max((card.offsetLeft - 60) / max, 0), 1);
      scrollTo({ top: outer.offsetTop + p * (outer.offsetHeight - innerHeight), behavior: reduce ? "auto" : "smooth" });
    };

    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", layout);
    addEventListener("load", layout);
    track.addEventListener("focusin", onFocus);
    layout();
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", layout);
      removeEventListener("load", layout);
      track.removeEventListener("focusin", onFocus);
      document.body.classList.remove("no-h");
    };
  }, []);

  return (
    <section id="work" aria-labelledby="work-h">
      <div className="h-outer" ref={outerRef}>
        <div className="h-sticky">
          <div className="wrap head">
            <div>
              <span className="idx mono">01 / Selected work</span>
              <h2 id="work-h">
                Things I’ve <span className="it">shipped</span>
              </h2>
            </div>
            <p>Client platforms and personal builds — all live. Scroll to move through them.</p>
          </div>

          <div className="h-track" ref={trackRef}>
            {projects.map((p, i) => (
              <a key={p.title} className="p-card" href={p.href} target="_blank" rel="noopener">
                <div className="shot">
                  <Image src={p.img} width={1200} height={900} sizes="(max-width: 900px) 100vw, 560px" alt={`${p.title} website`} />
                  <span className="num">
                    {pad(i + 1)} / {pad(projects.length)}
                  </span>
                  <span className="desc">{p.desc}</span>
                  <span className="go">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
                <div className="row">
                  <h3>{p.title}</h3>
                  <span className="kind">{p.kind}</span>
                </div>
                <div className="stack mono">{p.stack}</div>
              </a>
            ))}
            <a className="p-card more" href={github} target="_blank" rel="noopener">
              <div className="shot">
                <span>
                  More on <span className="or">GitHub</span>
                </span>
              </div>
              <div className="row">
                <h3>Nifty, MTrend…</h3>
                <span className="kind">Personal builds</span>
              </div>
            </a>
          </div>

          <div className="h-progress" aria-hidden="true">
            <i ref={barRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
