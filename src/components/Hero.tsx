import React, { useState, useEffect } from 'react';
import { 
  Sparkles,
  GitBranch,
  Activity,
  Database
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Junior Software Engineer",
    "Full-Stack React.js & TypeScript Architect",
    "FastAPI & Asynchronous Python Engine",
    "Real-Time WebSockets & React Flow Specialist",
    "AI Orchestrator (Gemini AI · Cursor · Claude)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(90px, 14vw, 130px)',
        paddingBottom: 'clamp(40px, 8vw, 70px)',
        overflow: 'hidden'
      }}
    >
      {/* Interactive Constellation & Node Canvas */}
      <HeroCanvas />

      {/* Ambient background glows */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: 'clamp(250px, 40vw, 400px)',
          height: 'clamp(250px, 40vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '35%',
          right: '5%',
          width: 'clamp(250px, 45vw, 450px)',
          height: 'clamp(250px, 45vw, 450px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Main Name & Title */}
          <h1 
            style={{
              fontSize: 'clamp(2.3rem, 6.2vw, 5.2rem)',
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: '-0.035em',
              marginBottom: '16px'
            }}
          >
            Hi, I'm <span className="gradient-text-cyan">{PERSONAL_INFO.name}</span>
          </h1>

          {/* Animated Dynamic Role Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '44px',
              maxWidth: '100%',
              padding: '6px clamp(12px, 3vw, 20px)',
              borderRadius: '12px',
              background: 'rgba(13, 20, 39, 0.85)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              marginBottom: '24px',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
              boxSizing: 'border-box'
            }}
          >
            <span 
              key={roleIndex}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 2.2vw, 1.25rem)',
                fontWeight: 600,
                color: '#f8fafc',
                lineHeight: 1.35,
                textAlign: 'center',
                animation: 'shimmer 0.5s ease-out'
              }}
            >
              {roles[roleIndex]}
            </span>
          </div>

          {/* Resume Summary Pitch */}
          <p 
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.18rem)',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              maxWidth: '820px',
              margin: '0 auto clamp(32px, 6vw, 48px)',
              fontWeight: 400
            }}
          >
            Engineering scalable web applications, asynchronous backend microservices with{' '}
            <strong style={{ color: '#00f2fe' }}>FastAPI</strong>, real-time bi-directional streaming via{' '}
            <strong style={{ color: '#a855f7' }}>WebSockets</strong>, interactive graph UI with{' '}
            <strong style={{ color: '#38bdf8' }}>React Flow</strong>, and modern{' '}
            <strong style={{ color: '#10b981' }}>AI Integrations</strong>.
          </p>

          {/* Metrics Highlight Strip */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: 'clamp(10px, 2vw, 16px)',
              padding: 'clamp(16px, 3vw, 24px)',
              borderRadius: '20px',
              background: 'rgba(10, 16, 32, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div style={{ textAlign: 'left', padding: '6px clamp(4px, 1.5vw, 12px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Sparkles size={16} color="#00f2fe" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>ACADEMIC EXCELLENCE</span>
              </div>
              <div style={{ fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                8.4 <span style={{ fontSize: '0.9rem', color: '#00f2fe' }}>CGPA</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                MCA @ TIMT Yamunanagar
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '6px clamp(4px, 1.5vw, 12px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Activity size={16} color="#10b981" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>PRODUCTION WORK</span>
              </div>
              <div style={{ fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                2+ <span style={{ fontSize: '0.9rem', color: '#10b981' }}>Live Platforms</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                CodeGarage Tech Mohali
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '6px clamp(4px, 1.5vw, 12px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Database size={16} color="#a855f7" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>API PERFORMANCE</span>
              </div>
              <div style={{ fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                &lt;50ms <span style={{ fontSize: '0.9rem', color: '#a855f7' }}>Async</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                FastAPI, Pydantic & Postgres
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '6px clamp(4px, 1.5vw, 12px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <GitBranch size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>REAL-TIME STREAMING</span>
              </div>
              <div style={{ fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                WebSockets <span style={{ fontSize: '0.85rem', color: '#38bdf8' }}>& P2P</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                React Flow & WebRTC Data
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
