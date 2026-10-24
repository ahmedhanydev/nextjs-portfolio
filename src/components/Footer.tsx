import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer>
      <div className="wrap mono">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Designed &amp; built by me, in Cairo</span>
        <a href="#top" className="totop">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
