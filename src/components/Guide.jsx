import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, CheckCircle, HelpCircle, Sparkles, ChevronRight } from 'lucide-react';

export const Guide = ({ onBack }) => {
  const [learningPath, setLearningPath] = useState('beginner'); // 'beginner' | 'intermediate'
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const beginnerLessons = [
    {
      page: 1,
      tag: "Foundations",
      title: "What is the stock market?",
      content: (
        <>
          <p className="mb-3">
            The stock market is where investors buy and sell shares in publicly listed companies. When a company offers shares on the Nigerian Exchange (NGX), it allows anyone to own a small part of that business.
          </p>
          <p>
            For example, imagine a Nigerian enterprise called <strong>GreenFoods</strong> has divided its ownership into 1,000 shares. If you own 10 shares, you hold an ownership stake in the business and share in its long-term financial growth.
          </p>
        </>
      ),
    },
    {
      page: 2,
      tag: "Returns",
      title: "How do you make money from stocks?",
      content: (
        <>
          <p className="mb-3">
            Investors generally make returns in two primary ways on the NGX:
          </p>
          <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6] mb-3">
            <h4 className="font-semibold text-[#17211D] text-sm">1. Capital Appreciation</h4>
            <p className="text-xs text-[#414D48] mt-1">
              As the company expands, earnings rise, and more investors want to buy shares, the share price goes up. If you sell at a higher price than you bought, that profit is your capital gain.
            </p>
          </div>
          <div className="bg-[#F7FAF9] p-3 rounded-xl border border-[#E3EAE6]">
            <h4 className="font-semibold text-[#17211D] text-sm">2. Dividends</h4>
            <p className="text-xs text-[#414D48] mt-1">
              Profitable companies often distribute cash profits directly to their shareholders on a regular schedule (interim and final dividends).
            </p>
          </div>
        </>
      ),
    },
    {
      page: 3,
      tag: "Risk Management",
      title: "What are the risks & how to manage them?",
      content: (
        <>
          <p className="mb-3">
            Stock prices can go down as well as up based on company earnings, inflation, interest rates, and foreign exchange rates.
          </p>
          <p className="mb-3">
            The safest way to protect yourself as a beginner is <strong>diversification</strong>: never put all your capital into one stock. Spread investments across sectors like Banking, Consumer Goods, and Telecoms.
          </p>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
            <strong>Rule of Thumb:</strong> Only invest money you don’t need in the immediate short-term, giving your companies time to grow.
          </div>
        </>
      ),
    },
    {
      page: 4,
      tag: "Knowledge Check",
      title: "Quick Check: Ownership Basics",
      isQuiz: true,
      question: "When you purchase 10 shares in a publicly listed company on the NGX, what do you hold?",
      options: [
        { id: 'A', text: "A physical loan that the company must repay next week." },
        { id: 'B', text: "A fractional ownership stake in the company and its future profits.", correct: true },
        { id: 'C', text: "Exclusive rights to direct the CEO's day-to-day decisions." },
      ],
      explanation: "Exactly right! Shares represent equity: a fractional ownership stake in the entire business.",
    },
  ];

  const intermediateLessons = [
    {
      page: 1,
      tag: "Valuation",
      title: "P/E Ratio: Price to Earnings",
      content: (
        <>
          <p className="mb-3">
            The Price-to-Earnings (P/E) ratio shows how much investors are willing to pay for every ₦1 of profit the company generates.
          </p>
          <p>
            A lower P/E (e.g. 4x–7x common in Nigerian banking) might suggest a stock is undervalued or in a mature sector, whereas a high P/E implies investors expect high future earnings growth.
          </p>
        </>
      ),
    },
    {
      page: 2,
      tag: "Dividends",
      title: "Dividend Yield & Qualification Date",
      content: (
        <>
          <p className="mb-3">
            Dividend Yield is the annual dividend per share divided by the current stock price.
          </p>
          <p>
            To receive a declared dividend on the NGX, you must own the stock before its official <strong>qualification date</strong> (the date when the company’s register of members closes).
          </p>
        </>
      ),
    },
  ];

  const lessons = learningPath === 'beginner' ? beginnerLessons : intermediateLessons;
  const current = lessons[Math.min(currentPage - 1, lessons.length - 1)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen bg-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="2034:8462"
      data-name="Guide Page"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-5 pt-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-[20px] font-bold text-[#17211D] tracking-tight">
              Investor Guide
            </h1>
            <p className="text-[12px] text-[#76837D]">Learn Nigerian stocks from scratch</p>
          </div>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#E6F5F0] text-[#009966] flex items-center justify-center">
          <BookOpen className="w-4 h-4" />
        </div>
      </div>

      {/* Path Selector Pill (Beginner vs Intermediate) */}
      <div className="bg-white border border-[#E3EAE6] p-1 rounded-xl flex gap-1 mb-5 shadow-xs">
        <button
          type="button"
          onClick={() => {
            setLearningPath('beginner');
            setCurrentPage(1);
            setSelectedQuizOption(null);
            setQuizSubmitted(false);
          }}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            learningPath === 'beginner'
              ? 'bg-[#009966] text-white shadow-xs'
              : 'text-[#414D48] hover:bg-gray-50'
          }`}
        >
          Beginner Path
        </button>
        <button
          type="button"
          onClick={() => {
            setLearningPath('intermediate');
            setCurrentPage(1);
            setSelectedQuizOption(null);
            setQuizSubmitted(false);
          }}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            learningPath === 'intermediate'
              ? 'bg-[#009966] text-white shadow-xs'
              : 'text-[#414D48] hover:bg-gray-50'
          }`}
        >
          Intermediate Path
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center gap-1.5 mb-4">
        {lessons.map((l, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentPage === i + 1 ? 'w-8 bg-[#009966]' : 'w-2 bg-[#CBD5E1]'
            }`}
          />
        ))}
      </div>

      {/* Animated Card Body with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${learningPath}-${current.page}`}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm min-h-[340px] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 bg-[#E6F5F0] text-[#009966] rounded-full">
                {current.tag}
              </span>
              <span className="text-xs text-[#76837D] font-medium">
                {current.page} of {lessons.length}
              </span>
            </div>

            <h2 className="text-[18px] font-bold text-[#17211D] mb-3 leading-snug">
              {current.title}
            </h2>

            {current.isQuiz ? (
              /* Interactive Knowledge Check (Figma "Guide correct state Page") */
              <div>
                <p className="text-[14px] text-[#414D48] font-medium mb-4">
                  {current.question}
                </p>

                <div className="space-y-2.5 mb-4">
                  {current.options.map((opt) => {
                    const isSelected = selectedQuizOption === opt.id;
                    const isCorrect = opt.correct;
                    const showResult = quizSubmitted;

                    let btnStyle = 'border-[#E3EAE6] bg-white hover:border-[#009966]/40';
                    if (showResult && isSelected) {
                      btnStyle = isCorrect
                        ? 'border-[#009966] bg-emerald-50 text-[#006B48]'
                        : 'border-red-400 bg-red-50 text-red-700';
                    } else if (isSelected) {
                      btnStyle = 'border-[#009966] bg-[#E6F5F0]/40';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          if (!quizSubmitted) setSelectedQuizOption(opt.id);
                        }}
                        className={`w-full p-3 rounded-xl border text-left text-xs sm:text-[13px] font-medium transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full bg-[#F1F5F9] text-[#17211D] font-bold text-[11px] flex items-center justify-center shrink-0">
                          {opt.id}
                        </span>
                        <span className="leading-snug">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2 text-emerald-900 text-xs"
                    data-name="Guide correct state Page"
                  >
                    <CheckCircle className="w-4 h-4 text-[#009966] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Correct! </span>
                      {current.explanation}
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-[13.5px] text-[#414D48] leading-relaxed">
                {current.content}
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-5 border-t border-[#E3EAE6] mt-4">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer ${
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-[#414D48] hover:bg-gray-100'
              }`}
            >
              Previous
            </button>

            {current.isQuiz && !quizSubmitted ? (
              <button
                type="button"
                disabled={!selectedQuizOption}
                onClick={() => setQuizSubmitted(true)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedQuizOption
                    ? 'bg-[#009966] hover:bg-[#008055] text-white shadow-sm'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (currentPage < lessons.length) {
                    setCurrentPage((p) => p + 1);
                    setSelectedQuizOption(null);
                    setQuizSubmitted(false);
                  } else {
                    onBack();
                  }
                }}
                className="px-4 py-2 bg-[#009966] hover:bg-[#008055] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-1"
              >
                <span>{currentPage === lessons.length ? 'Finish Guide' : 'Next Lesson'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Guide;
