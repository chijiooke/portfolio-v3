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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-7 transition-all duration-300 ${
        scrolled ? "nav-blur border-b border-grey-1" : ""
      }`}
    >
      <Link
        href="#hero"
        className="font-serif text-[1.1rem] tracking-tight text-ink no-underline"
      >
        Chijioke.
      </Link>
      <ul className="flex gap-10 list-none">
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
    </nav>
  );
}
