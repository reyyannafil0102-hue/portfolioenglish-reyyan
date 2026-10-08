import DATA from "../data/data";

function ProjectCard({ p }) {
  return (
    <div className="card group rounded-2xl overflow-hidden transition-all duration-300 bg-gray-900 border border-gray-800 hover:border-orange-500/40">
      {/* Thumbnail */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg,${p.color}22,${p.color}0a)` }}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ background: `${p.color}33` }}
          >
            {p.icon}
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: `${p.color}22` }}
        >
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full text-base sm:text-lg font-semibold text-white"
            style={{ background: p.color }}
          >
            View Project →
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-base sm:text-lg md:text-lg mb-2 text-white" style={{ fontFamily: "'Syne',sans-serif" }}>{p.title}</h3>
        <p className="text-base sm:text-lg md:text-lg mb-3 leading-relaxed text-gray-500" style={{ fontFamily: "'DM Sans',sans-serif" }}>
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="text-sm sm:text-base md:text-base px-2 py-1 rounded-full bg-gray-800 text-gray-400">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <a
      href={certificate.image}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${certificate.title} certificate`}
      className="group block overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-orange-500/40"
    >
      <div className="h-48 overflow-hidden bg-gray-950">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base text-white sm:text-lg" style={{ fontFamily: "'Syne',sans-serif" }}>
          {certificate.title}
        </h3>
        <p className="mt-2 text-sm text-orange-400" style={{ fontFamily: "'DM Sans',sans-serif" }}>
          View Certificate →
        </p>
      </div>
    </a>
  );
}

export default function Portfolio({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      data-section="Portfolio"
      className="relative min-h-screen py-20 sm:py-28 px-4 sm:px-6 bg-[#09090f] text-white overflow-hidden"
    >
      {/* Hexagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 0v34M0 50l28 16 28-16M0 16l28 16 28-16' fill='none' stroke='%23f97316' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
        }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm sm:text-base md:text-lg tracking-widest uppercase mb-2"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>04 —</p>
          <h2 className="section-title" style={{ fontFamily: "'Syne',sans-serif" }}>Portfolio</h2>
          <p className="text-base sm:text-lg md:text-lg mt-2 text-gray-500" style={{ fontFamily: "'DM Sans',sans-serif" }}>
            Projects and work I have created
          </p>
        </div>

        <div className="mb-14">
          <h3 className="mb-6 text-2xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
            Certificates
          </h3>
          <div className="grid max-w-2xl gap-5 sm:grid-cols-2 sm:gap-6">
            {DATA.certificates.map((certificate) => (
              <CertificateCard key={certificate.title} certificate={certificate} />
            ))}
          </div>
        </div>

        {/* Project grid */}
        <h3 className="mb-6 text-2xl font-bold text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
          Projects
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {DATA.projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
