import React from "react";
import { MapPin } from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <div style={{ marginBottom: 40 }}>
          <span className="section-label">Experience</span>
          <h2 className="section-heading">Where I have worked</h2>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="timeline-item"
              style={{
                marginBottom: idx < EXPERIENCES.length - 1 ? 48 : 0,
              }}
            >
              <div className="timeline-dot" />

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 12,
                  marginBottom: 6,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--text-1)",
                      letterSpacing: "-0.02em",
                      marginBottom: 2,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-2)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontWeight: 500, color: "var(--text-1)" }}>{exp.company}</span>
                    <span style={{ color: "var(--text-3)" }}>·</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                    <span style={{ color: "var(--text-3)" }}>·</span>
                    <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-2)",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    padding: "3px 8px",
                    borderRadius: 4,
                    flexShrink: 0,
                  }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Summary */}
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", marginBottom: 20 }}>
                {exp.summary}
              </p>

              {/* Projects */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx}>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-3)",
                        marginBottom: 10,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {proj.title}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {proj.points.map((pt, ptIdx) => (
                        <div
                          key={ptIdx}
                          style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                            fontSize: "0.88rem",
                            lineHeight: 1.65,
                            color: "var(--text-2)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--text-3)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.72rem",
                              marginTop: 3,
                              flexShrink: 0,
                            }}
                          >
                            —
                          </span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 16 }}>
                {exp.techStack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
