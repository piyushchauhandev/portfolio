import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Check } from 'lucide-react';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  // Cursor follow light effect
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const glow = document.getElementById('pointer-glow');
      if (glow) {
        glow.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handlePointerMove);
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Subtle cursor follower glow */}
      <div
        id="pointer-glow"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'transform 0.15s ease-out',
          willChange: 'transform'
        }}
      />

      {/* Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero />

        <Projects onShowToast={showToast} />

        <Experience />

        <Skills />

        <EducationCertifications />

        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Document Viewer */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: 'clamp(14px, 3vw, 24px)',
            right: 'clamp(12px, 3vw, 24px)',
            maxWidth: 'calc(100vw - 24px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 18px',
            borderRadius: '12px',
            background: 'rgba(10, 16, 32, 0.95)',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            color: '#fff',
            fontSize: '0.88rem',
            fontWeight: 600,
            backdropFilter: 'blur(16px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 242, 254, 0.25)',
            animation: 'floatSlow 3s ease-in-out infinite'
          }}
        >
          <div 
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Check size={14} color="#030712" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;
