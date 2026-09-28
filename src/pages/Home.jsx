import { useState, useEffect } from "react";
import DATA from "../data/data";

const socialIcons = {
  github:
    "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
  linkedin:
    "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  instagram:
    "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z",
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
};

export default function Home({ sectionRef, onNavigate }) {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY < 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section="Home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden text-white"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/Foto/hitamputih-removebg-preview.png"
          alt="Background"
          className="absolute right-0 h-full w-auto object-cover object-right opacity-30"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hexagonal pattern */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 0v34M0 50l28 16 28-16M0 16l28 16 28-16' fill='none' stroke='%23f97316' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
        }} />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-8 md:pt-12">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="avatar-wrap relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full">
            {DATA.photo ? (
              <img
                src={DATA.photo}
                alt={DATA.name}
                className="w-full h-full rounded-full object-cover ring-2 ring-orange-400/40"
                style={{ objectPosition: "center 10%" }}
              />
            ) : (
              <div
                className="w-full h-full rounded-full flex items-center justify-center ring-2 ring-orange-400/20"
                style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)" }}
              >
                <svg className="text-orange-300" width="76" height="76" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-orange-400 text-sm sm:text-base tracking-[.25em] uppercase mb-3 font-bold"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            Welcome To My Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-1 text-white"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            Hello, I'm
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-2 text-white"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            {DATA.name}
            <span className="blink text-orange-400 ml-1">|</span>
          </h1>
          <p className="text-orange-400 text-lg sm:text-xl md:text-2xl font-bold mb-4"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            "Reyyan"
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-2 font-semibold"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            {DATA.tagline}
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7 max-w-md mx-auto md:mx-0"
            style={{ fontFamily: "'Inter',sans-serif" }}>
            {DATA.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <button onClick={() => onNavigate("Portfolio")}
              className="btn-p px-6 py-2.5 rounded-full text-sm font-semibold text-white">
              View My Work
            </button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-4">
            {[["github", DATA.github], ["linkedin", DATA.linkedin], ["instagram", DATA.instagram], ["whatsapp", `https://wa.me/${DATA.phone.replace(/[^0-9]/g, '')}`]].map(([k, href]) => (
              <a key={k} href={href} target="_blank" rel="noreferrer"
                className="transition-all hover:-translate-y-1 duration-200 text-gray-500 hover:text-orange-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d={socialIcons[k]} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      {showScroll && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-gray-600"
            style={{ fontFamily: "'Inter',sans-serif" }}>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      )}
    </section>
  );
}
