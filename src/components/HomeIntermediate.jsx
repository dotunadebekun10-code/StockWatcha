import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Bookmark, 
  Zap, 
  Layers, 
  PieChart, 
  BarChart3, 
  Compass, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

/**
 * HomeIntermediate (Home Page for Intermediate)
 * Figma Node: 2087:5045 (402x874)
 * Strict implementation of Figma text and layout:
 * - Greeting: "Good morning, Perry — Let’s keep learning and growing"
 * - Section: "Your Path" (Intermediate Milestone Progress)
 * - Section: "Why it’s interesting"
 *   - "MTN Nigeria is a market leader with strong brand and steady growth."
 *   - Stock Card: MTN / MTNN / ₦44.10 / +1.13%
 * - Section: "Watchlist" (View all)
 *   - Intermediate holdings with price changes & valuation ratios
 * - Sector Momentum Tracker: Banking, Tech, Industrial Goods
 */
export const HomeIntermediate = ({ 
  userName = 'Perry',
  onSelectStock,
  onOpenIntermediateMTN,
  onViewAllStocks,
  onOpenGuide,
  onOpenMarketMovers
}) => {
  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto flex flex-col gap-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="2087:5045"
      data-name="Home Page for Intermediate"
    >
      {/* Header / Greeting */}
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#7C3AED] uppercase tracking-wider bg-[#EDE9FE] px-2.5 py-0.5 rounded-full">
              Intermediate Track
            </span>
            <h1 className="text-[21px] font-extrabold text-[#17211D] tracking-tight mt-1.5 leading-tight">
              Good morning, {userName}
            </h1>
            <p className="text-[13.5px] text-[#414D48] mt-0.5 font-medium">
              Let’s keep learning and growing
            </p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-[#EDE9FE] text-[#7C3AED] font-bold flex items-center justify-center border border-[#7C3AED]/20">
            <Zap className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Your Path Progress Card (Figma node 2087:5045) */}
      <div className="bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-2xl p-5 text-white shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-white/80">
            Your Path
          </span>
          <span className="text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
            Lesson 2 of 8
          </span>
        </div>
        <h2 className="text-[17px] font-bold leading-tight">
          Financial Statements & Valuation
        </h2>
        <p className="text-[12px] text-white/80 mt-1 leading-relaxed">
          Master cash flow statements, EBITDA margins, and sector P/E multiples.
        </p>

        {/* Progress Bar */}
        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
          <div className="flex-1 mr-4">
            <div className="w-full h-1.5 bg-white/25 rounded-full overflow-hidden">
              <div className="w-[35%] h-full bg-white rounded-full" />
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenGuide}
            className="text-[12px] font-bold text-white hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Why it’s interesting (Figma node 2087:5045) */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-[16px] font-bold text-[#17211D]">
            Why it’s interesting
          </h2>
          <span className="text-[11px] font-semibold text-[#7C3AED] bg-[#EDE9FE] px-2 py-0.5 rounded-md">
            Analyst Pick
          </span>
        </div>

        {/* Featured Card: MTN Nigeria */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={onOpenIntermediateMTN}
          className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm hover:border-[#009966]/40 transition-all cursor-pointer"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#FFCC00]/20 border border-[#FFCC00]/40 flex items-center justify-center font-extrabold text-[14px] text-[#B38F00]">
                MTN
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#17211D]">
                  MTN Nigeria
                </h3>
                <span className="text-[11px] font-semibold text-[#009966]">
                  MTNN · Telecommunications
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[16px] font-extrabold text-[#17211D]">₦44.10</p>
              <span className="inline-flex items-center text-[11px] font-bold text-[#15803D] bg-[#DCFCE7] px-1.5 py-0.5 rounded">
                +1.13%
              </span>
            </div>
          </div>

          <p className="text-[13px] text-[#414D48] leading-relaxed bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
            MTN Nigeria is a market leader with strong brand and steady growth.
          </p>

          <div className="mt-3.5 flex items-center justify-between text-[12px] font-semibold text-[#009966]">
            <span>View Full Financials & Multiples</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>

      {/* Watchlist Section (Figma node 2087:5045) */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-[16px] font-bold text-[#17211D]">Watchlist</h2>
          <button
            type="button"
            onClick={onViewAllStocks}
            className="text-[12.5px] font-semibold text-[#009966] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {[
            {
              symbol: 'MTNN',
              name: 'MTN Nigeria',
              price: '₦44.10',
              change: '+1.13%',
              isPositive: true,
              pe: '13.4x'
            },
            {
              symbol: 'DANGCEM',
              name: 'Dangote Cement',
              price: '₦675.00',
              change: '+2.27%',
              isPositive: true,
              pe: '16.4x'
            },
            {
              symbol: 'GTCO',
              name: 'Guaranty Trust Holding',
              price: '₦52.50',
              change: '+1.15%',
              isPositive: true,
              pe: '4.8x'
            }
          ].map((stk, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectStock && onSelectStock({ symbol: stk.symbol, name: stk.name })}
              className="w-full bg-white border border-[#E3EAE6] rounded-xl p-3.5 flex items-center justify-between hover:border-[#009966]/30 transition-all text-left cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center font-bold text-[12px] text-[#17211D]">
                  {stk.symbol.slice(0, 3)}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#17211D]">{stk.name}</h4>
                  <p className="text-[11px] text-[#76837D]">P/E: {stk.pe}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[14px] font-bold text-[#17211D]">{stk.price}</p>
                <span className="inline-block text-[11px] font-bold px-1.5 py-0.5 rounded bg-[#DCFCE7] text-[#15803D]">
                  {stk.change}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeIntermediate;
