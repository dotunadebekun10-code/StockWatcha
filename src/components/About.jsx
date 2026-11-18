import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertOctagon, Users2, ShieldCheck, Compass } from 'lucide-react';

export const About = ({ onBack }) => {
  const sections = [
    {
      id: "1734:20755",
      title: "What StockWatcha is",
      icon: <Compass className="w-5 h-5 text-[#009966]" />,
      text: "StockWatcha is a Nigeria-first stock research and financial education product. It helps you move from “I don't understand the stock market” to “I understand what I'm looking at and can decide what to research next.”"
    },
    {
      id: "1734:20764",
      title: "What you can do",
      icon: <CheckCircle2 className="w-5 h-5 text-[#009966]" />,
      text: "Discover companies and search for them by name or ticker. Read a company's overview, financial performance, dividends, management and risks in plain language. Learn the ideas behind the numbers in the Guide, from Beginner to Intermediate. Save companies to a watchlist so you can return to them."
    },
    {
      id: "1734:20773",
      title: "What it is not",
      icon: <AlertOctagon className="w-5 h-5 text-[#DC2626]" />,
      text: "StockWatcha is not a broker or trading platform. You can't buy or sell stocks, deposit money or manage a portfolio here, and it doesn't recommend what to buy or sell."
    },
    {
      id: "1734:20782",
      title: "Who it's for",
      icon: <Users2 className="w-5 h-5 text-[#009966]" />,
      text: "People who are new to investing, and people who understand the basics and want to research companies in more depth."
    },
    {
      id: "1734:20791",
      title: "How we work",
      icon: <ShieldCheck className="w-5 h-5 text-[#009966]" />,
      text: "Plain language first, with the financial term alongside it. Sources and update times shown, so you can judge the information. You can explore without an account. An account only adds saved watchlists and progress."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1734:20725"
      data-name="About Page"
    >
      {/* Header */}
      <div className="flex items-center gap-3.5 mb-6 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-[#17211D] tracking-tight">
            About StockWatcha
          </h1>
          <p className="text-[12px] text-[#76837D]">Version 1.0.0 · Nigerian Stock Exchange</p>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {sections.map((sec, index) => (
          <div
            key={index}
            className="bg-white border border-[#E3EAE6] rounded-2xl p-4 sm:p-5 shadow-sm"
            data-node-id={sec.id}
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E6F5F0] flex items-center justify-center shrink-0">
                {sec.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#17211D]">
                {sec.title}
              </h3>
            </div>
            <p className="text-[13.5px] text-[#414D48] leading-relaxed">
              {sec.text}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Branding */}
      <div className="text-center pt-8 pb-4 text-xs text-[#76837D]">
        <p>© 2026 Reliance Financial Group. All rights reserved.</p>
        <p className="mt-1">Empowering Nigerian investors with financial clarity.</p>
      </div>
    </motion.div>
  );
};

export default About;
