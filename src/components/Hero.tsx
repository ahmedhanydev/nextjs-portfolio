import Image from "next/image";
import CountUp from "@/components/CountUp";
import HeroClock from "@/components/HeroClock";
import XRayLens from "@/components/XRayLens";
import { facts, site } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="meta-row mono fade" style={{ "--d": ".1s" } as React.CSSProperties}>
          <span>
            <i className="live" aria-hidden="true" />
            Available for work
          </span>
          <span>{site.role}</span>
          <span>
            {site.location} · <HeroClock />
          </span>
        </div>

        <div className="hero-top">
          <h1 className="name" aria-label={site.name}>
            <span className="line" aria-hidden="true">
              <span style={{ "--d": ".15s" } as React.CSSProperties}>Ahmed</span>
            </span>
            <span className="line l2" aria-hidden="true">
              <span style={{ "--d": ".3s" } as React.CSSProperties}>
                Hany<span className="or">.</span>
              </span>
            </span>
          </h1>
          <figure className="portrait">
            <Image
              src={site.portrait}
              width={760}
              height={950}
              sizes="(max-width: 820px) 200px, 25vw"
              priority
              alt={`Portrait of ${site.name}`}
            />
            <figcaption className="mono">Hi, I’m Ahmed</figcaption>
          </figure>
        </div>

        <div className="hero-bottom fade" style={{ "--d": ".7s" } as React.CSSProperties}>
          <div>
            <p>
              I build <span className="it">fast, accessible</span> web products with React &amp; Next.js — for
              hospitals, fintech, AI teams and agencies.
            </p>
            <div className="hero-ctas">
              <a className="cta-btn solid" href="#work">
                See my work
              </a>
              <a className="cta-btn" href={site.cv} download>
                Download CV
              </a>
            </div>
          </div>
          <div className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <CountUp value={f.value} suffix={f.suffix} />
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <XRayLens />
    </header>
  );
}
