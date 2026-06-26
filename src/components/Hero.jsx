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

      {/* Subtle right edge gradient for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-l from-[#F5F0EB]/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 py-20 md:py-24 lg:py-32">
        <div className="flex justify-center md:justify-end">
          {/* ===== RIGHT SIDE: Book on top, Text below ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center w-full max-w-md md:max-w-lg"
          >
            {/* Floating Book - TOP */}
            <div className="relative mb-6 sm:mb-8 md:mb-10 w-full flex justify-center">
              {/* Book shadow */}
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
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 md:w-36 h-4 sm:h-5 bg-black/15 rounded-full blur-md"
              ></motion.div>

              {/* Floating Book */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateY: [0, 5, -3, 0],
                  rotateX: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ perspective: "1000px" }}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-54 h-70 sm:w-62 sm:h-82 md:w-60 md:h-80 lg:w-74 lg:h-78 object-contain rounded-lg"
                  style={{
                    transform: "rotateY(-4deg) rotateX(2deg)",
                    filter:
                      "drop-shadow(0 20px 35px rgba(0,0,0,0.2)) drop-shadow(0 6px 12px rgba(0,0,0,0.1))",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className =
                      "w-44 h-60 sm:w-52 sm:h-72 md:w-60 md:h-80 rounded-lg bg-gradient-to-br from-[#F5F0EB] to-[#EDE8E0] border-2 border-[#D4A853]/20 flex items-center justify-center";
                    fallback.style.filter =
                      "drop-shadow(0 20px 35px rgba(0,0,0,0.2))";
                    fallback.innerHTML = `
                      <div class="text-center p-4 sm:p-6">
                        <span class="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 block">📖</span>
                        <p class="font-dm-serif text-sm sm:text-base md:text-lg text-[#1A1A1A] leading-tight">Princess Momo</p>
                        <p class="font-roboto-slab text-[8px] sm:text-[10px] text-[#D4A853] tracking-wider uppercase mt-1">and the Magic Mantis</p>
                      </div>
                    `;
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </motion.div>

              {/* Gold particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 2 + Math.random() * 3,
                    height: 2 + Math.random() * 3,
                    left: `${30 + Math.random() * 40}%`,
                    top: `${20 + Math.random() * 60}%`,
                    background:
                      "radial-gradient(circle, #D4A853 0%, transparent 100%)",
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    y: [0, -40 - Math.random() * 30],
                    x: [0, (Math.random() - 0.5) * 20],
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

            {/* Author Info - BOTTOM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <div className="inline-block bg-white/70 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-2xl shadow-sm border border-white/80">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-dm-serif text-[#D4A853] mb-1 tracking-tight">
                  {authorInfo.fullName}
                </h1>
                <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#D4A853] to-transparent mb-2 mx-auto"></div>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#1A1A1A]/60 font-roboto-slab tracking-[0.15em] uppercase font-medium">
                  {authorInfo.tagline}
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 w-full sm:w-auto"
            >
              <a
                href="#book"
                onClick={(e) => handleScroll(e, "#book")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#D4A853] text-white font-roboto-slab font-medium hover:bg-[#C8963E] transition-all duration-300 text-center text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#D4A853]/20 rounded-full"
              >
                Explore the Book
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#D4A853]/20 text-[#1A1A1A] font-roboto-slab font-medium hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all duration-300 text-center text-xs sm:text-sm tracking-wider uppercase rounded-full bg-white/60 backdrop-blur-sm"
              >
                About Tai
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
