import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const Preferences = ({ onBack, isDarkMode, onToggleDarkMode }) => {
  const [followSystem, setFollowSystem] = useState(true);
  const [darkMode, setDarkMode] = useState(isDarkMode || false);
  const [companyAlerts, setCompanyAlerts] = useState(true);

  const handleToggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (onToggleDarkMode) onToggleDarkMode(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1981:5212"
      data-name="Preferences"
    >
      {/* Top Header */}
      <div className="flex items-center gap-3.5 mb-6 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
          aria-label="Back to Profile"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[20px] font-bold text-[#17211D] tracking-tight">
          Preferences
        </h1>
      </div>

      {/* Settings Options Group */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl divide-y divide-[#E3EAE6] shadow-sm overflow-hidden">
        {/* 1. Follow System Preferences */}
        <div className="p-4 sm:p-5 flex items-center justify-between gap-4" data-node-id="1981:5239">
          <div className="flex-1 pr-2">
            <h3 className="text-[15px] font-semibold text-[#17211D] leading-snug">
              Follow System Preferences
            </h3>
            <p className="text-[12.5px] text-[#414D48] leading-relaxed mt-1">
              Dark Mode on StockWatcha will be applied according to your device’s preferences
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={followSystem}
            onClick={() => setFollowSystem(!followSystem)}
            className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer relative shrink-0 ${
              followSystem ? 'bg-[#009966]' : 'bg-[#E3EAE6]'
            }`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full bg-white shadow-md ${
                followSystem ? 'ml-auto' : ''
              }`}
            />
          </button>
        </div>

        {/* 2. Dark Mode */}
        <div className="p-4 sm:p-5 flex items-center justify-between gap-4" data-node-id="1981:5248">
          <div className="flex-1 pr-2">
            <h3 className="text-[15px] font-semibold text-[#17211D] leading-snug">
              Dark Mode
            </h3>
            <p className="text-[12.5px] text-[#414D48] leading-relaxed mt-1">
              Turn on dark mode on StockWatcha for a different experience.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={darkMode}
            onClick={handleToggleDark}
            className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer relative shrink-0 ${
              darkMode ? 'bg-[#009966]' : 'bg-[#E3EAE6]'
            }`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full bg-white shadow-md ${
                darkMode ? 'ml-auto' : ''
              }`}
            />
          </button>
        </div>

        {/* 3. Company Alerts */}
        <div className="p-4 sm:p-5 flex items-center justify-between gap-4" data-node-id="1981:5290">
          <div className="flex-1 pr-2">
            <h3 className="text-[15px] font-semibold text-[#17211D] leading-snug">
              Company Alerts
            </h3>
            <p className="text-[12.5px] text-[#414D48] leading-relaxed mt-1">
              We will notify you on breaking and general market news
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={companyAlerts}
            onClick={() => setCompanyAlerts(!companyAlerts)}
            className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer relative shrink-0 ${
              companyAlerts ? 'bg-[#009966]' : 'bg-[#E3EAE6]'
            }`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full bg-white shadow-md ${
                companyAlerts ? 'ml-auto' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Preferences;
