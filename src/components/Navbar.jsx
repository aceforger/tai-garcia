import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, authorInfo } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5F0EB]/88 backdrop-blur-xl border-b-2 border-[#D4A853]/10 shadow-lg shadow-black/3"
          : "bg-[#F5F0EB]/58"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo with Door-Shaped Profile Image */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3"
          >
            {/* Door-shaped Profile Image */}
            <div className="relative w-13 h-20 md:w-18 md:h-22 overflow-hidden border-2 border-[#D4A853]/30 group-hover:border-[#D4A853]/60 transition-all duration-300 shadow-sm flex-shrink-0 bg-[#EDE8E0]">
              <img
                src="/images/profile.png"
                alt={authorInfo.name}
                className="w-full h-full object-contain p-.1"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "bg-gradient-to-br",
                    "from-[#D4A853]/20",
                    "to-[#F5F0EB]",
                    "flex",
                    "items-center",
                    "justify-center",
                  );
                  e.target.parentElement.innerHTML = `
        <span class="text-xl font-dm-serif text-gold-gradient">TG</span>
      `;
                }}
              />
              {/* Inner shadow for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 10px rgba(0,0,0,0.08)",
                  borderRadius: "40px 40px 10px 10px",
                }}
              ></div>
            </div>

            {/* Star ornament */}
            <motion.span
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="text-[#D4A853] text-lg hidden sm:block"
            >
              ✦
            </motion.span>

            {/* Name */}
            <span className="font-dm-serif text-xl md:text-2xl tracking-tight text-[#1A1A1A] group-hover:text-[#D4A853] transition-colors font-bold">
              {authorInfo.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-3 text-sm font-roboto-slab font-bold transition-all tracking-[0.15em] uppercase rounded-lg ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#D4A853] bg-[#f7f7f7]"
                    : "text-[#070707] hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-gradient-to-r from-[#D4A853] to-[#E8C55A] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-lg transition-colors"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-white/98 backdrop-blur-xl border-2 border-[#D4A853]/15 mt-3 p-6 rounded-2xl shadow-2xl">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-5 py-4 font-roboto-slab text-base font-bold uppercase tracking-[0.15em] rounded-xl transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#D4A853] bg-[#D4A853]/10 border-l-4 border-[#D4A853]"
                        : "text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
