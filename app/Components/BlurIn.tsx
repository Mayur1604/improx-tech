'use client';

import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export const BlurIn = ({ 
  children, 
  className = "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

export default BlurIn;
