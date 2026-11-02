import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import { GithubIcon } from "./BrandIcons";

interface ProjectsProps {
  onShowToast?: (msg: string) => void;
}

const categoryColors: Record<string, string> = {
  "Full-Stack & AI": "#60a5fa",
  "Real-Time & P2P": "#34d399",
  "Enterprise": "#f59e0b",
};

export const Projects: React.FC<ProjectsProps> = () => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const categories = ["All", "Full-Stack & AI", "Real-Time & P2P", "Enterprise"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div style={{ marginBottom: 40 }}>
          <span className="section-label">Work</span>
          <h2 className="section-heading">Projects</h2>
          <p style={{ fontSize: "0.98rem", color: "var(--text-2)", maxWidth: 560 }}>
            A selection of projects I have built — from personal experiments to production work.
            Each one taught me something concrete.
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "6px 14px",
                borderRadius: 5,
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                border: "1px solid",
                borderColor: filter === cat ? "var(--border-mid)" : "var(--border)",
                background: filter === cat ? "var(--bg-surface)" : "transparent",
                color: filter === cat ? "var(--text-1)" : "var(--text-2)",
                transition: "all 0.15s ease",
                fontFamily: "var(--font-sans)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {filtered.map((project, idx) => {
            const isExpanded = expanded === project.id;
            const accentColor = categoryColors[project.category] || "var(--text-2)";
            return (
              <div
                key={project.id}
                style={{
                  borderTop: idx === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {/* Row header */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : project.id)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 0",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "var(--font-mono)",
                          color: accentColor,
                          fontWeight: 500,
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-3)",
                        }}
                      >
                        {project.date}
                      </span>
                      {project.status === "Live Production" && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: "0.68rem",
                            fontFamily: "var(--font-mono)",
                            color: "#4ade80",
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: "#4ade80",
                              display: "inline-block",
                            }}
                          />
                          Live
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
                        fontWeight: 600,
                        color: "var(--text-1)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: "0.85rem",
                        color: "var(--text-2)",
                        lineHeight: 1.5,
                      }}
                    >
                      {project.summary}
                    </div>
                    {/* Tech stack always visible */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
                      {project.techStack.slice(0, 6).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ color: "var(--text-3)", flexShrink: 0, paddingTop: 4 }}>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Expanded detail */}
                {isExpanded && (
                  <div
                    style={{
                      paddingBottom: 28,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                        gap: "clamp(24px, 4vw, 48px)",
                      }}
                    >
                      {/* Left: description */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-3)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: 12,
                          }}
                        >
                          What I built
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          {project.description.map((point, i) => (
                            <div
                              key={i}
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
                                {String(i + 1).padStart(2, "0")}.
                              </span>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>

                        {/* Links */}
                        <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="link-arrow"
                            >
                              <GithubIcon size={14} />
                              GitHub
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                          {project.liveUrl && project.liveUrl !== project.githubUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="link-arrow"
                            >
                              <ExternalLink size={13} />
                              Live Demo
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: architecture */}
                      <div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-3)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: 12,
                          }}
                        >
                          Architecture
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {[
                            { label: "Client", value: project.architecture.client },
                            { label: "Backend", value: project.architecture.backend },
                            { label: "Database", value: project.architecture.database },
                            { label: "Special", value: project.architecture.special },
                          ].map(({ label, value }) => (
                            <div
                              key={label}
                              style={{
                                display: "grid",
                                gridTemplateColumns: "80px 1fr",
                                gap: 12,
                                fontSize: "0.84rem",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontSize: "0.7rem",
                                  color: "var(--text-3)",
                                  paddingTop: 2,
                                }}
                              >
                                {label}
                              </span>
                              <span style={{ color: "var(--text-2)", lineHeight: 1.5 }}>{value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Full tech stack */}
                        <div style={{ marginTop: 20 }}>
                          <div
                            style={{
                              fontSize: "0.72rem",
                              fontFamily: "var(--font-mono)",
                              color: "var(--text-3)",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              marginBottom: 8,
                            }}
                          >
                            Full stack
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                            {project.techStack.map((t) => (
                              <span key={t} className="tag">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
