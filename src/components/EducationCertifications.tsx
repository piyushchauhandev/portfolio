import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

  return (
    <section id="education" style={{ padding: 'clamp(60px, 8vw, 90px) 0', position: 'relative' }}>
      
      {/* Background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              marginBottom: '16px'
            }}
          >
            <GraduationCap size={15} color="#f59e0b" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
              ACADEMIC & CREDENTIALS
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', marginBottom: '16px' }}>
            Education & <span className="gradient-text-cyan">Professional Accreditations</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Strong academic foundations in Computer Applications (8.4 CGPA in MCA) paired with industry-recognized certifications.
          </p>
        </div>

        {/* View Toggle */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          <button
            onClick={() => setActiveTab('education')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              border: activeTab === 'education' ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'education' ? 'rgba(0, 242, 254, 0.12)' : 'rgba(15, 23, 42, 0.6)',
              color: activeTab === 'education' ? '#00f2fe' : 'var(--text-secondary)',
              transition: 'all 0.2s ease'
            }}
          >
            <GraduationCap size={18} />
            <span>Academic Qualifications</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              border: activeTab === 'certifications' ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeTab === 'certifications' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(15, 23, 42, 0.6)',
              color: activeTab === 'certifications' ? '#f59e0b' : 'var(--text-secondary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Award size={18} />
            <span>Certifications ({CERTIFICATIONS.length})</span>
          </button>
        </div>

        {/* Education View */}
        {activeTab === 'education' && (
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '920px',
              margin: '0 auto'
            }}
          >
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: 'clamp(18px, 4vw, 28px)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  position: 'relative',
                  borderLeft: idx === 0 ? '4px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ flex: '1 1 min(100%, 360px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {edu.period}
                    </span>
                    {idx === 0 && (
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(0, 242, 254, 0.12)',
                          color: '#00f2fe',
                          border: '1px solid rgba(0, 242, 254, 0.3)'
                        }}
                      >
                        POST GRADUATE FOCUS
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '4px' }}>
                    {edu.degree}
                  </h3>
                  
                  <div style={{ fontSize: '0.92rem', color: '#38bdf8', marginBottom: '8px', fontWeight: 500 }}>
                    {edu.institution}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {edu.description}
                  </p>
                </div>

                {/* Score Badge */}
                <div 
                  style={{
                    padding: '14px 22px',
                    borderRadius: '14px',
                    background: idx === 0 ? 'rgba(0, 242, 254, 0.1)' : 'rgba(255, 255, 255, 0.04)',
                    border: idx === 0 ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                    minWidth: '130px'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {edu.scoreType}
                  </div>
                  <div 
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: idx === 0 ? '#00f2fe' : '#f8fafc',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {edu.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications View */}
        {activeTab === 'certifications' && (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px'
            }}
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: 'clamp(18px, 4vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(245, 158, 11, 0.12)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Award size={20} color="#f59e0b" />
                    </div>

                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#f59e0b',
                        border: '1px solid rgba(245, 158, 11, 0.2)'
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.18rem', color: '#fff', marginBottom: '6px' }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '0.86rem', color: '#38bdf8', fontWeight: 600, marginBottom: '14px' }}>
                    Issuer: {cert.issuer}
                  </div>

                  {/* Topics Covered */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cert.topics.map((topic, tIdx) => (
                      <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={13} color="#10b981" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  style={{
                    marginTop: '20px',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={14} color="#10b981" /> Verified Accreditation
                  </span>
                  <span>100% Valid</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
