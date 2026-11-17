import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const Onboarding = ({ onStartExploring, onCreateAccount, onSignIn }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "See what's moving on the NGX",
      description: "Find companies to research from the most active stocks, top gainers and top losers.",
      preview: (
        <div className="relative w-full h-[240px] flex items-center justify-center">
          {/* Card 1: Angled background stock card */}
          <div className="absolute w-[300px] bg-white rounded-2xl p-3.5 shadow-md -rotate-6 transform translate-y-[-15px] opacity-85 border border-[#E3EAE6]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#E6F5F0] text-[#009966] font-bold text-xs flex items-center justify-center">
                  DAN
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-[#17211D]">Dangote Cement</h4>
                  <p className="text-[11px] text-[#76837D]">DANGCEM · Industrials</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[13px] font-semibold text-[#17211D]">₦652.50</p>
                <p className="text-[11px] font-medium text-[#00A63E] inline-flex items-center">
                  <ArrowUpRight className="w-3 h-3" /> +1.30%
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Front card */}
          <div className="absolute w-[310px] bg-white rounded-2xl p-4 shadow-xl border border-[#E3EAE6] translate-y-[25px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F0] text-[#009966] font-bold text-xs flex items-center justify-center">
                  MTN
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#17211D]">MTN Nigeria</h4>
                  <p className="text-[11.5px] text-[#76837D]">MTNN · Telecoms</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[14px] font-semibold text-[#17211D]">₦420.00</p>
                <p className="text-[12px] font-medium text-[#00A63E] inline-flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +2.80%
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Understand what you're looking at",
      description: "See revenue, profit, dividends, and risks in plain language. Tap any term to learn what it means.",
      preview: (
        <div className="relative w-full h-[240px] flex items-center justify-center">
          <div className="w-[310px] bg-white rounded-2xl p-4 shadow-xl border border-[#E3EAE6] text-left">
            <span className="text-[11px] font-semibold px-2 py-0.5 bg-[#E6F5F0] text-[#009966] rounded-md">
              Beginner Insight
            </span>
            <h4 className="text-[15px] font-semibold text-[#17211D] mt-2 mb-1">
              Why investors like GTCO
            </h4>
            <p className="text-[12.5px] text-[#414D48] leading-relaxed mb-3">
              One of the most cost-efficient banks in Africa, paying high regular dividends to shareholders twice every year.
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-[#E3EAE6] text-xs">
              <span className="text-[#76837D]">Dividend Yield</span>
              <span className="font-semibold text-[#009966]">8.2% annually</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const current = slides[currentSlide];

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#009966] to-[#006B48] flex flex-col items-center justify-between p-6 text-white text-center"
      data-node-id="1755:1200"
      data-name="Onboarding Screen"
    >
      {/* Top Bar with Skip */}
      <div className="w-full max-w-[402px] flex justify-end pt-2">
        <button
          type="button"
          onClick={onStartExploring}
          className="text-white/80 hover:text-white text-sm font-medium px-2 py-1 cursor-pointer transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Visual Graphic Container */}
      <div className="w-full max-w-[402px] my-auto">
        {current.preview}

        {/* Text Content */}
        <div className="mt-6 px-2">
          <h1 className="text-[24px] font-bold tracking-tight mb-2.5 leading-snug">
            {current.title}
          </h1>
          <p className="text-[15px] text-emerald-100 font-normal leading-relaxed max-w-[320px] mx-auto">
            {current.description}
          </p>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-7 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-[340px] flex flex-col gap-3 pb-4">
        <button
          type="button"
          onClick={onStartExploring}
          className="w-full h-[52px] bg-white hover:bg-emerald-50 text-[#006B48] text-[16px] font-semibold rounded-full shadow-lg transition-all active:scale-[0.99] cursor-pointer"
        >
          Start exploring
        </button>

        <button
          type="button"
          onClick={onCreateAccount}
          className="w-full h-[52px] bg-white/15 hover:bg-white/25 text-white text-[16px] font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all cursor-pointer"
        >
          Create account
        </button>

        <div className="text-center pt-1">
          <span className="text-[14px] text-emerald-100">
            Already have an account?{' '}
          </span>
          <button
            type="button"
            onClick={onSignIn}
            className="text-[14px] font-semibold text-white underline cursor-pointer"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
