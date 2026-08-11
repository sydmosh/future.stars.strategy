'use client';

import { motion } from 'framer-motion';

interface AudioWaveformProps {
  isSpeaking: boolean;
  color?: string;
}

export default function AudioWaveform({ isSpeaking, color = 'bg-indigo-500' }: AudioWaveformProps) {
  const barCount = 12;
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className="flex items-center gap-[3px] h-6 px-2">
      {bars.map((index) => {
        // Create variations in bar height animations
        const duration = 0.6 + (index % 3) * 0.15;
        const delay = (index % 4) * 0.1;

        return (
          <motion.div
            key={index}
            className={`w-[3px] rounded-full ${color}`}
            initial={{ height: 4 }}
            animate={
              isSpeaking
                ? {
                    height: [4, 16, 8, 20, 4][index % 5],
                  }
                : { height: 4 }
            }
            transition={
              isSpeaking
                ? {
                    duration: duration,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: delay,
                    ease: 'easeInOut',
                  }
                : { duration: 0.2 }
            }
          />
        );
      })}
    </div>
  );
}
