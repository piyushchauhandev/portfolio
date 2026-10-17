import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight,
  Send
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" style={{ padding: 'clamp(60px, 8vw, 90px) 0 clamp(80px, 10vw, 120px)', position: 'relative' }}>
      
      {/* Background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '960px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              marginBottom: '16px'
            }}
          >
            <Send size={15} color="#00f2fe" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
              LET'S CONNECT
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', marginBottom: '16px' }}>
            Get In Touch & <span className="gradient-text-cyan">Contact Me</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            I am actively open to Junior Software Engineer, Full-Stack Developer, and Backend/Frontend Engineering opportunities.
            Feel free to email or connect with me directly on LinkedIn or GitHub.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            marginBottom: '24px'
          }}
        >
          {/* Email Card */}
          <div 
            className="glass-panel"
            style={{
              padding: 'clamp(18px, 4vw, 28px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'rgba(0, 242, 254, 0.12)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Mail size={24} color="#00f2fe" />
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email address')}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)'
                }}
                title="Copy email"
              >
                {copiedField === 'Email address' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedField === 'Email address' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Primary Email
              </div>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                style={{ 
                  fontSize: 'clamp(0.88rem, 2.3vw, 1.05rem)', 
                  fontWeight: 700, 
                  color: '#fff', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  wordBreak: 'break-all'
                }}
              >
                <span>{PERSONAL_INFO.email}</span>
                <ArrowUpRight size={16} color="#00f2fe" style={{ flexShrink: 0 }} />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div 
            className="glass-panel"
            style={{
              padding: 'clamp(18px, 4vw, 28px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <MapPin size={24} color="#f59e0b" />
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Current Locations
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                Yamunanagar & Mohali, India
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Open to on-site, hybrid, or remote engineering roles
              </div>
            </div>
          </div>
        </div>

        {/* Social Profiles Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '16px' }}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="glass-panel"
            style={{
              padding: 'clamp(16px, 3.5vw, 20px) clamp(16px, 3.5vw, 24px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <GithubIcon size={22} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.96rem' }}>GitHub Profile</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>
                  github.com/piyushchauhandev
                </div>
              </div>
            </div>
            <ArrowUpRight size={18} color="#00f2fe" style={{ flexShrink: 0 }} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-panel"
            style={{
              padding: 'clamp(16px, 3.5vw, 20px) clamp(16px, 3.5vw, 24px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(0, 242, 254, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <LinkedinIcon size={22} color="#00f2fe" />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.96rem' }}>LinkedIn Network</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>
                  linkedin.com/in/piyush-chauhan-96724035a
                </div>
              </div>
            </div>
            <ArrowUpRight size={18} color="#00f2fe" style={{ flexShrink: 0 }} />
          </a>
        </div>

      </div>
    </section>
  );
};
