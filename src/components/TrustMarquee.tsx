import { clients } from "@/data/portfolio";

export default function TrustMarquee() {
  return (
    <div className="trust" aria-label="Companies and clients I’ve worked with">
      <span className="mono trust-label">Worked with</span>
      <div className="trust-mask">
        {/* The list is rendered twice so the -50% loop is seamless; the copy is hidden from AT */}
        <div className="trust-track">
          {clients.map((c) => (
            <span key={c}>{c}</span>
          ))}
          {clients.map((c) => (
            <span key={`${c}-copy`} aria-hidden="true">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
