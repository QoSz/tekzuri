"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./ServicesBackground3DScene"), { ssr: false });

export function ServicesBackground3D() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <Scene />
    </div>
  );
}
