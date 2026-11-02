import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    onShowToast(`Copied ${label} to clipboard`);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="contact">
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ marginBottom: 40 }}>
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Get in touch</h2>
          <p style={{ fontSize: "0.98rem", color: "var(--text-2)", maxWidth: 520, lineHeight: 1.7 }}>
            I am open to junior software engineering roles, full-stack and backend positions,
            and collaborations on interesting projects. Feel free to reach out directly.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 16,
          }}
        >
          {/* Email */}
          <div
            className="surface"
            style={{ padding: "22px 24px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    background: "var(--bg-raised)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-2)",
                  }}
                >
                  <Mail size={16} />
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-3)",
                    letterSpacing: "0.08em",
                  }}
                >
                  EMAIL
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: 5,
                  padding: "5px 10px",
                  color: "var(--text-3)",
                  cursor: "pointer",
                  fontSize: "0.74rem",
                  fontFamily: "var(--font-mono)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-1)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-mid)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-3)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                }}
              >
                {copied === "email" ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
                {copied === "email" ? "Copied" : "Copy"}
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                fontSize: "0.92rem",
                fontWeight: 500,
                color: "var(--text-1)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                wordBreak: "break-all",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-2)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-1)")}
            >
              {PERSONAL_INFO.email}
              <ArrowUpRight size={14} style={{ flexShrink: 0 }} />
            </a>
          </div>

          {/* Location */}
          <div className="surface" style={{ padding: "22px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 6,
                  background: "var(--bg-raised)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-2)",
                }}
              >
                <MapPin size={16} />
              </div>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-3)",
                  letterSpacing: "0.08em",
                }}
              >
                LOCATION
              </span>
            </div>
            <div style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--text-1)", marginBottom: 4 }}>
              Yamunanagar & Mohali, India
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-3)" }}>
              Open to remote, hybrid, or on-site
            </div>
          </div>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="surface surface-hover"
            style={{
              padding: "22px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              transition: "border-color 0.15s ease, background 0.15s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 6,
                  background: "var(--bg-raised)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-2)",
                  flexShrink: 0,
                }}
              >
                <GithubIcon size={16} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text-1)" }}>GitHub</div>
                <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                  github.com/piyushchauhandev
                </div>
              </div>
            </div>
            <ArrowUpRight size={15} color="var(--text-3)" style={{ flexShrink: 0 }} />
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="surface surface-hover"
            style={{
              padding: "22px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              transition: "border-color 0.15s ease, background 0.15s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 6,
                  background: "var(--bg-raised)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-2)",
                  flexShrink: 0,
                }}
              >
                <LinkedinIcon size={16} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text-1)" }}>LinkedIn</div>
                <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                  linkedin.com/in/piyush-chauhan-96724035a
                </div>
              </div>
            </div>
            <ArrowUpRight size={15} color="var(--text-3)" style={{ flexShrink: 0 }} />
          </a>
        </div>
      </div>
    </section>
  );
};
