import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 0 32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px 24px",
            marginBottom: 24,
          }}
        >
          {/* Left: identity */}
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-1)", marginBottom: 4 }}>
              {PERSONAL_INFO.name}
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-3)" }}>
              Junior Software Engineer · React · FastAPI · WebSockets
            </div>
          </div>

          {/* Right: actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="icon-btn" title="GitHub">
              <GithubIcon size={15} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn">
              <LinkedinIcon size={15} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="icon-btn" title="Email">
              <Mail size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="icon-btn"
              style={{ marginLeft: 4 }}
              title="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
            fontSize: "0.75rem",
            color: "var(--text-3)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span>© 2026 {PERSONAL_INFO.name}</span>
          <span>Built with React · TypeScript · Vite</span>
        </div>
      </div>
    </footer>
  );
};
