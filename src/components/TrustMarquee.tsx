"use client";

import { useState } from "react";
import { clients } from "@/data/portfolio";

export default function TrustMarquee() {
  // Moving content needs a way to stop it (WCAG 2.2.2); hover pauses too, via CSS
  const [paused, setPaused] = useState(false);

  return (
    <div className="trust">
      <span className="mono trust-label" id="trust-h">
        Worked with
      </span>
      <div className="trust-mask">
        {/* The list is rendered twice so the -50% loop is seamless; the copy is hidden from AT */}
        <ul className={`trust-track${paused ? " paused" : ""}`} aria-labelledby="trust-h">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
          {clients.map((c) => (
            <li key={`${c}-copy`} aria-hidden="true">
              {c}
            </li>
          ))}
        </ul>
      </div>
      <button className="trust-toggle mono" type="button" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        {paused ? "Play" : "Pause"}
        <span className="sr-only"> client list animation</span>
      </button>
    </div>
  );
}
