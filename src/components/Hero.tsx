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
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '70px',
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
          left: '10%',
          width: '400px',
          height: '400px',
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
          width: '450px',
          height: '450px',
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
              fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: '-0.035em',
              marginBottom: '18px'
            }}
          >
            Hi, I'm <span className="gradient-text-cyan">{PERSONAL_INFO.name}</span>
          </h1>

          {/* Animated Dynamic Role Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              minHeight: '44px',
              padding: '6px 20px',
              borderRadius: '12px',
              background: 'rgba(13, 20, 39, 0.8)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              marginBottom: '26px',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
            }}
          >
            <span 
              key={roleIndex}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
                fontWeight: 600,
                color: '#f8fafc',
                animation: 'shimmer 0.5s ease-out'
              }}
            >
              {roles[roleIndex]}
            </span>
          </div>

          {/* Resume Summary Pitch */}
          <p 
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              maxWidth: '820px',
              margin: '0 auto 48px',
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              padding: '24px',
              borderRadius: '20px',
              background: 'rgba(10, 16, 32, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div style={{ textAlign: 'left', padding: '6px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Sparkles size={16} color="#00f2fe" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>ACADEMIC EXCELLENCE</span>
              </div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                8.4 <span style={{ fontSize: '0.95rem', color: '#00f2fe' }}>CGPA</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                MCA @ TIMT Yamunanagar
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '6px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Activity size={16} color="#10b981" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>PRODUCTION WORK</span>
              </div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                2+ <span style={{ fontSize: '0.95rem', color: '#10b981' }}>Live Platforms</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                CodeGarage Tech Mohali
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '6px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Database size={16} color="#a855f7" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>API PERFORMANCE</span>
              </div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                &lt;50ms <span style={{ fontSize: '0.95rem', color: '#a855f7' }}>Async</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                FastAPI, Pydantic & Postgres
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '6px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <GitBranch size={16} color="#38bdf8" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>REAL-TIME STREAMING</span>
              </div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                WebSockets <span style={{ fontSize: '0.95rem', color: '#38bdf8' }}>& P2P</span>
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
