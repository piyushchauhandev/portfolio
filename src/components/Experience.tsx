import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  ChevronRight, 
  GitCommit
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>('codegarage');

  return (
    <section id="experience" style={{ padding: '90px 0', position: 'relative' }}>
      
      {/* Background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '16px'
            }}
          >
            <Briefcase size={15} color="#34d399" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
              CAREER MILESTONES
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', marginBottom: '16px' }}>
            Professional <span className="gradient-text-cyan">Software Engineering</span> Journey
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Production engineering exposure across fast-paced development environments, delivering live enterprise 
            developer tooling, automated customer billing pipelines, and offline-first mobile systems.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 2fr)',
            gap: '30px'
          }}
          className="experience-layout"
        >
          {/* Left: Company Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {EXPERIENCES.map((exp) => {
              const isSelected = activeExpId === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className="glass-panel"
                  style={{
                    padding: '24px',
                    cursor: 'pointer',
                    borderColor: isSelected ? '#00f2fe' : 'rgba(255, 255, 255, 0.08)',
                    background: isSelected ? 'rgba(0, 242, 254, 0.08)' : 'rgba(13, 20, 39, 0.6)',
                    boxShadow: isSelected ? '0 0 25px rgba(0, 242, 254, 0.2)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: exp.id === 'codegarage' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        color: exp.id === 'codegarage' ? '#10b981' : 'var(--text-muted)'
                      }}
                    >
                      {exp.period}
                    </span>
                    {isSelected && <ChevronRight size={18} color="#00f2fe" />}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '4px' }}>
                    {exp.company}
                  </h3>
                  
                  <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 600, marginBottom: '6px' }}>
                    {exp.role}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              );
            })}

            {/* Quick Summary Pill */}
            <div 
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'rgba(6, 11, 24, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ fontSize: '0.8rem', color: '#00f2fe', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '8px' }}>
                // ENGINEERING APPROACH
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Strong proponent of modular code separation, asynchronous concurrency (FastAPI/WebSockets), 
                structured PR reviews, and systematic logging for fast production debugging.
              </p>
            </div>
          </div>

          {/* Right: Detailed Experience View */}
          <div>
            {EXPERIENCES.filter(e => e.id === activeExpId).map((exp) => (
              <div
                key={exp.id}
                className="glass-panel"
                style={{
                  padding: '36px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  position: 'relative'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.7rem', color: '#fff', marginBottom: '4px' }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: '1.05rem', color: '#00f2fe', fontWeight: 700 }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.88rem', color: '#f8fafc', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                      {exp.period}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Overall Summary */}
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
                  {exp.summary}
                </p>

                {/* Live Projects Breakdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '30px' }}>
                  {exp.projects.map((proj, pIdx) => (
                    <div 
                      key={pIdx}
                      style={{
                        padding: '20px',
                        borderRadius: '14px',
                        background: 'rgba(6, 11, 24, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <h4 style={{ fontSize: '1.08rem', color: '#38bdf8', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <GitCommit size={18} color="#00f2fe" />
                        <span>{proj.title}</span>
                      </h4>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {proj.points.map((pt, ptIdx) => (
                          <div key={ptIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            <span style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: '1px' }}>▸</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                    TECHNOLOGY CONSTELLATION:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          background: 'rgba(0, 242, 254, 0.07)',
                          border: '1px solid rgba(0, 242, 254, 0.2)',
                          color: '#00f2fe'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .experience-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
