'use client';

import React, { useEffect, useRef, useState } from 'react';

interface NumberCounterProps {
  target: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  startFrom?: number;
  decimals?: number;
  useGrouping?: boolean;
  className?: string;
}

export default function NumberCounter({
  target,
  durationMs = 1800,
  prefix = '',
  suffix = '',
  startFrom,
  decimals = 0,
  useGrouping,
  className = '',
}: NumberCounterProps) {
  const [value, setValue] = useState<number>(() => {
    // If startFrom is provided, start there; otherwise start at 0 (or target - 20 for years)
    if (startFrom !== undefined) return startFrom;
    if (target > 1900 && target < 2100) return target - 20; // e.g. 2015 starts rolling from 1995
    return 0;
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const raf = requestAnimationFrame(() => {
        setValue(target);
        setHasAnimated(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    const element = elementRef.current;
    if (!element) return;

    const startVal = startFrom !== undefined 
      ? startFrom 
      : (target > 1900 && target < 2100 ? target - 20 : 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.unobserve(entry.target);

            const startTime = performance.now();

            const step = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / durationMs, 1);

              // Ease out exponential curve
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const current = startVal + (target - startVal) * eased;

              setValue(current);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setValue(target);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, durationMs, startFrom, hasAnimated]);

  const shouldGroup = useGrouping !== undefined
    ? useGrouping
    : !(target >= 1900 && target <= 2100 && decimals === 0);

  const formattedValue = decimals > 0 
    ? value.toFixed(decimals) 
    : shouldGroup 
      ? Math.round(value).toLocaleString() 
      : String(Math.round(value));

  return (
    <span ref={elementRef} className={`tabular-nums inline-block ${className}`}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
