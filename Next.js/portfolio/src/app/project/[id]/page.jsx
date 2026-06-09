import React from "react";
import Link from "next/link";

const projectDetails = {
  "echo-ai": {
    title: "Echo.AI — Next-Gen AI Chat Application",
    description: "Next-gen AI chat application featuring Server-Sent Events (SSE) streaming, RAG architecture with Pinecone, and real-time web search.",
    longDescription: "Echo.AI is a highly optimized, AI-powered chat application. It implements Server-Sent Events (SSE) to stream AI responses chunk-by-chunk, reducing perceived response wait time by 85% with Time-to-First-Token under 200ms. It uses a Pinecone vector database with RAG architecture for document QA, and Tavily AI web search to automatically retrieve live sources, reducing hallucination rates.",
    tech: ["Next.js", "React", "Redux", "Node.js", "Express.js", "MongoDB", "Mistral AI", "LangChain", "Pinecone", "Tavily", "Docker"],
    features: [
      "SSE streaming for under 200ms Time-to-First-Token",
      "Document QA pipeline with Pinecone vector DB and RAG architecture",
      "Tavily AI web search integration for real-time live source retrieval",
      "Full application containerization using Docker"
    ],
    link: "https://echo-ai-ten-zeta.vercel.app/",
    github: "https://github.com/shobhit2603/Echo.AI"
  },
  "flexit": {
    title: "FlexIt — Real-Time Social Media Platform",
    description: "Real-time social media platform with instant messaging via Socket.io, optimized media pipeline, and secure OAuth dual authentication.",
    longDescription: "FlexIt is a full-fledged social media application focused on real-time interactions and media performance. Built with a real-time messaging system using Socket.io and MongoDB, it delivers direct messages in under 100ms. It includes an optimized media pipeline via ImageKit CDN, lazy-loading via Intersection Observer, and secure dual-method authentication.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io", "OAuth 2.0", "JWT", "Docker"],
    features: [
      "Real-time bidirectional messaging under 100ms using Socket.io",
      "Media optimization via ImageKit CDN and lazy-loading",
      "Secure dual-method authentication (Google OAuth 2.0 & Local JWT)",
      "Dockerized deployment for consistency across environments"
    ],
    link: "https://flexit-three.vercel.app/",
    github: "https://github.com/shobhit2603/FlexIt"
  },
  "momentum": {
    title: "Momentum — Squad Productivity & Consistency App",
    description: "Squad productivity and consistency app tracking win rates with automated cron jobs and offline PWA support.",
    longDescription: "Momentum helps teams and individuals maintain consistency by tracking daily tasks and squad win rates. It features an automated 'Midnight Purge' cron system that evaluates unfinished tasks daily, enforcing 100% data integrity. Additionally, it is built as a Progressive Web App (PWA) with service worker caching for 100% offline access, voice-to-text creation, and haptic feedback.",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "Tailwind CSS v4", "PWA"],
    features: [
      "Real-time squad productivity tracking and win rates",
      "Automated 'Midnight Purge' cron system for task evaluation",
      "Progressive Web App (PWA) allowing 100% offline access",
      "Automated testing and deployment via CI/CD pipelines"
    ],
    link: "https://momentum-dun-rho.vercel.app/",
    github: "https://github.com/shobhit2603/Momentum"
  }
};

import ProjectDetailView from "@/components/ProjectDetailView";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center space-y-6">
        <h1 className="text-4xl font-light tracking-tighter text-neutral-900 dark:text-neutral-50">Project Not Found</h1>
        <p className="text-lg font-light text-neutral-500 dark:text-neutral-400">
          The project you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-neutral-900 dark:text-neutral-50 hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailView project={project} />;
}
