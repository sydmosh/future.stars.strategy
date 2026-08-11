'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
