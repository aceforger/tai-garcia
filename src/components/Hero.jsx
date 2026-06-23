import { motion } from "framer-motion";
import { authorInfo, book } from "../data";

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Subtle left edge gradient for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#F5F0EB]/30 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ===== LEFT: Author Profile ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Profile Image - Door Shape (arched top) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative mb-6"
            >
              {/* Decorative ring - arched */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border-2 border-dashed border-[#D4A853]/25"
                style={{ borderRadius: "160px 160px 24px 24px" }}
              ></motion.div>

              {/* Door-shaped photo container */}
              <div
                className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden border-4 border-white/90 shadow-2xl"
                style={{
                  borderRadius: "140px 140px 16px 16px",
                }}
              >
                <img
                  src="/images/profile.png"
                  alt={authorInfo.fullName}
                  className="w-full h-full object-cover"
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
            <div class="text-center">
              <span class="text-4xl font-dm-serif text-gold-gradient">TG</span>
            </div>
          `;
                  }}
                />
                {/* Inner shadow for depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.1)",
                    borderRadius: "140px 140px 16px 16px",
                  }}
                ></div>
              </div>

              {/* Door hinge details */}
              <div className="absolute -left-1 top-1/4 w-2 h-8 bg-[#D4A853]/40 rounded-full"></div>
              <div className="absolute -left-1 bottom-1/4 w-2 h-8 bg-[#D4A853]/40 rounded-full"></div>
            </motion.div>

            {/* Author Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="inline-block bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm border border-white/80">
                <h1 className="text-2xl md:text-7xl font-dm-serif text-[#D4A853] mb-1 tracking-tight">
                  {authorInfo.fullName}
                </h1>
                <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4A853] to-transparent mb-2 mx-auto md:mx-0"></div>
                <p className="text-xs text-[#1A1A1A]/60 font-roboto-slab tracking-[0.15em] uppercase font-medium">
                  {authorInfo.tagline}
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <a
                href="#book"
                onClick={(e) => handleScroll(e, "#book")}
                className="px-8 py-4 bg-[#D4A853] text-white font-roboto-slab font-medium hover:bg-[#C8963E] transition-all duration-300 text-center text-sm tracking-wider uppercase shadow-lg shadow-[#D4A853]/20 rounded-full"
              >
                Explore the Book
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="px-8 py-4 border-2 border-[#D4A853]/20 text-[#1A1A1A] font-roboto-slab font-medium hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all duration-300 text-center text-sm tracking-wider uppercase rounded-full bg-white/60 backdrop-blur-sm"
              >
                About Tai
              </a>
            </motion.div>
          </motion.div>
          {/* ===== RIGHT: Floating Book - No Container ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="hidden md:flex justify-center items-center"
            style={{ height: "500px" }}
          >
            <div className="relative">
              {/* Book shadow on ground */}
              <motion.div
                animate={{
                  scale: [1, 0.9, 1],
                  opacity: [0.12, 0.06, 0.12],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-40 h-5 bg-black/15 rounded-full blur-md mt-4"
              ></motion.div>

              {/* Floating Book */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 6, -4, 0],
                  rotateX: [0, -2, 3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  perspective: "1000px",
                }}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-82 h-96 object-contain rounded-lg"
                  style={{
                    transform: "rotateY(-6deg) rotateX(2deg)",
                    filter:
                      "drop-shadow(0 25px 40px rgba(0,0,0,0.2)) drop-shadow(0 8px 15px rgba(0,0,0,0.1))",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className =
                      "w-56 h-80 rounded-lg bg-gradient-to-br from-[#F5F0EB] to-[#EDE8E0] border-2 border-[#D4A853]/20 flex items-center justify-center";
                    fallback.style.filter =
                      "drop-shadow(0 25px 40px rgba(0,0,0,0.2))";
                    fallback.innerHTML = `
                      <div class="text-center p-6">
                        <span class="text-5xl mb-3 block">📖</span>
                        <p class="font-dm-serif text-lg text-[#1A1A1A] leading-tight">Princess Momo</p>
                        <p class="font-roboto-slab text-[10px] text-[#D4A853] tracking-wider uppercase mt-1">and the Magic Mantis</p>
                      </div>
                    `;
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </motion.div>

              {/* Subtle gold particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 2 + Math.random() * 3,
                    height: 2 + Math.random() * 3,
                    left: `${35 + Math.random() * 30}%`,
                    top: `${25 + Math.random() * 50}%`,
                    background:
                      "radial-gradient(circle, #D4A853 0%, transparent 100%)",
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    y: [0, -50 - Math.random() * 40],
                    x: [0, (Math.random() - 0.5) * 25],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
          {/* Mobile: Simple floating book */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:hidden flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-44 h-64 object-cover rounded-lg"
                style={{
                  filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.2))",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  const fallback = document.createElement("div");
                  fallback.className =
                    "w-44 h-64 rounded-lg bg-white border-2 border-[#D4A853]/20 flex items-center justify-center";
                  fallback.innerHTML = `
                    <div class="text-center p-4">
                      <span class="text-4xl">📖</span>
                      <p class="font-dm-serif text-sm text-[#1A1A1A] mt-2">Princess Momo</p>
                    </div>
                  `;
                  e.target.parentElement.appendChild(fallback);
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
