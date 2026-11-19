import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Info } from 'lucide-react';

/**
 * InvestmentDisclaimer — Figma node: 1734:20800
 * Full investment disclaimer text page.
 */
export const InvestmentDisclaimer = ({ onBack }) => {
  const sections = [
    {
      heading: 'No Financial Advice',
      body: 'All information provided on StockWatcha — including stock prices, financial metrics, news articles, and educational content — is strictly for general informational and educational purposes only. Nothing on this platform constitutes professional financial, investment, tax, or legal advice.',
    },
    {
      heading: 'Investment Risks',
      body: 'Investing in equities, bonds, and capital markets involves substantial financial risk, including the possible loss of some or all of your principal investment. Past performance of any security listed on the Nigerian Exchange (NGX) or any other exchange does not guarantee or imply future results.',
    },
    {
      heading: 'No Guarantee of Returns',
      body: 'StockWatcha makes no warranties or guarantees, express or implied, about the accuracy, completeness, reliability, or suitability of any financial data, projections, or analysis presented on the platform. Market data may be delayed and should not be used as the sole basis for investment decisions.',
    },
    {
      heading: 'Seek Professional Advice',
      body: 'Before making any investment decision, please consult with a licensed, SEC-accredited stockbroker or certified financial adviser who understands your personal financial goals, risk tolerance, and circumstances. StockWatcha does not hold, and does not intend to hold, a broker-dealer licence.',
    },
    {
      heading: 'Regulatory Compliance',
      body: 'StockWatcha operates in compliance with Nigerian laws and SEC Nigeria regulations governing investment education platforms. We are not registered as an investment adviser or portfolio manager under the Investment and Securities Act (ISA) 2007.',
    },
    {
      heading: 'Third-Party Content',
      body: 'News articles, analyst reports, and commentary sourced from third parties reflect the views and opinions of those sources alone. StockWatcha does not endorse, verify, or take responsibility for third-party content displayed on the platform.',
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-10"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1734:20800"
      data-name="Investment Disclaimer Page"
    >
      {/* Header */}
      <div className="bg-white border-b border-[#E3EAE6] px-4 pt-5 pb-5 max-w-[440px] mx-auto">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back"
            className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">Investment Disclaimer</h1>
            <p className="text-[12px] text-[#76837D] mt-0.5">Please read carefully</p>
          </div>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-5">
        {/* Warning banner */}
        <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-2xl p-4 mb-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[13px] font-semibold text-[#92400E] mb-0.5">Important Notice</p>
            <p className="text-[12px] text-[#78350F] leading-relaxed">
              StockWatcha is an educational platform. We are not a stockbroker and do not offer trading services. Always consult a licensed financial advisor before investing.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="bg-white border border-[#E3EAE6] rounded-2xl overflow-hidden shadow-sm">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`p-4 ${i < sections.length - 1 ? 'border-b border-[#F0F4F2]' : ''}`}
            >
              <div className="flex items-start gap-2.5 mb-2">
                <Info className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
                <h3 className="text-[14px] font-semibold text-[#17211D]">{s.heading}</h3>
              </div>
              <p className="text-[13px] text-[#414D48] leading-relaxed pl-6">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Last updated */}
        <p className="text-center text-[11px] text-[#9CA5A0] mt-6">
          Last updated: November 2026 · Version 1.0
        </p>
      </div>
    </motion.div>
  );
};

export default InvestmentDisclaimer;
