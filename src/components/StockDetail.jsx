import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, ArrowDownRight, CheckCircle2, AlertCircle, Star } from 'lucide-react';

export const StockDetail = ({ stock, onBack, isWatchlisted, onToggleWatchlist }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'financials' | 'news'

  if (!stock) return null;

  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1040:1193"
      data-name="Stock Detail Page for Begineers"
    >
      {/* Top Nav Bar */}
      <div className="flex items-center justify-between mb-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() => onToggleWatchlist(stock)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
            isWatchlisted
              ? 'bg-[#E6F5F0] text-[#009966] border-[#009966]/30'
              : 'bg-white text-[#76837D] border-[#E3EAE6] hover:text-[#17211D]'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${isWatchlisted ? 'fill-[#009966] text-[#009966]' : ''}`} />
          <span>{isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}</span>
        </button>
      </div>

      {/* Stock Header */}
      <div className="flex items-start gap-3.5 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#E6F5F0] text-[#009966] font-bold text-sm flex items-center justify-center border border-[#009966]/20">
          {stock.symbol.slice(0, 4)}
        </div>
        <div>
          <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">
            {stock.name}
          </h1>
          <p className="text-[13px] text-[#76837D] mt-0.5">
            {stock.symbol} · {stock.exchange} · {stock.sector}
          </p>
        </div>
      </div>

      {/* Price & Change Block */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 mb-5 shadow-sm">
        <div className="flex items-baseline gap-2.5 mb-2">
          <span className="text-[28px] font-bold text-[#17211D] tracking-tight">
            ₦{stock.price.toFixed(2)}
          </span>
          <span className={`inline-flex items-center text-[14px] font-semibold ${
            stock.isPositive ? 'text-[#00A63E]' : 'text-[#DC2626]'
          }`}>
            {stock.isPositive ? (
              <ArrowUpRight className="w-4 h-4 mr-0.5" />
            ) : (
              <ArrowDownRight className="w-4 h-4 mr-0.5" />
            )}
            {stock.isPositive ? '+' : ''}{stock.changePercent}% (Today)
          </span>
        </div>

        {stock.badge && (
          <span className="inline-block bg-[#F3F0FF] text-[#936EFD] text-[12px] font-medium px-2.5 py-0.5 rounded-full">
            {stock.badge}
          </span>
        )}
      </div>

      {/* Segmented Tabs */}
      <div className="flex bg-[#EBF0EE] p-1 rounded-xl mb-5">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'overview' ? 'bg-white text-[#17211D] shadow-sm' : 'text-[#76837D]'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('financials')}
          className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'financials' ? 'bg-white text-[#17211D] shadow-sm' : 'text-[#76837D]'
          }`}
        >
          Financials
        </button>
        <button
          onClick={() => setActiveTab('news')}
          className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'news' ? 'bg-white text-[#17211D] shadow-sm' : 'text-[#76837D]'
          }`}
        >
          News
        </button>
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="flex flex-col gap-5">
          {/* About Section */}
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#17211D] mb-2">
              About {stock.name}
            </h3>
            <p className="text-[13.5px] text-[#414D48] leading-relaxed">
              {stock.about}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#17211D] mb-3">
              Key Metrics
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-2.5 bg-[#F7FAF9] rounded-xl">
                <span className="text-[12px] text-[#76837D]">52-Week High</span>
                <p className="text-[15px] font-semibold text-[#17211D]">₦{stock.high52}</p>
              </div>
              <div className="p-2.5 bg-[#F7FAF9] rounded-xl">
                <span className="text-[12px] text-[#76837D]">52-Week Low</span>
                <p className="text-[15px] font-semibold text-[#17211D]">₦{stock.low52}</p>
              </div>
              <div className="p-2.5 bg-[#F7FAF9] rounded-xl">
                <span className="text-[12px] text-[#76837D]">Market Capitalization</span>
                <p className="text-[15px] font-semibold text-[#17211D]">{stock.marketCap}</p>
              </div>
              <div className="p-2.5 bg-[#F7FAF9] rounded-xl">
                <span className="text-[12px] text-[#76837D]">Dividend Yield</span>
                <p className="text-[15px] font-semibold text-[#17211D]">{stock.dividendYield}</p>
              </div>
            </div>
          </div>

          {/* Why Investors Like It */}
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#17211D] mb-3">
              Why investors like it
            </h3>
            <div className="flex flex-col gap-2.5">
              {stock.whyInvestorsLike.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#009966] mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] text-[#414D48] leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risks to Know */}
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#17211D] mb-3">
              Risks to know
            </h3>
            <div className="flex flex-col gap-2.5">
              {stock.risksToKnow.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] text-[#414D48] leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Financials */}
      {activeTab === 'financials' && (
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm">
          <h3 className="text-[15px] font-semibold text-[#17211D] mb-3">Financial Highlights</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between py-2 border-b border-[#E3EAE6]">
              <span className="text-[#76837D]">Price / Earnings (P/E)</span>
              <span className="font-semibold text-[#17211D]">{stock.peRatio}x</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#E3EAE6]">
              <span className="text-[#76837D]">Dividend Yield</span>
              <span className="font-semibold text-[#17211D]">{stock.dividendYield}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#E3EAE6]">
              <span className="text-[#76837D]">Exchange Market</span>
              <span className="font-semibold text-[#17211D]">Nigerian Exchange (NGX)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#76837D]">Currency</span>
              <span className="font-semibold text-[#17211D]">Nigerian Naira (NGN / ₦)</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab: News */}
      {activeTab === 'news' && (
        <div className="flex flex-col gap-3">
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm">
            <span className="text-[11px] text-[#009966] font-semibold uppercase tracking-wider">Earnings</span>
            <h4 className="text-[14px] font-semibold text-[#17211D] mt-1 mb-1">
              {stock.name} declares quarterly dividend and reports revenue growth
            </h4>
            <span className="text-[12px] text-[#76837D]">2 days ago · NGX Market Release</span>
          </div>
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm">
            <span className="text-[11px] text-[#009966] font-semibold uppercase tracking-wider">Industry</span>
            <h4 className="text-[14px] font-semibold text-[#17211D] mt-1 mb-1">
              Sector outlook positive as consumer demand recovers across West Africa
            </h4>
            <span className="text-[12px] text-[#76837D]">4 days ago · Market Intelligence</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockDetail;
