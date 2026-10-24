"use client";

import { useEffect, useRef, useState } from "react";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

// The "code under the design" revealed through the lens (static, trusted markup)
const code = `<span class="c">// psst — this is the code under the design</span>
<span class="k">export default function</span> <span class="a">Hero</span>() {
  <span class="k">const</span> time = useClock(<span class="s">"Africa/Cairo"</span>);

  <span class="k">return</span> (
    &lt;<span class="t">header</span> <span class="a">className</span>=<span class="s">"hero"</span>&gt;
      &lt;<span class="t">Meta</span> <span class="a">status</span>=<span class="s">"available"</span> <span class="a">role</span>=<span class="s">"Frontend Developer"</span> <span class="a">time</span>={time} /&gt;

      &lt;<span class="t">h1</span> <span class="a">className</span>=<span class="s">"font-serif italic text-[17vw]"</span>&gt;
        Ahmed &lt;<span class="t">Avatar</span> <span class="a">src</span>={portrait} <span class="a">hoverExpand</span> /&gt;
        Hany&lt;<span class="t">span</span> <span class="a">className</span>=<span class="s">"text-accent"</span>&gt;.&lt;/<span class="t">span</span>&gt;
      &lt;/<span class="t">h1</span>&gt;

      &lt;<span class="t">p</span>&gt;I build fast, accessible web products with React &amp; Next.js&lt;/<span class="t">p</span>&gt;
      &lt;<span class="t">Facts</span> <span class="a">items</span>={[
        { value: <span class="a">100</span>, suffix: <span class="s">"%"</span>, label: <span class="s">"SEO score"</span> },
        { value: <span class="a">11</span>,  label: <span class="s">"Projects shipped"</span> },
        { value: <span class="a">3</span>,   suffix: <span class="s">"+"</span>, label: <span class="s">"Years"</span> },
      ]} <span class="a">countUp</span> /&gt;
    &lt;/<span class="t">header</span>&gt;
  );
}

<span class="c">// lighthouse → performance 98 · accessibility 100 · best practices 100 · seo 100</span>
<span class="k">export const</span> stack = [<span class="s">"React"</span>, <span class="s">"Next.js"</span>, <span class="s">"TypeScript"</span>, <span class="s">"Tailwind"</span>, <span class="s">"React Query"</span>, <span class="s">"Zustand"</span>, <span class="s">"Expo"</span>];`;

// Must be rendered inside the .hero element; listens on its parent
export default function XRayLens() {
  const xrayRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [hint, setHint] = useState("Hover to see the code underneath");

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const els = [xrayRef.current!, lensRef.current!];
    const hero = els[0].parentElement!;
    const R = innerWidth < 700 ? 110 : 180;
    let x = -999, y = -999, r = 0, target = 0, raf = 0;

    const loop = () => {
      r += (target - r) * 0.14;
      els.forEach((el) => {
        el.style.setProperty("--x", x + "px");
        el.style.setProperty("--y", y + "px");
        el.style.setProperty("--r", r + "px");
      });
      raf = requestAnimationFrame(loop);
    };
    const move = (cx: number, cy: number) => {
      const b = hero.getBoundingClientRect();
      x = cx - b.left;
      y = cy - b.top;
      target = R;
      hero.classList.add("peeked");
    };

    const handlers: [string, EventListener][] = hasFinePointer()
      ? [
          ["mousemove", ((e: MouseEvent) => move(e.clientX, e.clientY)) as EventListener],
          ["mouseleave", () => (target = 0)],
          ["mousedown", () => (target = R * 1.7)],
          ["mouseup", () => (target = R)],
        ]
      : [
          ["touchmove", ((e: TouchEvent) => move(e.touches[0].clientX, e.touches[0].clientY)) as EventListener],
          ["touchend", () => (target = 0)],
        ];
    if (!hasFinePointer()) setHint("Touch & drag to see the code");

    handlers.forEach(([ev, fn]) => hero.addEventListener(ev, fn, { passive: true }));
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      handlers.forEach(([ev, fn]) => hero.removeEventListener(ev, fn));
    };
  }, []);

  return (
    <>
      <div className="xray" aria-hidden="true" ref={xrayRef}>
        <pre dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="lens" aria-hidden="true" ref={lensRef} />
      <div className="hint mono" aria-hidden="true">
        <i />
        <span>{hint}</span>
      </div>
    </>
  );
}
