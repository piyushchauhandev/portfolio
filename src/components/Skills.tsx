import React from "react";

const SKILLS = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript (ES6+)", "SQL", "Dart"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "React Flow", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "SQLAlchemy", "Pydantic", "REST APIs", "WebSockets"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firebase Firestore"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Postman", "ELK (Layout Kernel)", "Linux / Bash", "VS Code"],
  },
  {
    label: "AI / LLM",
    items: ["Google Gemini API", "Antigravity", "Cursor", "Claude Code", "LLM Prompting"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "WebRTC", "Material Design 3", "Sqflite", "Hive"],
  },
];

const CORE = [
  "Full-Stack Web Architecture",
  "Asynchronous Microservices (FastAPI)",
  "RESTful API Design",
  "Real-Time WebSockets & Streaming",
  "Interactive Graph UI (React Flow)",
  "JWT & OTP Authentication",
  "Relational & NoSQL Database Design",
  "Graph Layout Algorithms (ELK / elkjs)",
  "Offline-First Mobile Development",
  "Systematic Debugging & Profiling",
];

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,460px),1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left: tech list */}
          <div>
            <span className="section-label">Skills</span>
            <h2 className="section-heading">Technologies</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-2)", marginBottom: 32, lineHeight: 1.7 }}>
              Tools and technologies I use regularly, grouped by category.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {SKILLS.map(({ label, items }) => (
                <div
                  key={label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: "12px 16px",
                    alignItems: "start",
                    paddingBottom: 18,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-3)",
                      paddingTop: 3,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {label}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {items.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: core competencies */}
          <div>
            <span className="section-label" style={{ opacity: 0 }}>_</span>
            <h2 className="section-heading">Core Competencies</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-2)", marginBottom: 32, lineHeight: 1.7 }}>
              Engineering capabilities I have applied in production and real-world projects.
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {CORE.map((item, idx) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "13px 0",
                    borderBottom: idx < CORE.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--text-3)",
                      minWidth: 20,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-1)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
