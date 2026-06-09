"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import { useLoading } from "@/components/LoadingContext";
import lenisRef from "@/lib/lenis-instance";

export default function SmoothScroll({ children }) {
  const { isLoading } = useLoading();

  // ─── Initialize Lenis once on mount ───────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
    });

    // Expose instance globally so navbar / other components can stop/start
    lenisRef.current = lenis;

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker for perfect frame sync
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0); // Prevent GSAP from catching up after tab unfocus

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(raf);
    };
  }, []); // Only ever mount once

  // ─── Pause/resume Lenis based on preloader state ──────────────────────────
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
      // Give the DOM one paint cycle then refresh ScrollTrigger so all
      // scroll-based triggers calculate their correct positions.
      gsap.delayedCall(0.1, () => ScrollTrigger.refresh());
    }
  }, [isLoading]);

  return <>{children}</>;
}
