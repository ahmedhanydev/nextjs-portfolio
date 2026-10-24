"use client";

import { stack } from "@/data/portfolio";

// Spotlight follows the pointer inside each box (read by .box::after)
const spotlight = (e: React.MouseEvent<HTMLDivElement>) => {
  const b = e.currentTarget, r = b.getBoundingClientRect();
  b.style.setProperty("--mx", e.clientX - r.left + "px");
  b.style.setProperty("--my", e.clientY - r.top + "px");
};

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="st-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head reveal">
          <div>
            <span className="idx mono">04 / Stack</span>
            <h2 id="st-h">
              What I <span className="it">use</span>
            </h2>
          </div>
        </div>
        <div className="stack-grid">
          <div className="box wide reveal" onMouseMove={spotlight}>
            <p>
              I care about the parts users feel but never see:{" "}
              <span className="it">load time, keyboard access, and pages that rank.</span>
            </p>
            <span className="mono" style={{ color: "var(--muted)" }}>
              Arabic &amp; RTL ready · Figma to code · Remote friendly
            </span>
          </div>
          {stack.map((g) => (
            <div key={g.title} className="box reveal" onMouseMove={spotlight}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
