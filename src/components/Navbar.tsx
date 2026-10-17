import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  FileText, 
  Menu, 
  X, 
  Send, 
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects', icon: Code2, id: 'projects' },
    { label: 'Experience', href: '#experience', icon: Layers, id: 'experience' },
    { label: 'Skills', href: '#skills', icon: Sparkles, id: 'skills' },
    { label: 'Education', href: '#education', icon: GraduationCap, id: 'education' },
    { label: 'Contact', href: '#contact', icon: Send, id: 'contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled 
          ? 'rgba(6, 9, 19, 0.88)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'clamp(62px, 8vw, 76px)' }}>
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(8px, 2vw, 12px)',
            color: 'inherit',
            flexShrink: 0
          }}
        >
          <div 
            style={{
              width: 'clamp(36px, 5vw, 42px)',
              height: 'clamp(36px, 5vw, 42px)',
              minWidth: '36px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(168, 85, 247, 0.2))',
              border: '1px solid rgba(0, 242, 254, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(0, 242, 254, 0.2)',
              position: 'relative',
              flexShrink: 0
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)', color: '#00f2fe' }}>
              PC
            </span>
            <div 
              style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
              <span 
                className="navbar-brand-name"
                style={{ 
                  fontWeight: 800, 
                  fontSize: 'clamp(0.96rem, 2.8vw, 1.08rem)', 
                  letterSpacing: '-0.02em', 
                  color: '#fff',
                  whiteSpace: 'nowrap'
                }}
              >
                {PERSONAL_INFO.name}
              </span>
              <span 
                className="navbar-badge"
                style={{
                  fontSize: '0.68rem',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'rgba(0, 242, 254, 0.12)',
                  color: '#00f2fe',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'nowrap'
                }}
              >
                SWE
              </span>
            </div>
            <p className="navbar-subtitle" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0, whiteSpace: 'nowrap' }}>
              React · FastAPI · WebSockets
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '4px 8px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: isActive ? '#00f2fe' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="navbar-resume-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '10px',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              background: 'rgba(0, 242, 254, 0.08)',
              color: '#00f2fe',
              cursor: 'pointer',
              fontSize: '0.84rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <FileText size={15} style={{ flexShrink: 0 }} />
            <span className="navbar-resume-text">Resume</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f2fe, #38bdf8)',
              color: '#020617',
              fontWeight: 700,
              fontSize: '0.86rem',
              textDecoration: 'none',
              boxShadow: '0 2px 14px rgba(0, 242, 254, 0.35)',
              transition: 'all 0.2s ease',
            }}
            className="desktop-contact-btn"
          >
            <Send size={14} />
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: 'rgba(6, 9, 19, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px 28px',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isActive ? '#00f2fe' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(0, 242, 254, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: isActive ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid transparent'
                }}
              >
                <Icon size={18} color={isActive ? '#00f2fe' : '#94a3b8'} />
                {link.label}
              </a>
            );
          })}

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                color: '#00f2fe',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <FileText size={16} />
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00f2fe, #38bdf8)',
                color: '#020617',
                fontWeight: 700,
                textAlign: 'center',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Send size={16} />
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Media query styling helper */}
      <style>{`
        .navbar-brand-name {
          white-space: nowrap !important;
        }
        @media (max-width: 768px) {
          .navbar-subtitle {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .navbar-badge {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-resume-btn {
            padding: 7px 11px !important;
            font-size: 0.8rem !important;
          }
        }
        @media (max-width: 360px) {
          .navbar-resume-text {
            display: none !important;
          }
          .navbar-resume-btn {
            padding: 8px !important;
          }
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-contact-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
