import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import DATA from "../data/data";

emailjs.init({ publicKey: "QnDc7cJMFhCBZyRad" });

export default function Contact({ sectionRef }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Ganti dengan Service ID dan Template ID kamu
      const result = await emailjs.send(
        "service_7d1ji75",  // Service ID
        "template_78it9ob", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: DATA.email,
        }
      );

      if (result.status === 200) {
        setStatus("✓ Message sent! Thank you.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("EmailJS send failed:", error);
      const errorCode = error?.status ? ` (${error.status})` : "";
      const errorMessage = error?.text || error?.message || "Unknown error";
      setStatus(`✗ EmailJS${errorCode}: ${errorMessage}`);
    }
  };

  const base = "bg-[#0d0d1a] border border-orange-900/30 text-gray-400";

  return (
    <section
      ref={sectionRef}
      data-section="Contact"
      className="relative min-h-screen py-20 sm:py-28 px-4 sm:px-6 bg-[#09090f] text-white overflow-hidden"
    >
      {/* Hexagonal pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 0v34M0 50l28 16 28-16M0 16l28 16 28-16' fill='none' stroke='%23f97316' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 100px",
        }} />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-400 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>06 —</p>
          <h2 className="section-title" style={{ fontFamily: "'Syne',sans-serif" }}>Contact Me</h2>
          <p className="text-sm mt-2 text-gray-500"
            style={{ fontFamily: "'DM Sans',sans-serif" }}>Let's discuss and collaborate</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-4">

            {/* Email */}
            <div className={`rounded-2xl p-6 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Email</p>
              <a href={`mailto:${DATA.email}`} className="text-sm text-orange-300 hover:text-orange-400 transition break-all">
                {DATA.email}
              </a>
            </div>

            {/* Phone */}
            <div className={`rounded-2xl p-6 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Phone</p>
              <a href={`https://wa.me/6281363210975`} target="_blank" rel="noreferrer" className="text-sm text-orange-300 hover:text-orange-400 transition">
                {DATA.phone}
              </a>
            </div>

            {/* Social Media */}
            <div className={`rounded-2xl p-6 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Social Media</p>
              <div className="flex gap-3">
                <a href={DATA.github} target="_blank" rel="noreferrer" className="text-orange-300 hover:text-orange-400 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="text-orange-300 hover:text-orange-400 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a href={DATA.instagram} target="_blank" rel="noreferrer" className="text-orange-300 hover:text-orange-400 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={`lg:col-span-2 rounded-2xl p-8 ${base}`} style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <p className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-6">Send a Message</p>

            {/* Name */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-orange-300 uppercase tracking-widest mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-[#1a1a2e] border border-orange-900/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-orange-300 uppercase tracking-widest mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="w-full bg-[#1a1a2e] border border-orange-900/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition"
              />
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-orange-300 uppercase tracking-widest mb-2 block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
                className="w-full bg-[#1a1a2e] border border-orange-900/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-orange-300 uppercase tracking-widest mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows="5"
                className="w-full bg-[#1a1a2e] border border-orange-900/30 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition resize-none"
              />
            </div>

            {/* Status Message */}
            {status && (
              <p
                role="status"
                className={`text-sm mb-4 font-semibold ${
                  status.startsWith("✓")
                    ? "text-green-400"
                    : status === "Sending..."
                      ? "text-orange-300"
                      : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
