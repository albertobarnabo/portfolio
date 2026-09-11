"use client";

import { m, useInView } from "motion/react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades + rises children once, when they enter the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
  amount = 0.2,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

/** Adds the `in-view` class once visible — for CSS-driven effects like the ledger bars. */
export function InView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <div ref={ref} className={`${className} ${inView ? "in-view" : ""}`.trim()}>
      {children}
    </div>
  );
}
