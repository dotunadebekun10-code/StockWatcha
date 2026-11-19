import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, FileText, AlertTriangle, Database, Scale } from 'lucide-react';

/**
 * LegalInformation — Figma node: 1734:20593
 * Legal hub page — links to sub-pages (Terms & Privacy, Investment Disclaimer, Data Sources).
 */
export const LegalInformation = ({ onBack, onOpenTerms, onOpenDisclaimer, onOpenDataSources }) => {
  const sections = [
    {
      id: 'terms',
      icon: FileText,
      iconColor: '#009966',
      iconBg: '#E6F5EF',
      title: 'Terms & Privacy Policy',
      subtitle: 'Usage terms and data protection rights',
      onPress: onOpenTerms,
    },
    {
      id: 'disclaimer',
      icon: AlertTriangle,
      iconColor: '#D97706',
      iconBg: '#FEF3C7',
      title: 'Investment Disclaimer',
      subtitle: 'Important risk information for investors',
      onPress: onOpenDisclaimer,
    },
    {
      id: 'datasources',
      icon: Database,
      iconColor: '#2563EB',
      iconBg: '#DBEAFE',
      title: 'Data Sources',
      subtitle: 'Where our market data comes from',
      onPress: onOpenDataSources,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-8"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1734:20593"
      data-name="Legal Information Page"
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
            <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">Legal Information</h1>
            <p className="text-[12px] text-[#76837D] mt-0.5">Your rights and responsibilities</p>
          </div>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-6">
        {/* Intro banner */}
        <div className="bg-[#E6F5EF] border border-[#B3DFD0] rounded-2xl p-4 mb-6 flex items-start gap-3">
          <Scale className="w-5 h-5 text-[#009966] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[13px] font-semibold text-[#006B48] mb-0.5">Transparent by design</p>
            <p className="text-[12px] text-[#2D6B55] leading-relaxed">
              StockWatcha is an educational platform — not a broker. Review these documents to understand how we operate and protect your data.
            </p>
          </div>
        </div>

        {/* Legal section links */}
        <div className="flex flex-col gap-3">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.22 }}
                onClick={s.onPress}
                className="w-full text-left bg-white border border-[#E3EAE6] rounded-2xl p-4 flex items-center gap-4 hover:border-[#009966]/30 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: s.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: s.iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-semibold text-[#17211D] group-hover:text-[#009966] transition-colors">
                    {s.title}
                  </p>
                  <p className="text-[12px] text-[#76837D] mt-0.5">{s.subtitle}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#C9D3CE] flex-shrink-0 group-hover:text-[#009966] transition-colors" />
              </motion.button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-[11px] text-[#9CA5A0] mt-8 leading-relaxed px-2">
          By using StockWatcha, you agree to our Terms of Use and acknowledge that all market data is provided for educational purposes only.
        </p>
      </div>
    </motion.div>
  );
};

export default LegalInformation;
