"use client";

import { useRef } from "react";
import { projects } from "@/data";

function ProjectCard({
  proj,
  delay,
}: {
  proj: (typeof projects)[number];
  delay: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`reveal ${delay} card-glow relative bg-ink p-6 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 transition-colors duration-200 hover:bg-[#0f0f0f] overflow-hidden`}
    >
      <span className="text-[0.7rem] text-[#444] tracking-[0.1em]">{proj.num}</span>
      <h3 className="font-serif text-[1.25rem] sm:text-[1.35rem] lg:text-[1.45rem] tracking-[-0.02em] text-cream leading-[1.2]">
        {proj.name}
      </h3>
      <p className="text-[0.84rem] text-grey-3 leading-[1.75] flex-1">{proj.description}</p>
      <div className="flex justify-between items-center pt-4 border-t border-[#1e1e1e] mt-auto gap-3">
        <span className="text-[0.74rem] text-[#444] tracking-[0.04em] truncate">{proj.stack}</span>
        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.74rem] text-grey-3 no-underline tracking-[0.05em] transition-colors duration-200 hover:text-cream flex items-center gap-1 shrink-0"
        >
          {proj.linkLabel} ↗
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const delays = ["", "d1", "d2", "d1", "d2", "d3"];

  return (
    <section id="projects" className="px-4 sm:px-8 lg:px-16 pb-20 sm:pb-28 lg:pb-36 bg-ink text-cream">
      {/* Header */}
      <div className="reveal flex justify-between items-baseline mb-0 pt-16 sm:pt-20 lg:pt-24 pb-6 border-b border-[#1e1e1e]">
        <h2
          className="font-serif tracking-[-0.03em] leading-none text-cream"
          style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)" }}
        >
          Selected Work
        </h2>
        <span className="text-[0.74rem] tracking-[0.12em] uppercase text-[#555] shrink-0 ml-4">
          {projects.length.toString().padStart(2, "0")} projects
        </span>
      </div>

      {/* Grid — 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-14 lg:mt-16 border border-[#1c1c1c] rounded-sm overflow-hidden"
        style={{ gap: "1px", background: "#1c1c1c" }}
      >
        {projects.map((proj, i) => (
          <ProjectCard key={proj.num} proj={proj} delay={delays[i]} />
        ))}

        {/* More card */}
        <div className="reveal d3 card-glow relative bg-ink p-8 sm:p-10 flex items-center justify-center min-h-[160px] sm:min-h-[200px] lg:min-h-[220px] transition-colors duration-200 hover:bg-[#0f0f0f]">
          <p className="font-serif text-[1.05rem] italic text-[#2a2a2a] text-center leading-[1.7]">
            More on{" "}
            <a
              href="https://github.com/chijiooke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-3 no-underline border-b border-[#333] pb-px transition-colors duration-200 hover:text-[#aaa]"
            >
              github.com/chijiooke ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
