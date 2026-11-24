import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  Newspaper, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  DollarSign, 
  Layers, 
  Info 
} from 'lucide-react';

/**
 * StockDetailIntermediate (Stock Detail Page for iNTERMDEIATE)
 * Figma Node: 1076:1092 (402x874)
 * Strict implementation of Figma intermediate stock detail screen:
 * - MTN Nigeria (MTNN) stock header with ₦420,000 / +2.80% (Today)
 * - Tabs: Overview, Financials, News
 * - Metric Cards: Market Cap (₦4.15 T), EPS (₦31.15), P/E Ratio (13.45), Dividend Yield, Beta
 * - Interactive financial valuation metrics & valuation ratios
 * - Button: "View Full Financials" (Figma node 1076:1096)
 */
export const StockDetailIntermediate = ({ 
  stock = {
    symbol: 'MTNN',
    name: 'MTN Nigeria Communications Plc',
    price: 420.0,
    change: 11.45,
    changePercent: 2.80,
    marketCap: '₦4.15 Trillion',
    eps: '₦31.15',
    peRatio: 13.45,
    dividendYield: '5.2%',
    beta: 0.88,
    exchange: 'NGX'
  }, 
  onBack, 
  isWatchlisted = false,
  onToggleWatchlist,
  onViewFullFinancials
}) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'financials' | 'news'
  const isPositive = stock.changePercent >= 0;

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-12"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1076:1092"
      data-name="Stock Detail Page for iNTERMDEIATE"
    >
      {/* Header */}
      <div className="bg-white border-b border-[#E3EAE6] px-4 pt-5 pb-4 sticky top-0 z-20">
        <div className="flex items-center justify-between max-w-[440px] mx-auto">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h1 className="text-[16px] font-bold text-[#17211D]">Stock Analysis</h1>
            <p className="text-[11px] text-[#76837D] font-medium">{stock.symbol} · Intermediate View</p>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onToggleWatchlist && onToggleWatchlist(stock)}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
                isWatchlisted 
                  ? 'bg-[#E6F5EF] border-[#009966] text-[#009966]' 
                  : 'bg-[#F7FAF9] border-[#E3EAE6] text-[#17211D] hover:bg-[#F3FAF7]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isWatchlisted ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-5 flex flex-col gap-5">
        {/* Company & Price Block */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FFCC00]/20 border border-[#FFCC00]/40 flex items-center justify-center">
                <span className="text-[16px] font-extrabold text-[#B38F00]">MTN</span>
              </div>
              <div>
                <h2 className="text-[17px] font-bold text-[#17211D] leading-tight">
                  {stock.name}
                </h2>
                <span className="inline-block text-[11px] font-semibold text-[#009966] bg-[#E6F5EF] px-2 py-0.5 rounded-md mt-1">
                  {stock.symbol} · Telecommunications
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#F0F4F2] flex items-baseline justify-between">
            <div>
              <p className="text-[26px] font-extrabold text-[#17211D] tracking-tight">
                ₦{stock.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[13px] font-bold bg-[#DCFCE7] text-[#15803D]">
                <TrendingUp className="w-3.5 h-3.5" />
                +{stock.changePercent.toFixed(2)}%
              </span>
              <span className="text-[12px] text-[#76837D] font-medium">(Today)</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-[#EBF0EE] p-1 rounded-xl">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'financials', label: 'Financials' },
            { id: 'news', label: 'News' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 text-[13px] font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-[#17211D] shadow-sm'
                  : 'text-[#76837D] hover:text-[#17211D]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Intermediate Overview & Metrics (Figma 1076:1092) */}
        {activeTab === 'overview' && (
          <div className="flex flex-col gap-4">
            {/* Intermediate Key Valuation Ratios */}
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[14px] font-bold text-[#17211D]">Valuation Multiples</h3>
                <span className="text-[11px] font-medium text-[#009966]">TTM Basis</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D] font-medium">Market Cap</p>
                  <p className="text-[15px] font-bold text-[#17211D] mt-0.5">{stock.marketCap}</p>
                  <p className="text-[10px] text-[#009966] mt-0.5 font-medium">Rank #2 on NGX</p>
                </div>
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D] font-medium">P/E Ratio</p>
                  <p className="text-[15px] font-bold text-[#17211D] mt-0.5">{stock.peRatio}x</p>
                  <p className="text-[10px] text-[#76837D] mt-0.5">Sector Avg: 15.2x</p>
                </div>
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D] font-medium">EPS</p>
                  <p className="text-[15px] font-bold text-[#17211D] mt-0.5">{stock.eps}</p>
                  <p className="text-[10px] text-[#15803D] mt-0.5 font-medium">+14.2% YoY</p>
                </div>
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D] font-medium">Dividend Yield</p>
                  <p className="text-[15px] font-bold text-[#009966] mt-0.5">{stock.dividendYield}</p>
                  <p className="text-[10px] text-[#76837D] mt-0.5">Paid Semi-Annually</p>
                </div>
              </div>
            </div>

            {/* Performance Metric Bar */}
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <h3 className="text-[14px] font-bold text-[#17211D] mb-3">Price Performance Range</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-[#76837D]">52-Week Range</span>
                  <span className="font-semibold text-[#17211D]">₦240.00 – ₦455.00</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#E3EAE6] relative">
                  <div className="absolute top-0 bottom-0 left-0 bg-[#009966] rounded-full" style={{ width: '82%' }} />
                </div>
                <div className="flex justify-between text-[11px] text-[#76837D]">
                  <span>₦240.00 (Low)</span>
                  <span className="font-bold text-[#17211D]">₦420.00</span>
                  <span>₦455.00 (High)</span>
                </div>
              </div>
            </div>

            {/* Intermediate Thesis */}
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <h3 className="text-[14px] font-bold text-[#17211D] mb-2">Why It's Interesting (Intermediate View)</h3>
              <p className="text-[13px] text-[#414D48] leading-relaxed">
                MTN Nigeria leads the Nigerian telecom space with over 78 million active subscribers and 52% market share. Expanding broadband and MoMo PSB fintech services provide strong organic cash flow, making it an attractive dividend compounder despite foreign exchange depreciation pressures.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Financials View */}
        {activeTab === 'financials' && (
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex flex-col gap-3">
            <h3 className="text-[14px] font-bold text-[#17211D]">Income Statement Highlights</h3>
            <div className="divide-y divide-[#F0F4F2] text-[13px]">
              <div className="py-2.5 flex justify-between">
                <span className="text-[#76837D]">Service Revenue</span>
                <span className="font-semibold text-[#17211D]">₦2.46 Trillion</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#76837D]">Data Revenue</span>
                <span className="font-semibold text-[#17211D]">₦1.07 Trillion</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#76837D]">EBITDA Margin</span>
                <span className="font-semibold text-[#009966]">48.6%</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-[#76837D]">Free Cash Flow</span>
                <span className="font-semibold text-[#17211D]">₦412 Billion</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: News View */}
        {activeTab === 'news' && (
          <div className="flex flex-col gap-3">
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <span className="text-[10px] font-bold text-[#009966] bg-[#E6F5EF] px-2 py-0.5 rounded-full uppercase">Earnings</span>
              <h4 className="text-[14px] font-semibold text-[#17211D] mt-2">
                MTN Nigeria expands 5G footprint to 15 major Nigerian commercial states
              </h4>
              <p className="text-[11px] text-[#76837D] mt-1">2 days ago · BusinessDay</p>
            </div>
          </div>
        )}

        {/* Primary Action Button: "View Full Financials" (Figma 1076:1096) */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={() => onViewFullFinancials && onViewFullFinancials(stock)}
          className="w-full bg-[#006B48] text-white py-4 rounded-2xl text-[15px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#005A3C] transition-colors cursor-pointer"
        >
          <BarChart3 className="w-4 h-4" />
          <span>View Full Financials</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StockDetailIntermediate;
