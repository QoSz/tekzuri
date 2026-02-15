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
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </motion.div>
  );
}
