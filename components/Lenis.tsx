"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const LenisScroll: React.FC = () => {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const animate = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.current?.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
