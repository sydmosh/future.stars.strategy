'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useState, useEffect } from 'react';

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (prevPath !== pathname) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 600);
      setPrevPath(pathname);
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  return (
    <>
      <LoadingSpinner visible={loading} />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28, duration: 0.35 }}
          className="h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
