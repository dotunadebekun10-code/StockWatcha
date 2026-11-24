import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Building2, 
  Compass, 
  Bookmark, 
  Eye, 
  Zap, 
  BookOpen,
  ArrowUpRight,
  TrendingDown
} from 'lucide-react';

/**
 * HomeGuest (Home Page for Guest)
 * Figma Node: 1472:857 (402x874)
 * Strict implementation of Figma layout and copy:
 * - "Welcome to Stockwatcha"
 * - "Understand the market. Make better decisions."
 * - Search bar with filter
 * - Section: "Company to explore" (View all)
 *   - Featured Card: Dangote Cement Plc
 *   - DANGCEM · NGX · Industrials
 *   - ₦652.50 (+1.30% / ₦8.13)
 *   - 52W high: ₦780.00 | 52W Low: ₦480.00 | Market Cap: ₦6.2T
 *   - CTA: "Explore Company"
 * - Section: "Market Movers" (View all)
 *   - Tabs: Most Active, Top Gainers, Top Losers
 *   - Mover cards: NSLTECH (SECURE ELECTRONIC TECHNOLOGY PLC), MTNN, GTCO, etc.
 * - Guest CTA card: Create account or start learning guide
 */
export const HomeGuest = ({ 
  onExploreCompany, 
  onViewAllStocks, 
  onOpenMarketMovers, 
  onOpenNews,
  onOpenGuide,
  onCreateAccount,
  onSelectStock
}) => {
  const [activeMoverTab, setActiveMoverTab] = useState('active'); // 'active' | 'gainers' | 'losers'
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCompany = {
    symbol: 'DANGCEM',
    name: 'Dangote Cement Plc',
    sector: 'Industrials',
    exchange: 'NGX',
    price: 652.50,
    change: 8.13,
    changePercent: 1.30,
    high52: '₦780.00',
    low52: '₦480.00',
    marketCap: '₦6.2T'
  };

  const marketMovers = {
    active: [
      {
        symbol: 'NSLTECH',
        name: 'SECURE ELECTRONIC TECHNOLOGY PLC',
        sector: 'Industrials',
        price: '₦0.71',
        change: '+0.13%',
        isPositive: true,
        volume: '42.8M shares'
      },
      {
        symbol: 'ACCESSCORP',
        name: 'Access Holdings Plc',
        sector: 'Banking',
        price: '₦21.40',
        change: '+1.65%',
        isPositive: true,
        volume: '34.2M shares'
      },
      {
        symbol: 'ZENITHBANK',
        name: 'Zenith Bank Plc',
        sector: 'Banking',
        price: '₦41.50',
        change: '-0.45%',
        isPositive: false,
        volume: '28.1M shares'
      }
    ],
    gainers: [
      {
        symbol: 'CONOIL',
        name: 'Conoil Plc',
        sector: 'Energy',
        price: '₦188.00',
        change: '+9.94%',
        isPositive: true,
        volume: '1.2M shares'
      },
      {
        symbol: 'PRESCO',
        name: 'Presco Plc',
        sector: 'Agriculture',
        price: '₦480.00',
        change: '+7.80%',
        isPositive: true,
        volume: '2.5M shares'
      },
      {
        symbol: 'DANGCEM',
        name: 'Dangote Cement Plc',
        sector: 'Industrials',
        price: '₦652.50',
        change: '+1.30%',
        isPositive: true,
        volume: '4.8M shares'
      }
    ],
    losers: [
      {
        symbol: 'FIDELITYBK',
        name: 'Fidelity Bank Plc',
        sector: 'Banking',
        price: '₦14.20',
        change: '-3.40%',
        isPositive: false,
        volume: '15.4M shares'
      },
      {
        symbol: 'FLOURMILL',
        name: 'Flour Mills of Nigeria',
        sector: 'Consumer Goods',
        price: '₦55.00',
        change: '-2.10%',
        isPositive: false,
        volume: '3.1M shares'
      }
    ]
  };

  const currentList = marketMovers[activeMoverTab] || marketMovers.active;

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto flex flex-col gap-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1472:857"
      data-name="Home Page for Guest"
    >
      {/* Top Banner / Greeting */}
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#009966] uppercase tracking-wider bg-[#E6F5EF] px-2.5 py-0.5 rounded-full">
              Guest Explorer Mode
            </span>
            <h1 className="text-[22px] font-extrabold text-[#17211D] tracking-tight mt-1.5 leading-tight">
              Welcome to Stockwatcha
            </h1>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={onCreateAccount}
            className="px-3.5 py-2 rounded-xl bg-[#006B48] text-white text-[12px] font-bold shadow-xs hover:bg-[#005A3C] transition-colors cursor-pointer"
          >
            Sign Up
          </motion.button>
        </div>
        <p className="text-[14px] text-[#414D48] mt-1 font-medium leading-snug">
          Understand the market. Make better decisions.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#9CA5A0] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search stocks, sectors, or tickers (e.g. DANGCEM)"
          className="w-full bg-white border border-[#E3EAE6] rounded-2xl pl-10 pr-4 py-3 text-[13.5px] text-[#17211D] placeholder-[#9CA5A0] focus:outline-none focus:ring-2 focus:ring-[#009966]/20 focus:border-[#009966] shadow-xs"
        />
      </div>

      {/* Section 1: Company to explore (Figma 1472:857) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[16px] font-bold text-[#17211D]">Company to explore</h2>
          <button
            type="button"
            onClick={onViewAllStocks}
            className="text-[12.5px] font-semibold text-[#009966] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Card */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-[17px] font-bold text-[#17211D]">
                {featuredCompany.name}
              </h3>
              <p className="text-[12px] text-[#76837D] mt-0.5">
                {featuredCompany.symbol} · {featuredCompany.exchange} · {featuredCompany.sector}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#E6F5EF] flex items-center justify-center text-[#009966] font-bold">
              DC
            </div>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-2 mt-3 mb-4">
            <span className="text-[24px] font-extrabold text-[#17211D]">
              ₦{featuredCompany.price.toFixed(2)}
            </span>
            <span className="text-[13px] font-bold text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded-md">
              +{featuredCompany.changePercent.toFixed(2)}% (+₦{featuredCompany.change})
            </span>
          </div>

          {/* Metrics Trio (52W high, 52W low, Market Cap) */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#F0F4F2] mb-4">
            <div>
              <p className="text-[11px] text-[#76837D]">52W high</p>
              <p className="text-[13px] font-bold text-[#17211D] mt-0.5">{featuredCompany.high52}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#76837D]">52W Low</p>
              <p className="text-[13px] font-bold text-[#17211D] mt-0.5">{featuredCompany.low52}</p>
            </div>
            <div>
              <p className="text-[11px] text-[#76837D]">Market Cap</p>
              <p className="text-[13px] font-bold text-[#17211D] mt-0.5">{featuredCompany.marketCap}</p>
            </div>
          </div>

          {/* Explore Company Button (Figma node 1472:857) */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={onExploreCompany}
            className="w-full bg-[#006B48] text-white py-3 rounded-xl text-[13.5px] font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:bg-[#005A3C] transition-colors cursor-pointer"
          >
            <span>Explore Company</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Section 2: Market Movers (Figma 1472:857) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[16px] font-bold text-[#17211D]">Market Movers</h2>
          <button
            type="button"
            onClick={onOpenMarketMovers}
            className="text-[12.5px] font-semibold text-[#009966] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex bg-[#EBF0EE] p-1 rounded-xl mb-3">
          {[
            { id: 'active', label: 'Most Active' },
            { id: 'gainers', label: 'Top Gainers' },
            { id: 'losers', label: 'Top Losers' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMoverTab(tab.id)}
              className={`flex-1 py-1.5 text-[12.5px] font-semibold rounded-lg transition-all cursor-pointer ${
                activeMoverTab === tab.id
                  ? 'bg-white text-[#17211D] shadow-xs'
                  : 'text-[#76837D] hover:text-[#17211D]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* List of movers */}
        <div className="space-y-2.5">
          {currentList.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectStock && onSelectStock({ symbol: item.symbol, name: item.name })}
              className="w-full bg-white border border-[#E3EAE6] rounded-xl p-3.5 flex items-center justify-between hover:border-[#009966]/30 transition-colors text-left cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center font-bold text-[12px] text-[#17211D]">
                  {item.symbol.slice(0, 3)}
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#17211D] leading-snug truncate max-w-[190px]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#76837D]">
                    {item.symbol} · {item.sector}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[13.5px] font-bold text-[#17211D]">{item.price}</p>
                <span
                  className={`inline-flex items-center text-[11px] font-bold px-1.5 py-0.5 rounded ${
                    item.isPositive ? 'bg-[#DCFCE7] text-[#15803D]' : 'bg-[#FEE2E2] text-[#DC2626]'
                  }`}
                >
                  {item.change}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Guest Learning Prompt Banner */}
      <div className="bg-gradient-to-br from-[#E6F5EF] to-white border border-[#B3DFD0] rounded-2xl p-4 shadow-2xs">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#009966] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <BookOpen className="w-4.5 h-4.5" />
          </div>
          <div className="flex-1">
            <h3 className="text-[14px] font-bold text-[#006B48]">
              New to Nigerian Equities?
            </h3>
            <p className="text-[12px] text-[#2D6B55] mt-0.5 leading-relaxed">
              Explore our free step-by-step beginner guide to understand how dividends, trading, and company earnings work on the NGX.
            </p>
            <button
              type="button"
              onClick={onOpenGuide}
              className="mt-2 text-[12px] font-bold text-[#009966] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Start Learning Guide</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeGuest;
