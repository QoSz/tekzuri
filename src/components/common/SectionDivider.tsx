"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 lg:px-8 py-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/[0.15]" />
      </div>
    </motion.div>
  );
}
