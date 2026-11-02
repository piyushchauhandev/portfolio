import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "clamp(120px, 18vw, 170px)",
        paddingBottom: "clamp(72px, 12vw, 110px)",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: 720 }}>

          {/* Availability */}
          <div style={{ marginBottom: 32 }}>
            <span className="available-dot">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              color: "var(--text-1)",
              marginBottom: 10,
            }}
          >
            {PERSONAL_INFO.name}
          </h1>

          {/* Role */}
          <div
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 400,
              color: "var(--text-2)",
              marginBottom: 28,
              letterSpacing: "-0.01em",
            }}
          >
            {PERSONAL_INFO.title}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)",
              lineHeight: 1.75,
              color: "var(--text-2)",
              maxWidth: 580,
              marginBottom: 40,
            }}
          >
            I build backend systems and full-stack web apps — primarily with React, FastAPI, and PostgreSQL.
            Interned at CodeGarage Tech working on a real-time codebase visualizer and an enterprise
            billing platform. Interested in clean APIs, WebSockets, and developer tooling.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 4 }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Location & current role */}
          <div
            style={{
              marginTop: 40,
              paddingTop: 28,
              borderTop: "1px solid var(--border)",
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-3)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.08em" }}>Recent Role</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-1)" }}>CodeGarage Tech, Mohali</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-2)" }}>Software Engineering Intern (Mar – Oct)</div>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-3)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.08em" }}>Studying</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-1)" }}>MCA — 8.4 CGPA</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-2)" }}>TIMT, Yamunanagar</div>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-3)", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 400,
                  color: "var(--text-2)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-1)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
              >
                {PERSONAL_INFO.email}
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
