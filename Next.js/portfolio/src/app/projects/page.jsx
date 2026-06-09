"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useLoading } from "@/components/LoadingContext";

const projects = [
  {
    id: "echo-ai",
    title: "Echo.AI — AI Chat App",
    description:
      "Next-gen AI chat application featuring Server-Sent Events (SSE) streaming, RAG architecture with Pinecone, and real-time web search.",
    tech: ["Next.js", "Node.js", "LangChain", "Pinecone", "Docker"],
  },
  {
    id: "flexit",
    title: "FlexIt — Social Media",
    description:
      "Real-time social media platform with instant messaging via Socket.io, optimized media pipeline, and secure OAuth dual authentication.",
    tech: ["React", "Redux", "Socket.io", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "momentum",
    title: "Momentum — Productivity",
    description:
      "Squad productivity and consistency app tracking win rates with automated cron jobs and offline PWA support.",
    tech: ["Next.js", "Node.js", "MongoDB", "PWA", "Tailwind CSS v4"],
  },
];

export default function ProjectsPage() {
  const container = useRef(null);
  const hasAnimated = useRef(false);
  const { isLoading } = useLoading();

  // ─── Header entrance — one-shot after preloader ───────────────────────────
  useEffect(() => {
    if (isLoading || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, [isLoading]);

  // ─── Project cards — scroll-triggered ────────────────────────────────────
  useGSAP(
    () => {
      if (isLoading) return;

      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });
    },
    { scope: container, dependencies: [isLoading] }
  );

  return (
    <section
      ref={container}
      className="mx-auto max-w-6xl px-6 py-32 md:py-48 space-y-32 mt-12 md:mt-0"
    >
      <div className="space-y-6">
        <h1 className="projects-header text-6xl md:text-8xl font-light tracking-tighter">
          Selected{" "}
          <span className="text-violet-500 font-caveat font-normal">Works.</span>
        </h1>
        <p className="projects-header text-xl md:text-3xl font-light text-neutral-500 max-w-3xl">
          A collection of scalable digital platforms, real-time systems, and
          AI-integrated solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 md:gap-24">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="project-card group relative block p-8 md:p-16 rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900 hover:bg-violet-500 hover:text-white transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-12">
              <div className="space-y-8 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-xl text-neutral-500 dark:text-neutral-400 group-hover:text-violet-100 leading-relaxed font-light transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 text-xs tracking-widest uppercase font-medium rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 group-hover:border-violet-300 group-hover:text-white transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full border border-black dark:border-white text-black dark:text-white group-hover:bg-white group-hover:text-violet-500 group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
