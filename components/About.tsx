import { skills } from "@/data";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 lg:px-16 py-24 lg:py-36 max-w-screen-2xl mx-auto"
    >
      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-24">
        <div>
          <p className="reveal text-[0.72rem] tracking-[0.15em] uppercase text-grey-3 mb-8 pt-1">
            About me
          </p>
        </div>

        <div>
          <h2
            className="reveal font-serif leading-[1.38] tracking-[-0.02em] text-ink mb-10"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
          >
            Full-stack engineer. Product thinker. I own problems end-to-end.
          </h2>

          <p className="reveal d1 text-[0.95rem] text-grey-4 leading-[1.8] max-w-[40rem] mb-8">
            5+ years building across fintech, logistics, and consumer products — from interfaces
            people love using to infrastructure they never have to think about. Currently leading
            engineering at{" "}
            <strong className="font-medium text-ink">Scale (usescale.app)</strong>, where we went
            from zero to 3,000+ users and hundreds of millions in transaction value in under 60 days.
          </p>

          {/* Skills grid */}
          <div className="reveal d2 border-t border-grey-1 mt-4 grid grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="hoverable flex items-center gap-3 py-4 border-b border-grey-1 text-[0.83rem] text-grey-4 transition-colors duration-200 hover:text-ink"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-grey-2 flex-shrink-0" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}