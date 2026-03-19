"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const raf     = useRef<number>(0);

  useEffect(() => {
    const dot  = dotRef.current;
    const rng  = ringRef.current;
    if (!dot || !rng) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
    };

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      rng.style.left = ring.current.x + "px";
      rng.style.top  = ring.current.y + "px";
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onDown  = () => document.body.classList.add("clicking");
    const onUp    = () => document.body.classList.remove("clicking");
    const onLeave = () => { dot.style.opacity = "0"; rng.style.opacity = "0"; };
    const onEnter = () => { dot.style.opacity = "";  rng.style.opacity = ""; };

    const hoverEls = () =>
      document.querySelectorAll("a, button, .hoverable");

    const addHover = () => {
      hoverEls().forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
      });
    };

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    addHover();

    // Re-apply hover listeners when DOM changes (dynamic content)
    const mo = new MutationObserver(addHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
