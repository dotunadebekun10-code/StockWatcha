import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Send, 
  Bot, 
  User, 
  Clock, 
  Sparkles, 
  HelpCircle, 
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

/**
 * LiveChat — Figma Node: 1653:1745 (Live Chat, 402x874)
 * Dedicated real-time AI & Support Assistant screen with:
 * - Conversation messages (User & Assistant)
 * - Quick Action prompts ("How do I buy NGX shares?", "Explain P/E ratio", "Watchlist tips")
 * - Message input with send trigger
 * - Support status indicator ("Live Assistant · Online")
 */
export const LiveChat = ({ onBack, userName = 'Investor' }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: `Hello ${userName}! 👋 Welcome to StockWatcha Support. I'm your dedicated market guide. How can I help you navigate Nigerian stocks and our research tools today?`,
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'How do I buy NGX stocks?',
    'What is a dividend yield?',
    'Explain P/E ratio simply',
    'How does the watchlist work?'
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Dynamic smart reply
    setTimeout(() => {
      let replyText = "That's a great question! On the Nigerian Exchange (NGX), stocks represent ownership in leading Nigerian corporations. You can track prices, evaluate financial statements, and add companies to your Watchlist here on StockWatcha.";
      
      const lower = query.toLowerCase();
      if (lower.includes('buy') || lower.includes('broker')) {
        replyText = "StockWatcha is an investment education and research platform (not a broker). To buy shares on the NGX, you'll need to open an account with an SEC-licensed stockbroker or CSCS-accredited digital trading app.";
      } else if (lower.includes('p/e') || lower.includes('ratio')) {
        replyText = "The Price-to-Earnings (P/E) ratio compares a company's share price to its annual earnings per share (EPS). A lower P/E may indicate a value opportunity or market skepticism, while a higher P/E reflects investor optimism for strong future growth.";
      } else if (lower.includes('dividend')) {
        replyText = "Dividend yield shows how much cash a company pays out each year relative to its stock price (Annual Dividend ÷ Share Price). For example, GTCO and Zenith Bank often pay attractive dividend yields above 8–10% annually.";
      } else if (lower.includes('watchlist')) {
        replyText = "You can add any stock to your Watchlist by tapping the bookmark icon on any stock card or detail screen. If you're a guest, create a free account to ensure your research stays saved permanently across devices.";
      }

      const botReply = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: replyText,
        timestamp: 'Just now'
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] flex flex-col"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1653:1745"
      data-name="Live Chat"
    >
      {/* Header */}
      <div className="bg-white border-b border-[#E3EAE6] px-4 pt-5 pb-4 sticky top-0 z-20">
        <div className="flex items-center gap-3.5 max-w-[440px] mx-auto">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-[16px] font-bold text-[#17211D] leading-tight">StockWatcha Assistant</h1>
              <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse" />
            </div>
            <p className="text-[11px] text-[#009966] font-medium">Online · Ready to help</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-[#E6F5EF] flex items-center justify-center">
            <Bot className="w-5 h-5 text-[#009966]" />
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 max-w-[440px] w-full mx-auto p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-end gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-7 h-7 rounded-lg bg-[#E6F5EF] flex items-center justify-center text-[#009966] flex-shrink-0 mb-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed shadow-xs ${
                  isUser
                    ? 'bg-[#006B48] text-white rounded-br-none'
                    : 'bg-white border border-[#E3EAE6] text-[#17211D] rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <span
                  className={`block text-[10px] mt-1 text-right ${
                    isUser ? 'text-white/70' : 'text-[#9CA5A0]'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
              {isUser && (
                <div className="w-7 h-7 rounded-lg bg-[#E3EAE6] flex items-center justify-center text-[#17211D] flex-shrink-0 mb-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-[#76837D] text-[12px] pl-9">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009966] animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#009966] animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#009966] animate-bounce [animation-delay:0.4s]" />
            <span className="ml-1 text-[11px]">StockWatcha is typing...</span>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="max-w-[440px] w-full mx-auto px-4 pb-2">
        <p className="text-[11px] font-semibold text-[#76837D] uppercase tracking-wider mb-2">
          Frequently Asked
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSend(prompt)}
              className="flex-shrink-0 text-[12px] bg-white border border-[#E3EAE6] text-[#414D48] hover:border-[#009966] hover:text-[#009966] px-3 py-1.5 rounded-full transition-colors cursor-pointer shadow-xs"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className="bg-white border-t border-[#E3EAE6] p-4 max-w-[440px] w-full mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask anything about Nigerian stocks..."
            className="flex-1 bg-[#F7FAF9] border border-[#E3EAE6] rounded-xl px-4 py-3 text-[14px] text-[#17211D] placeholder-[#9CA5A0] focus:outline-none focus:ring-2 focus:ring-[#009966]/30 focus:border-[#009966]"
          />
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={!inputText.trim()}
            className="w-11 h-11 rounded-xl bg-[#006B48] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#005A3C] transition-colors cursor-pointer flex-shrink-0 shadow-sm"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default LiveChat;
