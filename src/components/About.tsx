import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,480px),1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left: Main text */}
          <div>
            <span className="section-label">About</span>
            <h2 className="section-heading">
              Building things that are useful,<br />
              not just impressive.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.75, color: "var(--text-2)" }}>
                I am a junior software engineer with hands-on experience building full-stack web
                applications, asynchronous backend services, and real-time systems. I care about
                writing code that is readable, maintainable, and solves a real problem.
              </p>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.75, color: "var(--text-2)" }}>
                My main interests are backend engineering with FastAPI and Python, building scalable
                REST APIs, and working with real-time communication via WebSockets. I have also spent
                a good amount of time on the frontend with React and TypeScript, particularly with
                interactive graph interfaces using React Flow.
              </p>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.75, color: "var(--text-2)" }}>
                Outside the code, I enjoy studying how production systems are structured,
                debugging tricky problems, and learning how to use AI tooling effectively in real
                engineering workflows — not just for generating boilerplate.
              </p>
            </div>
          </div>

          {/* Right: Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* What I focus on */}
            <div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                What I work on
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { title: "Full-Stack Development", detail: "React, TypeScript, FastAPI, PostgreSQL" },
                  { title: "Backend Engineering", detail: "REST APIs, async services, Pydantic, SQLAlchemy" },
                  { title: "Real-Time Systems", detail: "WebSockets, bi-directional streaming" },
                  { title: "Developer Tooling", detail: "AST analysis, graph UIs, observability with ELK" },
                  { title: "AI Integrations", detail: "Gemini API, Claude, LLM prompting pipelines" },
                ].map(({ title, detail }) => (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      padding: "12px 16px",
                      borderRadius: 6,
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text-1)" }}>{title}</span>
                    <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack quick reference */}
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
                Day-to-day stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "WebSockets", "Git"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
