import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart2, 
  Plus, 
  Trash2, 
  ArrowUpRight, 
  ChevronRight, 
  DollarSign, 
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

/**
 * WatchlistIntermediate (Watchlsit Page for iNTERMDEIATE)
 * Figma Node: 1076:1680 (402x874)
 * Strict implementation of Figma text and metrics:
 * - "My Watchlist"
 * - "Track the stocks you’re learning"
 * - Tab options: Overview, Performances, News
 * - Metric Cards:
 *   - "Watchlist Value": ₦3,110,000
 *   - "Day Change": +₦10,000 (+1.13%)
 *   - "Total Gain": +₦80,000 (+4.13%)
 * - Column Headers: Symbol, Price, Change, Market Cap
 * - Stock Rows with detailed financials & performance actions
 */
export const WatchlistIntermediate = ({ 
  watchlist = [], 
  onSelectStock, 
  onRemoveFromWatchlist, 
  onExploreStocks 
}) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'performances' | 'news'

  // Default mock portfolio holdings for intermediate demonstration
  const intermediateHoldings = watchlist.length > 0 ? watchlist : [
    {
      symbol: 'MTNN',
      name: 'MTN Nigeria Communications',
      price: 420.0,
      changePercent: 2.80,
      marketCap: '₦4.15T',
      sharesHeld: 2500,
      costBasis: 400.0,
      sector: 'Telecommunications'
    },
    {
      symbol: 'DANGCEM',
      name: 'Dangote Cement Plc',
      price: 675.0,
      changePercent: 2.27,
      marketCap: '₦11.50T',
      sharesHeld: 1500,
      costBasis: 630.0,
      sector: 'Industrial Goods'
    },
    {
      symbol: 'GTCO',
      name: 'Guaranty Trust Holding Co',
      price: 52.5,
      changePercent: 1.15,
      marketCap: '₦1.54T',
      sharesHeld: 20000,
      costBasis: 48.0,
      sector: 'Banking'
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto flex flex-col gap-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1076:1680"
      data-name="Watchlsit Page for iNTERMDEIATE"
    >
      {/* Header */}
      <div className="pt-2">
        <span className="text-[11px] font-bold text-[#7C3AED] uppercase tracking-wider bg-[#EDE9FE] px-2.5 py-0.5 rounded-full">
          Intermediate Portfolio View
        </span>
        <h1 className="text-[22px] font-extrabold text-[#17211D] tracking-tight mt-1.5 leading-tight">
          My Watchlist
        </h1>
        <p className="text-[14px] text-[#76837D] mt-0.5 font-medium">
          Track the stocks you’re learning
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#EBF0EE] p-1 rounded-xl">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'performances', label: 'Performances' },
          { id: 'news', label: 'News' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-1.5 text-[12.5px] font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-white text-[#17211D] shadow-xs'
                : 'text-[#76837D] hover:text-[#17211D]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Portfolio Value Summary Card (Figma node 1076:1680) */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm">
        <p className="text-[12px] text-[#76837D] font-semibold uppercase tracking-wider">
          Watchlist Value
        </p>
        <p className="text-[28px] font-extrabold text-[#17211D] tracking-tight mt-1">
          ₦3,110,000
        </p>

        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#F0F4F2]">
          <div>
            <p className="text-[11px] text-[#76837D] font-medium">Day Change</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[14px] font-bold text-[#15803D]">+₦10,000</span>
              <span className="text-[11px] font-bold text-[#15803D]">(+1.13%)</span>
            </div>
          </div>
          <div>
            <p className="text-[11px] text-[#76837D] font-medium">Total Gain</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[14px] font-bold text-[#15803D]">+₦80,000</span>
              <span className="text-[11px] font-bold text-[#15803D]">(+4.13%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings Section */}
      <div>
        <div className="flex items-center justify-between mb-2 px-1">
          <h2 className="text-[14px] font-bold text-[#17211D]">Watchlist Holdings</h2>
          <button
            type="button"
            onClick={onExploreStocks}
            className="text-[12px] font-semibold text-[#009966] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Stock</span>
          </button>
        </div>

        {/* Column Headers */}
        <div className="flex justify-between text-[11px] font-semibold text-[#9CA5A0] px-3 pb-2 uppercase tracking-wider">
          <span>Symbol</span>
          <span className="pr-12">Price</span>
          <span>Market Cap / Chg</span>
        </div>

        {/* Holdings List */}
        <div className="space-y-2.5">
          {intermediateHoldings.map((stock, i) => {
            const isPositive = (stock.changePercent || 0) >= 0;
            return (
              <motion.div
                key={stock.symbol || i}
                whileHover={{ scale: 1.01 }}
                className="bg-white border border-[#E3EAE6] rounded-xl p-3.5 shadow-2xs hover:border-[#009966]/30 transition-all cursor-pointer flex items-center justify-between"
                onClick={() => onSelectStock && onSelectStock(stock)}
              >
                {/* Left: Symbol & Name */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E6F5EF] text-[#009966] font-bold text-[12px] flex items-center justify-center">
                    {stock.symbol.slice(0, 3)}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#17211D] leading-tight">
                      {stock.symbol}
                    </h3>
                    <p className="text-[11px] text-[#76837D] truncate max-w-[120px]">
                      {stock.name}
                    </p>
                  </div>
                </div>

                {/* Middle: Price */}
                <div className="text-right">
                  <p className="text-[13.5px] font-bold text-[#17211D]">
                    ₦{stock.price?.toFixed(2) || '0.00'}
                  </p>
                  <p className="text-[10px] text-[#76837D]">
                    {stock.sharesHeld ? `${stock.sharesHeld} shares` : 'Tracking'}
                  </p>
                </div>

                {/* Right: Change & Market Cap */}
                <div className="text-right">
                  <span
                    className={`inline-block px-1.5 py-0.5 rounded text-[11px] font-bold ${
                      isPositive ? 'bg-[#DCFCE7] text-[#15803D]' : 'bg-[#FEE2E2] text-[#DC2626]'
                    }`}
                  >
                    {isPositive ? '+' : ''}{stock.changePercent?.toFixed(2)}%
                  </span>
                  <p className="text-[10px] text-[#76837D] mt-0.5">
                    {stock.marketCap || '₦1.2T'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Financial Analytics Prompt */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center">
            <BarChart2 className="w-4.5 h-4.5" />
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-[#17211D]">Valuation Multiples</h4>
            <p className="text-[11.5px] text-[#76837D]">View blended P/E and Dividend yield breakdown</p>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-[#76837D]" />
      </div>
    </motion.div>
  );
};

export default WatchlistIntermediate;
