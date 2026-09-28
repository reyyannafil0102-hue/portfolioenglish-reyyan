import DATA from "../data/data";

export default function CV({ sectionRef }) {
  const { cv, about, skills, tagline, email, phone, photo } = DATA;

  return (
    <section
      ref={sectionRef}
      data-section="CV"
      className="relative min-h-[120vh] py-20 sm:py-28 px-4 sm:px-6 bg-[#07070f] text-white overflow-hidden"
    >
      {/* Hexagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 0v34M0 50l28 16 28-16M0 16l28 16 28-16' fill='none' stroke='%23f97316' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
        }} />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm sm:text-base md:text-lg tracking-widest uppercase mb-2"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>05 —</p>
          <h2 className="section-title" style={{ fontFamily: "'Syne',sans-serif" }}>Curriculum Vitae</h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-900/60 border border-gray-800">
          {/* CV Header */}
          <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/30 p-5 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Photo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-orange-500/30 flex-shrink-0">
              {photo ? (
                <img src={photo} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-orange-900/40">
                  <svg className="text-orange-300" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
                {cv.personal.fullName}
              </h3>
              <p className="text-base sm:text-lg md:text-lg mt-1 text-orange-300" style={{ fontFamily: "'DM Sans',sans-serif" }}>{tagline}</p>
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="text-sm sm:text-base md:text-base text-gray-400" style={{ fontFamily: "'DM Sans',sans-serif" }}>📧 {email}</span>
                <span className="text-sm sm:text-base md:text-base text-gray-400" style={{ fontFamily: "'DM Sans',sans-serif" }}>📱 {phone}</span>
              </div>
            </div>
          </div>

          {/* CV Body */}
          <div className="p-5 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column */}
            <div>
              {/* Personal Information */}
              <p className="text-sm sm:text-base md:text-base font-semibold uppercase tracking-widest mb-4 text-gray-500">Personal Information</p>
              <div className="space-y-3 mb-7">
                {[
                  ["Place and Date of Birth", `${cv.personal.birthPlace}, ${cv.personal.birthDate}`],
                  ["Address",                 cv.personal.address],
                  ["Religion",                cv.personal.religion],
                  ["Nationality",             cv.personal.nationality],
                ].map(([l, v]) => (
                  <div key={l}>
                    <p className="text-sm sm:text-base md:text-base text-gray-600" style={{ fontFamily: "'DM Sans',sans-serif" }}>{l}</p>
                    <p className="text-base sm:text-lg md:text-lg text-gray-300" style={{ fontFamily: "'DM Sans',sans-serif" }}>{v}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <p className="text-sm sm:text-base md:text-base font-semibold uppercase tracking-widest mb-4 text-gray-500">Education</p>
              <div className="relative pl-4 tl space-y-4">
                {about.education.map((e, i) => (
                  <div key={i}>
                    <p className="text-sm sm:text-base md:text-base font-mono text-orange-400">{e.year}</p>
                    <p className="text-base sm:text-lg md:text-lg font-medium text-white">{e.school}</p>
                    {e.major && (
                      <p className="text-sm sm:text-base md:text-base text-gray-500" style={{ fontFamily: "'DM Sans',sans-serif" }}>{e.major}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Skills */}
              <p className="text-sm sm:text-base md:text-base font-semibold uppercase tracking-widest mb-4 text-gray-500">Skills</p>
              <div className="space-y-2 mb-7">
                {skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <span className="text-sm sm:text-base md:text-base w-28 flex-shrink-0 text-gray-400"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}>{s.name}</span>
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-800">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${s.level}%`, background: "linear-gradient(90deg,#ea580c,#f97316)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <p className="text-sm sm:text-base md:text-base font-semibold uppercase tracking-widest mb-4 text-gray-500">
                Experience / Competitions / Organizations
              </p>
              <div className="relative pl-4 tl space-y-3 mb-7">
                {cv.experiences.map((e, i) => (
                  <div key={i}>
                    <p className="text-sm sm:text-base md:text-base font-mono text-orange-400">{e.year}</p>
                    <p className="text-base sm:text-lg md:text-lg font-medium text-white">{e.title}</p>
                    <p className="text-sm sm:text-base md:text-base text-gray-500" style={{ fontFamily: "'DM Sans',sans-serif" }}>{e.org}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-2 pl-4 border-orange-500">
                <p className="text-base sm:text-lg md:text-lg italic text-gray-400" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                  {cv.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
