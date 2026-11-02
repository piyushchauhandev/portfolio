import React, { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["hero", "about", "projects", "experience", "skills", "education", "contact"];
      const offset = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        height: 60,
        background: scrolled ? "rgba(14,14,14,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Brand */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "var(--text-1)",
              letterSpacing: "-0.01em",
            }}
          >
            PC
          </span>
          <span
            style={{
              width: 1,
              height: 16,
              background: "var(--border-mid)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "var(--text-2)",
            }}
            className="hide-sm"
          >
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
          className="show-lg-only"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                padding: "6px 12px",
                borderRadius: 5,
                fontSize: "0.84rem",
                fontWeight: 500,
                color: activeSection === link.id ? "var(--text-1)" : "var(--text-2)",
                background: activeSection === link.id ? "var(--bg-surface)" : "transparent",
                transition: "color 0.15s ease, background 0.15s ease",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="icon-btn hide-sm"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon-btn hide-sm"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <button
            onClick={onOpenResume}
            className="btn btn-secondary"
            style={{ padding: "7px 14px", fontSize: "0.82rem" }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="icon-btn hide-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(14,14,14,0.98)",
            borderBottom: "1px solid var(--border)",
            padding: "12px 16px 20px",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "10px 12px",
                borderRadius: 6,
                fontSize: "0.9rem",
                fontWeight: 500,
                color: activeSection === link.id ? "var(--text-1)" : "var(--text-2)",
                background: activeSection === link.id ? "var(--bg-surface)" : "transparent",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 8, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="icon-btn">
              <GithubIcon size={16} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="icon-btn">
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .show-lg-only { display: flex !important; }
        }
        @media (max-width: 899px) {
          .show-lg-only { display: none !important; }
        }
      `}</style>
    </header>
  );
};
