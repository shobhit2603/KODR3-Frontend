"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap-config";
import { useLoading } from "@/components/LoadingContext";

export default function Home() {
  const container = useRef(null);
  const hasAnimated = useRef(false);
  const { isLoading } = useLoading();

  // ─── Fire hero entrance animation exactly once after preloader exits ───────
  useEffect(() => {
    // Skip if still loading, or if we've already played the animation
    if (isLoading || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-text", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
        })
        .from(
          ".hero-subtext",
          { y: 20, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .from(
          ".hero-button",
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.6"
        );
    }, container);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center min-h-[90vh] px-6 mt-12 md:mt-0"
    >
      <div className="max-w-5xl text-center space-y-12">
        <div className="space-y-4">
          <div className="overflow-hidden p-2">
            <h1 className="hero-text text-6xl md:text-8xl lg:text-[10rem] leading-none font-light tracking-tighter">
              Shobhit <br className="md:hidden" />
              <span className="text-violet-500 font-caveat font-normal">
                Shrivastava
              </span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="hero-text text-2xl md:text-4xl font-light tracking-tight text-neutral-500">
              Full-Stack Developer &amp; AI Integrator
            </h2>
          </div>
        </div>

        <p className="hero-subtext text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light max-w-3xl mx-auto">
          Architecting scalable MERN stack applications, real-time systems, and
          AI-integrated solutions with a focus on clean, editorial design.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-12">
          <Link
            href="/projects"
            className="hero-button px-10 py-5 rounded-full text-sm tracking-widest uppercase font-semibold bg-black text-white hover:bg-violet-600 dark:bg-white dark:text-black dark:hover:bg-violet-500 transition-colors duration-300"
          >
            Explore Projects
          </Link>
          <Link
            href="/about"
            className="hero-button px-10 py-5 rounded-full text-sm tracking-widest uppercase font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-colors duration-300"
          >
            More About Me
          </Link>
        </div>
      </div>
    </div>
  );
}
