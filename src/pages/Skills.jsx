import { useState, useEffect, useRef } from "react";
import DATA from "../data/data";

function SkillBar({ name, level, delay }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setW(level), delay); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300"
          style={{ fontFamily: "'DM Sans',sans-serif" }}>{name}</span>
        <span className="text-sm font-bold text-orange-400">{w}%</span>
      </div>
      <div className="h-2.5 rounded-full overflow-hidden bg-gray-800">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${w}%`, background: "linear-gradient(90deg,#ea580c,#f97316,#fb923c)" }}
        />
      </div>
    </div>
  );
}

export default function Skills({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      data-section="Skills"
      className="relative min-h-screen py-20 sm:py-28 px-4 sm:px-6 bg-[#07070f] text-white overflow-hidden"
    >
      {/* Hexagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 0v34M0 50l28 16 28-16M0 16l28 16 28-16' fill='none' stroke='%23f97316' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
        }} />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-400 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>03 —</p>
          <h2 className="section-title" style={{ fontFamily: "'Syne',sans-serif" }}>Skills</h2>
          <p className="text-sm mt-2 text-gray-500"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>
            Skills I have learned and developed
          </p>
        </div>

        {/* Skill Bars */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gray-900/40 border border-gray-800">
          {DATA.skills.map((s, i) => (
            <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
