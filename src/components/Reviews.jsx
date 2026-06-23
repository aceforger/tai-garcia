import { motion } from "framer-motion";
import { reviews } from "../data";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden bg-[#EDE8E0]"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-[#D4A853]/30 text-[#C8963E] px-4 py-1.5 mb-6 text-[10px] font-roboto-slab font-medium tracking-[0.2em] uppercase rounded-full bg-white/50">
            <span className="w-1.5 h-1.5 bg-[#D4A853] rounded-full"></span>
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-dm-serif text-[#1A1A1A] mb-4 tracking-tight">
            What Readers Say
          </h2>
        </motion.div>

        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-[#D4A853]/10 hover:border-[#D4A853]/30 transition-all duration-500 shadow-md"
          >
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? "text-[#D4A853]" : "text-[#D4A853]/15"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <h3 className="text-xl font-dm-serif text-[#1A1A1A] mb-3">
              {review.headline}
            </h3>
            <p className="text-[#1A1A1A]/50 font-roboto text-base leading-relaxed mb-6">
              {review.text}
            </p>

            <div className="flex items-center justify-between border-t border-[#D4A853]/10 pt-5">
              <span className="text-[#D4A853] font-roboto-slab font-medium text-sm">
                {review.name}
              </span>
              <div className="flex items-center gap-2 text-[#1A1A1A]/20 text-xs">
                <span>{review.date}</span>
                {review.verified && (
                  <span className="flex items-center gap-1 text-[#D4A853]/60">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified Purchase
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
