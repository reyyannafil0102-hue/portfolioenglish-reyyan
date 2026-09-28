import { useState } from "react";
import DATA from "../data/data";

const NAV = ["Home", "About", "Skills", "Portfolio", "CV", "Contact"];

export default function Navbar({ active, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header className="fi fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#07070f]/95 border-b border-gray-800/20">
      <nav className="w-full px-4 sm:px-6 h-12 flex items-center justify-between">
        <span className="font-bold text-lg text-orange-400" style={{ fontFamily: "'Syne',sans-serif" }}>
          R.N.A
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-1">
          {NAV.map((n) => (
            <li key={n}>
              <button
                onClick={() => handleNav(n)}
                className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${
                  active === n 
                    ? "text-orange-400 border-orange-500/50 bg-orange-500/10" 
                    : "text-gray-400 border-gray-800/30 hover:border-orange-500/30 hover:text-orange-300"
                }`}
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                {n}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1 p-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-0.5 bg-gray-400 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-400 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-400 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-2 bg-[#0e0e1a] border-t border-gray-800">
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => handleNav(n)}
              className={`block w-full text-left py-3 text-base sm:text-lg border-b border-gray-800/40 ${
                active === n ? "text-orange-400" : "text-gray-400"
              }`}
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
