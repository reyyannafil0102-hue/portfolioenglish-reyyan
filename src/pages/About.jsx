import DATA from "../data/data";

export default function About({ sectionRef }) {
  const { about } = DATA;

  const base = "bg-[#0d0d1a] border border-orange-900/30 text-gray-400";

  return (
    <section
      ref={sectionRef}
      data-section="About"
      className="relative min-h-screen py-20 sm:py-28 px-4 sm:px-6 bg-[#09090f] text-white overflow-hidden"
    >
      {/* Hexagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 0v34M0 50l28 16 28-16M0 16l28 16 28-16' fill='none' stroke='%23f97316' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
        }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-400 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>02 —</p>
          <h2 className="section-title" style={{ fontFamily: "'Syne',sans-serif" }}>About Me</h2>
          <p className="text-sm mt-2 text-gray-500"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* LEFT COLUMN — Family + Career Goal */}
          <div className="flex flex-col gap-6 h-full">

            {/* Family Background */}
            <div className={`rounded-2xl p-6 flex-1 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-base font-bold text-orange-400 uppercase tracking-widest mb-4">
                Family Background
              </p>
              <p className="text-base leading-relaxed">{about.family}</p>
            </div>

            {/* Career Goal */}
            <div className={`rounded-2xl p-6 flex-1 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-base font-bold text-orange-400 uppercase tracking-widest mb-4">
                Career Goal
              </p>
              <p className="text-base leading-relaxed italic text-gray-400">
                "{about.goal}"
              </p>
            </div>

          </div>

          {/* CENTER COLUMN — EDUCATION (MAIN FOCUS) */}
          <div className={`rounded-2xl p-8 ${base} flex flex-col h-full bg-gradient-to-b from-orange-900/10 to-orange-900/5 border-2 border-orange-500/40`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <p className="text-base font-bold text-orange-400 uppercase tracking-widest mb-5">
              Education
            </p>
            <div className="relative pl-7 border-l-2 border-orange-500/50 space-y-5">
              {about.education.map((e, i) => (
                <div key={i} className="relative pb-1">
                  <span className="absolute -left-[1.75rem] top-1 w-3.5 h-3.5 rounded-full bg-orange-500 ring-4 ring-orange-500/20 shadow-lg shadow-orange-500/30" />
                  <p className="text-base text-orange-400 font-mono font-bold mb-1">{e.year}</p>
                  <p className="text-lg font-bold text-white mb-0.5">{e.school}</p>
                  {e.major && <p className="text-base text-gray-400">{e.major}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Hobbies, Interests, and Strengths */}
          <div className="flex flex-col gap-6 h-full">

            {/* Hobbies + Interests */}
            <div className={`rounded-2xl p-6 flex-1 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <div className="mb-6">
                <p className="text-base font-bold text-orange-400 uppercase tracking-widest mb-3">Hobbies</p>
                <ul className="space-y-2">
                  {about.hobbies.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-base">
                      <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-orange-900/30 pt-5">
                <p className="text-base font-bold text-orange-400 uppercase tracking-widest mb-3">Interests</p>
                <ul className="space-y-2">
                  {about.interests.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-base">
                      <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Strengths */}
            <div className={`rounded-2xl p-6 flex-1 flex flex-col gap-4 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-base font-bold text-orange-400 uppercase tracking-widest">Personal Strengths</p>

              <div>
                <p className="text-base uppercase tracking-widest mb-3 text-gray-500 font-bold">Soft Skills</p>
                <ul className="space-y-2">
                  {about.softSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-base">
                      <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-orange-900/30 pt-4">
                <p className="text-base uppercase tracking-widest mb-3 text-gray-500 font-bold">Hard Skills</p>
                <ul className="space-y-2">
                  {about.hardSkills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-base">
                      <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
