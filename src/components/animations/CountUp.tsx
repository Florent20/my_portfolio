"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export function CountUp({
  to,
  suffix = "",
  duration = 2000,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const start = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOutQuart(progress) * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduceMotion]);

  const value = inView && reduceMotion ? to : count;

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
