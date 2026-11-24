import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  Settings, 
  Award,
  Layers,
  PieChart,
  TrendingUp,
  Clock,
  Bookmark
} from 'lucide-react';

/**
 * GuideExpanded (Expanded Guide Lessons)
 * Implements full curriculum lessons from Figma frames 1937:14020 – 1937:14410:
 * - Module 1: Understanding the Stock Market (What is the stock market?, Share ownership)
 * - Module 2: Simple Steps to Research a Company (Understanding business model, revenue drivers)
 * - Module 3: Understanding Company Financials (Income, Balance Sheet, Cash Flow moving in and out)
 * - Module 4: Understanding Dividends (What is dividend?, Dividend yield, Payout sustainability)
 * - Module 5: Risk Management & Market Volatility (Inflation, Foreign exchange rates, Interest rates)
 */
export const GuideExpanded = ({ 
  onBack, 
  onOpenSettings,
  onOpenQuiz 
}) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const modules = [
    {
      id: 1,
      title: "Understanding the Stock Market",
      readTime: "3 min read",
      pages: [
        {
          heading: "What is the stock market?",
          text: "The stock market is where investors buy and sell shares in publicly listed companies. When a company offers shares, it allows people to own a small part of that business. For example, imagine a company called GreenFoods has divided its ownership into 1,000 shares. If you own 10 shares, you hold an ownership stake in the business and share in its long-term financial growth."
        },
        {
          heading: "How prices change on the NGX",
          text: "Share prices fluctuate during trading hours based on supply and demand. When more investors want to buy a company's shares than sell them (due to strong earnings, dividend growth, or economic expansion), the price goes up. If more investors want to sell, the price falls."
        },
        {
          heading: "The role of the NGX and CSCS",
          text: "The Nigerian Exchange (NGX) provides a regulated marketplace for transparent trading, while the Central Securities Clearing System (CSCS) serves as the central depository holding your shares securely in electronic form."
        }
      ]
    },
    {
      id: 2,
      title: "Simple Steps to Research a Company",
      readTime: "3 min read",
      pages: [
        {
          heading: "Start with the business itself",
          text: "Before looking at a company’s share price, understand what the company actually does. Ask yourself: What products or services does it provide? Who are its customers? How does it make money? What makes customers choose it over alternatives? If you cannot explain how the company makes money, it is difficult to evaluate whether its business is becoming stronger or weaker."
        },
        {
          heading: "Evaluating Competitive Advantage",
          text: "Look for durable advantages. For example, Dangote Cement benefits from massive scale and captive energy pipelines, while MTN Nigeria benefits from widespread brand loyalty and nationwide 4G/5G mobile network coverage."
        },
        {
          heading: "Check the leadership & track record",
          text: "Review who manages the company. Consistent dividend payment histories, clear corporate disclosures, and prudent capital allocation signal high-quality executive stewardship."
        }
      ]
    },
    {
      id: 3,
      title: "Understanding Company Financials",
      readTime: "5 min read",
      pages: [
        {
          heading: "What are company financials?",
          text: "Financial statements reveal how a company is truly performing under the hood. The three foundational reports are the Income Statement (profitability over time), the Balance Sheet (assets and debts), and the Cash Flow Statement (real cash movements)."
        },
        {
          heading: "Cash flow: money moving in and out",
          text: "A company can show paper profits on its income statement while running out of actual cash in the bank. Operating cash flow verifies whether customers are actually paying for goods and services in real Naira."
        },
        {
          heading: "What should you remember?",
          text: "Always look for growing revenues, stable or expanding gross margins, and manageable debt obligations relative to annual operating cash flows."
        }
      ]
    },
    {
      id: 4,
      title: "Understanding Dividends",
      readTime: "3 min read",
      pages: [
        {
          heading: "What is a dividend?",
          text: "A dividend is cash profit that a company's board of directors decides to pay directly to its shareholders. On the NGX, successful companies often distribute interim dividends (mid-year) and final dividends (end of financial year)."
        },
        {
          heading: "What is dividend yield?",
          text: "Dividend yield is the annual dividend per share divided by the current share price, expressed as a percentage. For example, if a stock trading at ₦50 pays ₦5 in total annual dividends, its dividend yield is 10%."
        },
        {
          heading: "Reinvesting dividends for compound growth",
          text: "By taking your cash dividends and purchasing additional shares, you benefit from compound growth — earning future dividends on your reinvested shares over many years."
        }
      ]
    }
  ];

  const currentModule = modules[activeModuleIndex];
  const currentPageContent = currentModule.pages[currentPage - 1];

  const handleNextPage = () => {
    if (currentPage < currentModule.pages.length) {
      setCurrentPage((p) => p + 1);
    } else if (activeModuleIndex < modules.length - 1) {
      setActiveModuleIndex((m) => m + 1);
      setCurrentPage(1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    } else if (activeModuleIndex > 0) {
      setActiveModuleIndex((m) => m - 1);
      setCurrentPage(modules[activeModuleIndex - 1].pages.length);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-24"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-name="Expanded Guide"
    >
      {/* Top Header */}
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
            <h1 className="text-[16px] font-bold text-[#17211D]">StockWatcha Guide</h1>
            <p className="text-[11px] text-[#009966] font-medium">{currentModule.readTime}</p>
          </div>
          <button
            type="button"
            onClick={onOpenSettings}
            className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-5 flex flex-col gap-5">
        {/* Module Picker Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {modules.map((mod, idx) => (
            <button
              key={mod.id}
              type="button"
              onClick={() => {
                setActiveModuleIndex(idx);
                setCurrentPage(1);
              }}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeModuleIndex === idx
                  ? 'bg-[#009966] text-white shadow-xs'
                  : 'bg-white border border-[#E3EAE6] text-[#414D48] hover:border-[#009966]/40'
              }`}
            >
              Module {idx + 1}
            </button>
          ))}
        </div>

        {/* Module Card */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold text-[#009966] uppercase tracking-wider bg-[#E6F5EF] px-2.5 py-0.5 rounded-full">
              Lesson {activeModuleIndex + 1} of {modules.length}
            </span>
            <span className="text-[11px] text-[#76837D] flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {currentModule.readTime}
            </span>
          </div>

          <h2 className="text-[20px] font-bold text-[#17211D] leading-tight mb-4">
            {currentModule.title}
          </h2>

          {/* Sub-heading */}
          <div className="p-4 bg-[#F7FAF9] rounded-xl border border-[#E3EAE6] mb-4">
            <h3 className="text-[15px] font-bold text-[#006B48] mb-2">
              {currentPageContent.heading}
            </h3>
            <p className="text-[13.5px] text-[#414D48] leading-relaxed">
              {currentPageContent.text}
            </p>
          </div>

          {/* Pagination status */}
          <div className="flex items-center justify-between text-[12px] text-[#76837D] pt-2 border-t border-[#F0F4F2]">
            <span>Page {currentPage} of {currentModule.pages.length}</span>
            <div className="flex items-center gap-1.5">
              {currentModule.pages.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === i + 1 ? 'w-5 bg-[#009966]' : 'bg-[#E3EAE6]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Knowledge Check Quick Trigger */}
        <div className="bg-gradient-to-br from-[#EDE9FE] to-white border border-[#DDD6FE] rounded-2xl p-4 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[13.5px] font-bold text-[#5B21B6]">Test Your Knowledge</h4>
              <p className="text-[11.5px] text-[#6D28D9]">Take a quick 3-question quiz on this lesson</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenQuiz}
            className="px-3 py-1.5 rounded-lg bg-[#7C3AED] text-white text-[12px] font-bold hover:bg-[#6D28D9] transition-colors cursor-pointer"
          >
            Start Quiz
          </button>
        </div>

        {/* Prev / Next Pagination Controls */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <button
            type="button"
            disabled={activeModuleIndex === 0 && currentPage === 1}
            onClick={handlePrevPage}
            className="px-4 py-2 rounded-xl text-[13px] font-semibold border border-[#E3EAE6] text-[#17211D] disabled:opacity-40 hover:bg-[#F3FAF7] cursor-pointer"
          >
            Previous Page
          </button>
          <span className="text-[12.5px] font-bold text-[#76837D]">
            Page {currentPage}/{currentModule.pages.length}
          </span>
          <button
            type="button"
            disabled={activeModuleIndex === modules.length - 1 && currentPage === currentModule.pages.length}
            onClick={handleNextPage}
            className="px-4 py-2 rounded-xl text-[13px] font-semibold bg-[#006B48] text-white disabled:opacity-40 hover:bg-[#005A3C] cursor-pointer"
          >
            Next Page
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-[10.5px] text-[#9CA5A0] leading-relaxed">
          © 2026 Reliance Financial Group. All rights reserved. Content tailored for NGX investors.
        </p>
      </div>
    </motion.div>
  );
};

export default GuideExpanded;
