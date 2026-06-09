import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white pt-32 pb-12 transition-colors duration-500">
      <div className="mx-auto max-w-5xl px-6 flex flex-col gap-24">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter">
            Let&apos;s build <br /> <span className="text-violet-500 font-caveat font-normal">together.</span>
          </h2>
          <a
            href="mailto:shrivastavashobhit706@gmail.com"
            className="inline-block text-xl md:text-3xl font-light border-b border-black dark:border-white hover:text-violet-500 hover:border-violet-500 transition-colors duration-300 pb-1"
          >
            shrivastavashobhit706@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm font-medium tracking-widest uppercase text-neutral-500">
            &copy; {new Date().getFullYear()} Shobhit Shrivastava
          </p>
          <div className="flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a
              href="https://github.com/shobhit2603"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-500 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shobhit-shrivastava-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-500 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}