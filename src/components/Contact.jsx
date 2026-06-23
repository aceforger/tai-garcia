import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden bg-[#F5F0EB]"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent"></div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4A853]/3 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
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
            Contact
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-dm-serif text-[#1A1A1A] mb-4 tracking-tight">
            Get in Touch
          </h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#D4A853]/40"></div>
            <span className="text-[#D4A853] text-sm">✦</span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#D4A853]/40"></div>
          </div>

          <p className="text-[#1A1A1A]/40 font-roboto text-sm max-w-md mx-auto">
            For inquiries about Princess Momo, future adventures, or just to say
            hello.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#D4A853]/10 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center border border-[#D4A853]/20 flex-shrink-0 group-hover:bg-[#D4A853]/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#D4A853]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#C8963E] font-roboto-slab font-bold text-[10px] tracking-wider uppercase mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[#1A1A1A]/70 hover:text-[#D4A853] transition-colors font-roboto text-sm leading-relaxed break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Response Time Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#D4A853]/10 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center border border-[#D4A853]/20 flex-shrink-0 group-hover:bg-[#D4A853]/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#D4A853]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#C8963E] font-roboto-slab font-bold text-[10px] tracking-wider uppercase mb-1">
                    Response Time
                  </p>
                  <p className="text-[#1A1A1A]/50 font-roboto text-sm">
                    Typically within 24-48 hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#D4A853]/10 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A853]/10 rounded-xl flex items-center justify-center border border-[#D4A853]/20 flex-shrink-0 group-hover:bg-[#D4A853]/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#D4A853]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#C8963E] font-roboto-slab font-bold text-[10px] tracking-wider uppercase mb-1">
                    Stay Connected
                  </p>
                  <p className="text-[#1A1A1A]/50 font-roboto text-sm">
                    Follow the journey of Princess Momo
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#D4A853]/10 shadow-lg">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#D4A853] to-[#C8963E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D4A853]/30"
                  >
                    <svg
                      className="w-9 h-9 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-dm-serif text-[#1A1A1A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#1A1A1A]/40 font-roboto text-sm max-w-xs mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-8 py-3 border-2 border-[#D4A853]/30 text-[#C8963E] font-roboto-slab font-medium text-xs tracking-wider uppercase rounded-full hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#C8963E] font-roboto-slab font-bold text-[11px] tracking-wider uppercase mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#FBF9F6] border border-[#D4A853]/15 text-[#1A1A1A] font-roboto text-sm px-5 py-3.5 rounded-xl focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/10 focus:outline-none transition-all placeholder:text-[#1A1A1A]/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C8963E] font-roboto-slab font-bold text-[11px] tracking-wider uppercase mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#FBF9F6] border border-[#D4A853]/15 text-[#1A1A1A] font-roboto text-sm px-5 py-3.5 rounded-xl focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/10 focus:outline-none transition-all placeholder:text-[#1A1A1A]/20"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#C8963E] font-roboto-slab font-bold text-[11px] tracking-wider uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#FBF9F6] border border-[#D4A853]/15 text-[#1A1A1A] font-roboto text-sm px-5 py-4 rounded-xl focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/10 focus:outline-none transition-all resize-none placeholder:text-[#1A1A1A]/20"
                      placeholder="Tell me about your inquiry..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#D4A853] to-[#C8963E] text-white font-roboto-slab font-bold text-sm tracking-[0.15em] uppercase hover:from-[#E8C55A] hover:to-[#D4A853] transition-all duration-300 shadow-xl shadow-[#D4A853]/25 rounded-xl"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
