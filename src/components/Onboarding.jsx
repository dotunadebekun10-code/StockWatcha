import React, { useState, useRef } from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Bookmark, 
  Plus, 
  Search,
  Building2,
  PieChart,
  ShieldAlert,
  Info
} from 'lucide-react';

export const Onboarding = ({ onStartExploring, onCreateAccount, onSignIn }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance && currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
    if (distance < -minSwipeDistance && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slides = [
    // ----------------------------------------------------
    // Slide 1 (Figma node-id 1755:1200)
    // "See what's moving on the NGX"
    // ----------------------------------------------------
    {
      id: "1755:1200",
      title: "See what’s moving on the NGX",
      description: "Find companies to research from the most active stocks, top gainers and top losers.",
      renderVisual: () => (
        <div className="relative w-full h-[380px] sm:h-[400px] flex items-center justify-center overflow-hidden">
          {/* Subtle curved background graphic vectors */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <path d="M-20,180 Q140,80 320,160 T500,120" stroke="#009966" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M0,260 Q180,220 360,300" stroke="#006B48" strokeWidth="1" />
            </svg>
          </div>

          {/* Card 1 (Back card: AIICO Insurance Plc, tilted -11deg) */}
          <div 
            className="absolute w-[330px] sm:w-[351px] bg-white rounded-[13px] p-3.5 shadow-[0px_4.138px_4.138px_0px_rgba(145,158,171,0.06)] border border-[#E3EAE6] -rotate-[11.02deg] -translate-y-8 translate-x-3 transition-transform duration-300"
            data-node-id="1775:6279"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[48px] h-[44px] rounded-[12px] bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center font-bold text-xs text-[#006B48] shadow-sm">
                  AIICO
                </div>
                <div className="text-left">
                  <h4 className="text-[14.5px] font-semibold text-[#17211D] leading-tight">
                    AIICO Insurance Plc
                  </h4>
                  <p className="text-[12.5px] text-[#414D48] leading-tight mt-0.5">
                    AIICO · NGX · Insurance
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[14px] font-semibold text-[#17211D] leading-tight">
                  ₦4.01
                </p>
                <div className="flex items-center justify-end gap-0.5 mt-0.5 text-[#DC2626] text-[13px] font-medium">
                  <ArrowDown className="w-3.5 h-3.5" />
                  <span>-3.14%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (Front card: SECURE ELECTRONIC TECHNOLOGY PLC) */}
          <div 
            className="absolute w-[330px] sm:w-[351px] bg-white rounded-[13px] p-3.5 shadow-[0px_9px_14px_-3px_rgba(0,0,0,0.1),0px_3px_5px_-3px_rgba(0,0,0,0.1)] border border-[#E3EAE6] translate-y-12 transition-transform duration-300 z-10"
            data-node-id="1775:6294"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-[48px] h-[44px] shrink-0 rounded-[12px] bg-[#E6F5F0] border border-[#C5E8DC] flex items-center justify-center font-bold text-xs text-[#009966] shadow-sm">
                  NSL
                </div>
                <div className="text-left truncate">
                  <h4 className="text-[14.5px] font-semibold text-[#17211D] leading-tight truncate">
                    SECURE ELECTRONIC TECHNOLGY PLC
                  </h4>
                  <p className="text-[12.5px] text-[#414D48] leading-tight mt-0.5">
                    NSLTECH · NGX · Industrials
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0 pl-2">
                <p className="text-[14px] font-semibold text-[#17211D] leading-tight">
                  ₦0.71
                </p>
                <div className="flex items-center justify-end gap-0.5 mt-0.5 text-[#15803D] text-[13px] font-medium">
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>+0.13%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ----------------------------------------------------
    // Slide 2 (Figma node-id 1755:1348)
    // "Understand what you're looking at"
    // ----------------------------------------------------
    {
      id: "1755:1348",
      title: "Understand what you’re looking at",
      description: "See revenue, profit, dividends, management and risks in plain language. Tap any term to learn what it means.",
      renderVisual: () => (
        <div className="relative w-full h-[380px] sm:h-[400px] flex items-center justify-center px-4 overflow-hidden">
          {/* Company breakdown / Plain language metric card */}
          <div 
            className="w-full max-w-[348px] bg-white rounded-[20px] p-4 sm:p-5 shadow-[0px_9px_16px_-3px_rgba(0,0,0,0.12)] border border-[#E3EAE6] text-left transition-all duration-300"
            data-node-id="1755:2463"
          >
            {/* Header info */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E3EAE6]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#009966] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  DAN
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#17211D] leading-tight">
                    Dangote Cement Plc
                  </h4>
                  <p className="text-[12px] text-[#76837D]">DANGCEM · NGX</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[15px] font-bold text-[#17211D]">₦652.50</p>
                <span className="text-[12px] font-semibold text-[#15803D] inline-flex items-center">
                  <ArrowUp className="w-3 h-3 mr-0.5" /> +1.30%
                </span>
              </div>
            </div>

            {/* Annual Price Range Bar */}
            <div className="my-3">
              <div className="flex justify-between text-[11px] text-[#76837D] font-medium mb-1">
                <span>52W Low: ₦500.00</span>
                <span className="text-[#17211D] font-semibold">₦652.50</span>
                <span>52W High: ₦750.00</span>
              </div>
              <div className="h-2 w-full bg-[#E3EAE6] rounded-full relative overflow-hidden">
                <div className="h-full bg-[#009966] rounded-full w-[65%]" />
              </div>
            </div>

            {/* Plain language metric pills / insights */}
            <div className="space-y-2 mt-3 pt-2 border-t border-[#F1F5F9]">
              <div className="bg-[#F7FAF9] rounded-xl p-2.5 border border-[#E3EAE6]/60 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#E6F5F0] text-[#009966] flex items-center justify-center shrink-0 mt-0.5">
                  <PieChart className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#17211D]">
                    Revenue & Profitability
                  </p>
                  <p className="text-[11.5px] text-[#414D48] leading-relaxed">
                    Generates ₦2.2T annual revenue from cement operations across 10 African countries.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7FAF9] rounded-xl p-2.5 border border-[#E3EAE6]/60 flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#E6F5F0] text-[#009966] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#17211D]">
                    Risks Explained Simply
                  </p>
                  <p className="text-[11.5px] text-[#414D48] leading-relaxed">
                    Sensitive to energy fuel prices and foreign exchange fluctuations in Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ----------------------------------------------------
    // Slide 3 (Figma node-id 1755:2689)
    // "Save companies and come back anytime"
    // ----------------------------------------------------
    {
      id: "1755:2689",
      title: "Save companies and come back anytime",
      description: "Add companies to your watchlist and return to them when you’re ready to research further.",
      renderVisual: () => (
        <div className="relative w-full h-[380px] sm:h-[400px] flex items-center justify-center px-4 overflow-hidden">
          {/* Watchlist card preview */}
          <div 
            className="w-full max-w-[348px] bg-white rounded-[20px] p-4 shadow-[0px_9px_16px_-3px_rgba(0,0,0,0.12)] border border-[#E3EAE6] text-left transition-all duration-300"
            data-node-id="1755:2722"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#E3EAE6]">
              <div>
                <h4 className="text-[15px] font-bold text-[#17211D]">My Watchlist</h4>
                <p className="text-[11.5px] text-[#76837D]">Track the stocks you’re exploring</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#E6F5F0] text-[#009966] flex items-center justify-center">
                <Bookmark className="w-4 h-4 fill-[#009966]" />
              </div>
            </div>

            {/* Saved stocks list */}
            <div className="divide-y divide-[#F1F5F9] mt-1">
              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E6F5F0] text-[#009966] font-bold text-[10px] flex items-center justify-center">
                    NSL
                  </div>
                  <div>
                    <p className="text-[12.5px] font-semibold text-[#17211D]">NSLTECH</p>
                    <p className="text-[10.5px] text-[#76837D]">Industrials</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12.5px] font-semibold text-[#17211D]">₦0.71</p>
                  <p className="text-[10.5px] font-medium text-[#15803D]">+0.13%</p>
                </div>
              </div>

              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F1F5F9] text-[#006B48] font-bold text-[10px] flex items-center justify-center">
                    AIICO
                  </div>
                  <div>
                    <p className="text-[12.5px] font-semibold text-[#17211D]">AIICO Insurance</p>
                    <p className="text-[10.5px] text-[#76837D]">Insurance</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12.5px] font-semibold text-[#17211D]">₦4.01</p>
                  <p className="text-[10.5px] font-medium text-[#DC2626]">-3.14%</p>
                </div>
              </div>

              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E6F5F0] text-[#009966] font-bold text-[10px] flex items-center justify-center">
                    ZEN
                  </div>
                  <div>
                    <p className="text-[12.5px] font-semibold text-[#17211D]">Zenith Bank</p>
                    <p className="text-[10.5px] text-[#76837D]">Banking</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12.5px] font-semibold text-[#17211D]">₦129.00</p>
                  <p className="text-[10.5px] font-medium text-[#DC2626]">-4.23%</p>
                </div>
              </div>

              <div className="py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E6F5F0] text-[#009966] font-bold text-[10px] flex items-center justify-center">
                    MTN
                  </div>
                  <div>
                    <p className="text-[12.5px] font-semibold text-[#17211D]">MTN Nigeria</p>
                    <p className="text-[10.5px] text-[#76837D]">Telecoms</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[12.5px] font-semibold text-[#17211D]">₦844.55</p>
                  <p className="text-[10.5px] font-medium text-[#15803D]">+0.48%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const current = slides[currentSlide];

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#009966] to-[#006B48] flex flex-col items-center justify-between text-white selection:bg-emerald-200 selection:text-emerald-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      data-node-id={current.id}
      data-name="Onboarding Screen"
    >
      {/* Top Section with Sage/Teal curved background container */}
      <div className="w-full max-w-[402px] flex flex-col">
        {/* Curved Header Container */}
        <div 
          className="bg-[#B6CCC7] w-full min-h-[433px] relative rounded-b-[80px] sm:rounded-b-[90px] overflow-hidden flex flex-col shadow-inner"
          data-node-id="1775:6277"
        >
          {/* Top Bar with Skip */}
          <div className="w-full flex items-center justify-between px-6 pt-5 z-20">
            {/* Left arrow if not first slide */}
            {currentSlide > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentSlide(prev => prev - 1)}
                className="w-8 h-8 rounded-full bg-white/40 hover:bg-white/60 flex items-center justify-center text-[#17211D] transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-8 h-8" />
            )}

            {/* Skip Button */}
            <button
              type="button"
              onClick={onStartExploring}
              className="text-[#17211D] hover:text-[#006B48] text-[16px] font-semibold px-2 py-1 cursor-pointer transition-colors"
            >
              Skip
            </button>
          </div>

          {/* Slide Visual Content */}
          <div className="flex-1 flex items-center justify-center">
            {current.renderVisual()}
          </div>
        </div>

        {/* Carousel Content Body */}
        <div className="flex flex-col items-center px-6 pt-7 pb-4 text-center">
          {/* Title */}
          <h1 
            className="text-[22px] sm:text-[24px] font-extrabold tracking-[-0.7px] leading-tight text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.1)] min-h-[58px] flex items-center justify-center"
          >
            {current.title}
          </h1>

          {/* Description */}
          <p className="mt-2 text-[15px] sm:text-[16px] text-[#F7FAF9]/95 font-normal leading-[22px] tracking-[-0.3px] max-w-[340px] min-h-[44px]">
            {current.description}
          </p>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6 mb-7" role="tablist">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-[7px] rounded-[5px] transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-[28px] bg-[#F7FAF9]' 
                    : 'w-[8px] bg-[#F7FAF9]/40 hover:bg-[#F7FAF9]/60'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col items-center gap-2">
            {/*
              CRITICAL USER REQUIREMENT:
              The "Start exploring" button does NOT have a border around it. Follow the design strictly.
              Figma node: 1755:1260 / 1755:1262
              bg: #F8FAFC
              text: #006B48, font-semibold, 17px
              rounded: 56.914px (pill)
              height: 59.76px (~60px)
              width: 332px (w-full max-w-[332px])
              NO BORDER!
            */}
            <button
              type="button"
              onClick={onStartExploring}
              className="w-full max-w-[332px] h-[59.76px] bg-[#F8FAFC] hover:bg-white text-[#006B48] text-[17px] font-semibold rounded-[56.914px] shadow-[0px_9.181px_13.772px_-2.754px_rgba(0,0,0,0.1),0px_3.672px_5.509px_-3.672px_rgba(0,0,0,0.1)] transition-transform active:scale-[0.99] cursor-pointer border-0"
              style={{ border: 'none', outline: 'none' }}
              data-node-id="1755:1262"
            >
              Start exploring
            </button>

            {/* Create Account Button (Transparent, borderless per Figma node 1755:1269) */}
            <button
              type="button"
              onClick={onCreateAccount}
              className="w-full max-w-[214px] h-[59.76px] bg-transparent hover:bg-white/10 active:bg-white/15 text-[#F7FAF9] text-[17px] font-semibold rounded-[56.914px] transition-colors cursor-pointer border-0"
              style={{ border: 'none', outline: 'none' }}
              data-node-id="1755:1269"
            >
              Create account
            </button>

            {/* Already have an account? Sign in */}
            <div className="mt-1 text-center">
              <span className="text-[15px] text-[#B6CCC7]">
                Already have an account?{' '}
              </span>
              <button
                type="button"
                onClick={onSignIn}
                className="text-[15px] font-semibold text-[#F8FAFC] underline underline-offset-2 hover:text-white cursor-pointer"
                data-node-id="1755:1275"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
