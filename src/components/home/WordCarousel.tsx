"use client";

import { useEffect, useState } from "react";

interface WordCarouselProps {
  words: string[];
  interval?: number;
  transitionDuration?: number;
}

export function WordCarousel({
  words,
  interval = 3000,
  transitionDuration = 500,
}: WordCarouselProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, transitionDuration]);

  return (
    <span
      className={`inline-block text-accent transition-all duration-500 ${
        isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      {words[currentWord]}
    </span>
  );
}
