"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `value` once, when visible. Renders the final value on the server. */
export default function CountUp({
  value,
  suffix = "",
  className = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [shown, setShown] = useState(value);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShown(0);
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed || !inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [armed, inView, value, duration]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {new Intl.NumberFormat("en-US").format(shown)}
      {suffix}
    </span>
  );
}
