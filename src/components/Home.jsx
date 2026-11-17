import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, ChevronRight, Sparkles, Newspaper } from 'lucide-react';
import { MOCK_STOCKS } from '../data/mockStocks';

export const Home = ({ onSelectStock, onViewAllStocks, onOpenGuide, onOpenMarketMovers, onOpenNews }) => {
  const [activeMoverTab, setActiveMoverTab] = useState('active'); // 'active' | 'gainers' | 'losers'

  const featuredStock = MOCK_STOCKS[0]; // Dangote Cement

  const getFilteredMovers = () => {
    if (activeMoverTab === 'gainers') {
      return [...MOCK_STOCKS].sort((a, b) => b.changePercent - a.changePercent);
    }
    if (activeMoverTab === 'losers') {
      return [...MOCK_STOCKS].sort((a, b) => a.changePercent - b.changePercent);
    }
    return MOCK_STOCKS;
  };

  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1038:41"
      data-name="Home Page for Begineers"
    >
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-r from-[#006B48] to-[#009966] text-white rounded-2xl p-5 mb-6 shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 mb-1.5 text-emerald-100 text-[14px]">
            <span>Welcome to Stockwatcha</span>
            <span>👋</span>
          </div>
          <h2 className="text-[20px] font-semibold leading-snug tracking-tight mb-3">
            Understand the market.<br />Make better decisions.
          </h2>
          <button 
            type="button"
            onClick={onOpenGuide}
            className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-[13px] font-medium px-3 py-1.5 rounded-full transition-colors backdrop-blur-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beginner guide: 3 min read</span>
          </button>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] w-36 h-36 bg-white/10 rounded-full pointer-events-none blur-xl" />
      </div>

      {/* Featured: Company to Explore */}
      <div className="mb-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[17px] font-semibold text-[#17211D]">
            Company to explore
          </h3>
          <button 
            type="button"
            onClick={onViewAllStocks}
            className="text-[14px] font-medium text-[#009966] hover:underline cursor-pointer"
          >
            View all
          </button>
        </div>

        {/* Featured Card */}
        <div 
          onClick={() => onSelectStock(featuredStock)}
          className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#E6F5F0] text-[#009966] font-bold text-sm flex items-center justify-center border border-[#009966]/20">
                {featuredStock.symbol.slice(0, 4)}
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-[#17211D] leading-tight">
                  {featuredStock.name}
                </h4>
                <p className="text-[13px] text-[#76837D] mt-0.5">
                  {featuredStock.symbol} · {featuredStock.exchange} · {featuredStock.sector}
                </p>
              </div>
            </div>
          </div>

          {/* Price & Change */}
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-[22px] font-bold text-[#17211D]">
              ₦{featuredStock.price.toFixed(2)}
            </span>
            <span className="inline-flex items-center text-[14px] font-medium text-[#00A63E]">
              <ArrowUpRight className="w-4 h-4 mr-0.5" />
              +{featuredStock.changePercent}% (₦{featuredStock.change.toFixed(2)})
            </span>
          </div>

          {/* Key Metrics Bento */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E3EAE6] text-center mb-4">
            <div>
              <p className="text-[12px] text-[#76837D]">52W High</p>
              <p className="text-[14px] font-semibold text-[#17211D]">₦{featuredStock.high52}</p>
            </div>
            <div>
              <p className="text-[12px] text-[#76837D]">52W Low</p>
              <p className="text-[14px] font-semibold text-[#17211D]">₦{featuredStock.low52}</p>
            </div>
            <div>
              <p className="text-[12px] text-[#76837D]">Market Cap</p>
              <p className="text-[14px] font-semibold text-[#17211D]">{featuredStock.marketCap}</p>
            </div>
          </div>

          {/* Explore CTA */}
          <button 
            type="button"
            className="w-full h-11 bg-[#006B48] hover:bg-[#00553A] text-white text-[14px] font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Explore Company</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Market Movers */}
      <div className="mb-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[17px] font-semibold text-[#17211D]">
            Market Movers
          </h3>
          <button 
            type="button"
            onClick={onOpenMarketMovers}
            className="text-[14px] font-medium text-[#009966] hover:underline cursor-pointer"
          >
            View all
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#EBF0EE] p-1 rounded-xl mb-4">
          <button
            onClick={() => setActiveMoverTab('active')}
            className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
              activeMoverTab === 'active' ? 'bg-white text-[#009966] shadow-sm' : 'text-[#76837D]'
            }`}
          >
            Most Active
          </button>
          <button
            onClick={() => setActiveMoverTab('gainers')}
            className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
              activeMoverTab === 'gainers' ? 'bg-white text-[#009966] shadow-sm' : 'text-[#76837D]'
            }`}
          >
            Top Gainers
          </button>
          <button
            onClick={() => setActiveMoverTab('losers')}
            className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
              activeMoverTab === 'losers' ? 'bg-white text-[#009966] shadow-sm' : 'text-[#76837D]'
            }`}
          >
            Top Losers
          </button>
        </div>

        {/* Stock List */}
        <div className="flex flex-col gap-2.5">
          {getFilteredMovers().slice(0, 4).map((stock) => (
            <div
              key={stock.symbol}
              onClick={() => onSelectStock(stock)}
              className="bg-white border border-[#E3EAE6] rounded-xl p-3.5 flex items-center justify-between hover:border-[#009966]/40 transition-colors cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F3FAF7] text-[#009966] font-semibold text-xs flex items-center justify-center border border-[#E3EAE6]">
                  {stock.symbol.slice(0, 3)}
                </div>
                <div>
                  <h4 className="text-[14.5px] font-semibold text-[#17211D] leading-tight">
                    {stock.name}
                  </h4>
                  <p className="text-[12px] text-[#76837D]">
                    {stock.symbol} · {stock.sector}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[15px] font-semibold text-[#17211D]">
                  ₦{stock.price.toFixed(2)}
                </p>
                <p className={`text-[12.5px] font-medium flex items-center justify-end ${
                  stock.isPositive ? 'text-[#00A63E]' : 'text-[#DC2626]'
                }`}>
                  {stock.isPositive ? (
                    <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
                  )}
                  {stock.isPositive ? '+' : ''}{stock.changePercent}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Teaser Card */}
      <div 
        onClick={onOpenNews}
        className="bg-white border border-[#E3EAE6] rounded-2xl p-4 shadow-sm hover:border-[#009966]/40 transition-colors cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009966]">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Market News</span>
          </span>
          <span className="text-[11px] text-[#76837D]">Sept 25, 2026</span>
        </div>
        <h4 className="text-[14.5px] font-semibold text-[#17211D] leading-snug mb-1">
          Aliko Dangote, Ethiopia and Djibouti to build $600m fuel pipeline
        </h4>
        <p className="text-[12.5px] text-[#76837D] line-clamp-2">
          Project will connect Djibouti's port with distribution facilities across East Africa...
        </p>
      </div>
    </div>
  );
};

export default Home;
