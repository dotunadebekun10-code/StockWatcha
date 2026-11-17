import React from 'react';
import { ArrowUpRight, ArrowDownRight, Star, Trash2 } from 'lucide-react';

export const Watchlist = ({ watchlist, onSelectStock, onRemoveFromWatchlist, onExploreStocks }) => {
  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1979:4578"
      data-name="Watchlsit Page for Begineers"
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-[#17211D] tracking-tight">
          My Watchlist
        </h1>
        <p className="text-[14px] text-[#76837D] mt-0.5">
          Track the stocks you're exploring
        </p>
      </div>

      {watchlist.length === 0 ? (
        /* Empty State */
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-8 text-center shadow-sm mt-8">
          <div className="w-14 h-14 rounded-full bg-[#E6F5F0] text-[#009966] flex items-center justify-center mx-auto mb-4">
            <Star className="w-7 h-7" />
          </div>
          <h2 className="text-[18px] font-semibold text-[#17211D] mb-1.5">
            Your watchlist is empty
          </h2>
          <p className="text-[13.5px] text-[#76837D] mb-6 max-w-[260px] mx-auto">
            Tap the star icon on any company to save and track it here.
          </p>
          <button
            type="button"
            onClick={onExploreStocks}
            className="w-full h-11 bg-[#009966] hover:bg-[#008055] text-white text-[14px] font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Explore Stocks
          </button>
        </div>
      ) : (
        /* Watchlist Items */
        <div className="flex flex-col gap-3">
          {watchlist.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-[#009966]/40 transition-all"
            >
              <div 
                onClick={() => onSelectStock(stock)}
                className="flex items-center gap-3.5 flex-1 cursor-pointer min-w-0"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F0] text-[#009966] font-bold text-sm flex items-center justify-center border border-[#009966]/15 flex-shrink-0">
                  {stock.symbol.slice(0, 4)}
                </div>
                <div className="min-w-0 pr-2">
                  <h3 className="text-[15px] font-semibold text-[#17211D] leading-tight truncate">
                    {stock.name}
                  </h3>
                  <p className="text-[12.5px] text-[#76837D] mt-0.5 truncate uppercase">
                    {stock.symbol} · {stock.sector}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  onClick={() => onSelectStock(stock)}
                  className="text-right cursor-pointer"
                >
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

                <button
                  type="button"
                  onClick={() => onRemoveFromWatchlist(stock.symbol)}
                  aria-label="Remove from watchlist"
                  className="text-[#A5B2AC] hover:text-[#DC2626] p-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
