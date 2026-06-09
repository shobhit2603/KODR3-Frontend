"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import lenisRef from "@/lib/lenis-instance";

export default function FullScreenNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const tlRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // ─── Build the open/close timeline ────────────────────────────────────────
  useGSAP(
    () => {
      const overlay = overlayRef.current;

      // Start invisible and translated up — autoAlpha handles visibility:hidden
      // so it's fully out of the interaction layer when closed
      gsap.set(overlay, { autoAlpha: 0, yPercent: -100 });

      tlRef.current = gsap
        .timeline({ paused: true, defaults: { ease: "power4.inOut" } })
        // 1. Slide the overlay down from above
        .to(overlay, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.85,
        })
        // 2. Stagger nav links up into view
        .from(
          ".nav-item",
          {
            y: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.45"
        )
        // 3. Social links / theme button fade in
        .from(
          ".nav-social",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "power3.out",
          },
          "-=0.45"
        );
    },
    { scope: overlayRef }
  );

  // ─── Play / reverse based on isOpen ───────────────────────────────────────
  useEffect(() => {
    const lenis = lenisRef.current;

    if (isOpen) {
      // Stop smooth scroll — body.overflow hacks don't work with Lenis
      lenis?.stop();
      tlRef.current?.play();
    } else {
      lenis?.start();
      tlRef.current?.reverse();
    }
  }, [isOpen]);

  // ─── Auto-close on route change ───────────────────────────────────────────
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-[100] px-6 md:px-12 py-8 flex items-center justify-between mix-blend-difference text-white">
        <Link
          href="/"
          className="text-xl font-medium tracking-tight hover:text-violet-400 transition-colors"
        >
          Shobhit.
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex items-center gap-2 uppercase tracking-widest text-xs font-semibold hover:text-violet-400 transition-colors"
        >
          {isOpen ? "Close" : "Menu"}
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* ── Full-screen overlay ──────────────────────────────────────────── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[90] bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center px-6 md:px-24"
        style={{ willChange: "transform, opacity" }}
      >
        <nav className="flex flex-col gap-6 md:gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="overflow-hidden">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-item text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter hover:text-violet-500 dark:hover:text-violet-400 transition-colors inline-block"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-12 left-6 md:left-24 right-6 md:right-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <div className="flex gap-8 text-sm uppercase tracking-widest font-medium">
            <a
              href="https://github.com/shobhit2603"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shobhit-shrivastava-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="nav-social flex items-center gap-3 text-sm uppercase tracking-widest font-medium hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
