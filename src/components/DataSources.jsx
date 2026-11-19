import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Globe, Building2, Rss, Clock, CheckCircle } from 'lucide-react';

/**
 * DataSources — Figma node: 1734:20884
 * Data Sources page — explains where market data, news, and financial metrics come from.
 */
export const DataSources = ({ onBack }) => {
  const sources = [
    {
      icon: Building2,
      iconColor: '#009966',
      iconBg: '#E6F5EF',
      name: 'Nigerian Exchange Group (NGX)',
      description: 'Real-time and end-of-day stock prices, volumes, market capitalisation, and corporate actions (dividends, splits, rights issues).',
      type: 'Primary market data',
      updateFreq: 'Daily (EOD)',
    },
    {
      icon: Globe,
      iconColor: '#2563EB',
      iconBg: '#DBEAFE',
      name: 'Securities & Exchange Commission (SEC)',
      description: 'Company filings, prospectuses, annual reports, and regulatory disclosures published by listed Nigerian companies.',
      type: 'Regulatory filings',
      updateFreq: 'As published',
    },
    {
      icon: Building2,
      iconColor: '#7C3AED',
      iconBg: '#EDE9FE',
      name: 'Central Bank of Nigeria (CBN)',
      description: 'Official foreign exchange rates (USD/NGN, GBP/NGN, EUR/NGN), benchmark interest rates (MPR), and monetary policy announcements.',
      type: 'Macroeconomic data',
      updateFreq: 'Weekly / as announced',
    },
    {
      icon: Rss,
      iconColor: '#D97706',
      iconBg: '#FEF3C7',
      name: 'Financial News Aggregation',
      description: 'Market news, analyst commentary, and company announcements from leading Nigerian financial media including BusinessDay, Nairametrics, The Punch, and Vanguard.',
      type: 'News & commentary',
      updateFreq: 'Continuous',
    },
    {
      icon: Database,
      iconColor: '#059669',
      iconBg: '#D1FAE5',
      name: 'StockWatcha Proprietary Data',
      description: 'Educational content, beginner guides, quiz questions, and stock summaries written and curated by the StockWatcha editorial team.',
      type: 'Editorial content',
      updateFreq: 'Ongoing',
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-10"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1734:20884"
      data-name="Data Sources Page"
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
            <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">Data Sources</h1>
            <p className="text-[12px] text-[#76837D] mt-0.5">Where our information comes from</p>
          </div>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-5">
        {/* Intro */}
        <div className="bg-[#E6F5EF] border border-[#B3DFD0] rounded-2xl p-4 mb-5 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-[#009966] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[13px] font-semibold text-[#006B48] mb-0.5">Transparent data sourcing</p>
            <p className="text-[12px] text-[#2D6B55] leading-relaxed">
              We source all market data from official Nigerian financial institutions and reputable media. Data may be delayed up to 15 minutes during market hours.
            </p>
          </div>
        </div>

        {/* Source cards */}
        <div className="flex flex-col gap-3">
          {sources.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.22 }}
                className="bg-white border border-[#E3EAE6] rounded-2xl p-4"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: s.iconBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.iconColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-semibold text-[#17211D] leading-snug">{s.name}</h3>
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-wide mt-0.5 px-2 py-0.5 rounded-full"
                      style={{ color: s.iconColor, backgroundColor: s.iconBg }}
                    >
                      {s.type}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-[#414D48] leading-relaxed mb-3">{s.description}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#9CA5A0]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Update frequency: <strong className="text-[#76837D]">{s.updateFreq}</strong></span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-[#9CA5A0] mt-6 leading-relaxed px-2">
          Data accuracy disclaimer: While we strive to keep all data timely and accurate, StockWatcha cannot guarantee that all information is free from errors or delays. Always verify critical data with official sources before making investment decisions.
        </p>
      </div>
    </motion.div>
  );
};

export default DataSources;
