import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  ArrowRight, 
  ChevronRight, 
  Moon, 
  Sun, 
  Building2, 
  Bookmark, 
  Compass, 
  Sparkles,
  Zap
} from 'lucide-react';

/**
 * HomeDarkMode (Home Page for Begineers — Dark Mode)
 * Figma Node: 1725:1080 (402x874)
 * Strict implementation of Figma dark mode styling & layout:
 * - Background: Dark theme palette (#0F1713 / #17211D / #1F2E28)
 * - Typography: High-contrast crisp white & muted jade (#A7C4B7)
 * - Tickers highlighted:
 *   - Neimeth International Pharmaceuticals Plc (NEIMETH · NGX · Healthcare)
 *   - Dangote Cement, GTCO, MTNN
 * - Top movers & exploration cards in dark theme styling
 */
export const HomeDarkMode = ({ 
  onSelectStock, 
  onViewAllStocks, 
  onOpenGuide, 
  onOpenMarketMovers, 
  onOpenNews,
  onToggleTheme
}) => {
  const [activeMoverTab, setActiveMoverTab] = useState('active');

  const featuredStock = {
    symbol: 'NEIMETH',
    name: 'Neimeth International Pharmaceuticals Plc',
    sector: 'Healthcare',
    price: '₦2.15',
    change: '+4.88%',
    isPositive: true,
    marketCap: '₦8.2B',
    high52: '₦2.80',
    low52: '₦1.45'
  };

  const movers = [
    {
      symbol: 'NEIMETH',
      name: 'Neimeth International Pharmaceuticals',
      sector: 'Healthcare',
      price: '₦2.15',
      change: '+4.88%',
      isPositive: true
    },
    {
      symbol: 'DANGCEM',
      name: 'Dangote Cement Plc',
      sector: 'Industrials',
      price: '₦675.00',
      change: '+2.27%',
      isPositive: true
    },
    {
      symbol: 'GTCO',
      name: 'Guaranty Trust Holding Co',
      sector: 'Banking',
      price: '₦52.50',
      change: '+1.15%',
      isPositive: true
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#0F1713] text-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto flex flex-col gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1725:1080"
      data-name="Home Page for Begineers — Dark Mode"
    >
      {/* Top Header */}
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#00E599] uppercase tracking-wider bg-[#00E599]/15 px-2.5 py-0.5 rounded-full">
              Dark Mode
            </span>
            <h1 className="text-[22px] font-extrabold text-white tracking-tight mt-1.5 leading-tight">
              Welcome to Stockwatcha
            </h1>
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-xl bg-[#1A2620] border border-[#2B3B33] text-[#00E599] flex items-center justify-center hover:bg-[#22332B] transition-colors cursor-pointer"
          >
            <Sun className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[14px] text-[#A7C4B7] mt-1 font-medium">
          Understand the market. Make better decisions.
        </p>
      </div>

      {/* Dark Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#7A9588] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search stocks, sectors, or tickers..."
          className="w-full bg-[#17231D] border border-[#2B3B33] rounded-2xl pl-10 pr-4 py-3 text-[13.5px] text-white placeholder-[#7A9588] focus:outline-none focus:ring-2 focus:ring-[#00E599]/30 focus:border-[#00E599]"
        />
      </div>

      {/* Featured Company (Neimeth Pharmaceuticals - Figma 1725:1080) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[16px] font-bold text-white">Company to explore</h2>
          <button
            type="button"
            onClick={onViewAllStocks}
            className="text-[12.5px] font-semibold text-[#00E599] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-[#17231D] border border-[#2B3B33] rounded-2xl p-5 shadow-lg">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                {featuredStock.name}
              </h3>
              <p className="text-[12px] text-[#A7C4B7] mt-0.5">
                {featuredStock.symbol} · NGX · {featuredStock.sector}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#00E599]/15 text-[#00E599] font-bold flex items-center justify-center">
              NEI
            </div>
          </div>

          <div className="flex items-baseline gap-2 mt-3 mb-4">
            <span className="text-[24px] font-extrabold text-white">
              {featuredStock.price}
            </span>
            <span className="text-[12.5px] font-bold text-[#00E599] bg-[#00E599]/20 px-2 py-0.5 rounded-md">
              {featuredStock.change}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#2B3B33] mb-4 text-[12px]">
            <div>
              <p className="text-[11px] text-[#7A9588]">52W High</p>
              <p className="font-bold text-white mt-0.5">{featuredStock.high52}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#7A9588]">52W Low</p>
              <p className="font-bold text-white mt-0.5">{featuredStock.low52}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#7A9588]">Market Cap</p>
              <p className="font-bold text-white mt-0.5">{featuredStock.marketCap}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectStock && onSelectStock(featuredStock)}
            className="w-full bg-[#009966] text-white py-3 rounded-xl text-[13.5px] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#007A52] transition-colors cursor-pointer"
          >
            <span>Explore Company</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Market Movers in Dark Mode */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[16px] font-bold text-white">Market Movers</h2>
          <button
            type="button"
            onClick={onOpenMarketMovers}
            className="text-[12.5px] font-semibold text-[#00E599] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {movers.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectStock && onSelectStock(item)}
              className="bg-[#17231D] border border-[#2B3B33] rounded-xl p-3.5 flex items-center justify-between hover:border-[#00E599]/40 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#22332B] flex items-center justify-center font-bold text-[12px] text-white">
                  {item.symbol.slice(0, 3)}
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-white">{item.name}</h4>
                  <p className="text-[11px] text-[#7A9588]">{item.symbol} · {item.sector}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[13.5px] font-bold text-white">{item.price}</p>
                <span className="text-[11px] font-bold text-[#00E599]">
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeDarkMode;
