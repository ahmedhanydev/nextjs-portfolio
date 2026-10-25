"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects, site } from "@/data/portfolio";
import { prefersReducedMotion } from "@/lib/motion";

const pad = (n: number) => String(n).padStart(2, "0");
const github = site.socials.find((s) => s.label === "GitHub")!.href;
const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");
const total = projects.length + 1; // + the "More on GitHub" card

const Arrow = ({ flip }: { flip?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// Text under each card: category, title with its link, description, stack tags
const CardInfo = ({ kind, title, href, desc, stack }: { kind: string; title: string; href: string; desc: string; stack: string[] }) => (
  <>
    <span className="p-kind mono">{kind}</span>
    <div className="row">
      <h3>{title}</h3>
      <span className="p-host mono">{href} ↗</span>
    </div>
    <p className="p-desc">{desc}</p>
    <ul className="p-stack">
      {stack.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
    <span className="sr-only"> (opens in a new tab)</span>
  </>
);

// Desktop: vertical scroll drives a horizontal track while the section is pinned.
// Phones: a native swipe carousel. Both share the counter, progress bar and prev/next buttons.
export default function Work() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const goRef = useRef<(step: number) => void>(() => {});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const outer = outerRef.current!, track = trackRef.current!, bar = barRef.current!;
    const reduce = prefersReducedMotion();
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    const cards = Array.from(track.querySelectorAll<HTMLElement>(".p-card"));
    const offsetOf = (i: number) => cards[i].offsetLeft - cards[0].offsetLeft;
    let on = false, current = 0;

    // Which card is at the start of the track, given how far it has moved
    const sync = (pos: number, max: number) => {
      bar.style.transform = `scaleX(${max > 0 ? pos / max : 0})`;
      let i = pos >= max - 2 ? cards.length - 1 : 0;
      if (i === 0) cards.forEach((_, k) => { if (Math.abs(offsetOf(k) - pos) < Math.abs(offsetOf(i) - pos)) i = k; });
      if (i !== current) setIndex((current = i));
    };
    const onScroll = () => {
      if (!on) return;
      const r = outer.getBoundingClientRect(), max = track.scrollWidth - innerWidth;
      const p = Math.min(Math.max(-r.top / (outer.offsetHeight - innerHeight), 0), 1);
      track.style.transform = `translateX(${-p * max}px)`;
      sync(p * max, max);
    };
    const onTrackScroll = () => !on && sync(track.scrollLeft, track.scrollWidth - track.clientWidth);
    const layout = () => {
      on = !reduce && innerWidth > 900;
      document.body.classList.toggle("no-h", !on);
      outer.style.height = on ? track.scrollWidth - innerWidth + innerHeight + "px" : "auto";
      if (!on) track.style.transform = "";
      on ? onScroll() : onTrackScroll();
    };
    // Bring card i into view: scroll the page on desktop, the carousel on phones
    const show = (i: number) => {
      if (on) {
        const p = Math.min(offsetOf(i) / (track.scrollWidth - innerWidth), 1);
        scrollTo({ top: outer.offsetTop + p * (outer.offsetHeight - innerHeight), behavior });
      } else {
        track.scrollTo({ left: offsetOf(i), behavior });
      }
    };
    goRef.current = (step) => show(Math.min(Math.max(current + step, 0), cards.length - 1));

    // Keyboard: tabbing to a card brings it into view; arrow keys move between cards
    const onFocus = (e: FocusEvent) => {
      const i = cards.indexOf((e.target as Element).closest<HTMLElement>(".p-card")!);
      if (on && i >= 0) show(i);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const from = cards.indexOf((e.target as Element).closest<HTMLElement>(".p-card")!);
      const to = Math.min(Math.max(from + (e.key === "ArrowRight" ? 1 : -1), 0), cards.length - 1);
      e.preventDefault();
      cards[to].focus({ preventScroll: true });
      show(to);
    };

    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", layout);
    addEventListener("load", layout);
    track.addEventListener("scroll", onTrackScroll, { passive: true });
    track.addEventListener("focusin", onFocus);
    track.addEventListener("keydown", onKey);
    layout();
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", layout);
      removeEventListener("load", layout);
      track.removeEventListener("scroll", onTrackScroll);
      track.removeEventListener("focusin", onFocus);
      track.removeEventListener("keydown", onKey);
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
            <p>
              Client platforms and personal builds — all live. <span className="scroll-hint">Scroll or use the arrows to move through them.</span>
              <span className="swipe-hint">Swipe or use the arrows to browse.</span>
            </p>
          </div>

          <div className="h-track" ref={trackRef}>
            {projects.map((p, i) => (
              <a key={p.title} className="p-card" href={p.href} target="_blank" rel="noopener">
                <div className={p.img ? "shot" : "shot shot-text"}>
                  {/* The card's heading names the project, so the screenshot is decorative */}
                  {p.img ? (
                    <Image src={p.img} width={1200} height={900} sizes="(max-width: 900px) 82vw, 560px" alt="" />
                  ) : (
                    <span aria-hidden="true">{host(p.href)}</span>
                  )}
                  <span className="num" aria-hidden="true">
                    {pad(i + 1)} / {pad(total)}
                  </span>
                  <span className="go">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
                <CardInfo kind={p.kind} title={p.title} href={host(p.href)} desc={p.desc} stack={p.stack.split(" · ")} />
              </a>
            ))}
            <a className="p-card more" href={github} target="_blank" rel="noopener">
              <div className="shot">
                <span>
                  More on <span className="or">GitHub</span>
                </span>
              </div>
              <CardInfo kind="Personal builds" title="Nifty, MTrend…" href="github.com" desc="Experiments, side projects and the code behind them." stack={["Open source"]} />
            </a>
          </div>

          <div className="h-foot">
            <div className="h-progress" aria-hidden="true">
              <i ref={barRef} />
            </div>
            <span className="h-count mono" aria-hidden="true">
              {pad(index + 1)} / {pad(total)}
            </span>
            <div className="h-btns">
              <button type="button" className="h-btn" onClick={() => goRef.current(-1)} aria-disabled={index === 0} aria-label="Previous project">
                <Arrow flip />
              </button>
              <button type="button" className="h-btn" onClick={() => goRef.current(1)} aria-disabled={index === total - 1} aria-label="Next project">
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
