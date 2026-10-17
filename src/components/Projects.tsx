import React, { useState } from 'react';
import { 
  FolderGit2, 
  Layers, 
  Database, 
  Server, 
  Cpu, 
  X, 
  CheckCircle2,
  Code,
  ExternalLink
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';

interface ProjectsProps {
  onShowToast?: (message: string) => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack & AI', 'Real-Time & P2P', 'Enterprise'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '90px 0', position: 'relative' }}>
      
      {/* Background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.06) 0%, transparent 70%)',
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
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              marginBottom: '16px'
            }}
          >
            <FolderGit2 size={15} color="#c084fc" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#c084fc', fontFamily: 'var(--font-mono)' }}>
              FEATURED ENGINEERING WORK
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', marginBottom: '16px' }}>
            Production Systems & <span className="gradient-text-purple">Architectural Projects</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Real-world full-stack architectures featuring Google Gemini AI integrations, OTP security, 
            low-latency WebRTC peer-to-peer data channels, and live enterprise platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '9px 20px',
                borderRadius: '12px',
                fontSize: '0.88rem',
                fontWeight: 600,
                border: filter === cat ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                background: filter === cat ? 'rgba(0, 242, 254, 0.14)' : 'rgba(15, 23, 42, 0.6)',
                color: filter === cat ? '#00f2fe' : 'var(--text-secondary)',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease',
                boxShadow: filter === cat ? '0 0 15px rgba(0, 242, 254, 0.2)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Gradient Line */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: project.category === 'Full-Stack & AI' 
                    ? 'linear-gradient(90deg, #38bdf8, #00f2fe)'
                    : project.category === 'Real-Time & P2P'
                    ? 'linear-gradient(90deg, #10b981, #06b6d4)'
                    : 'linear-gradient(90deg, #a855f7, #ec4899)'
                }}
              />

              <div>
                {/* Meta Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span 
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {project.status}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {project.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '8px', lineHeight: 1.25 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#38bdf8', fontWeight: 600, marginBottom: '14px' }}>
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.summary}
                </p>

                {/* Highlights List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Badges */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(6, 11, 24, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '20px'
                  }}
                >
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                        {metric.label}
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 9px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'none',
                    border: 'none',
                    color: '#00f2fe',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: '6px 0'
                  }}
                >
                  <Code size={16} />
                  <span>Architecture Deep Dive</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Visit Live Application"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0 12px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(56, 189, 248, 0.2))',
                        border: '1px solid rgba(0, 242, 254, 0.4)',
                        color: '#00f2fe',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="View GitHub Repository"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        textDecoration: 'none'
                      }}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            background: 'rgba(3, 5, 10, 0.85)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-panel-elevated"
            style={{
              width: '100%',
              maxWidth: '750px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 242, 254, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span 
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(0, 242, 254, 0.15)',
                    color: '#00f2fe',
                    border: '1px solid rgba(0, 242, 254, 0.3)'
                  }}
                >
                  {selectedProject.status}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {selectedProject.date}
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '6px' }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem' }}>
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Architecture Breakdown Section */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '14px', letterSpacing: '0.04em' }}>
                SYSTEM ARCHITECTURE DESIGN
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00f2fe', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    <Layers size={14} /> CLIENT LAYER
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {selectedProject.architecture.client}
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a855f7', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    <Server size={14} /> BACKEND API
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {selectedProject.architecture.backend}
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    <Database size={14} /> STORAGE & PERSISTENCE
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {selectedProject.architecture.database}
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    <Cpu size={14} /> CORE PROTOCOL / AI
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {selectedProject.architecture.special}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description Points from Resume */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '14px', letterSpacing: '0.04em' }}>
                DETAILED ENGINEERING IMPLEMENTATION
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedProject.description.map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>▸</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '10px', letterSpacing: '0.04em' }}>
                TECHNOLOGY STACK
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selectedProject.techStack.map((tech) => (
                  <span 
                    key={tech}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: 'rgba(0, 242, 254, 0.08)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      color: '#00f2fe',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-secondary"
                style={{ padding: '10px 20px' }}
              >
                Close
              </button>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px 20px' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: '10px 24px' }}
                >
                  <ExternalLink size={16} />
                  <span>Launch Live Platform</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
