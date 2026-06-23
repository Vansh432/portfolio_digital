'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');

  useEffect(() => {
    const start = performance.now();
    const duration = 1900;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase('done'), 300);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  const letters = 'DIZITAL VIGYAPAN'.split('');

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden"
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Background radial glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)',
            }}
          />

          {/* Spinning ring */}
          <div className="relative mb-8">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #FF6B00, #FF8C33, transparent, transparent)',
                padding: '2px',
                borderRadius: '50%',
                width: '110px',
                height: '110px',
                top: '-5px',
                left: '-5px',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />

            {/* Logo container */}
            <motion.div
              className="relative w-24 h-24 rounded-full bg-[#111] border border-white/[0.06] flex items-center justify-center overflow-hidden"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <img
                src="/vigyapan%20logo222.png"
                alt="Dizital Vigyapan"
                className="w-16 h-16 object-contain"
              />
            </motion.div>
          </div>

          {/* Brand name — letter stagger */}
          <div className="flex gap-[2px] mb-10">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className={`text-[13px] font-black tracking-[3px] ${
                  char === ' ' ? 'w-3' : 'text-white'
                }`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.04,
                  duration: 0.35,
                  ease: 'easeOut',
                }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="relative w-[220px]">
            <div className="h-[2px] w-full bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #FF6B00, #FF8C33)',
                  boxShadow: '0 0 12px rgba(255,107,0,0.6)',
                }}
                transition={{ duration: 0.05 }}
              />
            </div>

            {/* percentage */}
            <motion.span
              className="absolute -top-6 right-0 text-[11px] font-mono text-[#FF6B00]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {progress}%
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-8 text-[11px] tracking-[2px] uppercase text-[#444] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Grow · Convert · Dominate
          </motion.p>

          {/* Corner decorations */}
          {[
            'top-6 left-6 border-t border-l',
            'top-6 right-6 border-t border-r',
            'bottom-6 left-6 border-b border-l',
            'bottom-6 right-6 border-b border-r',
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${cls} border-[#FF6B00]/30`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
