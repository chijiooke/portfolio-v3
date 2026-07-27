import { experience } from "@/data";

const toHref = (url: string) =>
  url.startsWith("http") ? url : `https://${url}`;

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 sm:px-10 lg:px-16 pb-24 lg:pb-36 max-w-screen-2xl mx-auto"
    >
      {/* Header */}
      <div className="reveal flex justify-between items-baseline mb-12 lg:mb-16 pb-6 border-b border-grey-1">
        <h2
          className="font-serif tracking-[-0.03em] leading-none"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Experience
        </h2>
        <span className="text-[0.74rem] tracking-[0.12em] uppercase text-grey-3">
          {experience
            .reduce((n, exp) => n + exp.roles.length, 0)
            .toString()
            .padStart(2, "0")}{" "}
          roles
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {experience.map((exp, i) => (
          <div
            key={i}
            className={`exp-row reveal ${
              i > 0 ? `d${Math.min(i, 4)}` : ""
            } grid py-8 lg:py-10 border-b border-grey-1 gap-4 lg:gap-12`}
            style={{ gridTemplateColumns: "1fr" }}
          >
            {/* Mobile: period + badge inline */}
            <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2 lg:w-48">
              <span className="text-[0.78rem] text-grey-3 tracking-[0.05em]">
                {exp.period}
              </span>
              <span className="inline-block text-[0.68rem] tracking-[0.08em] uppercase px-3 py-1 border border-grey-1 rounded-full text-grey-3 w-fit">
                {exp.type}
              </span>
              {exp.roles.length > 1 && (
                <span className="text-[0.68rem] tracking-[0.08em] uppercase text-grey-2">
                  {exp.roles.length} roles
                </span>
              )}
            </div>

            <div>
              <p className="font-serif text-[1.2rem] lg:text-[1.4rem] tracking-[-0.02em] leading-[1.2] mb-5">
                {exp.company}
                {exp.url && (
                  <a
                    href={toHref(exp.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-grey-2 text-[0.9em] ml-2 align-middle transition-colors duration-200 hover:text-ink"
                  >
                    ↗
                  </a>
                )}
              </p>

              {/* Roles — newest first, timeline when there was a promotion */}
              <div
                className={
                  exp.roles.length > 1
                    ? "flex flex-col gap-8 pl-6 border-l border-grey-1"
                    : "flex flex-col"
                }
              >
                {exp.roles.map((r, ri) => (
                  <div key={ri} className="relative">
                    {exp.roles.length > 1 && (
                      <span className="absolute -left-[1.72rem] top-[0.4rem] w-[9px] h-[9px] rounded-full bg-grey-2 ring-4 ring-cream" />
                    )}

                    <div
                      className={`flex items-baseline flex-wrap gap-x-3 gap-y-1 ${
                        exp.roles.length > 1 ? "mb-1" : "mb-3"
                      }`}
                    >
                      <p className="text-[0.9rem] font-medium text-ink">
                        {r.role}
                      </p>
                      {r.url && exp.roles.length > 1 && (
                        <a
                          href={toHref(r.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-grey-2 text-[0.9rem]"
                        >
                          ↗
                        </a>
                      )}
                    </div>

                    {exp.roles.length > 1 && (
                      <p className="text-[0.76rem] text-grey-3 tracking-[0.05em] mb-3">
                        {r.period}
                      </p>
                    )}

                    <p className="text-[0.88rem] text-grey-4 leading-[1.75]">
                      {r.description}
                    </p>

                    {r.achievement && (
                      <div className="mt-4 pl-4 py-3 pr-4 bg-black/[0.025] border-l-2 border-grey-2 rounded-r text-[0.82rem] text-grey-4 leading-[1.65]">
                        <strong className="font-medium text-ink">
                          Key impact:{" "}
                        </strong>
                        {r.achievement}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {r.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.72rem] tracking-[0.05em] px-3 py-1 border border-grey-1 rounded-full text-grey-4"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
