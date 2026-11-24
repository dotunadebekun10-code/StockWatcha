import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  Sparkles, 
  BookOpen, 
  Zap, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

/**
 * ExperienceLevelModal / Page (Profile iNTERMDEIATE & Experience Level)
 * Figma Node: 1097:97 & 2098:4719 (402x874)
 * Strict implementation of Figma copy and tiers:
 * - "Experience Level"
 * - "This helps us personalize your experience"
 * 1. "New to investing"
 *    - "New to investing? Start here"
 *    - "Learn the basics step by step"
 * 2. "Intermediate"
 *    - "You know the basics"
 *    - "Take your skills further"
 * 3. "Advanced"
 *    - "Advanced strategies and In-depth concepts"
 */
export const ExperienceLevel = ({ 
  currentLevel = 'beginner', 
  onSelectLevel, 
  onBack,
  onSave 
}) => {
  const [selected, setSelected] = useState(currentLevel);

  const levels = [
    {
      id: 'beginner',
      title: 'New to investing',
      badge: 'Start here',
      description: 'Learn the basics step by step',
      icon: BookOpen,
      iconBg: '#E6F5EF',
      iconColor: '#009966',
      topics: ['Stock market fundamentals', 'How prices move', 'Buying your first shares']
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      badge: 'You know the basics',
      description: 'Take your skills further',
      icon: Zap,
      iconBg: '#EDE9FE',
      iconColor: '#7C3AED',
      topics: ['Financial statement analysis', 'P/E ratios & valuation', 'Sector trends & dividends']
    },
    {
      id: 'advanced',
      title: 'Advanced',
      badge: 'Deep concepts',
      description: 'Advanced strategies and In-depth concepts',
      icon: Award,
      iconBg: '#FEF3C7',
      iconColor: '#D97706',
      topics: ['DCF intrinsic valuation', 'Portfolio risk metrics', 'Macroeconomic FX impact']
    }
  ];

  const handleApply = () => {
    if (onSelectLevel) onSelectLevel(selected);
    if (onSave) onSave(selected);
    if (onBack) onBack();
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-12"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1097:97"
      data-name="Profile iNTERMDEIATE"
    >
      {/* Header */}
      <div className="bg-white border-b border-[#E3EAE6] px-4 pt-5 pb-4 sticky top-0 z-20">
        <div className="flex items-center justify-between max-w-[440px] mx-auto">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <div className="w-10 h-10" />
          )}
          <div className="text-center">
            <h1 className="text-[17px] font-bold text-[#17211D]">Experience Level</h1>
          </div>
          <div className="w-10 h-10" />
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-6 flex flex-col gap-5">
        {/* Intro */}
        <div>
          <h2 className="text-[20px] font-extrabold text-[#17211D] tracking-tight">
            Select Your Level
          </h2>
          <p className="text-[13.5px] text-[#76837D] mt-1 font-medium">
            This helps us personalize your experience
          </p>
        </div>

        {/* Level Cards */}
        <div className="space-y-3.5">
          {levels.map((lvl) => {
            const Icon = lvl.icon;
            const isSelected = selected === lvl.id;
            return (
              <motion.button
                key={lvl.id}
                type="button"
                whileTap={{ scale: 0.985 }}
                onClick={() => setSelected(lvl.id)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#009966] bg-white shadow-sm ring-2 ring-[#009966]/20'
                    : 'border-[#E3EAE6] bg-white hover:border-[#009966]/40 shadow-2xs'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: lvl.iconBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: lvl.iconColor }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15.5px] font-bold text-[#17211D]">
                        {lvl.title}
                      </h3>
                      <span
                        className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: lvl.iconBg, color: lvl.iconColor }}
                      >
                        {lvl.badge}
                      </span>
                    </div>

                    <p className="text-[12.5px] text-[#414D48] mt-1 leading-relaxed">
                      {lvl.description}
                    </p>

                    {/* Topic bullets */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {lvl.topics.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[#76837D] bg-[#F7FAF9] border border-[#E3EAE6] px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Radio check icon */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                      isSelected
                        ? 'border-[#009966] bg-[#009966] text-white'
                        : 'border-[#C9D3CE] bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Confirm / Save Button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={handleApply}
          className="w-full bg-[#006B48] text-white py-4 rounded-2xl text-[15px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#005A3C] transition-colors cursor-pointer mt-2"
        >
          <span>Save Experience Level</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ExperienceLevel;
