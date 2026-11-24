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
  BarChart2,
  PieChart,
  Target
} from 'lucide-react';

/**
 * GuideIntermediate (Guide Page for iNTERMEDIATE)
 * Figma Node: 1076:1985 (402x874)
 * Strict implementation of Figma intermediate guide lessons:
 * - "Lesson 1 of 8: Understanding Financial Statements"
 * - "Financial statements shows how a company is performing"
 * - "The 3 main statements are: Income Statement, Balance Sheet, Cash Flow Statement"
 * - "Key takeaway: This statements helps you evaluate a company’s financial health"
 * - Pagination tracker: 1/8, Next, Previous
 * - Practical NGX valuation scenarios and multiple interactive quiz checks
 */
export const GuideIntermediate = ({ onBack, onOpenSettings }) => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const intermediateLessons = [
    {
      number: 1,
      total: 8,
      title: "Understanding Financial Statements",
      subtitle: "Financial statements show how a company is performing",
      statements: [
        {
          name: "1. Income Statement",
          desc: "Reports total revenues generated, cost of sales, operating expenses, and net profit (or loss) over a specific trading period (quarter or full year)."
        },
        {
          name: "2. Balance Sheet",
          desc: "A financial snapshot displaying what the company owns (Assets), what it owes (Liabilities), and residual shareholder funds (Equity) at a single point in time."
        },
        {
          name: "3. Cash Flow Statement",
          desc: "Tracks the physical movement of actual cash into and out of operating, investing, and financing activities — verifying true liquidity."
        }
      ],
      takeaway: "These statements give you the essential foundation to evaluate a company's financial health and sustainability on the NGX.",
      quiz: {
        question: "Which financial statement reveals the actual cash generated from core business operations?",
        options: [
          "Income Statement",
          "Cash Flow Statement",
          "Statement of Changes in Equity",
          "Auditor's Report"
        ],
        correctIndex: 1,
        explanation: "The Cash Flow Statement (specifically Cash Flow from Operations) tracks real cash entering and leaving the business, stripping out non-cash accounting adjustments like depreciation."
      }
    },
    {
      number: 2,
      total: 8,
      title: "P/E Ratio & Earnings Yield",
      subtitle: "Evaluating how much you pay for every Naira of profit",
      statements: [
        {
          name: "Price-to-Earnings (P/E)",
          desc: "Calculated as Share Price ÷ EPS. Indicates how many years of current earnings investors are willing to pay for ownership."
        },
        {
          name: "Earnings Yield (Inverse P/E)",
          desc: "Calculated as (EPS ÷ Share Price) × 100%. Allows direct comparison against Nigerian Treasury Bill interest yields."
        },
        {
          name: "Trailing vs Forward P/E",
          desc: "Trailing uses historical audited results; Forward estimates future earnings expectations over the next 12 months."
        }
      ],
      takeaway: "Compare P/E ratios against sector peers and historical averages — not across unrelated sectors.",
      quiz: {
        question: "If a stock trades at ₦50 and generates ₦5 EPS, what is its P/E ratio and Earnings Yield?",
        options: [
          "10x P/E and 10% Earnings Yield",
          "5x P/E and 20% Earnings Yield",
          "25x P/E and 4% Earnings Yield",
          "10x P/E and 5% Earnings Yield"
        ],
        correctIndex: 0,
        explanation: "₦50 / ₦5 = 10x P/E ratio. The earnings yield is (₦5 / ₦50) × 100 = 10%."
      }
    },
    {
      number: 3,
      total: 8,
      title: "Dividend Yield & Payout Sustainability",
      subtitle: "Analyzing dividend safety on the Nigerian Exchange",
      statements: [
        {
          name: "Dividend Yield",
          desc: "Annual cash dividends per share divided by current market price. Top NGX dividend payers frequently yield between 6% and 12%."
        },
        {
          name: "Dividend Payout Ratio",
          desc: "Dividends Paid ÷ Net Income. A payout ratio below 60% indicates ample earnings are retained to fund capital reinvestment."
        },
        {
          name: "Dividend Aristocrats of NGX",
          desc: "Companies like Zenith Bank, GTCO, and Dangote Cement boast decade-long continuous dividend payout records."
        }
      ],
      takeaway: "A very high dividend yield (>15%) can sometimes be a 'yield trap' if the share price has collapsed due to declining earnings.",
      quiz: {
        question: "What does a dividend payout ratio of 40% indicate?",
        options: [
          "The company is losing money",
          "The company pays out 40% of net profits and retains 60% for growth",
          "Dividends will be cut next year",
          "Shareholders receive 40% yield on their investment"
        ],
        correctIndex: 1,
        explanation: "A 40% payout ratio means 40% of earnings are distributed to shareholders as dividends, while 60% is reinvested back into the business."
      }
    }
  ];

  const currentLesson = intermediateLessons[currentLessonIndex] || intermediateLessons[0];

  const handleNext = () => {
    if (currentLessonIndex < intermediateLessons.length - 1) {
      setCurrentLessonIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setQuizSubmitted(false);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex((prev) => prev - 1);
      setSelectedAnswer(null);
      setQuizSubmitted(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-24"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1076:1985"
      data-name="Guide Page for iNTERMEDIATE"
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
            <span className="text-[11px] font-bold text-[#7C3AED] bg-[#EDE9FE] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Intermediate Track
            </span>
            <p className="text-[13px] font-bold text-[#17211D] mt-1">
              Lesson {currentLesson.number} of {currentLesson.total}
            </p>
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
        {/* Lesson Header Card */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] flex items-center justify-center text-[#7C3AED]">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-[12px] font-semibold text-[#7C3AED]">Financial Analysis</span>
          </div>
          <h1 className="text-[20px] font-bold text-[#17211D] leading-tight mb-2">
            {currentLesson.title}
          </h1>
          <p className="text-[13px] text-[#76837D] leading-relaxed">
            {currentLesson.subtitle}
          </p>
        </div>

        {/* Core Lesson Statements */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm space-y-4">
          <h2 className="text-[14px] font-bold text-[#17211D]">Core Concepts</h2>
          <div className="space-y-3">
            {currentLesson.statements.map((stmt, idx) => (
              <div key={idx} className="p-3.5 bg-[#F7FAF9] border border-[#E3EAE6] rounded-xl">
                <h3 className="text-[13.5px] font-bold text-[#17211D] mb-1">{stmt.name}</h3>
                <p className="text-[12.5px] text-[#414D48] leading-relaxed">{stmt.desc}</p>
              </div>
            ))}
          </div>

          {/* Key Takeaway Banner */}
          <div className="p-4 bg-[#E6F5EF] border border-[#B3DFD0] rounded-xl flex items-start gap-3 mt-4">
            <Sparkles className="w-5 h-5 text-[#009966] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] font-bold text-[#006B48] uppercase tracking-wide">Key Takeaway</p>
              <p className="text-[12.5px] text-[#2D6B55] mt-0.5 leading-relaxed">
                {currentLesson.takeaway}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Knowledge Check Quiz */}
        {currentLesson.quiz && (
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#7C3AED]" />
              <h3 className="text-[14px] font-bold text-[#17211D]">Quick Knowledge Check</h3>
            </div>
            <p className="text-[13px] text-[#414D48] font-medium mb-3">
              {currentLesson.quiz.question}
            </p>

            <div className="space-y-2 mb-4">
              {currentLesson.quiz.options.map((opt, i) => {
                const isSelected = selectedAnswer === i;
                const isCorrect = i === currentLesson.quiz.correctIndex;
                let btnStyle = 'bg-[#F7FAF9] border-[#E3EAE6] text-[#17211D]';
                
                if (quizSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-[#DCFCE7] border-[#15803D] text-[#15803D] font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-[#FEE2E2] border-[#DC2626] text-[#DC2626]';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-[#EDE9FE] border-[#7C3AED] text-[#7C3AED] font-semibold';
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => !quizSubmitted && setSelectedAnswer(i)}
                    className={`w-full text-left p-3 rounded-xl border text-[13px] transition-all cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{opt}</span>
                      {quizSubmitted && isCorrect && <CheckCircle className="w-4 h-4 text-[#15803D]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <button
                type="button"
                disabled={selectedAnswer === null}
                onClick={() => setQuizSubmitted(true)}
                className="w-full py-3 rounded-xl text-[13px] font-semibold bg-[#7C3AED] text-white disabled:opacity-40 hover:bg-[#6D28D9] transition-colors cursor-pointer"
              >
                Submit Answer
              </button>
            ) : (
              <div className="p-3 bg-[#F7FAF9] border border-[#E3EAE6] rounded-xl text-[12px] text-[#414D48] leading-relaxed">
                <span className="font-bold text-[#17211D]">Explanation: </span>
                {currentLesson.quiz.explanation}
              </div>
            )}
          </div>
        )}

        {/* Pagination Navigation Bar */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <button
            type="button"
            disabled={currentLessonIndex === 0}
            onClick={handlePrev}
            className="px-4 py-2 rounded-xl text-[13px] font-semibold border border-[#E3EAE6] text-[#17211D] disabled:opacity-40 hover:bg-[#F3FAF7] cursor-pointer"
          >
            Previous
          </button>
          <span className="text-[13px] font-bold text-[#76837D]">
            {currentLessonIndex + 1} / {intermediateLessons.length}
          </span>
          <button
            type="button"
            disabled={currentLessonIndex === intermediateLessons.length - 1}
            onClick={handleNext}
            className="px-4 py-2 rounded-xl text-[13px] font-semibold bg-[#006B48] text-white disabled:opacity-40 hover:bg-[#005A3C] cursor-pointer"
          >
            Next
          </button>
        </div>

        {/* Footer info */}
        <p className="text-center text-[11px] text-[#9CA5A0] leading-relaxed">
          © 2026 StockWatcha Financial Education. Data and concepts tailored for the Nigerian Exchange (NGX).
        </p>
      </div>
    </motion.div>
  );
};

export default GuideIntermediate;
