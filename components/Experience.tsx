import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="px-16 pb-36 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="reveal flex justify-between items-baseline mb-16 pb-6 border-b border-grey-1">
        <h2
          className="font-serif tracking-[-0.03em] leading-none"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Experience
        </h2>
        <span className="text-[0.74rem] tracking-[0.12em] uppercase text-grey-3">
          {experience.length.toString().padStart(2, "0")} roles
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {experience.map((exp, i) => (
          <div
            key={i}
            className={`exp-row reveal ${i > 0 ? `d${Math.min(i, 4)}` : ""} grid gap-12 py-10 border-b border-grey-1`}
            style={{ gridTemplateColumns: "12rem 1fr auto" }}
          >
            {/* Left: period + badge */}
            <div className="flex flex-col gap-2">
              <span className="text-[0.78rem] text-grey-3 tracking-[0.05em]">{exp.period}</span>
              <span className="inline-block text-[0.68rem] tracking-[0.08em] uppercase px-3 py-1 border border-grey-1 rounded-full text-grey-3 w-fit mt-1">
                {exp.type}
              </span>
            </div>

            {/* Center: content */}
            <div>
              <p className="font-serif text-[1.4rem] tracking-[-0.02em] leading-[1.2] mb-1">
                {exp.company}
              </p>
              <p className="text-[0.84rem] text-grey-3 mb-3">{exp.role}</p>
              <p className="text-[0.88rem] text-grey-4 leading-[1.75] max-w-[36rem]">
                {exp.description}
              </p>

              {exp.achievement && (
                <div className="mt-4 pl-4 py-3 pr-4 bg-black/[0.025] border-l-2 border-grey-2 rounded-r text-[0.82rem] text-grey-4 leading-[1.65]">
                  <strong className="font-medium text-ink">Key impact: </strong>
                  {exp.achievement}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.72rem] tracking-[0.05em] px-3 py-1 border border-grey-1 rounded-full text-grey-4"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="text-grey-2 text-[1.1rem] pt-1 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
