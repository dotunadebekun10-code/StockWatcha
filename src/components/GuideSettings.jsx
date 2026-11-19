import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Zap, RotateCcw, Trophy, ChevronRight, Check } from 'lucide-react';

/**
 * GuideSettings — Figma node: 2151:36947
 * Guide learning path configuration screen.
 * Users can switch between Beginner / Intermediate and configure quiz settings.
 */
export const GuideSettings = ({ onBack, initialLevel = 'beginner', onSave }) => {
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [dailyGoal, setDailyGoal] = useState(2); // lessons per day
  const [quizEnabled, setQuizEnabled] = useState(true);
  const [progressReminders, setProgressReminders] = useState(true);

  const levels = [
    {
      id: 'beginner',
      icon: BookOpen,
      iconColor: '#009966',
      iconBg: '#E6F5EF',
      label: 'Beginner',
      sublabel: 'New to investing',
      desc: 'Start from fundamentals — what stocks are, how the NGX works, and how to read a price chart.',
      topics: ['Stock basics', 'Understanding NGX', 'Reading charts', 'Key metrics', 'Risk management'],
    },
    {
      id: 'intermediate',
      icon: Zap,
      iconColor: '#7C3AED',
      iconBg: '#EDE9FE',
      label: 'Intermediate',
      sublabel: '1+ years experience',
      desc: 'Go deeper into financial analysis, valuation methods, and portfolio construction strategies.',
      topics: ['P/E & P/B ratios', 'DCF valuation', 'Sector analysis', 'Portfolio theory', 'Dividend strategies'],
    },
  ];

  const dailyGoalOptions = [1, 2, 3, 5];

  const handleSave = () => {
    if (onSave) onSave({ level: selectedLevel, dailyGoal, quizEnabled, progressReminders });
    onBack();
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-10"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="2151:36947"
      data-name="Guide Settings"
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
            <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">Guide Settings</h1>
            <p className="text-[12px] text-[#76837D] mt-0.5">Personalise your learning experience</p>
          </div>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-6 flex flex-col gap-6">
        {/* ── Learning Path ── */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#9CA5A0] uppercase tracking-wider mb-3 px-1">
            Learning Path
          </h2>
          <div className="flex flex-col gap-3">
            {levels.map((level) => {
              const Icon = level.icon;
              const isSelected = selectedLevel === level.id;
              return (
                <motion.button
                  key={level.id}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`w-full text-left border-2 rounded-2xl p-4 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#009966] bg-[#E6F5EF]/40'
                      : 'border-[#E3EAE6] bg-white hover:border-[#009966]/30'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: level.iconBg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: level.iconColor }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-bold text-[#17211D]">{level.label}</span>
                        <span className="text-[11px] text-[#76837D]">{level.sublabel}</span>
                      </div>
                      <p className="text-[12px] text-[#76837D] mt-0.5 leading-relaxed">{level.desc}</p>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#009966] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5 pl-14">
                    {level.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{
                          color: level.iconColor,
                          backgroundColor: level.iconBg,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Daily Learning Goal ── */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#9CA5A0] uppercase tracking-wider mb-3 px-1">
            Daily Goal
          </h2>
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
            <p className="text-[13px] text-[#414D48] mb-3">How many lessons per day?</p>
            <div className="flex gap-2">
              {dailyGoalOptions.map((n) => (
                <button
                  key={n}
                  onClick={() => setDailyGoal(n)}
                  className={`flex-1 py-2.5 rounded-xl text-[14px] font-semibold transition-all cursor-pointer ${
                    dailyGoal === n
                      ? 'bg-[#009966] text-white'
                      : 'bg-[#F7FAF9] border border-[#E3EAE6] text-[#414D48] hover:border-[#009966]/40'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#9CA5A0] mt-2.5 text-center">
              {dailyGoal} lesson{dailyGoal !== 1 ? 's' : ''} · ~{dailyGoal * 5} minutes/day
            </p>
          </div>
        </div>

        {/* ── Toggles ── */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#9CA5A0] uppercase tracking-wider mb-3 px-1">
            Options
          </h2>
          <div className="bg-white border border-[#E3EAE6] rounded-2xl overflow-hidden">
            {/* Quiz toggle */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#F0F4F2]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] flex items-center justify-center">
                  <Trophy className="w-4.5 h-4.5 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#17211D]">Include Quizzes</p>
                  <p className="text-[12px] text-[#76837D]">Test your knowledge after each lesson</p>
                </div>
              </div>
              <motion.button
                type="button"
                onClick={() => setQuizEnabled((v) => !v)}
                className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer flex-shrink-0 ${
                  quizEnabled ? 'bg-[#009966]' : 'bg-[#D1D9D6]'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow"
                  animate={{ x: quizEnabled ? 20 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>

            {/* Reminders toggle */}
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center">
                  <RotateCcw className="w-4.5 h-4.5 text-[#D97706]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#17211D]">Progress Reminders</p>
                  <p className="text-[12px] text-[#76837D]">Daily nudges to keep learning</p>
                </div>
              </div>
              <motion.button
                type="button"
                onClick={() => setProgressReminders((v) => !v)}
                className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer flex-shrink-0 ${
                  progressReminders ? 'bg-[#009966]' : 'bg-[#D1D9D6]'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow"
                  animate={{ x: progressReminders ? 20 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Reset progress */}
        <button
          className="flex items-center justify-between w-full bg-white border border-[#E3EAE6] rounded-2xl px-4 py-4 cursor-pointer hover:border-red-300 transition-colors group"
          onClick={() => {}}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FEF2F2] flex items-center justify-center">
              <RotateCcw className="w-4.5 h-4.5 text-red-500" />
            </div>
            <div className="text-left">
              <p className="text-[14px] font-semibold text-[#17211D] group-hover:text-red-500 transition-colors">Reset Learning Progress</p>
              <p className="text-[12px] text-[#76837D]">Start your learning journey over</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#C9D3CE]" />
        </button>

        {/* Save */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="w-full bg-[#006B48] text-white py-3.5 rounded-2xl text-[15px] font-semibold cursor-pointer hover:bg-[#005A3C] transition-colors"
        >
          Save Settings
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GuideSettings;
