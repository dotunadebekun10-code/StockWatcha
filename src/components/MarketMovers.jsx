import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { MOCK_STOCKS } from '../data/mockStocks';

export const MarketMovers = ({ onBack, onSelectStock }) => {
  const [activeTab, setActiveTab] = useState('active'); // 'active' | 'gainers' | 'losers'

  const getSortedStocks = () => {
    if (activeTab === 'gainers') {
      return [...MOCK_STOCKS].sort((a, b) => b.changePercent - a.changePercent);
    }
    if (activeTab === 'losers') {
      return [...MOCK_STOCKS].sort((a, b) => a.changePercent - b.changePercent);
    }
    return MOCK_STOCKS;
  };

  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1543:5732"
      data-name="Market Movers Page"
    >
      {/* Header */}
      <div className="flex items-center gap-3.5 mb-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-[#17211D] tracking-tight">
            Market Movers
          </h1>
          <p className="text-[13px] text-[#76837D]">
            Nigerian Exchange (NGX) daily activity
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#EBF0EE] p-1 rounded-xl mb-5">
        <button
          onClick={() => setActiveTab('active')}
          className={`flex-1 py-2 text-[13.5px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'active' ? 'bg-white text-[#009966] shadow-sm font-semibold' : 'text-[#76837D]'
          }`}
        >
          Most Active
        </button>
        <button
          onClick={() => setActiveTab('gainers')}
          className={`flex-1 py-2 text-[13.5px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'gainers' ? 'bg-white text-[#009966] shadow-sm font-semibold' : 'text-[#76837D]'
          }`}
        >
          Top Gainers
        </button>
        <button
          onClick={() => setActiveTab('losers')}
          className={`flex-1 py-2 text-[13.5px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'losers' ? 'bg-white text-[#009966] shadow-sm font-semibold' : 'text-[#76837D]'
          }`}
        >
          Top Losers
        </button>
      </div>

      {/* Stock Movers List */}
      <div className="flex flex-col gap-3">
        {getSortedStocks().map((stock) => (
          <div
            key={stock.symbol}
            onClick={() => onSelectStock(stock)}
            className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex items-center justify-between hover:border-[#009966]/40 transition-all cursor-pointer shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#E6F5F0] text-[#009966] font-bold text-sm flex items-center justify-center border border-[#009966]/15">
                {stock.symbol.slice(0, 4)}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#17211D] leading-tight">
                  {stock.name}
                </h3>
                <p className="text-[12.5px] text-[#76837D] mt-0.5 uppercase">
                  {stock.symbol} · {stock.sector}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[15px] font-semibold text-[#17211D]">
                ₦{stock.price.toFixed(2)}
              </p>
              <p className={`text-[12.5px] font-medium inline-flex items-center ${
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
  );
};

export default MarketMovers;
