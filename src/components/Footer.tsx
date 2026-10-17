import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#040711',
        padding: '50px 0 35px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '35px'
          }}
        >
          {/* Brand info */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  color: '#00f2fe'
                }}
              >
                PC
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              Junior Software Engineer specialized in React, TypeScript, FastAPI, WebSockets & AI Integrations.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none'
              }}
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00f2fe',
                textDecoration: 'none'
              }}
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981',
                textDecoration: 'none'
              }}
              title="Email"
            >
              <Mail size={18} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 16px',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                color: '#00f2fe',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright & tech strip */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: 'var(--text-dim)',
            gap: '12px'
          }}
        >
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)' }}>
            <span>Built with React 19 · TypeScript · Vite · Glassmorphism</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
