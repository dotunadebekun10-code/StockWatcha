import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bookmark, 
  Search, 
  Plus, 
  Check, 
  Sparkles, 
  Building2, 
  TrendingUp, 
  Compass, 
  ChevronRight,
  ShieldCheck,
  X
} from 'lucide-react';

/**
 * WatchlistEmptyState — Figma nodes: 1559:6416 & 1576:7280
 * Strictly implements:
 * 1. Logged-in beginner empty state (Figma 1559:6416):
 *    - "My Watchlist"
 *    - "Track the stocks you’re exploring"
 *    - "Learn as you watch — Follow companies, see how they grow and why it matters."
 *    - "Your watchlist is empty"
 *    - "Explore Nigerian companies and discover the ones you'd like to follow."
 *    - "Explore Stocks" button
 * 2. Guest Interactive Add Drawer (Figma 1576:7280):
 *    - "Your watchlist is empty — Add a company to start tracking them"
 *    - Quick "+ Add" buttons for top NGX starter stocks (DANGCEM, MTNN, GTCO, ZENITHBANK)
 *    - "Save your watchlist — Create an account to keep your watchlist and access it anytime."
 */
export const WatchlistEmptyState = ({ 
  isGuest = false,
  onExploreStocks,
  onCreateAccount,
  onAddStock
}) => {
  const [showAddDrawer, setShowAddDrawer] = useState(false);
  const [addedSymbols, setAddedSymbols] = useState([]);

  const starterStocks = [
    {
      symbol: 'DANGCEM',
      name: 'Dangote Cement Plc',
      sector: 'Industrials',
      price: '₦652.50',
      change: '+1.30%',
      isPositive: true
    },
    {
      symbol: 'MTNN',
      name: 'MTN Nigeria Communications',
      sector: 'Telecommunications',
      price: '₦44.10',
      change: '+1.13%',
      isPositive: true
    },
    {
      symbol: 'GTCO',
      name: 'Guaranty Trust Holding Co',
      sector: 'Banking',
      price: '₦52.50',
      change: '+1.15%',
      isPositive: true
    },
    {
      symbol: 'ZENITHBANK',
      name: 'Zenith Bank Plc',
      sector: 'Banking',
      price: '₦41.50',
      change: '-0.45%',
      isPositive: false
    }
  ];

  const handleQuickAdd = (stock) => {
    if (!addedSymbols.includes(stock.symbol)) {
      setAddedSymbols([...addedSymbols, stock.symbol]);
      if (onAddStock) onAddStock(stock);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto flex flex-col justify-between"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1559:6416"
      data-name="Watchlsit Empty State Page for Begineers"
    >
      <div>
        {/* Header */}
        <div className="pt-2 mb-6">
          <h1 className="text-[24px] font-bold text-[#17211D] tracking-tight">
            My Watchlist
          </h1>
          <p className="text-[14px] text-[#76837D] mt-1 font-medium">
            Track the stocks you’re exploring
          </p>
        </div>

        {/* Feature: Learn as you watch */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 mb-6 shadow-2xs">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#E6F5EF] flex items-center justify-center text-[#009966]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-[15px] font-bold text-[#17211D]">
              Learn as you watch
            </h2>
          </div>
          <p className="text-[13px] text-[#414D48] leading-relaxed">
            Follow companies, see how they grow and why it matters.
          </p>
        </div>

        {/* Empty State Centerpiece */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-6 text-center shadow-xs mb-5">
          <div className="w-16 h-16 rounded-2xl bg-[#F0F9F5] border border-[#B3DFD0] flex items-center justify-center mx-auto mb-4 text-[#009966]">
            <Bookmark className="w-8 h-8 fill-[#009966]/20" />
          </div>

          <h3 className="text-[17px] font-bold text-[#17211D] mb-1.5">
            Your watchlist is empty
          </h3>

          <p className="text-[13px] text-[#76837D] leading-relaxed max-w-[280px] mx-auto mb-5">
            {isGuest 
              ? 'Add a company to start tracking them across trading sessions.'
              : 'Explore Nigerian companies and discover the ones you\'d like to follow.'}
          </p>

          {/* Action Trigger */}
          {isGuest ? (
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAddDrawer(true)}
              className="w-full bg-[#006B48] text-white py-3.5 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#005A3C] transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add a Company to Watch</span>
            </motion.button>
          ) : (
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={onExploreStocks}
              className="w-full bg-[#006B48] text-white py-3.5 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#005A3C] transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Stocks</span>
            </motion.button>
          )}
        </div>

        {/* Guest Save Watchlist Prompt (Figma 1576:7280) */}
        {isGuest && (
          <div className="bg-gradient-to-br from-[#E6F5EF] to-white border border-[#B3DFD0] rounded-2xl p-4 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#009966] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-[14px] font-bold text-[#006B48]">Save your watchlist</h4>
                <p className="text-[12px] text-[#2D6B55] mt-0.5 leading-relaxed">
                  Create an account to keep your watchlist and access it anytime across all devices.
                </p>
                <button
                  type="button"
                  onClick={onCreateAccount}
                  className="mt-2.5 text-[12px] font-bold text-[#009966] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Create Account</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Copyright footer (Figma 1559:6416) */}
      <p className="text-center text-[10.5px] text-[#9CA5A0] mt-6">
        © 2026 Reliance Financial Group. All rights reserved.
      </p>

      {/* Quick Add Bottom Drawer (Figma 1576:7280) */}
      <AnimatePresence>
        {showAddDrawer && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-t-3xl p-5 max-w-[440px] w-full shadow-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-[17px] font-bold text-[#17211D]">Add to Watchlist</h3>
                  <p className="text-[12px] text-[#76837D]">Select popular NGX stocks to track</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAddDrawer(false)}
                  className="w-8 h-8 rounded-full bg-[#F7FAF9] flex items-center justify-center text-[#76837D] hover:bg-[#E3EAE6] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2.5 mb-5">
                {starterStocks.map((stock) => {
                  const isAdded = addedSymbols.includes(stock.symbol);
                  return (
                    <div
                      key={stock.symbol}
                      className="p-3.5 rounded-xl border border-[#E3EAE6] bg-[#F7FAF9] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white border border-[#E3EAE6] flex items-center justify-center font-bold text-[11px] text-[#17211D]">
                          {stock.symbol.slice(0, 3)}
                        </div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-[#17211D]">{stock.name}</h4>
                          <p className="text-[11px] text-[#76837D]">{stock.symbol} · {stock.sector}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-[13px] font-bold text-[#17211D]">{stock.price}</p>
                          <span className={`text-[10.5px] font-bold ${stock.isPositive ? 'text-[#15803D]' : 'text-[#DC2626]'}`}>
                            {stock.change}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleQuickAdd(stock)}
                          disabled={isAdded}
                          className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-[#E6F5EF] text-[#009966]'
                              : 'bg-[#009966] text-white hover:bg-[#007A52]'
                          }`}
                        >
                          {isAdded ? 'Added' : 'Add'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setShowAddDrawer(false)}
                className="w-full bg-[#17211D] text-white py-3.5 rounded-xl text-[14px] font-semibold hover:bg-[#313C37] transition-colors cursor-pointer"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WatchlistEmptyState;
