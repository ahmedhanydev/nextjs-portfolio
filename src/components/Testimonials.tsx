import { testimonials } from "@/data/portfolio";

// In the full text, mark the sentence that's shown as the pull quote
const highlight = (para: string, pull: string) => {
  const i = para.indexOf(pull);
  if (i === -1) return para;
  return (
    <>
      {para.slice(0, i)}
      <mark className="quote-hl">{pull}</mark>
      {para.slice(i + pull.length)}
    </>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="ts-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head reveal">
          <div>
            <span className="idx mono">05 / Kind words</span>
            <h2 id="ts-h">
              What people <span className="it">say</span>
            </h2>
          </div>
          <p>From clients I built for and a lead I worked under.</p>
        </div>
        <div className="quotes">
          {testimonials.map((t) => {
            const langProps = t.lang ? { lang: t.lang, dir: "rtl" as const } : {};
            return (
            <figure key={t.name} className={`quote-card reveal${t.lang ? ` lang-${t.lang}` : ""}`}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>
                <p className="quote-pull" {...langProps}>
                  {t.pull}
                </p>
                <details className="quote-more">
                  <summary>
                    <span className="when-closed">Read full recommendation</span>
                    <span className="when-open">Show less</span>
                  </summary>
                  {t.text.map((para) => (
                    <p key={para.slice(0, 24)} {...langProps}>
                      {highlight(para, t.pull)}
                    </p>
                  ))}
                </details>
              </blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <span className="who">{t.name}</span>
                  <span className="role">{t.role}</span>
                  {t.source && <span className="source mono">{t.source}</span>}
                </span>
              </figcaption>
            </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
