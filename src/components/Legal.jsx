import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, AlertTriangle, FileText } from 'lucide-react';

export const Legal = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('terms'); // 'terms' | 'privacy' | 'disclaimer'

  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1734:20949"
      data-name="Terms & Privacy Page"
    >
      {/* Header */}
      <div className="flex items-center gap-3.5 mb-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[20px] font-bold text-[#17211D] tracking-tight">
          Legal & Disclaimers
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#EBF0EE] p-1 rounded-xl mb-5">
        <button
          onClick={() => setActiveTab('terms')}
          className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'terms' ? 'bg-white text-[#17211D] shadow-sm font-semibold' : 'text-[#76837D]'
          }`}
        >
          Terms
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'privacy' ? 'bg-white text-[#17211D] shadow-sm font-semibold' : 'text-[#76837D]'
          }`}
        >
          Privacy
        </button>
        <button
          onClick={() => setActiveTab('disclaimer')}
          className={`flex-1 py-1.5 text-[13px] font-medium rounded-lg transition-all cursor-pointer ${
            activeTab === 'disclaimer' ? 'bg-white text-[#17211D] shadow-sm font-semibold' : 'text-[#76837D]'
          }`}
        >
          Disclaimer
        </button>
      </div>

      {/* Tab: Terms of Use */}
      {activeTab === 'terms' && (
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm text-[14px] text-[#414D48] leading-relaxed flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#009966] font-semibold">
            <FileText className="w-5 h-5" />
            <span>StockWatcha Terms of Use</span>
          </div>
          <p>
            <strong>Who we are:</strong> StockWatcha is an investment education and market research platform. <strong>It is not a broker, registered financial adviser, or trading execution platform.</strong>
          </p>
          <p>
            <strong>Using the service:</strong> You may browse as a guest or create an account. You must be of legal age to create an investment account. Content, data, and learning materials may not be scraped or resold without explicit authorization.
          </p>
          <p>
            <strong>Accuracy of data:</strong> While we endeavor to keep market information and financial metrics timely and accurate from official exchange sources, data may occasionally be delayed or estimated. You are solely responsible for your own investment decisions.
          </p>
        </div>
      )}

      {/* Tab: Privacy Policy */}
      {activeTab === 'privacy' && (
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm text-[14px] text-[#414D48] leading-relaxed flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#009966] font-semibold">
            <ShieldCheck className="w-5 h-5" />
            <span>Privacy & Data Protection</span>
          </div>
          <p>
            <strong>What we collect:</strong> As a guest, we collect minimal device telemetry. With an account, we store your sign-in email, watchlisted stocks, customized experience level, and learning progress.
          </p>
          <p>
            <strong>Why we collect it:</strong> Solely to maintain your personalized portfolio watchlist, preserve learning modules across sessions, and deliver optional market alerts. <strong>We do not sell personal data to third-party advertisers.</strong>
          </p>
          <p>
            <strong>Your Rights:</strong> Under Nigerian Data Protection Regulations (NDPR), you have the right to inspect, export, or permanently delete your account and stored data at any time from your Profile settings.
          </p>
        </div>
      )}

      {/* Tab: Investment Disclaimer */}
      {activeTab === 'disclaimer' && (
        <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm text-[14px] text-[#414D48] leading-relaxed flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#F59E0B] font-semibold">
            <AlertTriangle className="w-5 h-5" />
            <span>Investment Disclaimer</span>
          </div>
          <p>
            All information provided on StockWatcha is strictly for general informational and educational purposes only. Nothing on this website constitutes professional financial, tax, or legal advice.
          </p>
          <p>
            Investing in equities and capital markets involves substantial financial risk, including the possible loss of principal capital. Past performance of any security on the Nigerian Exchange (NGX) does not guarantee future results.
          </p>
          <p>
            Before making any investment decisions, please consult with a licensed, SEC-accredited broker or professional financial adviser.
          </p>
        </div>
      )}
    </div>
  );
};

export default Legal;
