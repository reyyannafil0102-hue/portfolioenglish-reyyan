import { useState, useEffect, useRef } from "react";
import Navbar   from "./components/Navbar";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Skills   from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import CV       from "./pages/CV";
import Contact  from "./pages/Contact";
import "./styles/global.css";

export default function App() {
  const [active, setActive] = useState("Home");
  const refs = useRef({});

  /* Active nav saat scroll */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.section); }),
      { threshold: 0.35 }
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Scroll ke section */
  const navigateTo = (section) => {
    setActive(section);
    refs.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  /* Helper buat set ref tiap section */
  const setRef = (name) => (el) => { refs.current[name] = el; };

  const SectionSeparator = () => (
    <div className="mx-auto my-12 flex items-center justify-center gap-3 max-w-5xl px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.35)]" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </div>
  );

  return (
    <div
      className="min-h-screen bg-[#07070f] text-white"
      style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500 }}
    >
      {/* Navbar */}
      <Navbar active={active} onNavigate={navigateTo} />

      {/* Pages */}
      <Home sectionRef={setRef("Home")} onNavigate={navigateTo} />
      <SectionSeparator />
      <About sectionRef={setRef("About")} />
      <SectionSeparator />
      <Skills sectionRef={setRef("Skills")} />
      <SectionSeparator />
      <Portfolio sectionRef={setRef("Portfolio")} />
      <SectionSeparator />
      <CV sectionRef={setRef("CV")} />
      <SectionSeparator />
      <Contact sectionRef={setRef("Contact")} />

      {/* Footer */}
      <footer className="border-t border-gray-800/40 py-8 text-center">
        <p className="text-gray-700 text-xs font-medium" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500 }}>
          © 2025 · REYYAN NAFIL ADIARSA PORTFOLIO
        </p>
      </footer>
    </div>
  );
}
