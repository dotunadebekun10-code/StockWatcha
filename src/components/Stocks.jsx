import React, { useState } from 'react';
import { Search, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { MOCK_STOCKS } from '../data/mockStocks';

export const Stocks = ({ onSelectStock }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Banking', 'Consumer Goods', 'Industrials', 'Energy', 'Telecommunications'];

  const filteredStocks = MOCK_STOCKS.filter((stock) => {
    const matchesCategory = selectedCategory === 'All' || stock.sector.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = stock.name.toLowerCase().includes(searchQuery.toLowerCase()) || stock.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1040:918"
      data-name="Stocks Page for Begineers"
    >
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-[22px] font-bold text-[#17211D] tracking-tight">
          Explore Stocks
        </h1>
        <p className="text-[14px] text-[#76837D] mt-0.5">
          Nigerian Exchange (NGX) equities made simple
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-5">
        <Search className="w-4 h-4 text-[#76837D] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by company or ticker (e.g. GTCO, Dangote)"
          className="w-full h-11 pl-10 pr-4 bg-white border border-[#E3EAE6] rounded-xl text-[14px] text-[#17211D] placeholder:text-[#A5B2AC] focus:outline-none focus:ring-2 focus:ring-[#009966]/20 focus:border-[#009966] transition-all"
        />
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#009966] text-white shadow-sm'
                : 'bg-white text-[#414D48] border border-[#E3EAE6] hover:bg-[#F3FAF7]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[16px] font-semibold text-[#17211D]">
          {selectedCategory === 'All' ? 'Popular for Beginners' : `${selectedCategory} Stocks`}
        </h2>
        <span className="text-[13px] text-[#76837D]">
          {filteredStocks.length} listed
        </span>
      </div>

      {/* Stocks Cards List */}
      <div className="flex flex-col gap-3">
        {filteredStocks.map((stock) => (
          <div
            key={stock.symbol}
            onClick={() => onSelectStock(stock)}
            className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex items-center justify-between hover:border-[#009966]/40 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#E6F5F0] text-[#009966] font-bold text-sm flex items-center justify-center border border-[#009966]/15">
                {stock.symbol.slice(0, 4)}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[15px] font-semibold text-[#17211D] leading-tight">
                    {stock.name}
                  </h3>
                </div>
                <p className="text-[12.5px] text-[#76837D] mt-0.5 uppercase tracking-wide">
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

        {filteredStocks.length === 0 && (
          <div className="text-center py-12 text-[#76837D] bg-white rounded-2xl border border-dashed border-[#E3EAE6]">
            <p className="text-[15px] font-medium text-[#17211D] mb-1">No stocks found</p>
            <p className="text-[13px]">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stocks;
