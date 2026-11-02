import React from 'react';
import { X, Printer, Copy, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
PIYUSH CHAUHAN
Junior Software Engineer | React.js · TypeScript · Python · FastAPI · WebSockets · PostgreSQL · AI Integrations
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.about}

PROFESSIONAL EXPERIENCE
- Software Engineering Intern — CodeGarage Tech (March 2026 – October 2026, Mohali, Punjab)
  - Live Project 1: AI Codebase Architecture & Vulnerability Visualizer (React, TypeScript, React Flow, ELK / Eclipse Layout Kernel, WebSockets, Python, FastAPI)
  - Live Project 2: Omnichannel Customer Calling & Billing Platform (Chatwoot)
- Flutter Developer Intern — Novem Control Private Limited (June 2025 – August 2025, Phase 8B, Mohali)
  - Flutter, Dart, Sqflite, Hive, Firebase Firestore & Authentication

FEATURED PROJECTS
- AI-Powered Full-Stack Blog Platform with Secure OTP Authentication (React, TypeScript, FastAPI, PostgreSQL, Gemini AI, JWT, OTP) [Live: https://cortex-blogs.piyushchauhandev.in]
- EasyShare – Real-Time Peer-to-Peer File & Data Sharing Application (Flutter, Dart, WebRTC, Firestore)

EDUCATION
- Master of Computer Applications (MCA), TIMT Yamunanagar (2024–2026) — CGPA: 8.4 / 10.0
- Post Graduate Diploma in Computer Applications (PGDCA), Govt College Chhachhrauli (2022–2024) — 67.1%
- Bachelor of Science (B.Sc. Non-Medical), MLN College Yamunanagar (2018–2022) — 69.2%
    `.trim();

    navigator.clipboard.writeText(text);
    onShowToast("Resume text copied to clipboard!");
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 120,
        background: 'rgba(2, 4, 10, 0.88)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(8px, 2.5vw, 20px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel-elevated"
        style={{
          width: '100%',
          maxWidth: '880px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a0f1d',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.95)',
          borderRadius: '20px',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(12px, 3vw, 16px) clamp(14px, 3.5vw, 24px)',
            background: 'rgba(13, 20, 39, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 800, fontSize: 'clamp(0.92rem, 2.4vw, 1.05rem)', color: '#fff' }}>
              Curriculum Vitae — Piyush Chauhan
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                padding: '2px 8px',
                borderRadius: '4px',
                background: 'rgba(0, 242, 254, 0.15)',
                color: '#00f2fe',
                fontFamily: 'var(--font-mono)'
              }}
            >
              MCA 8.4 CGPA
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Direct Download PDF button */}
            <a
              href="/Piyush_Resume.pdf"
              download="Piyush_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ 
                padding: '8px 18px', 
                fontSize: '0.84rem', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px' 
              }}
              title="Download official Piyush_Resume.pdf"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
              title="Print formatted document"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopyText}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
              title="Copy formatted text"
            >
              <Copy size={14} />
              <span>Copy Text</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document View */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'clamp(16px, 4vw, 40px)',
            background: '#ffffff',
            color: '#1e293b',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
          className="printable-resume"
        >
          {/* Top Download Notice Banner */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              borderRadius: '10px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              marginBottom: '24px',
              gap: '12px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={20} color="#0284c7" />
              <div>
                <strong style={{ fontSize: '0.9rem', color: '#0f172a' }}>Piyush_Resume.pdf</strong>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Junior Software Engineer · React, TypeScript & FastAPI</div>
              </div>
            </div>
            <a
              href="/Piyush_Resume.pdf"
              download="Piyush_Resume.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                borderRadius: '8px',
                background: '#0284c7',
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Document Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '16px', marginBottom: '20px' }}>
            <h1 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <div style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', fontWeight: 700, color: '#0284c7', marginBottom: '8px' }}>
              {PERSONAL_INFO.title} | React.js · TypeScript · Python · FastAPI · WebSockets · PostgreSQL · AI Integrations
            </div>
            <div style={{ fontSize: '0.86rem', color: '#475569', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', wordBreak: 'break-word' }}>
              <span>✉️ {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>🔗 {PERSONAL_INFO.githubUsername}</span>
              <span>💼 linkedin.com/in/piyush-chauhan-96724035a</span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#334155', margin: 0, textAlign: 'justify' }}>
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>
              Technical Skills
            </h2>
            <div style={{ fontSize: '0.86rem', lineHeight: 1.6, color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div><strong>Languages:</strong> Python, TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3</div>
              <div><strong>Frontend & UI:</strong> React.js, React Flow, ELK (Eclipse Layout Kernel / elkjs), Next.js, Responsive Web Design, Component Architecture, Material UI</div>
              <div><strong>Backend & APIs:</strong> FastAPI, Python Async (async/await), WebSockets, RESTful APIs, Microservices, Node.js Basics</div>
              <div><strong>AI Tools:</strong> Antigravity, Claude Code, Cursor, LLM Prompting & API Orchestration, Gemini AI</div>
              <div><strong>Databases & ORMs:</strong> PostgreSQL, MongoDB, MySQL, SQLAlchemy, SQLite, Sequelize</div>
              <div><strong>DevOps & Tools:</strong> Git, GitHub, Postman, Linux (Ubuntu), Windows, VS Code</div>
              <div><strong>Core CS:</strong> OOP, Data Structures & Algorithms, DBMS, CRUD Operations, Systematic Debugging</div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>
              Professional Experience
            </h2>

            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                  <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a' }}>
                    {exp.role} — <span style={{ color: '#0284c7' }}>{exp.company}</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#64748b' }}>
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <div style={{ fontSize: '0.82rem', fontStyle: 'italic', color: '#475569', marginBottom: '6px' }}>
                  {exp.techStack.join(' · ')}
                </div>

                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} style={{ marginBottom: '8px' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', marginBottom: '3px' }}>
                      {proj.title}
                    </div>
                    <ul style={{ margin: '0 0 4px 18px', padding: 0, fontSize: '0.84rem', color: '#334155', lineHeight: 1.5 }}>
                      {proj.points.map((pt, ptIdx) => (
                        <li key={ptIdx} style={{ marginBottom: '2px' }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Section: Featured Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>
              Featured Technical Projects
            </h2>

            {PROJECTS.filter(p => p.category !== 'Enterprise').map((p, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                  <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a' }}>
                    {p.title}
                    {p.liveUrl && (
                      <a 
                        href={p.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0284c7', marginLeft: '8px', textDecoration: 'none' }}
                      >
                        [Live Demo ↗]
                      </a>
                    )}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>
                    {p.status}
                  </div>
                </div>

                <div style={{ fontSize: '0.82rem', fontStyle: 'italic', color: '#0284c7', marginBottom: '4px' }}>
                  {p.techStack.join(' · ')}
                </div>

                <ul style={{ margin: '0 0 4px 18px', padding: 0, fontSize: '0.84rem', color: '#334155', lineHeight: 1.5 }}>
                  {p.description.slice(0, 3).map((d, dIdx) => (
                    <li key={dIdx} style={{ marginBottom: '2px' }}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong>{edu.degree}</strong> — {edu.institution}
                  </div>
                  <div style={{ fontWeight: 700, color: '#0284c7' }}>
                    {edu.score} ({edu.period})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', textTransform: 'uppercase' }}>
              Certifications & Accreditations
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx}>
                  • <strong>{cert.title}</strong>: {cert.issuer}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-resume, .printable-resume * {
            visibility: visible;
          }
          .printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};
