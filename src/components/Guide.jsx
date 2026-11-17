import React, { useState } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const Guide = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      page: 1,
      title: "What is the stock market?",
      content: (
        <>
          <p className="mb-3">
            The stock market is where investors buy and sell shares in publicly listed companies. When a company offers shares, it allows people to own a small part of that business.
          </p>
          <p>
            For example, imagine a company called GreenFoods has divided its ownership into 1,000 shares. If you own 10 shares, you own a small portion of the company. You do not own 10 specific products or buildings, but you hold an ownership stake in the business.
          </p>
        </>
      )
    },
    {
      page: 2,
      title: "How do you make money from stocks?",
      content: (
        <>
          <p className="mb-3">
            Investors generally make money in two primary ways:
          </p>
          <p className="mb-3">
            <strong>1. Capital Gains:</strong> When the company grows, becomes more profitable, and investors value it higher, the share price rises. If you sell at a higher price than you bought, that profit is your capital gain.
          </p>
          <p>
            <strong>2. Dividends:</strong> When companies make profits, they often share a portion of those cash earnings directly with their shareholders on a regular schedule (e.g. quarterly or annually).
          </p>
        </>
      )
    },
    {
      page: 3,
      title: "What are the risks?",
      content: (
        <>
          <p className="mb-3">
            Stock prices can go down as well as up based on company performance, economic factors, interest rates, and inflation.
          </p>
          <p>
            The best way to protect yourself as a beginner is <strong>diversification</strong>: investing in companies across different sectors (like Banking, Consumer Goods, and Industrials) rather than putting all your money into one single company.
          </p>
        </>
      )
    }
  ];

  const current = pages[currentPage - 1];

  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="2034:8462"
      data-name="Guide Page"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[18px] font-semibold text-[#17211D]">
          Understanding the Stock Market
        </h1>
      </div>

      {/* Guide Banner */}
      <div className="bg-[#006B48] text-white rounded-2xl p-5 mb-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-emerald-200 text-xs">
          <BookOpen className="w-4 h-4" />
          <span>StockWatcha Learning Library</span>
        </div>
        <h2 className="text-[20px] font-bold">Stock Market Basics</h2>
        <p className="text-[13px] text-emerald-100 mt-1">
          Estimated read: <span className="text-white font-semibold">3 minutes</span>
        </p>
      </div>

      {/* Content Card */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="text-[18px] font-semibold text-[#17211D] mb-3">
          {current.title}
        </h3>
        <div className="text-[14.5px] text-[#414D48] leading-relaxed">
          {current.content}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 text-[14px] font-medium text-[#76837D] disabled:opacity-40 hover:text-[#17211D] transition-colors cursor-pointer"
        >
          Previous Page
        </button>

        <span className="px-3 py-1 bg-[#EFF6FF] text-[#2B7FFF] rounded-lg text-xs font-semibold">
          Page {currentPage}/3
        </span>

        <button
          type="button"
          disabled={currentPage === 3}
          onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
          className="px-4 py-2 text-[14px] font-semibold text-[#009966] disabled:opacity-40 hover:text-[#008055] transition-colors cursor-pointer"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Guide;
