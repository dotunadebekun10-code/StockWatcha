import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Award, 
  ArrowRight, 
  RotateCcw,
  BookOpen,
  HelpCircle
} from 'lucide-react';

/**
 * GuideQuizModal (Guide correct state Page)
 * Figma Node: 1937:16326 (402x874)
 * Strict implementation of Figma text and quiz layout:
 * - "QUESTION 1"
 * - "What does owning a share of a company mean?"
 *   Options:
 *   - "You have lent money to the government."
 *   - "You own a small part of the company." (Correct)
 *   - "The company owes you a fixed amount of money."
 *   - "You are guaranteed a share of its profits."
 * - State:
 *   - "Correct!" (Green verification state)
 *   - "Next Question" button
 * - Footer: "© 2026 Reliance Financial Group. All rights reserved."
 */
export const GuideQuizModal = ({ 
  onClose, 
  onCompleteQuiz 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      numberLabel: 'QUESTION 1',
      question: 'What does owning a share of a company mean?',
      options: [
        'You have lent money to the government.',
        'You own a small part of the company.',
        'The company owes you a fixed amount of money.',
        'You are guaranteed a share of its profits.'
      ],
      correctIndex: 1,
      explanation: 'A share represents an equity stake in a business. When you buy shares on the NGX, you become a part-owner of that corporation.'
    },
    {
      numberLabel: 'QUESTION 2',
      question: 'How do investors primarily make returns from equities on the NGX?',
      options: [
        'Only through monthly interest payments from banks.',
        'Through capital appreciation and dividend distributions.',
        'By borrowing against stock certificates from CBN.',
        'Returns are fixed and guaranteed by the stock exchange.'
      ],
      correctIndex: 1,
      explanation: 'Returns come from stock price growth (capital gains) and periodic cash profits shared with investors (dividends).'
    },
    {
      numberLabel: 'QUESTION 3',
      question: 'What does the P/E ratio show about a stock?',
      options: [
        'How many physical stores the company operates.',
        'How much investors are paying per Naira of earnings.',
        'The exact cash balance in the company’s bank account.',
        'The total number of staff employed.'
      ],
      correctIndex: 1,
      explanation: 'Price-to-Earnings compares the share price to net earnings per share, helping you assess relative valuation.'
    }
  ];

  const currentQ = questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQ.correctIndex;

  const handleSelect = (idx) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    setIsAnswerChecked(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setIsCompleted(true);
      if (onCompleteQuiz) onCompleteQuiz(score + (isCorrect ? 1 : 0));
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#F7FAF9] flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1937:16326"
      data-name="Guide correct state Page"
    >
      {/* Top Header */}
      <div className="bg-white border-b border-[#E3EAE6] px-4 pt-5 pb-4 sticky top-0 z-20">
        <div className="flex items-center justify-between max-w-[440px] mx-auto">
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h1 className="text-[16px] font-bold text-[#17211D]">StockWatcha Quiz</h1>
            <p className="text-[11px] text-[#009966] font-medium">Interactive Knowledge Check</p>
          </div>
          <div className="w-10 h-10" />
        </div>
      </div>

      {/* Quiz Body */}
      <div className="flex-1 max-w-[440px] w-full mx-auto px-4 pt-6 pb-8 flex flex-col justify-between">
        {!isCompleted ? (
          <div>
            {/* Question Badge (Figma 1937:16326) */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[12px] font-extrabold text-[#009966] uppercase tracking-wider bg-[#E6F5EF] px-3 py-1 rounded-full">
                {currentQ.numberLabel}
              </span>
              <span className="text-[12px] font-bold text-[#76837D]">
                {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>

            {/* Question Text (Figma 1937:16326) */}
            <h2 className="text-[19px] font-bold text-[#17211D] leading-snug mb-6">
              {currentQ.question}
            </h2>

            {/* Options List */}
            <div className="space-y-3 mb-5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isThisCorrect = idx === currentQ.correctIndex;
                let optionStyle = 'bg-white border-[#E3EAE6] text-[#17211D]';

                if (isAnswerChecked) {
                  if (isThisCorrect) {
                    optionStyle = 'bg-[#DCFCE7] border-[#15803D] text-[#15803D] font-bold';
                  } else if (isSelected) {
                    optionStyle = 'bg-[#FEE2E2] border-[#DC2626] text-[#DC2626]';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-[#E6F5EF] border-[#009966] text-[#009966] font-semibold';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer shadow-2xs ${optionStyle}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[14px] leading-relaxed">{option}</span>
                      {isAnswerChecked && isThisCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-[#15803D] flex-shrink-0" />
                      )}
                      {isAnswerChecked && isSelected && !isThisCorrect && (
                        <XCircle className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Correct State Banner (Figma 1937:16326: "Correct!") */}
            {isAnswerChecked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border mb-5 ${
                  isCorrect
                    ? 'bg-[#E6F5EF] border-[#B3DFD0] text-[#006B48]'
                    : 'bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {isCorrect ? (
                    <>
                      <Sparkles className="w-4 h-4 text-[#009966]" />
                      <span className="text-[14px] font-extrabold text-[#009966]">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-[#DC2626]" />
                      <span className="text-[14px] font-extrabold text-[#DC2626]">Not quite</span>
                    </>
                  )}
                </div>
                <p className="text-[12.5px] leading-relaxed">
                  {currentQ.explanation}
                </p>
              </motion.div>
            )}
          </div>
        ) : (
          /* Completion Screen */
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-[#E6F5EF] border border-[#B3DFD0] flex items-center justify-center text-[#009966] mb-5 shadow-sm">
              <Award className="w-10 h-10" />
            </div>
            <h2 className="text-[22px] font-bold text-[#17211D] mb-1">
              Quiz Completed!
            </h2>
            <p className="text-[14px] text-[#76837D] mb-4">
              You scored {score} out of {questions.length} questions correctly.
            </p>
            <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4 w-full mb-6 text-[13px] text-[#414D48]">
              Great job reinforcing your fundamentals of the Nigerian Exchange. Keep exploring companies on your watchlist!
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-[#006B48] text-white py-3.5 rounded-2xl text-[14.5px] font-semibold hover:bg-[#005A3C] transition-colors cursor-pointer"
            >
              Back to Guide
            </button>
          </div>
        )}

        {/* Action Button: Check Answer or Next Question (Figma 1937:16326) */}
        {!isCompleted && (
          <div>
            {!isAnswerChecked ? (
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                disabled={selectedOption === null}
                onClick={handleCheck}
                className="w-full bg-[#006B48] text-white py-4 rounded-2xl text-[15px] font-semibold flex items-center justify-center gap-2 shadow-sm disabled:opacity-40 hover:bg-[#005A3C] transition-colors cursor-pointer"
              >
                <span>Check Answer</span>
              </motion.button>
            ) : (
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="w-full bg-[#006B48] text-white py-4 rounded-2xl text-[15px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#005A3C] transition-colors cursor-pointer"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}

            {/* Strict Figma copyright footer */}
            <p className="text-center text-[10.5px] text-[#9CA5A0] mt-5">
              © 2026 Reliance Financial Group. All rights reserved.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GuideQuizModal;
