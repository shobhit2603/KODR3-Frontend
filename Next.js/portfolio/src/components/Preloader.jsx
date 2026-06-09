"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";
import { useLoading } from "./LoadingContext";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef(null);
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    if (!isLoading) return;

    // Prevent native scroll during load (Lenis is already stopped via SmoothScroll)
    document.body.style.overflow = "hidden";

    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 2;

      // Hold at 95% until the document is truly loaded
      if (currentProgress > 95 && document.readyState !== "complete") {
        currentProgress = 95;
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(currentProgress);
        clearInterval(interval);

        // Slide the preloader off the top — GPU-accelerated via will-change
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          delay: 0.3,
          onComplete: () => {
            // Restore native scroll (Lenis will take over from SmoothScroll effect)
            document.body.style.overflow = "";
            setIsLoading(false);
          },
        });
      } else {
        setProgress(currentProgress);
      }
    }, 30);

    const handleLoad = () => {
      if (currentProgress < 100) currentProgress = 100;
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <div
      ref={preloaderRef}
      style={{ willChange: "transform" }}
      className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="text-5xl md:text-7xl font-light tracking-tighter tabular-nums">
        {progress}%
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-px bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <div
          className="h-full bg-violet-500"
          style={{
            width: `${progress}%`,
            transition: "width 75ms linear",
          }}
        />
      </div>
    </div>
  );
}
