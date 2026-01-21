"use client";

import { motion } from "framer-motion";

const reasons = [
  "Global-first strategy",
  "Cross-industry expertise",
  "Strong governance standards",
  "Scalable systems & platforms",
  "Long-term vision over short-term hype",
];

export default function WhySouveralSection() {
  return (
    <section id="why-souveral" className="py-4 bg-black mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
        >
          WHY SOUVERAL
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-neutral-400 mt-3 mb-10"
        >
          A Different Kind of Network
        </motion.p>

        {/* Reasons List */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <span className="text-green-500 text-xl font-bold">✔</span>
              <p className="text-white font-semibold text-lg">{reason}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-3xl mx-auto text-neutral-400 mt-12 text-lg md:text-xl"
        >
          We don’t just launch projects—we build foundations.
        </motion.p>
      </div>
    </section>
  );
}
