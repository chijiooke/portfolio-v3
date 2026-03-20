"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 640) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-10 lg:px-16 py-7 transition-all duration-300 ${
          scrolled || menuOpen ? "nav-blur border-b border-grey-1" : ""
        }`}
      >
        <Link
          href="#hero"
          className="font-serif text-[1.1rem] tracking-tight text-ink no-underline"
          onClick={closeMenu}
        >
          Chijioke.
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.78rem] tracking-[0.1em] uppercase text-grey-4 no-underline transition-colors duration-200 hover:text-ink font-normal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block h-px bg-ink transition-all duration-300 origin-center"
            style={{
              width: "22px",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px bg-ink transition-all duration-300"
            style={{
              width: "22px",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px bg-ink transition-all duration-300 origin-center"
            style={{
              width: "22px",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center px-6 nav-blur transition-all duration-300 sm:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="list-none flex flex-col gap-2 mt-20">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                opacity: menuOpen ? 1 : 0,
                transition: "transform 0.35s ease, opacity 0.35s ease",
              }}
            >
              <a
                href={l.href}
                onClick={closeMenu}
                className="block font-serif text-[2.4rem] tracking-[-0.03em] leading-[1.2] text-ink no-underline py-3 border-b border-grey-1 transition-colors duration-200 hover:text-grey-3"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="flex gap-6 mt-12"
          style={{
            transitionDelay: menuOpen ? "280ms" : "0ms",
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            opacity: menuOpen ? 1 : 0,
            transition: "transform 0.35s ease, opacity 0.35s ease",
          }}
        >
          {[
            { label: "GitHub",   href: "https://github.com/chijiooke" },
            { label: "LinkedIn", href: "https://linkedin.com/in/chijiooke" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.75rem] tracking-[0.12em] uppercase text-grey-3 no-underline hover:text-ink transition-colors duration-200"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
