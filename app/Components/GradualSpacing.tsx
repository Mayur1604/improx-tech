'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';

function parseWordsWithIndices(text: string) {
  const words = text.split(' ');
  const result: { word: string; chars: string[]; wordStartIndex: number }[] = [];
  let currentOffset = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const chars = word.split('');
    result.push({
      word,
      chars,
      wordStartIndex: currentOffset,
    });
    currentOffset += chars.length + 1; // account for space
  }

  return result;
}

export function GradualSpacing({ 
  text = 'Gradual Spacing',
  className = "text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal",
  delayMultiple = 0.007,
  duration = 0.45
}: { 
  text: string;
  className?: string;
  delayMultiple?: number;
  duration?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const wordsWithIndices = React.useMemo(() => parseWordsWithIndices(text), [text]);

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      <AnimatePresence>
        {wordsWithIndices.map((item, wordIndex) => {
          return (
            <span key={wordIndex} className="inline-flex whitespace-nowrap mr-[0.32em]">
              {item.chars.map((char, charIndex) => {
                const totalIndex = item.wordStartIndex + charIndex;
                return (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, x: -14 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    exit="hidden"
                    transition={{ 
                      duration, 
                      delay: 0.15 + totalIndex * delayMultiple,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default GradualSpacing;
