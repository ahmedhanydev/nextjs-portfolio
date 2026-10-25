import { practices, skillGroups } from "@/data/portfolio";

const rows = [...skillGroups, { title: "How I work", items: practices }];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="sk-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head reveal">
          <div>
            <span className="idx mono">04 / Skills</span>
            <h2 id="sk-h">
              What I <span className="it">use</span>
            </h2>
          </div>
          <p>The tools I ship with, grouped by what they do.</p>
        </div>
        <ul className="skill-rows">
          {rows.map((g) => (
            <li key={g.title} className="reveal">
              <h3>{g.title}</h3>
              <ul className="chips">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
