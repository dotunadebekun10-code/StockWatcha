import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  TrendingUp, 
  Building2, 
  Globe, 
  MapPin, 
  Users, 
  Award, 
  DollarSign, 
  BarChart3, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Info
} from 'lucide-react';

/**
 * CompanyDetails (Dangote Cement company details)
 * Figma Node: 1722:1218 (Dangote Cement company details, 402x1044)
 * Comprehensive company deep dive screen including:
 * - Quote summary & listing details
 * - Section tabs: Overview, Financials, Analysis
 * - Market snapshot (Market Cap, P/E Ratio, Div Yield, 52-week range)
 * - Company description & business segments
 * - Strategic competitive advantages & growth drivers
 * - Risk & opportunities factors
 * - Action buttons: Add to Watchlist & Learn Why It Matters
 */
export const CompanyDetails = ({ 
  stock = {
    symbol: 'DANGCEM',
    name: 'Dangote Cement Plc',
    price: 675.0,
    change: 15.0,
    changePercent: 2.27,
    currency: 'NGN',
    marketCap: '₦11.50 Trillion',
    peRatio: 16.4,
    dividendYield: '4.8%',
    high52: '₦720.00',
    low52: '₦320.00',
    volume: '1,420,500',
    exchange: 'NGX',
    sector: 'Industrial Goods'
  }, 
  onBack, 
  isWatchlisted = false,
  onToggleWatchlist,
  onOpenAnalysis
}) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'financials' | 'analysis'
  const isPositive = stock.changePercent >= 0;

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-10"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1722:1218"
      data-name="Dangote Cement company details"
    >
      {/* Top Navigation */}
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
            <h1 className="text-[16px] font-bold text-[#17211D]">Company Details</h1>
            <p className="text-[11px] text-[#76837D]">{stock.symbol} · {stock.exchange}</p>
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
        {/* Company Header Card */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm">
          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#009966]/10 border border-[#009966]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[22px] font-extrabold text-[#009966]">
                {stock.symbol.slice(0, 2)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-[18px] font-bold text-[#17211D] truncate leading-tight">
                {stock.name}
              </h2>
              <p className="text-[12px] text-[#76837D] mt-0.5">
                {stock.symbol} · {stock.sector} · Premium Board
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#009966] bg-[#E6F5EF] px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="w-3 h-3" /> NGX 30 Index
                </span>
                <span className="text-[11px] text-[#76837D] bg-[#F7FAF9] border border-[#E3EAE6] px-2 py-0.5 rounded-md">
                  Tier 1
                </span>
              </div>
            </div>
          </div>

          {/* Price & Movement */}
          <div className="pt-3 border-t border-[#F0F4F2] flex items-baseline justify-between">
            <div>
              <p className="text-[11px] text-[#9CA5A0] font-medium uppercase tracking-wider">Share Price</p>
              <p className="text-[26px] font-extrabold text-[#17211D] tracking-tight mt-0.5">
                ₦{stock.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="text-right">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[13px] font-bold ${
                  isPositive ? 'bg-[#DCFCE7] text-[#15803D]' : 'bg-[#FEE2E2] text-[#DC2626]'
                }`}
              >
                <TrendingUp className={`w-3.5 h-3.5 ${!isPositive ? 'rotate-180' : ''}`} />
                {isPositive ? '+' : ''}{stock.changePercent}%
              </span>
              <p className="text-[11px] text-[#76837D] mt-1">
                {isPositive ? '+' : ''}₦{stock.change} today
              </p>
            </div>
          </div>
        </div>

        {/* Segmented Tabs */}
        <div className="flex bg-[#EBF0EE] p-1 rounded-xl">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'financials', label: 'Financials' },
            { id: 'analysis', label: 'Analysis' },
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

        {/* Tab 1: Overview Content */}
        {activeTab === 'overview' && (
          <div className="flex flex-col gap-5">
            {/* Market Snapshot Grid */}
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <h3 className="text-[14px] font-bold text-[#17211D] mb-3">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D]">Market Cap</p>
                  <p className="text-[14px] font-bold text-[#17211D] mt-0.5">{stock.marketCap}</p>
                </div>
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D]">P/E Ratio</p>
                  <p className="text-[14px] font-bold text-[#17211D] mt-0.5">{stock.peRatio}x</p>
                </div>
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D]">Dividend Yield</p>
                  <p className="text-[14px] font-bold text-[#009966] mt-0.5">{stock.dividendYield}</p>
                </div>
                <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
                  <p className="text-[11px] text-[#76837D]">Avg Daily Vol</p>
                  <p className="text-[14px] font-bold text-[#17211D] mt-0.5">{stock.volume}</p>
                </div>
              </div>

              {/* 52-Week Range Bar */}
              <div className="mt-4 pt-3 border-t border-[#F0F4F2]">
                <div className="flex justify-between text-[11px] text-[#76837D] mb-1.5">
                  <span>52W Low: {stock.low52}</span>
                  <span className="font-semibold text-[#17211D]">Current</span>
                  <span>52W High: {stock.high52}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#E3EAE6] relative overflow-hidden">
                  <div 
                    className="absolute top-0 bottom-0 left-0 bg-[#009966] rounded-full" 
                    style={{ width: '74%' }} 
                  />
                </div>
              </div>
            </div>

            {/* Business Profile */}
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <h3 className="text-[14px] font-bold text-[#17211D] mb-2">About {stock.name}</h3>
              <p className="text-[13px] text-[#414D48] leading-relaxed mb-4">
                Dangote Cement Plc is Sub-Saharan Africa’s largest cement manufacturer with operational capacity exceeding 51.6 million tonnes annually across 10 African countries. Headquartered in Lagos, Nigeria, the company operates integrated production plants in Obajana, Ibese, and Gboko.
              </p>
              
              <div className="space-y-2 text-[12px] text-[#414D48]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#76837D]" />
                  <span>Headquarters: Union Marble House, Falomo, Ikoyi, Lagos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#76837D]" />
                  <span>Employees: 18,000+ across Africa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#76837D]" />
                  <span>Markets: Nigeria, Ghana, Cameroon, Ethiopia, Tanzania, SA</span>
                </div>
              </div>
            </div>

            {/* Strategic Strengths */}
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <h3 className="text-[14px] font-bold text-[#17211D] mb-3">Competitive Moats</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6F5EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-[#009966]" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#17211D]">Cost Leadership & Scale</h4>
                    <p className="text-[12px] text-[#76837D] mt-0.5 leading-relaxed">
                      Massive limestone reserves and proprietary gas pipelines generate superior EBITDA margins (&gt;55%) compared to global peers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E6F5EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4 text-[#009966]" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#17211D]">Robust Domestic Pricing Power</h4>
                    <p className="text-[12px] text-[#76837D] mt-0.5 leading-relaxed">
                      Dominates &gt;60% of Nigerian domestic cement consumption, maintaining pricing resilience against currency devaluations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Financials Content */}
        {activeTab === 'financials' && (
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-[#17211D]">Annual Financial Summary (FY2025)</h3>
            <div className="divide-y divide-[#F0F4F2]">
              <div className="py-2.5 flex justify-between text-[13px]">
                <span className="text-[#76837D]">Revenue</span>
                <span className="font-semibold text-[#17211D]">₦2.21 Trillion</span>
              </div>
              <div className="py-2.5 flex justify-between text-[13px]">
                <span className="text-[#76837D]">Gross Profit</span>
                <span className="font-semibold text-[#17211D]">₦1.32 Trillion</span>
              </div>
              <div className="py-2.5 flex justify-between text-[13px]">
                <span className="text-[#76837D]">Operating Profit (EBITDA)</span>
                <span className="font-semibold text-[#17211D]">₦1.08 Trillion</span>
              </div>
              <div className="py-2.5 flex justify-between text-[13px]">
                <span className="text-[#76837D]">Profit After Tax (PAT)</span>
                <span className="font-semibold text-[#009966]">₦455.5 Billion</span>
              </div>
              <div className="py-2.5 flex justify-between text-[13px]">
                <span className="text-[#76837D]">Earnings Per Share (EPS)</span>
                <span className="font-semibold text-[#17211D]">₦26.80</span>
              </div>
              <div className="py-2.5 flex justify-between text-[13px]">
                <span className="text-[#76837D]">Dividend Per Share</span>
                <span className="font-semibold text-[#009966]">₦30.00</span>
              </div>
            </div>

            <div className="p-3 bg-[#F7FAF9] rounded-xl border border-[#E3EAE6] mt-2">
              <p className="text-[11px] text-[#76837D] leading-relaxed">
                Source: Audited financial statements filed with NGX Regulation Limited. Figures updated as of full-year releases.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Analysis Content */}
        {activeTab === 'analysis' && (
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <h3 className="text-[14px] font-bold text-[#17211D] mb-3">Key Catalysts & Risks</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[#E6F5EF] rounded-xl border border-[#B3DFD0]">
                  <p className="text-[12px] font-bold text-[#006B48]">Bull Case: Infrastructure Boom</p>
                  <p className="text-[12px] text-[#2D6B55] mt-0.5 leading-relaxed">
                    Federal infrastructure spending (roads, bridges, housing) continues to sustain cement consumption across key national economic corridors.
                  </p>
                </div>
                <div className="p-3 bg-[#FEF3C7] rounded-xl border border-[#FDE68A]">
                  <p className="text-[12px] font-bold text-[#92400E]">Bear Case: Energy & FX Volatility</p>
                  <p className="text-[12px] text-[#78350F] mt-0.5 leading-relaxed">
                    Sensitivity to foreign exchange costs for heavy machinery spare parts and alternative fuel price inflation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
              <h3 className="text-[14px] font-bold text-[#17211D] mb-2">Analyst Consensus</h3>
              <div className="flex items-center gap-4">
                <div className="text-center px-4 py-2 bg-[#DCFCE7] rounded-xl">
                  <p className="text-[20px] font-extrabold text-[#15803D]">BUY</p>
                  <p className="text-[10px] text-[#15803D] uppercase font-semibold">Consensus</p>
                </div>
                <div className="text-[12px] text-[#414D48] leading-snug">
                  8 out of 11 NGX research analysts have an <strong>Outperform / Buy</strong> rating on Dangote Cement with a 12-month target range of ₦750 – ₦820.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={() => onToggleWatchlist && onToggleWatchlist(stock)}
          className={`w-full py-4 rounded-2xl text-[15px] font-semibold transition-all cursor-pointer shadow-sm ${
            isWatchlisted
              ? 'bg-white border-2 border-[#009966] text-[#009966]'
              : 'bg-[#006B48] text-white hover:bg-[#005A3C]'
          }`}
        >
          {isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CompanyDetails;
