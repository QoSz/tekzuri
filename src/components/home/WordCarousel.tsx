"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface WordCarouselProps {
  words: string[];
  interval?: number;
}

export function WordCarousel({ words, interval = 3000 }: WordCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  if (prefersReducedMotion) {
    return <span className="inline-block text-foreground">{words[currentIndex]}</span>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[currentIndex]}
        className="inline-block text-foreground"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)", scale: 0.95 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        exit={{ opacity: 0, y: -20, filter: "blur(8px)", scale: 0.95 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
          mass: 0.8,
        }}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
}
