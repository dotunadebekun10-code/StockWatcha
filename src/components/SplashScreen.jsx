import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * SplashScreen — Figma nodes: 1027:10, 1040:194, 1044:6
 * Full-screen animated splash with StockWatcha logo + tagline.
 * Auto-advances after 2.4 s via onDone callback.
 */
export const SplashScreen = ({ onDone }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onDone) onDone();
    }, 2400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#009966] z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      data-node-id="1027:10"
      data-name="Splash Screen"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white opacity-[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white opacity-[0.06]" />
      </div>

      {/* Logo + name */}
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        {/* Logo mark */}
        <div className="w-[88px] h-[88px] rounded-[26px] bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Candlestick / bar chart icon */}
            <rect x="8" y="28" width="8" height="16" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="10" y="20" width="4" height="10" rx="1" fill="white" />
            <rect x="22" y="16" width="8" height="28" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="24" y="8" width="4" height="10" rx="1" fill="white" />
            <rect x="36" y="22" width="8" height="22" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="38" y="12" width="4" height="12" rx="1" fill="white" />
            {/* Upward trend line */}
            <path d="M6 38 L18 26 L30 20 L44 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
          </svg>
        </div>

        {/* App name */}
        <div className="flex flex-col items-center gap-1.5">
          <h1 className="text-white text-[32px] font-bold tracking-tight leading-none">
            StockWatcha
          </h1>
          <p className="text-white/70 text-[14px] font-medium tracking-wide">
            Nigeria's Stock Research App
          </p>
        </div>
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        className="absolute bottom-16 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <p className="text-white/50 text-[11px] font-medium tracking-widest uppercase">
          Loading
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
