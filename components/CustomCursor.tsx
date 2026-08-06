"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type CursorMode = "default" | "hover" | "click";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

const TRAIL_COUNT = 6;

function subscribeMediaQuery(query: string, onStoreChange: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onStoreChange);
  return () => mql.removeEventListener("change", onStoreChange);
}

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => subscribeMediaQuery(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const CustomCursor: React.FC = () => {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reducedMotion;

  const [mode, setMode] = useState<CursorMode>("default");
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 })));
  const raf = useRef<number | null>(null);
  const rippleId = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [data-cursor='hover'], label, [role='button']",
      );

      setMode(interactive ? "hover" : "default");
    };

    const onDown = (e: MouseEvent) => {
      setMode("click");
      const id = ++rippleId.current;
      setRipples((prev) => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 650);
    };

    const onUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, input, textarea, select, [data-cursor='hover'], label, [role='button']",
      );
      setMode(interactive ? "hover" : "default");
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      let prev = pos.current;
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const t = trailPos.current[i];
        const lag = 0.22 - i * 0.02;
        t.x += (prev.x - t.x) * lag;
        t.y += (prev.y - t.y) * lag;
        const el = trailRefs.current[i];
        if (el) {
          const scale = 1 - i * 0.12;
          el.style.transform = `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${scale})`;
          el.style.opacity = String(0.35 - i * 0.045);
        }
        prev = t;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="cursor-layer" aria-hidden="true">
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="cursor-trail"
        />
      ))}

      <div
        ref={ringRef}
        className={`cursor-ring${mode === "hover" ? "is-hover" : ""}${mode === "click" ? "is-click" : ""}`}
      />

      <div
        ref={dotRef}
        className={`cursor-dot${mode === "hover" ? "is-hover" : ""}${mode === "click" ? "is-click" : ""}`}
      />

      {ripples.map((ripple) => (
        <span key={ripple.id} className="cursor-ripple" style={{ left: ripple.x, top: ripple.y }} />
      ))}
    </div>
  );
};
