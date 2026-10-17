import React, { useState } from 'react';
import { 
  Sparkles, 
  Layout, 
  Server, 
  Database, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Bot, 
  Wrench
} from 'lucide-react';
import { SKILL_CATEGORIES, CORE_COMPETENCIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].name);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Sparkles': return Bot;
      case 'Cpu': return Wrench;
      case 'Layers': return Layers;
      default: return Terminal;
    }
  };

  return (
    <section id="skills" style={{ padding: 'clamp(60px, 8vw, 90px) 0', position: 'relative' }}>
      
      {/* Background ambient lighting */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
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
            <Sparkles size={15} color="#00f2fe" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
              TECHNICAL ARSENAL
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', marginBottom: '16px' }}>
            Skills Matrix & <span className="gradient-text-flow">AI Tooling Integrations</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Production-grade competencies in full-stack web architectures, real-time protocols, 
            relational databases, and modern AI-augmented developer environments.
          </p>
        </div>

        {/* AI & Modern Tools Spotlight Banner */}
        <div 
          className="glass-panel"
          style={{
            padding: 'clamp(18px, 3.5vw, 24px) clamp(16px, 3.5vw, 30px)',
            marginBottom: '40px',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(0, 242, 254, 0.08) 100%)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div 
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(168, 85, 247, 0.4)'
              }}
            >
              <Bot size={24} color="#c084fc" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '2px' }}>
                AI-Assisted Engineering Workflow
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
                High proficiency utilizing Antigravity, Cursor, Claude Code & Gemini AI for rapid orchestration and clean code synthesis.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Antigravity', 'Cursor AI', 'Claude Code', 'Gemini AI API', 'LLM Prompting'].map((tool) => (
              <span
                key={tool}
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#f8fafc',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '36px'
          }}
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = getCategoryIcon(category.icon);
            const isSelected = activeCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'rgba(0, 242, 254, 0.14)' : 'rgba(15, 23, 42, 0.6)',
                  color: isSelected ? '#00f2fe' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 0 16px rgba(0, 242, 254, 0.2)' : 'none'
                }}
              >
                <Icon size={16} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skills Grid */}
        {SKILL_CATEGORIES.filter(c => c.name === activeCategory).map((cat) => (
          <div 
            key={cat.name}
            className="glass-panel"
            style={{
              padding: 'clamp(20px, 4vw, 36px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '50px'
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '4px' }}>
                {cat.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                {cat.description}
              </p>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: 'clamp(12px, 2.5vw, 20px)'
              }}
            >
              {cat.skills.map((skill) => (
                <div 
                  key={skill.name}
                  style={{
                    padding: '18px',
                    borderRadius: '12px',
                    background: 'rgba(6, 11, 24, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.96rem', color: '#fff' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#00f2fe' }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level bar */}
                  <div 
                    style={{
                      height: '5px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      overflow: 'hidden',
                      marginBottom: '12px'
                    }}
                  >
                    <div 
                      style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #00f2fe, #38bdf8)',
                        borderRadius: '999px',
                        boxShadow: '0 0 8px rgba(0, 242, 254, 0.4)'
                      }}
                    />
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {skill.tags.map((tag) => (
                      <span 
                        key={tag}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Core Competencies Bento Box */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '8px' }}>
              Core Technical Competencies
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              High-value engineering capabilities validated across production systems and real-world architectures
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '12px'
            }}
          >
            {CORE_COMPETENCIES.map((competency, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(10, 16, 32, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)'
                }}
              >
                <CheckCircle2 size={16} color="#00f2fe" style={{ flexShrink: 0 }} />
                <span>{competency}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
