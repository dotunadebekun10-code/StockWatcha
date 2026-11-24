import React from 'react';
import { motion } from 'framer-motion';
import { 
  User as UserIcon, 
  Shield, 
  Sliders, 
  HelpCircle, 
  Info, 
  LogOut, 
  ChevronRight, 
  UserCheck,
  MessageSquare,
  Zap
} from 'lucide-react';

export const Profile = ({ 
  userEmail, 
  onSignOut, 
  onOpenPreferences, 
  onOpenAccountDetails, 
  onOpenLegal, 
  onOpenHelp, 
  onOpenLiveChat,
  onOpenExperienceLevel,
  onOpenAbout 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen bg-[#F7FAF9] pb-28 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1097:520"
      data-name="Profile Beginner"
    >
      {/* Header */}
      <div className="mb-6 pt-2">
        <h1 className="text-[22px] font-bold text-[#17211D] tracking-tight">
          Profile & Settings
        </h1>
        <p className="text-[14px] text-[#76837D] mt-0.5">
          Manage your preferences and learning settings
        </p>
      </div>

      {/* User Card */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 mb-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-[#E6F5F0] text-[#009966] font-bold text-lg flex items-center justify-center border border-[#009966]/20 shadow-xs">
            <UserIcon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-[#17211D]">
              {userEmail ? userEmail.split('@')[0] : 'Investor'}
            </h2>
            <p className="text-[12.5px] text-[#76837D] truncate max-w-[180px]">
              {userEmail || 'investor@stockwatcha.com'}
            </p>
            <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 bg-[#E6F5F0] text-[#009966] rounded-md">
              Beginner Track
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenAccountDetails}
          className="text-xs font-semibold text-[#009966] hover:underline px-2 py-1 cursor-pointer"
        >
          Edit
        </button>
      </div>

      {/* Settings Menu List */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl divide-y divide-[#E3EAE6] shadow-sm mb-6 overflow-hidden">
        {/* 1. Account Details */}
        <button 
          type="button"
          onClick={onOpenAccountDetails}
          className="w-full p-4 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F7FAF9] text-[#414D48] flex items-center justify-center">
              <UserCheck className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold text-[#17211D]">Account Details</p>
              <p className="text-[12px] text-[#76837D]">Email, password, and account security</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#76837D]" />
        </button>

        {/* 2. Preferences */}
        <button 
          type="button"
          onClick={onOpenPreferences}
          className="w-full p-4 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F7FAF9] text-[#414D48] flex items-center justify-center">
              <Sliders className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold text-[#17211D]">Preferences</p>
              <p className="text-[12px] text-[#76837D]">Theme, notifications, and app experience</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#76837D]" />
        </button>

        {/* 2b. Experience Level (Figma 1097:97) */}
        <button 
          type="button"
          onClick={onOpenExperienceLevel}
          className="w-full p-4 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center">
              <Zap className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold text-[#17211D]">Experience Level</p>
              <p className="text-[12px] text-[#76837D]">Beginner, Intermediate, or Advanced</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#76837D]" />
        </button>

        {/* 3. Help & Support */}
        <button 
          type="button"
          onClick={onOpenHelp}
          className="w-full p-4 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F7FAF9] text-[#414D48] flex items-center justify-center">
              <HelpCircle className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold text-[#17211D]">Help & Support</p>
              <p className="text-[12px] text-[#76837D]">FAQs and support topics</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#76837D]" />
        </button>

        {/* 3b. Dedicated Live Chat (Figma 1653:1745) */}
        <button 
          type="button"
          onClick={onOpenLiveChat}
          className="w-full p-4 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#E6F5EF] text-[#009966] flex items-center justify-center">
              <MessageSquare className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold text-[#17211D]">Live Assistant Chat</p>
              <p className="text-[12px] text-[#009966] font-medium">Chat directly with StockWatcha AI</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#76837D]" />
        </button>

        {/* 4. About StockWatcha */}
        <button 
          type="button"
          onClick={onOpenAbout}
          className="w-full p-4 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F7FAF9] text-[#414D48] flex items-center justify-center">
              <Info className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold text-[#17211D]">About StockWatcha</p>
              <p className="text-[12px] text-[#76837D]">Mission, features, and platform disclaimer</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#76837D]" />
        </button>

        {/* 5. Legal, Terms & Privacy */}
        <button 
          type="button"
          onClick={onOpenLegal}
          className="w-full p-4 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F7FAF9] text-[#414D48] flex items-center justify-center">
              <Shield className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[14.5px] font-semibold text-[#17211D]">Legal Information</p>
              <p className="text-[12px] text-[#76837D]">Terms of use, disclaimer & data sources</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#76837D]" />
        </button>
      </div>

      {/* Sign Out Button */}
      <button
        type="button"
        onClick={onSignOut}
        className="w-full h-12 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-[15px] font-semibold rounded-2xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
      >
        <LogOut className="w-4 h-4" />
        <span>Sign Out</span>
      </button>
    </motion.div>
  );
};

export default Profile;
