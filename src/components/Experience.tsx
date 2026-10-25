import { experience } from "@/data/portfolio";

// Bullets mark key results as **bold**; render those parts as <strong>
const emphasize = (text: string) =>
  text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="xp-h">
      <div className="wrap">
        <div className="head reveal">
          <div>
            <span className="idx mono">02 / Experience</span>
            <h2 id="xp-h">
              Where I’ve <span className="it">worked</span>
            </h2>
          </div>
          <p>In-house, remote and freelance — open a role for details.</p>
        </div>
        <ul className="xp">
          {experience.map((job, i) => (
            <li key={job.company} className="reveal">
              <details open={i === 0}>
                <summary>
                  <span className="yr mono">{job.years}</span>
                  <h3>
                    {job.company}
                    {job.now && (
                      <>
                        <span className="sr-only"> (current role)</span>
                        <span className="now" aria-hidden="true">
                          Now
                        </span>
                      </>
                    )}
                  </h3>
                  <span className="role">{job.role}</span>
                  <span className="pm" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="body">
                  <ul>
                    {job.bullets.map((b) => (
                      <li key={b}>{emphasize(b)}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
