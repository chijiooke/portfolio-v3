"use client";

import { useEffect, useRef, useState } from "react";

// Faint background greeting, cycled through a few languages
const greetings = [
  "Hello", // English
  "Bonjour", // French
  "How far", // Nigerian Pidgin
  "Hallo", // German
  "Konichiwa", // Japanese
  "Hola", // Spanish
  "Kedu", // Igbo
];

const lines = [
  { text: "Hey, I'm Chijioke.", style: "normal" },
  { text: "I care about simple, ", style: "italic" },
  { text: "reliable systems.", style: "italic" },
  // { text: "I build things that last.", style: "accent" },
];

export default function Hero() {
  const [visible, setVisible] = useState(0);
  const [greeting, setGreeting] = useState(0);
  const [greetingShown, setGreetingShown] = useState(true);
  const swapRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(
      () => setVisible((v) => v + 1),
      visible === 0 ? 400 : 220
    );
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cycle = setInterval(() => {
      setGreetingShown(false);
      swapRef.current = setTimeout(() => {
        setGreeting((g) => (g + 1) % greetings.length);
        setGreetingShown(true);
      }, 600);
    }, 3600);

    return () => {
      clearInterval(cycle);
      clearTimeout(swapRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-20 sm:pb-36 relative overflow-hidden"
    >
      {/* Faint bg word — a greeting, cycling through languages */}
      <span
        aria-hidden
        className="absolute top-1/2 right-[-3rem] -translate-y-1/2 font-serif text-[20vw] text-grey-1 leading-none select-none pointer-events-none whitespace-nowrap tracking-[-0.04em] z-0 transition-all duration-[600ms] ease-out"
        style={{
          opacity: greetingShown ? 1 : 0,
          transform: `translateY(-50%) translateX(${
            greetingShown ? "0" : "1.5rem"
          })`,
        }}
      >
        {greetings[greeting]}.
      </span>

      <div className="relative z-10 max-w-full" id="hero-content">
        <p className="anim-fade-up-1 text-[0.74rem] tracking-[0.15em] uppercase text-grey-3 mb-6 mt-20 sm:mt-0">
          Senior Software Engineer 
        </p>

        {/* Main staggered headline */}
        <h1
          className="font-serif leading-[0.97] tracking-[-0.03em] mb-16 lg:mb-24"
          style={{ fontSize: "clamp(3rem, 5.8vw, 6rem)" }}
        >
          {lines.map((line, i) => (
            <span
              key={i}
              className="block transition-all duration-500"
              style={{
                opacity: i < visible ? 1 : 0,
                transform: i < visible ? "translateY(0)" : "translateY(18px)",
                transitionDelay: `${i * 30}ms`,
              }}
            >
              {line.style === "italic" ? (
                <em className="not-italic font-serif italic text-grey-3">
                  {line.text}
                </em>
              ) : line.style === "accent" ? (
                <span className="text-ink">{line.text}</span>
              ) : (
                line.text
              )}
              {/* blinking cursor on last visible line */}
              {i === visible - 1 && visible < lines.length && (
                <span className="blink ml-1 text-grey-2">|</span>
              )}
            </span>
          ))}
        </h1>

        {/* Bottom row */}
        <div className="anim-fade-up-3 flex flex-col md:flex-row md:justify-between md:items-end gap-10 md:gap-8 lg:gap-16 pt-10 border-t border-grey-1">
          <p className="text-[1rem] text-grey-4 leading-[1.75] max-w-[30rem]">
            5+ years building across the full stack — from polished, performant
            UIs to fault-tolerant distributed systems and high-throughput
            financial infrastructure. Currently leading engineering at{" "}
            <a
              href="https://usescale.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink border-b border-grey-2 no-underline hover:border-ink transition-colors"
            >
              scale.app
            </a>
          </p>

          <div className="flex flex-col lg:flex-row gap-3 flex-shrink-0 md:items-end">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 text-[0.78rem] tracking-[0.1em] uppercase no-underline font-normal px-7 py-[0.95rem] rounded-full bg-ink text-cream border border-ink transition-all duration-200 hover:bg-transparent hover:text-ink"
            >
              View Work
              <span className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                ↗
              </span>
            </a>
            <a
              href="mailto:silva.chijioke.michael@gmail.com"
              className="group inline-flex items-center justify-center gap-3 text-[0.78rem] tracking-[0.1em] uppercase no-underline font-normal px-7 py-[0.95rem] rounded-full border border-grey-2 text-grey-4 transition-all duration-200 hover:border-ink hover:text-ink"
            >
              Get in Touch
              <span className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-fade-up-4 absolute bottom-10 left-1/2 -translate-x-1/2  flex-col items-center gap-2 hidden sm:flex">
        <span className="text-[0.7rem] tracking-[0.12em] uppercase text-grey-3">
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
