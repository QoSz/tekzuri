"use client";

import { motion, useReducedMotion } from "framer-motion";

const spring = {
  default: { type: "spring" as const, damping: 25, stiffness: 120, mass: 0.8 },
  enso: { type: "spring" as const, damping: 20, stiffness: 80, mass: 0.8 },
  node: { type: "spring" as const, damping: 15, stiffness: 200, mass: 0.8 },
};

const rings = [
  { r: 60, stroke: "#ff3d00", opacity: 0.5, d: "M 265.53 307.96 A 60 60 0 1 1 292.43 292.43", flow: 15 },
  { r: 100, stroke: "#ff3d00", opacity: 0.35, d: "M 151.52 232.64 A 100 100 0 1 1 156.03 284.20", flow: 20 },
  { r: 140, stroke: "#ff3d00", opacity: 0.2, d: "M 320.00 128.76 A 140 140 0 1 1 250.00 110.00", flow: 25 },
  { r: 180, stroke: "#ffffff", opacity: 0.08, d: "M 134.30 387.89 A 180 180 0 1 1 218.74 427.27", flow: 30 },
  { r: 220, stroke: "#ffffff", opacity: 0.05, d: "M 140.00 59.47 A 220 220 0 1 1 59.47 140.00", flow: 35 },
];

const nodes = [
  { cx: 250, cy: 190, opacity: 0.6, dx: 3, dy: 4, px: 8, py: 11 },
  { cx: 350, cy: 250, opacity: 0.45, dx: 4, dy: 3, px: 10, py: 13 },
  { cx: 250, cy: 390, opacity: 0.5, dx: 2, dy: 5, px: 12, py: 9 },
  { cx: 70, cy: 250, opacity: 0.35, dx: 5, dy: 2, px: 9, py: 14 },
  { cx: 310, cy: 130, opacity: 0.4, dx: 3, dy: 3, px: 11, py: 8 },
  { cx: 170, cy: 370, opacity: 0.3, dx: 4, dy: 4, px: 14, py: 10 },
  { cx: 390, cy: 310, opacity: 0.35, dx: 2, dy: 3, px: 8, py: 12 },
  { cx: 130, cy: 150, opacity: 0.4, dx: 3, dy: 5, px: 13, py: 9 },
];

const ensoPath =
  "M 270 172 C 310 178, 338 210, 335 252 C 332 296, 298 330, 254 332 C 210 334, 172 304, 168 260 C 164 216, 190 180, 230 170";

const svgFilters = (
  <defs>
    <filter id="enso-glow">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="enso-glow-breathing">
      <feGaussianBlur stdDeviation="14" />
    </filter>
  </defs>
);

export function HeroGraphic() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const anim = <T,>(v: T): T | undefined => (shouldAnimate ? v : undefined);

  return (
    <motion.div
      className="w-full max-w-[500px] aspect-square"
      aria-hidden="true"
      initial={shouldAnimate ? "hidden" : "visible"}
      animate="visible"
      variants={anim({ hidden: {}, visible: { transition: { delayChildren: 0.7, staggerChildren: 0.05 } } })}
    >
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes hero-ring-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
        {svgFilters}

        {/* Construction Grid */}
        <motion.g
          variants={anim({
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { ...spring.default, delay: 0 } },
          })}
        >
          <line x1="250" y1="20" x2="250" y2="480" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.5" />
          <line x1="20" y1="250" x2="480" y2="250" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.5" />
          <line x1="87" y1="87" x2="413" y2="413" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="0.5" />
          <line x1="413" y1="87" x2="87" y2="413" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="0.5" />
          {[110, 170, 330, 390].map((pos) => (
            <g key={`tick-${pos}`}>
              <line x1={pos} y1="246" x2={pos} y2="254" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5" />
              <line x1="246" y1={pos} x2="254" y2={pos} stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5" />
            </g>
          ))}
        </motion.g>

        {/* Concentric Rings */}
        <motion.g
          style={{
            transformOrigin: "250px 250px",
            ...(shouldAnimate ? { animation: "hero-ring-spin 120s linear 1.5s infinite" } : {}),
          }}
        >
          {rings.map((ring, i) => (
            <motion.path
              key={ring.r}
              d={ring.d}
              stroke={ring.stroke}
              strokeOpacity={ring.opacity}
              strokeWidth="1"
              fill="none"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="0.08"
              variants={anim({
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 0.92,
                  opacity: 1,
                  transition: {
                    pathLength: { ...spring.default, delay: 0.1 * i },
                    opacity: { duration: 0.4, delay: 0.1 * i },
                  },
                },
              })}
            />
          ))}

          {/* Energy Flow Overlays */}
          {shouldAnimate && rings.map((ring) => (
            <motion.path
              key={`energy-${ring.r}`}
              d={ring.d}
              stroke={ring.stroke}
              strokeOpacity={ring.opacity * 1.5}
              strokeWidth="1"
              fill="none"
              pathLength="1"
              strokeDasharray="0.06 0.1"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -1 }}
              transition={{
                strokeDashoffset: { duration: ring.flow, repeat: Infinity, ease: "linear", delay: 1.8 },
              }}
            />
          ))}
        </motion.g>

        {/* Enso Glow Breathing */}
        {shouldAnimate && (
          <motion.path
            d={ensoPath}
            stroke="#ff3d00"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            filter="url(#enso-glow-breathing)"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.0 } }}
          />
        )}

        {/* Enso Circle */}
        <motion.path
          d={ensoPath}
          stroke="#ff3d00"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          filter="url(#enso-glow)"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="0"
          variants={anim({
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { ...spring.enso, delay: 0.3 },
                opacity: { duration: 0.3, delay: 0.3 },
              },
            },
          })}
        />

        {/* Iteration Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={i}
            variants={anim({
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  scale: { ...spring.node, delay: 0.7 + i * 0.04 },
                  opacity: { duration: 0.2, delay: 0.7 + i * 0.04 },
                },
              },
            })}
          >
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={3}
              fill="#ff3d00"
              fillOpacity={node.opacity}
              animate={anim({
                x: [0, node.dx, 0, -node.dx, 0],
                y: [0, -node.dy, 0, node.dy, 0],
              })}
              transition={anim({
                x: { duration: node.px, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                y: { duration: node.py, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              })}
            />
          </motion.g>
        ))}

        {/* Kanji Accents */}
        <motion.text
          x="440"
          y="160"
          fill="#ffffff"
          fillOpacity="0.07"
          fontSize="18"
          fontFamily="'Hiragino Kaku Gothic Pro', 'MS Gothic', 'Noto Sans JP', sans-serif"
          style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          variants={anim({
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut", delay: 0.9 } },
          })}
        >
          ものづくり
        </motion.text>
        <motion.text
          x="75"
          y="410"
          fill="#ffffff"
          fillOpacity="0.06"
          fontSize="14"
          fontFamily="'Hiragino Kaku Gothic Pro', 'MS Gothic', 'Noto Sans JP', sans-serif"
          variants={anim({
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut", delay: 1.0 } },
          })}
        >
          改善
        </motion.text>
      </svg>
    </motion.div>
  );
}
