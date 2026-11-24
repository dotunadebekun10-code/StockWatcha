import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Lock, ArrowRight, TrendingUp, Sparkles, Compass, ShieldCheck } from 'lucide-react';

/**
 * WatchlistGuestEmpty (Watchlsit Empty State Page for Guest)
 * Figma Node: 1562:6915 (402x874)
 * Strict implementation of Figma text and layout:
 * - "My Watchlist"
 * - "Track the stocks you’re exploring"
 * - "Learn as you watch"
 * - "Follow companies, see how they grow and why it matters."
 * - "Save your watchlist"
 * - "Create an account to keep track of companies you're researching and return to them anytime."
 * - "Create Account" CTA
 * - "Find Companies" button
 */
export const WatchlistGuestEmpty = ({ onCreateAccount, onExploreStocks }) => {
  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto flex flex-col"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1562:6915"
      data-name="Watchlsit Empty State Page for Guest"
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[24px] font-bold text-[#17211D] tracking-tight">
          My Watchlist
        </h1>
        <p className="text-[14px] text-[#76837D] mt-1">
          Track the stocks you’re exploring
        </p>
      </div>

      {/* Main Empty State Container */}
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        {/* Visual Badge Card */}
        <div className="w-20 h-20 rounded-3xl bg-[#E6F5EF] border border-[#B3DFD0] flex items-center justify-center mb-6 shadow-sm">
          <Bookmark className="w-10 h-10 text-[#009966] fill-[#009966]/20" />
        </div>

        {/* Feature 1: Learn as you watch */}
        <div className="w-full bg-white border border-[#E3EAE6] rounded-2xl p-5 mb-4 shadow-sm">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#E6F5EF] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#009966]" />
            </div>
            <h2 className="text-[16px] font-bold text-[#17211D]">
              Learn as you watch
            </h2>
          </div>
          <p className="text-[13px] text-[#414D48] leading-relaxed">
            Follow companies, see how they grow and why it matters.
          </p>
        </div>

        {/* Feature 2: Save your watchlist & create account */}
        <div className="w-full bg-gradient-to-br from-white to-[#F0F9F5] border border-[#009966]/20 rounded-2xl p-5 shadow-sm mb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#009966] flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-[16px] font-bold text-[#17211D]">
              Save your watchlist
            </h3>
          </div>
          <p className="text-[13px] text-[#414D48] leading-relaxed mb-5">
            Create an account to keep track of companies you're researching and return to them anytime.
          </p>

          {/* Create Account Primary Action */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={onCreateAccount}
            className="w-full bg-[#006B48] text-white py-3.5 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#005A3C] transition-colors cursor-pointer"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Secondary Action: Find Companies */}
        <button
          type="button"
          onClick={onExploreStocks}
          className="w-full bg-white border border-[#E3EAE6] text-[#17211D] py-3.5 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-[#F3FAF7] hover:border-[#009966]/40 transition-colors cursor-pointer"
        >
          <Compass className="w-4 h-4 text-[#009966]" />
          <span>Find Companies</span>
        </button>
      </div>
    </motion.div>
  );
};

export default WatchlistGuestEmpty;
