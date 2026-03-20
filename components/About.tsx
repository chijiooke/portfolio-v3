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
            I design resilient systems that handle real money — reliably, at scale, every time.
          </h2>

          <p className="reveal d1 text-[0.95rem] text-grey-4 leading-[1.8] max-w-[40rem] mb-6">
            Engineering Lead and Senior Software Engineer with 5+ years of experience in distributed
            backends and financial infrastructure. Currently leading engineering at{" "}
            <strong className="font-medium text-ink">Scale (usescale.app)</strong> — an embedded
            finance platform for the transportation sector, overseeing systems that processed hundreds
            of millions in transaction value and scaled from 0 to 3,000+ active users in under 60 days of launch.
          </p>

          <p className="reveal d2 text-[0.95rem] text-grey-4 leading-[1.8] max-w-[40rem] mb-8">
            My work sits at the intersection of systems thinking, fintech reliability, and product
            ownership. I care deeply about fault tolerance, observability, and making deliberate
            trade-offs between consistency, cost, and performance — especially in high-throughput,
            real-money environments.
          </p>

          {/* Skills grid */}
          <div className="reveal d3 border-t border-grey-1 mt-4 grid grid-cols-2">
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
