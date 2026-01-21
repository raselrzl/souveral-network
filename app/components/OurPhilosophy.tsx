"use client";

import { motion } from "framer-motion";

const philosophyPoints = [
  "Globally minded",
  "Technologically resilient",
  "Ethically grounded",
  "Strategically structured",
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
        >
          OUR PHILOSOPHY
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-neutral-400 mt-3 mb-10"
        >
          Designed for Scale. Built for the Future.
        </motion.p>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-neutral-300 mb-12"
        >
          At Souveral, we believe modern organizations must be:
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {philosophyPoints.map((point, idx) => (
            <motion.div
              key={idx}
              className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-md p-6 hover:shadow-lg hover:border-neutral-700 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <p className="text-white font-semibold text-lg">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-4xl mx-auto text-neutral-400 mt-14"
        >
          Every project within our network is developed with long-term value
          creation in mind not short-term trends.
        </motion.p>
      </div>
    </section>
  );
}
