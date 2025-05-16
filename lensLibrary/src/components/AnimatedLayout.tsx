"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface AnimatedLayoutProps {
  children: ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 