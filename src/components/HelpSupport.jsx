import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageSquare, HelpCircle, Send, ChevronRight, X, Bot, CheckCheck } from 'lucide-react';

export const HelpSupport = ({ userName, onBack }) => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: "Hello! Welcome to StockWatcha Support. How can we help you understand Nigerian stocks today?",
      time: "Just now"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is the Nigerian Exchange (NGX)?",
      a: "The NGX (formerly Nigerian Stock Exchange) is Nigeria’s principal stock exchange where public companies like Dangote Cement, GTCO, and MTN Nigeria trade their shares."
    },
    {
      q: "Can I buy or sell stocks directly on StockWatcha?",
      a: "StockWatcha is an educational and research platform, not a licensed broker. We give you plain-language clarity, metrics, and guides so you know what to research before trading through a registered NGX broker."
    },
    {
      q: "When are Nigerian markets open?",
      a: "The NGX trades Monday through Friday from 10:00 AM to 2:30 PM West Africa Time (WAT), excluding official Nigerian public holidays."
    },
    {
      q: "How do dividend payments work in Nigeria?",
      a: "Companies that declare dividends credit eligible shareholders either directly into their bank accounts (via electronic dividend mandate / Registrar) or through their brokerage accounts."
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputMessage.trim(),
      time: "Just now"
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputMessage('');

    // Simulated helpful support agent reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'agent',
          text: "Thank you for reaching out! Our team has received your inquiry. If you're exploring stocks on the NGX, don't forget to check our Guide for beginner-friendly breakdowns.",
          time: "Just now"
        }
      ]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen bg-[#F7FAF9] pb-24 max-w-[440px] mx-auto relative"
      data-node-id="1663:5404"
      data-name="Help & Support Page"
    >
      {/* Hero Header Area (Figma node 1663:5406) */}
      <div className="bg-[#009966] text-white px-6 pt-6 pb-12 rounded-b-[36px] shadow-sm relative">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 bg-white/20 rounded-full">
            Support
          </span>
        </div>

        <div className="mt-2" data-node-id="1663:5414">
          <h1 className="text-[22px] font-bold tracking-tight">
            Hello {userName || 'Investor'}
          </h1>
          <p className="text-[16px] text-emerald-100 font-medium mt-0.5">
            How can we help?
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="px-4 sm:px-6 -mt-6">
        {/* Contact Support Banner (Figma node 1663:5451) */}
        <div
          onClick={() => setShowLiveChat(true)}
          className="bg-white rounded-2xl p-4.5 border border-[#E3EAE6] shadow-md hover:border-[#009966]/40 transition-all cursor-pointer flex items-center justify-between gap-3 mb-5"
          data-node-id="1663:5451"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E6F5F0] text-[#009966] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-[#17211D]">
                Send us a message
              </h3>
              <p className="text-[12px] text-[#76837D] mt-0.5">
                Ask us anything or share feedback
              </p>
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#F7FAF9] text-[#009966] flex items-center justify-center shrink-0">
            <Send className="w-4 h-4" />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <HelpCircle className="w-4 h-4 text-[#009966]" />
            <h2 className="text-[14px] font-bold text-[#17211D] uppercase tracking-wider">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white border border-[#E3EAE6] rounded-2xl divide-y divide-[#E3EAE6] shadow-sm overflow-hidden">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="p-4 transition-colors">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-3 cursor-pointer"
                  >
                    <span className="text-[14.5px] font-semibold text-[#17211D]">
                      {faq.q}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-[#76837D] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-90 text-[#009966]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[13px] text-[#414D48] leading-relaxed pt-2.5">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Live Chat Drawer (Figma Live Chat) */}
      <AnimatePresence>
        {showLiveChat && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white rounded-t-[28px] max-w-[440px] w-full mx-auto h-[80vh] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-[#E3EAE6] flex items-center justify-between bg-[#F7FAF9]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#009966] text-white flex items-center justify-center font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#17211D]">
                      StockWatcha Live Support
                    </h3>
                    <p className="text-[11.5px] text-[#009966] font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#009966] inline-block animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowLiveChat(false)}
                  className="w-8 h-8 rounded-full bg-white border border-[#E3EAE6] flex items-center justify-center text-[#76837D] hover:text-[#17211D] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Message List */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F7FAF9]/40">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed shadow-xs ${
                        msg.sender === 'user'
                          ? 'bg-[#009966] text-white rounded-br-xs'
                          : 'bg-white text-[#17211D] border border-[#E3EAE6] rounded-bl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-[#76837D] mt-1 px-1 flex items-center gap-1">
                      {msg.time}
                      {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#009966]" />}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-[#E3EAE6] bg-white flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 h-11 px-4 bg-[#F7FAF9] border border-[#E3EAE6] rounded-xl text-[14px] text-[#17211D] focus:outline-none focus:border-[#009966]"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                    inputMessage.trim()
                      ? 'bg-[#009966] text-white shadow-md active:scale-95'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HelpSupport;
