import React from 'react';
import { User as UserIcon, Shield, Bell, HelpCircle, LogOut } from 'lucide-react';

export const Profile = ({ userEmail, onSignOut }) => {
  return (
    <div className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-[#17211D] tracking-tight">
          Profile & Account
        </h1>
        <p className="text-[14px] text-[#76837D] mt-0.5">
          Manage your preferences and learning settings
        </p>
      </div>

      {/* User Card */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 mb-5 shadow-sm flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#E6F5F0] text-[#009966] font-bold text-lg flex items-center justify-center">
          <UserIcon className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-[17px] font-semibold text-[#17211D]">
            {userEmail ? userEmail.split('@')[0] : 'Investor'}
          </h2>
          <p className="text-[13px] text-[#76837D]">{userEmail || 'investor@stockwatcha.com'}</p>
          <span className="inline-block mt-1.5 text-xs font-medium px-2 py-0.5 bg-[#EFF6FF] text-[#2B7FFF] rounded-md">
            Beginner Track
          </span>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl divide-y divide-[#E3EAE6] shadow-sm mb-6">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-[#76837D]" />
            <div>
              <p className="text-[14.5px] font-medium text-[#17211D]">Market Notifications</p>
              <p className="text-[12px] text-[#76837D]">Daily market highlights and watchlist alerts</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#009966]">Active</span>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#76837D]" />
            <div>
              <p className="text-[14.5px] font-medium text-[#17211D]">Data & Privacy</p>
              <p className="text-[12px] text-[#76837D]">Manage what data StockWatcha stores</p>
            </div>
          </div>
          <span className="text-xs text-[#76837D]">Protected</span>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#76837D]" />
            <div>
              <p className="text-[14.5px] font-medium text-[#17211D]">Support & Feedback</p>
              <p className="text-[12px] text-[#76837D]">Need help navigating Nigerian markets?</p>
            </div>
          </div>
          <span className="text-xs text-[#76837D]">Help</span>
        </div>
      </div>

      {/* Sign Out Button */}
      <button
        type="button"
        onClick={onSignOut}
        className="w-full h-12 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-[15px] font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default Profile;
