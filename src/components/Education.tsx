import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" aria-labelledby="ed-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head reveal">
          <div>
            <span className="idx mono">03 / Education</span>
            <h2 id="ed-h">
              Where I <span className="it">studied</span>
            </h2>
          </div>
          <p>From literature and philosophy to computer science — I came to code from the humanities.</p>
        </div>
        <div className="edu">
          {education.map((d) => (
            <article key={d.title} className="edu-card reveal">
              <span className="edu-yr">{d.years}</span>
              <div>
                <h3>{d.title}</h3>
                <p className="edu-school">{d.school}</p>
                <ul className="edu-tags">
                  {d.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <span className="edu-mark it" aria-hidden="true">
                {d.mark}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
