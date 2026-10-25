import { site } from "@/data/portfolio";

const sitemap = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Kind words" },
  { href: "#contact", label: "Contact" },
];

const elsewhere = [...site.socials, { label: "Résumé", href: site.cv }, { label: "Email", href: `mailto:${site.email}` }];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <p className="foot-name">
              {site.name}
              <span className="or">.</span>
            </p>
            <p>
              {site.role} in Cairo, building fast and accessible web products. <span className="foot-status">Open to new work.</span>
            </p>
          </div>
          <nav className="foot-col" aria-labelledby="foot-sitemap">
            <h2 id="foot-sitemap" className="mono">
              Sitemap
            </h2>
            <ul>
              {sitemap.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="foot-col">
            <h2 id="foot-elsewhere" className="mono">
              Elsewhere
            </h2>
            <ul aria-labelledby="foot-elsewhere">
              {elsewhere.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-bar mono">
          <span>
            © {new Date().getFullYear()} {site.name} · Designed &amp; built in Cairo
          </span>
          <a href="#top" className="totop">
            Back to top
            <span className="totop-icon" aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
