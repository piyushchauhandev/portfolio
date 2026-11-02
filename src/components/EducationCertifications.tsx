import React, { useState } from "react";
import { EDUCATION, CERTIFICATIONS } from "../data/portfolioData";

export const EducationCertifications: React.FC = () => {
  const [tab, setTab] = useState<"education" | "certifications">("education");

  return (
    <section id="education">
      <div className="container">
        <div style={{ marginBottom: 36 }}>
          <span className="section-label">Background</span>
          <h2 className="section-heading">Education & Certifications</h2>
        </div>

        {/* Tab switcher */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 36,
            borderBottom: "1px solid var(--border)",
            paddingBottom: 0,
          }}
        >
          {(["education", "certifications"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "10px 16px",
                borderRadius: "0",
                fontSize: "0.84rem",
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                background: "transparent",
                color: tab === t ? "var(--text-1)" : "var(--text-3)",
                borderBottom: tab === t ? "2px solid var(--text-1)" : "2px solid transparent",
                transition: "color 0.15s ease, border-color 0.15s ease",
                fontFamily: "var(--font-sans)",
                marginBottom: -1,
                textTransform: "capitalize",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Education */}
        {tab === "education" && (
          <div className="timeline">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="timeline-item"
                style={{ marginBottom: idx < EDUCATION.length - 1 ? 32 : 0 }}
              >
                <div className={`timeline-dot ${idx === 0 ? "live" : ""}`} />
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px 24px",
                  }}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-3)",
                        marginBottom: 4,
                      }}
                    >
                      {edu.period} · {edu.status}
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--text-1)",
                        letterSpacing: "-0.015em",
                        marginBottom: 3,
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <div style={{ fontSize: "0.88rem", color: "var(--text-2)", marginBottom: 6 }}>
                      {edu.institution}
                    </div>
                    <p style={{ fontSize: "0.84rem", color: "var(--text-3)", lineHeight: 1.6 }}>
                      {edu.description}
                    </p>
                  </div>
                  <div
                    style={{
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-mono)",
                        color: idx === 0 ? "#4ade80" : "var(--text-1)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {edu.score}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>
                      {edu.scoreType}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {tab === "certifications" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
              gap: 16,
            }}
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="surface surface-hover"
                style={{ padding: "20px 22px" }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-3)",
                    marginBottom: 8,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {cert.issuer}
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-1)",
                    marginBottom: 12,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.35,
                  }}
                >
                  {cert.title}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {cert.topics.map((topic) => (
                    <span key={topic} className="tag">{topic}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
