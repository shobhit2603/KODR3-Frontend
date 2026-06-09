"use client";

import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useLoading } from "@/components/LoadingContext";

export default function AboutPage() {
  const container = useRef(null);
  const hasAnimated = useRef(false);
  const { isLoading } = useLoading();

  const skillCategories = [
    {
      title: "Languages & Frontend",
      skills: [
        "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3",
        "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS",
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        "Node.js", "Express.js", "RESTful APIs", "GraphQL",
        "Socket.io", "MongoDB", "PostgreSQL",
      ],
    },
    {
      title: "DevOps & AI Tools",
      skills: [
        "Docker", "Kubernetes", "AWS", "CI/CD",
        "LangChain", "Pinecone", "Generative AI",
      ],
    },
  ];

  const timeline = [
    {
      period: "June 2023",
      role: "Full-Stack Developer Intern",
      company: "Database Cloud Education & Development",
      description:
        "Developed responsive web components using modern async programming patterns. Reduced UI bug resolution time and integrated REST APIs in an Agile environment.",
    },
    {
      period: "2021 - 2025",
      role: "B.Tech CSE Student",
      company: "Truba Institute of Engineering",
      description:
        "CGPA: 7.1/10. Focused on computer science fundamentals, system design, and software engineering.",
    },
  ];

  // ─── Fire header entrance once after preloader exits ─────────────────────
  useEffect(() => {
    if (isLoading || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, [isLoading]);

  // ─── Scroll-triggered section reveals (set up once via useGSAP) ───────────
  useGSAP(
    () => {
      // Wait until preloader is done before setting up scroll triggers
      if (isLoading) return;

      const sections = gsap.utils.toArray(".scroll-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      const timelineItems = gsap.utils.toArray(".timeline-item");
      timelineItems.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
          x: -20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
        });
      });
    },
    { scope: container, dependencies: [isLoading] }
  );

  return (
    <section
      ref={container}
      className="mx-auto max-w-5xl px-6 py-32 md:py-48 space-y-32 mt-12 md:mt-0"
    >
      {/* Header */}
      <div className="space-y-6">
        <h1 className="about-header text-6xl md:text-8xl font-light tracking-tighter">
          About <span className="text-violet-500 font-caveat font-normal">Me.</span>
        </h1>
        <p className="about-header text-xl md:text-3xl font-light text-neutral-500 max-w-3xl">
          The journey, skills, and professional experience behind the work.
        </p>
      </div>

      {/* Grid: Intro & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 scroll-section">
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight border-b border-black dark:border-white pb-6 mb-8">
            My Story
          </h2>
          <div className="space-y-6 text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
            <p>
              I am a Results-driven Full-Stack Developer and B.Tech CSE graduate
              with hands-on experience architecting scalable MERN stack
              applications, real-time systems, and AI-integrated solutions.
            </p>
            <p>
              I am skilled in RESTful API design, OAuth 2.0 authentication,
              CI/CD pipelines, and containerized deployments with Docker and
              Kubernetes. I strive to demonstrate measurable impact through
              performance-optimized projects with quantified improvements.
            </p>
            <p>
              Passionate about clean system design, Agile engineering practices,
              and delivering seamless user experiences.
            </p>
          </div>
        </div>

        <div className="space-y-8 scroll-section">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight border-b border-black dark:border-white pb-6 mb-8">
            Skills &amp; Tech
          </h2>
          <div className="space-y-12">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white hover:bg-violet-500 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12 scroll-section">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight border-b border-black dark:border-white pb-6 mb-8">
          Work Experience &amp; Education
        </h2>
        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 space-y-16 py-4">
          {timeline.map((item) => (
            <div key={item.period} className="timeline-item relative pl-12">
              <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-white dark:ring-black" />
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                <h3 className="text-2xl font-medium">
                  {item.role}{" "}
                  <span className="text-neutral-500 font-light">
                    at {item.company}
                  </span>
                </h3>
                <span className="text-sm tracking-widest text-violet-500 font-semibold uppercase">
                  {item.period}
                </span>
              </div>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
