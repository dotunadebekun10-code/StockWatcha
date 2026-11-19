import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Moon, Sun, Monitor, Smartphone, Check } from 'lucide-react';

/**
 * Appearance — Figma: Preferences / Appearance sub-page
 * Lets users choose theme (Light / Dark / System) and text size.
 */
export const Appearance = ({ onBack, isDarkMode, onToggleDarkMode }) => {
  const [selectedTheme, setSelectedTheme] = useState(
    isDarkMode ? 'dark' : 'light'
  );
  const [textSize, setTextSize] = useState('medium'); // 'small' | 'medium' | 'large'
  const [compactMode, setCompactMode] = useState(false);

  const themes = [
    {
      id: 'light',
      label: 'Light',
      icon: Sun,
      desc: 'Clean white background',
    },
    {
      id: 'dark',
      label: 'Dark',
      icon: Moon,
      desc: 'Easy on the eyes at night',
    },
    {
      id: 'system',
      label: 'System',
      icon: Monitor,
      desc: 'Follows device setting',
    },
  ];

  const textSizes = [
    { id: 'small', label: 'Small', sample: 'text-[12px]' },
    { id: 'medium', label: 'Medium', sample: 'text-[14px]' },
    { id: 'large', label: 'Large', sample: 'text-[16px]' },
  ];

  const handleThemeSelect = (id) => {
    setSelectedTheme(id);
    if (onToggleDarkMode) {
      onToggleDarkMode(id === 'dark');
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-10"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-name="Appearance"
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
            <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">Appearance</h1>
            <p className="text-[12px] text-[#76837D] mt-0.5">Personalise how StockWatcha looks</p>
          </div>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-6 flex flex-col gap-5">
        {/* ── Theme Section ── */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#9CA5A0] uppercase tracking-wider mb-3 px-1">
            Theme
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {themes.map((t) => {
              const Icon = t.icon;
              const isSelected = selectedTheme === t.id;
              return (
                <motion.button
                  key={t.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleThemeSelect(t.id)}
                  className={`flex flex-col items-center gap-2 py-4 px-2 rounded-2xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#009966] bg-[#E6F5EF]'
                      : 'border-[#E3EAE6] bg-white hover:border-[#009966]/30'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#009966]' : 'bg-[#F7FAF9]'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#76837D]'}`}
                    />
                  </div>
                  <span
                    className={`text-[13px] font-semibold ${
                      isSelected ? 'text-[#009966]' : 'text-[#17211D]'
                    }`}
                  >
                    {t.label}
                  </span>
                  <span className="text-[10px] text-[#9CA5A0] text-center leading-tight">
                    {t.desc}
                  </span>
                  {isSelected && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-3.5 h-3.5 text-[#009966]" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Text Size Section ── */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#9CA5A0] uppercase tracking-wider mb-3 px-1">
            Text Size
          </h2>
          <div className="bg-white border border-[#E3EAE6] rounded-2xl overflow-hidden">
            {textSizes.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setTextSize(s.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 cursor-pointer transition-colors hover:bg-[#F7FAF9] ${
                  i < textSizes.length - 1 ? 'border-b border-[#F0F4F2]' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-medium text-[#17211D] ${s.sample}`}>Aa</span>
                  <span className="text-[14px] text-[#17211D]">{s.label}</span>
                </div>
                {textSize === s.id && (
                  <div className="w-5 h-5 rounded-full bg-[#009966] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Display Options ── */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#9CA5A0] uppercase tracking-wider mb-3 px-1">
            Display Options
          </h2>
          <div className="bg-white border border-[#E3EAE6] rounded-2xl">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F7FAF9] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[#76837D]" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#17211D]">Compact Mode</p>
                  <p className="text-[12px] text-[#76837D]">Denser layout, more content</p>
                </div>
              </div>
              <motion.button
                type="button"
                onClick={() => setCompactMode((v) => !v)}
                className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer flex-shrink-0 ${
                  compactMode ? 'bg-[#009966]' : 'bg-[#D1D9D6]'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow"
                  animate={{ x: compactMode ? 20 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Preview card */}
        <div>
          <h2 className="text-[13px] font-semibold text-[#9CA5A0] uppercase tracking-wider mb-3 px-1">
            Preview
          </h2>
          <div className="bg-white border border-[#E3EAE6] rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F5EF] flex items-center justify-center">
                <span className="text-[#009966] font-bold text-[16px]">D</span>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#17211D]">Dangote Cement</p>
                <p className="text-[12px] text-[#76837D]">DANGCEM · NGX</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-[14px] font-bold text-[#17211D]">₦675.00</p>
                <p className="text-[12px] font-semibold text-[#15803D]">+2.4%</p>
              </div>
            </div>
            <p className="text-[12px] text-[#76837D] leading-relaxed">
              A sample card showing how content will appear with your chosen settings.
            </p>
          </div>
        </div>

        {/* Apply button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="w-full bg-[#006B48] text-white py-3.5 rounded-2xl text-[15px] font-semibold cursor-pointer hover:bg-[#005A3C] transition-colors"
        >
          Save Appearance
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Appearance;
