"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus("Email copied: " + site.email);
    } catch {
      setStatus(site.email);
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="ct-h">
      <div className="wrap">
        <span className="idx mono reveal">06 / Contact</span>
        <h2 id="ct-h" className="reveal">
          Let’s build <br />
          <span className="it">something.</span>
        </h2>
        <a className="mail reveal" href={`mailto:${site.email}`} data-magnetic>
          {site.email}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <br />
        <button className="copy mono reveal" type="button" onClick={copy}>
          Copy email
        </button>
        <p className="copied mono" role="status" aria-live="polite">
          {status}
        </p>
        <div className="socials reveal">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} data-magnetic>
              {s.label}
            </a>
          ))}
          <a href={site.cv} data-magnetic>
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
