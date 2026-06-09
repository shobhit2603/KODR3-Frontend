"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use GSAP quickTo for highly performant tracking
    let xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    let yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pathname]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference bg-white transition-all duration-300 ease-out hidden md:block ${
        isHovering ? "scale-[2.5]" : "scale-100"
      }`}
    ></div>
  );
}
