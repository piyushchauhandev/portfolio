import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { EducationCertifications } from "./components/EducationCertifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast((c) => (c === message ? null : c)), 3000);
  };

  return (
    <div>
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero />
        <About />
        <Projects onShowToast={showToast} />
        <Experience />
        <Skills />
        <EducationCertifications />
        <Contact onShowToast={showToast} />
      </main>
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} onShowToast={showToast} />

      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "11px 16px",
            borderRadius: 8,
            background: "#1c1c1c",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#f0f0f0",
            fontSize: "0.84rem",
            fontFamily: "var(--font-sans)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
        >
          <span style={{ color: "#4ade80", fontSize: "1rem" }}>✓</span>
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
