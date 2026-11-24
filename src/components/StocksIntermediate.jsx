import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  ChevronRight, 
  SlidersHorizontal, 
  Sparkles, 
  Zap, 
  Layers, 
  BarChart2, 
  Filter 
} from 'lucide-react';

/**
 * StocksIntermediate (Stocks Page for iNTERMDEIATE)
 * Figma Node: 2151:17818 (402x874)
 * Strict implementation of Figma intermediate stocks explorer:
 * - Categories: All, Banking, Energy, Tech, Consumer, Top Gainers (View all)
 * - Search bar with filter
 * - Intermediate company cards featuring P/E multiples and key ratios:
 *   - MTN / MTN Nigeria / MTNN / ₦44.10 / +1.13%
 *   - COKE / Coca-Cola Co. / KO / ₦44.10 / +1.13%
 *   - Nestle Nigeria / CONSUMER GOODS / ₦840.00 / +2.15%
 *   - Dangote Cement / DANGCEM / ₦675.00 / +2.27%
 * - Valuation tags & metrics displayed on each card
 */
export const StocksIntermediate = ({ 
  onSelectStock, 
  onOpenIntermediateMTN,
  onOpenDangoteDetails
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Banking', 'Energy', 'Tech', 'Consumer', 'Top Gainers'];

  const stocksList = [
    {
      symbol: 'MTNN',
      name: 'MTN Nigeria',
      ticker: 'MTNN',
      sector: 'Tech & Telecoms',
      price: 44.10,
      changePercent: 1.13,
      isPositive: true,
      pe: '13.4x',
      marketCap: '₦4.15T',
      badge: 'MTN',
      badgeBg: '#FFCC00',
      badgeColor: '#000000',
      isMTN: true
    },
    {
      symbol: 'KO',
      name: 'Coca-Cola Hellenic (NBC)',
      ticker: 'COKE',
      sector: 'Consumer Goods',
      price: 44.10,
      changePercent: 1.13,
      isPositive: true,
      pe: '11.8x',
      marketCap: '₦890B',
      badge: 'COKE',
      badgeBg: '#FEE2E2',
      badgeColor: '#DC2626'
    },
    {
      symbol: 'NESTLE',
      name: 'Nestle Nigeria Plc',
      ticker: 'NESTLE',
      sector: 'Consumer Goods',
      price: 840.00,
      changePercent: 2.15,
      isPositive: true,
      pe: '22.4x',
      marketCap: '₦665B',
      badge: 'NEST',
      badgeBg: '#DBEAFE',
      badgeColor: '#1D4ED8'
    },
    {
      symbol: 'DANGCEM',
      name: 'Dangote Cement Plc',
      ticker: 'DANGCEM',
      sector: 'Industrial Goods',
      price: 675.00,
      changePercent: 2.27,
      isPositive: true,
      pe: '16.4x',
      marketCap: '₦11.50T',
      badge: 'DANG',
      badgeBg: '#E6F5EF',
      badgeColor: '#009966',
      isDangote: true
    },
    {
      symbol: 'GTCO',
      name: 'Guaranty Trust Holding Co',
      ticker: 'GTCO',
      sector: 'Banking',
      price: 52.50,
      changePercent: 1.15,
      isPositive: true,
      pe: '4.8x',
      marketCap: '₦1.54T',
      badge: 'GTCO',
      badgeBg: '#FFEDD5',
      badgeColor: '#EA580C'
    },
    {
      symbol: 'SEPLAT',
      name: 'Seplat Energy Plc',
      ticker: 'SEPLAT',
      sector: 'Energy',
      price: 3450.00,
      changePercent: -0.85,
      isPositive: false,
      pe: '8.2x',
      marketCap: '₦2.03T',
      badge: 'SEPL',
      badgeBg: '#FEF3C7',
      badgeColor: '#D97706'
    }
  ];

  const filteredStocks = stocksList.filter((s) => {
    const matchesCategory = 
      selectedCategory === 'All' ||
      (selectedCategory === 'Banking' && s.sector.includes('Banking')) ||
      (selectedCategory === 'Energy' && s.sector.includes('Energy')) ||
      (selectedCategory === 'Tech' && s.sector.includes('Tech')) ||
      (selectedCategory === 'Consumer' && s.sector.includes('Consumer')) ||
      (selectedCategory === 'Top Gainers' && s.changePercent > 1.5);

    const matchesSearch = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.symbol.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto flex flex-col gap-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="2151:17818"
      data-name="Stocks Page for iNTERMDEIATE"
    >
      {/* Header */}
      <div className="pt-2">
        <span className="text-[11px] font-bold text-[#7C3AED] uppercase tracking-wider bg-[#EDE9FE] px-2.5 py-0.5 rounded-full">
          Market Intelligence
        </span>
        <h1 className="text-[22px] font-extrabold text-[#17211D] tracking-tight mt-1.5 leading-tight">
          Explore Stocks
        </h1>
        <p className="text-[13.5px] text-[#76837D] mt-0.5 font-medium">
          Filter by sector, multiples, and market cap
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#9CA5A0] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by ticker, sector, or company..."
          className="w-full bg-white border border-[#E3EAE6] rounded-2xl pl-10 pr-4 py-3 text-[13.5px] text-[#17211D] placeholder-[#9CA5A0] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] shadow-2xs"
        />
      </div>

      {/* Categories (Figma node 2151:17818) */}
      <div>
        <div className="flex items-center justify-between mb-2.5 px-1">
          <span className="text-[13px] font-bold text-[#17211D]">Categories</span>
          <span className="text-[12px] font-semibold text-[#7C3AED] hover:underline cursor-pointer">
            View all
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-xs'
                  : 'bg-white border border-[#E3EAE6] text-[#414D48] hover:border-[#7C3AED]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stocks List (Figma node 2151:17818) */}
      <div className="space-y-3">
        {filteredStocks.map((stock) => {
          return (
            <motion.div
              key={stock.symbol}
              whileHover={{ scale: 1.01 }}
              onClick={() => {
                if (stock.isMTN && onOpenIntermediateMTN) {
                  onOpenIntermediateMTN();
                } else if (stock.isDangote && onOpenDangoteDetails) {
                  onOpenDangoteDetails();
                } else if (onSelectStock) {
                  onSelectStock(stock);
                }
              }}
              className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-2xs hover:border-[#7C3AED]/40 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-[12px] flex-shrink-0"
                    style={{ backgroundColor: stock.badgeBg, color: stock.badgeColor }}
                  >
                    {stock.badge}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#17211D] leading-tight">
                      {stock.name}
                    </h3>
                    <p className="text-[11.5px] text-[#76837D] mt-0.5">
                      {stock.ticker} · {stock.sector}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[15px] font-extrabold text-[#17211D]">
                    ₦{stock.price.toFixed(2)}
                  </p>
                  <span
                    className={`inline-block text-[11px] font-bold px-1.5 py-0.5 rounded mt-0.5 ${
                      stock.isPositive ? 'bg-[#DCFCE7] text-[#15803D]' : 'bg-[#FEE2E2] text-[#DC2626]'
                    }`}
                  >
                    {stock.isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Intermediate Valuation Metadata Bar */}
              <div className="mt-3 pt-3 border-t border-[#F0F4F2] flex items-center justify-between text-[11.5px] text-[#76837D]">
                <span>P/E Ratio: <strong className="text-[#17211D]">{stock.pe}</strong></span>
                <span>Market Cap: <strong className="text-[#17211D]">{stock.marketCap}</strong></span>
                <span className="font-semibold text-[#7C3AED] flex items-center gap-0.5">
                  Analyze <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StocksIntermediate;
