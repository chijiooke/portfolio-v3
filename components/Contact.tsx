export default function Contact() {
  return (
    <section
      id="contact"
      className="px-16 py-40 flex flex-col items-center text-center relative overflow-hidden"
    >
      {/* Soft radial bg */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle, #e8e7e3 0%, transparent 70%)",
        }}
      />

      <p className="reveal relative text-[0.72rem] tracking-[0.15em] uppercase text-grey-3 mb-8">
        Open to opportunities
      </p>

      <h2
        className="reveal d1 relative font-serif tracking-[-0.03em] leading-[1] mb-10"
        style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
      >
        Let's build
        <br />
        something{" "}
        <em className="font-serif italic text-grey-3">resilient.</em>
      </h2>

      <a
        href="mailto:silva.chijioke.michael@gmail.com"
        className="reveal d2 relative font-serif tracking-[-0.01em] text-grey-4 no-underline border-b border-grey-2 pb-1 transition-colors duration-200 hover:text-ink hover:border-ink"
        style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
      >
        silva.chijioke.michael@gmail.com
      </a>

      <div className="reveal d3 relative flex gap-8 mt-12">
        {[
          { label: "GitHub",   href: "https://github.com/chijiooke" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chijiooke" },
          { label: "Email ↗",  href: "mailto:silva.chijioke.michael@gmail.com" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[0.78rem] tracking-[0.1em] uppercase text-grey-3 no-underline transition-colors duration-200 hover:text-ink font-normal"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
