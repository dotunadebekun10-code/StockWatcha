import React from 'react';
import { Home as HomeIcon, TrendingUp, BookOpen, Star, User } from 'lucide-react';

export const Navigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'stocks', label: 'Stocks', icon: TrendingUp },
    { id: 'guide', label: 'Guide', icon: BookOpen },
    { id: 'watchlist', label: 'Watchlist', icon: Star },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E3EAE6] py-2 px-6 z-40 max-w-[440px] mx-auto shadow-lg">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-2 rounded-lg transition-colors cursor-pointer ${
                isActive ? 'text-[#009966]' : 'text-[#76837D] hover:text-[#17211D]'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.4 : 1.8} />
              <span className={`text-[12px] ${isActive ? 'font-semibold text-[#009966]' : 'font-normal'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
