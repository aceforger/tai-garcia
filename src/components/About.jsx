import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { authorInfo } from "../data";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#F5F0EB]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent z-10"></div>

      {/* Aurora Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Aurora blob 1 - Pink */}
        <motion.div
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: "600px",
            height: "400px",
            background:
              "linear-gradient(135deg, #F4A8B8 0%, #E8A0B4 30%, #D4A853 70%, #C8963E 100%)",
            top: "10%",
            left: "-10%",
          }}
          animate={{
            x: [0, 80, -40, 60, 0],
            y: [0, -60, 40, -30, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            rotate: [0, 10, -5, 8, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Aurora blob 2 - Gold */}
        <motion.div
          className="absolute rounded-full blur-3xl opacity-25"
          style={{
            width: "500px",
            height: "350px",
            background:
              "linear-gradient(135deg, #D4A853 0%, #E8C55A 30%, #F4A8B8 70%, #E8A0B4 100%)",
            top: "40%",
            right: "-15%",
          }}
          animate={{
            x: [0, -70, 50, -30, 0],
            y: [0, 50, -40, 30, 0],
            scale: [1, 0.85, 1.15, 0.95, 1],
            rotate: [0, -8, 6, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Aurora blob 3 - Pink-Gold mix */}
        <motion.div
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: "450px",
            height: "300px",
            background:
              "linear-gradient(160deg, #F4C2C2 0%, #F4A8B8 40%, #D4A853 80%, #E8C55A 100%)",
            bottom: "5%",
            left: "30%",
          }}
          animate={{
            x: [0, 50, -60, 40, 0],
            y: [0, -40, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
            rotate: [0, -6, 8, -4, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Aurora blob 4 - Small accent */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{
            width: "300px",
            height: "200px",
            background:
              "linear-gradient(90deg, #E8A0B4 0%, #D4A853 50%, #F4C2C2 100%)",
            top: "60%",
            left: "50%",
          }}
          animate={{
            x: [0, -40, 30, -20, 0],
            y: [0, 30, -50, 20, 0],
            scale: [1, 0.95, 1.1, 1, 1],
            rotate: [0, 5, -3, 7, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Aurora streak 1 */}
        <motion.div
          className="absolute blur-2xl opacity-15"
          style={{
            width: "800px",
            height: "120px",
            background:
              "linear-gradient(90deg, transparent 0%, #F4A8B8 20%, #D4A853 50%, #E8A0B4 80%, transparent 100%)",
            top: "25%",
            left: "-20%",
            borderRadius: "50%",
          }}
          animate={{
            x: [0, 200, -100, 150, 0],
            y: [0, -30, 20, -10, 0],
            opacity: [0.15, 0.25, 0.1, 0.2, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Aurora streak 2 */}
        <motion.div
          className="absolute blur-2xl opacity-10"
          style={{
            width: "700px",
            height: "100px",
            background:
              "linear-gradient(90deg, transparent 0%, #D4A853 20%, #F4C2C2 50%, #E8C55A 80%, transparent 100%)",
            top: "55%",
            right: "-30%",
            borderRadius: "50%",
          }}
          animate={{
            x: [0, -150, 100, -80, 0],
            y: [0, 20, -40, 15, 0],
            opacity: [0.1, 0.2, 0.08, 0.18, 0.1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4A853 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#D4A853]/30 text-[#C8963E] px-5 py-2 mb-6 text-[10px] font-roboto-slab font-bold tracking-[0.25em] uppercase rounded-full bg-white/60 backdrop-blur-sm shadow-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#D4A853] rounded-full"
            ></motion.span>
            About
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-dm-serif text-[#1A1A1A] mb-4 tracking-tight">
            {authorInfo.fullName}
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#D4A853]/40"></div>
            <span className="text-[#D4A853] text-sm">✦</span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#D4A853]/40"></div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-5 gap-12 items-start max-w-5xl mx-auto"
        >
          {/* Photo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-[#D4A853]/20 rounded-2xl rotate-3"></div>
              <div className="absolute -inset-3 border-2 border-[#D4A853]/10 rounded-2xl -rotate-3"></div>

              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="/images/profile.png"
                  alt={authorInfo.fullName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "flex",
                      "items-center",
                      "justify-center",
                      "bg-gradient-to-br",
                      "from-[#D4A853]/10",
                      "to-[#F5F0EB]",
                    );
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <span class="text-5xl font-dm-serif text-gold-gradient">TG</span>
                        <div class="w-10 h-[2px] bg-[#D4A853]/40 mx-auto mt-3"></div>
                        <p class="text-sm font-roboto-slab text-[#1A1A1A]/40 mt-2">Tai Garcia</p>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/10 via-transparent to-transparent pointer-events-none"></div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-3 -right-3 bg-white shadow-lg rounded-xl px-4 py-2 border border-[#D4A853]/20"
              >
                <p className="text-[#C8963E] font-roboto-slab text-[10px] font-bold tracking-wider uppercase">
                  Author
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-3 space-y-5"
          >
            <motion.div
              whileHover={{ x: 3 }}
              className="bg-white/70 backdrop-blur-sm p-7 rounded-2xl border-l-4 border-[#D4A853] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#D4A853]/10 rounded-full flex items-center justify-center border border-[#D4A853]/20 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-[#D4A853]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="text-[#1A1A1A] font-roboto-slab font-bold text-xs tracking-wider uppercase">
                  The Storyteller
                </span>
              </div>
              <p className="text-[#1A1A1A]/65 font-roboto text-sm leading-relaxed">
                {authorInfo.bio1}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              className="bg-white/70 backdrop-blur-sm p-7 rounded-2xl border-l-4 border-[#D4A853]/50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#D4A853]/10 rounded-full flex items-center justify-center border border-[#D4A853]/20 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-[#D4A853]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <span className="text-[#1A1A1A] font-roboto-slab font-bold text-xs tracking-wider uppercase">
                  The Journey
                </span>
              </div>
              <p className="text-[#1A1A1A]/65 font-roboto text-sm leading-relaxed">
                {authorInfo.bio2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {authorInfo.roles.map((role, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-5 py-2.5 bg-gradient-to-br from-[#D4A853] to-[#C8963E] text-white text-xs font-roboto-slab font-bold tracking-wider uppercase shadow-md shadow-[#D4A853]/20 rounded-full cursor-default"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
