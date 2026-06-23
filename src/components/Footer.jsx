import { motion } from "framer-motion";
import { authorInfo, navLinks, contactInfo } from "../data";

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#EDE8E0] border-t border-[#D4A853]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Stripe Payment Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gradient-to-r from-[#D4A853] via-[#E8C55A] to-[#D4A853]
              text-white text-lg md:text-xl font-roboto-slab font-bold py-5 px-10 md:py-6 md:px-16
              rounded-full
              shadow-xl shadow-[#D4A853]/25
              transform transition-all duration-300
              hover:shadow-2xl hover:shadow-[#D4A853]/40 hover:scale-105
              animate-pulse tracking-[0.15em] uppercase
              border border-[#E8C55A]/30
            "
          >
            ✦ Launch & Go-Live Portal ✦
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent"></div>
          <span className="text-[#D4A853]/30 text-sm">✦</span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent"></div>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-dm-serif text-xl text-[#1A1A1A] mb-2">
              {authorInfo.name}
            </h3>
            <div className="w-8 h-[2px] bg-[#D4A853] mb-4"></div>
            <p className="text-[#1A1A1A]/40 font-roboto text-sm leading-relaxed">
              Author of Princess Momo and the Magic Mantis. A father-daughter
              collaboration brought to life.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[#C8963E] font-roboto-slab font-bold text-xs tracking-[0.2em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-[#1A1A1A]/40 hover:text-[#D4A853] transition-colors font-roboto text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#D4A853]/0 group-hover:bg-[#D4A853] rounded-full transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-[#C8963E] font-roboto-slab font-bold text-xs tracking-[0.2em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#1A1A1A]/40 hover:text-[#D4A853] transition-colors font-roboto text-sm flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 bg-[#D4A853]/5 rounded-lg flex items-center justify-center border border-[#D4A853]/10 group-hover:border-[#D4A853]/30 transition-all">
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-[#D4A853]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#1A1A1A]/20 font-roboto text-xs">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#D4A853]/20 text-xs">✦</span>
            <p className="text-[#1A1A1A]/15 font-roboto text-xs tracking-wider">
              Princess Momo and the Magic Mantis
            </p>
            <span className="text-[#D4A853]/20 text-xs">✦</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
