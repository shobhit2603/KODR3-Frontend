"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "@/components/LoadingContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectDetailView({ project }) {
  const container = useRef(null);
  const { isLoading } = useLoading();

  useGSAP(() => {
    if (isLoading) return;

    gsap.from(".detail-header", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
    });

    const sections = gsap.utils.toArray(".scroll-section");
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, { scope: container, dependencies: [isLoading] });

  return (
    <article ref={container} className="mx-auto max-w-5xl px-6 py-32 md:py-48 space-y-24 mt-12 md:mt-0">
      {/* Back button */}
      <div className="detail-header">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-semibold text-neutral-500 hover:text-violet-500 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-10">
        <h1 className="detail-header text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter">
          {project.title}
        </h1>
        <p className="detail-header text-2xl md:text-4xl font-light text-neutral-500 max-w-4xl leading-relaxed">
          {project.description}
        </p>
        <div className="detail-header flex flex-wrap gap-3 pt-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Details grid / Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-black dark:border-white scroll-section">
        <div className="md:col-span-2 space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">Overview</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              {project.longDescription}
            </p>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">Key Features</h2>
            <ul className="space-y-6 text-xl text-neutral-600 dark:text-neutral-300 font-light list-none pl-0">
              {project.features.map((feature, idx) => (
                <li key={idx} className="relative pl-8">
                  <span className="absolute left-0 top-3.5 w-3 h-[2px] bg-violet-500"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links sidebar */}
        <div className="space-y-8 scroll-section">
          <div className="p-10 rounded-4xl bg-neutral-50 dark:bg-neutral-900 space-y-8">
            <h3 className="text-xl font-light tracking-tight">Project Links</h3>
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full py-5 px-8 rounded-full text-sm tracking-widest uppercase font-semibold bg-violet-500 text-white hover:bg-violet-600 transition-colors"
            >
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6h5.25m0 0v5.25M19.5 4.5l-15 15" />
              </svg>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-5 px-8 rounded-full text-sm tracking-widest uppercase font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
