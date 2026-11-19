import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Newspaper, Clock, ChevronRight, TrendingUp, Building2 } from 'lucide-react';

/**
 * NewsListPage — Figma nodes: 1734:22916 – 1734:23151 (News Pages)
 * Full news listing page with categorised articles, search, and filter tabs.
 * Figma 1734:23253 → News empty state is shown when no articles match.
 */

const NEWS_ARTICLES = [
  {
    id: 1,
    category: 'Markets',
    categoryColor: '#009966',
    title: 'NGX All-Share Index gains 1.2% as banking stocks lead rally',
    summary:
      'The Nigerian Exchange (NGX) All-Share Index advanced 1.24% to close at 98,432.11 points on Thursday, driven by strong gains in banking equities, particularly GTCO and Zenith Bank.',
    source: 'BusinessDay',
    timeAgo: '2h ago',
    readTime: '3 min read',
    icon: TrendingUp,
    iconColor: '#15803D',
    iconBg: '#DCFCE7',
  },
  {
    id: 2,
    category: 'Company News',
    categoryColor: '#2563EB',
    title: 'Dangote Cement announces ₦5.50 interim dividend for H1 2026',
    summary:
      "Africa's largest cement producer declared an interim dividend of ₦5.50 per share for the first half of 2026, reflecting strong revenue growth despite rising energy costs.",
    source: 'The Punch',
    timeAgo: '4h ago',
    readTime: '2 min read',
    icon: Building2,
    iconColor: '#1D4ED8',
    iconBg: '#DBEAFE',
  },
  {
    id: 3,
    category: 'Policy',
    categoryColor: '#D97706',
    title: 'CBN holds MPR at 26.75% amid inflation concerns',
    summary:
      'The Central Bank of Nigeria\'s Monetary Policy Committee voted unanimously to hold the benchmark interest rate at 26.75%, citing persistent inflationary pressures.',
    source: 'Nairametrics',
    timeAgo: '6h ago',
    readTime: '4 min read',
    icon: TrendingUp,
    iconColor: '#D97706',
    iconBg: '#FEF3C7',
  },
  {
    id: 4,
    category: 'Markets',
    categoryColor: '#009966',
    title: 'GTCO posts ₦1.1 trillion profit before tax in Q3 2026',
    summary:
      'Guaranty Trust Holding Company reported pre-tax profit of ₦1.1 trillion for the nine months ended September 2026, a 68% year-on-year increase.',
    source: 'Vanguard',
    timeAgo: '1d ago',
    readTime: '3 min read',
    icon: TrendingUp,
    iconColor: '#15803D',
    iconBg: '#DCFCE7',
  },
  {
    id: 5,
    category: 'Company News',
    categoryColor: '#2563EB',
    title: 'Airtel Africa eyes further Nigeria expansion with 5G rollout',
    summary:
      'Airtel Africa has announced plans to accelerate its 5G infrastructure deployment across Nigeria\'s key commercial cities, targeting 12 new sites by Q2 2027.',
    source: 'TechCabal',
    timeAgo: '1d ago',
    readTime: '3 min read',
    icon: Building2,
    iconColor: '#1D4ED8',
    iconBg: '#DBEAFE',
  },
  {
    id: 6,
    category: 'Education',
    categoryColor: '#7C3AED',
    title: 'Understanding P/E ratios: A beginners guide for NGX investors',
    summary:
      'The Price-to-Earnings ratio is one of the most widely used valuation metrics. Here\'s how to use it to evaluate Nigerian stocks.',
    source: 'StockWatcha',
    timeAgo: '2d ago',
    readTime: '5 min read',
    icon: Newspaper,
    iconColor: '#7C3AED',
    iconBg: '#EDE9FE',
  },
  {
    id: 7,
    category: 'Policy',
    categoryColor: '#D97706',
    title: 'SEC Nigeria approves new framework for digital asset securities',
    summary:
      'The Securities and Exchange Commission has released updated guidelines for digital asset offerings, paving the way for tokenised securities on Nigerian exchanges.',
    source: 'BusinessDay',
    timeAgo: '3d ago',
    readTime: '4 min read',
    icon: TrendingUp,
    iconColor: '#D97706',
    iconBg: '#FEF3C7',
  },
];

const FILTERS = ['All', 'Markets', 'Company News', 'Policy', 'Education'];

export const NewsListPage = ({ onBack, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = NEWS_ARTICLES.filter((a) => {
    const matchesFilter = activeFilter === 'All' || a.category === activeFilter;
    const matchesSearch =
      !searchQuery ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const isEmpty = filtered.length === 0;

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9] pb-6"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1734:22916"
      data-name="News Page"
    >
      {/* Header */}
      <div className="bg-white border-b border-[#E3EAE6] px-4 pt-5 pb-4 max-w-[440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back"
            className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">Market News</h1>
            <p className="text-[12px] text-[#76837D] mt-0.5">Stay informed on the NGX</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA5A0]" />
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F7FAF9] border border-[#E3EAE6] rounded-xl pl-10 pr-4 py-2.5 text-[14px] text-[#17211D] placeholder-[#9CA5A0] focus:outline-none focus:ring-2 focus:ring-[#009966]/30 focus:border-[#009966]"
          />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="max-w-[440px] mx-auto px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-[#009966] text-white shadow-sm'
                  : 'bg-white border border-[#E3EAE6] text-[#414D48] hover:border-[#009966]/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[440px] mx-auto px-4">
        <AnimatePresence mode="wait">
          {isEmpty ? (
            /* ── Empty State (Figma 1734:23253) ── */
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center py-20 text-center"
              data-node-id="1734:23253"
              data-name="News empty state Page"
            >
              <div className="w-20 h-20 rounded-full bg-[#F0F9F5] border border-[#E3EAE6] flex items-center justify-center mb-5">
                <Newspaper className="w-9 h-9 text-[#009966]/50" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#17211D] mb-2">No articles found</h3>
              <p className="text-[13px] text-[#76837D] max-w-[240px] leading-relaxed">
                {searchQuery
                  ? `No results for "${searchQuery}". Try a different search term.`
                  : 'No news articles match this filter yet. Check back later.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('All');
                }}
                className="mt-6 px-5 py-2 rounded-xl bg-[#009966] text-white text-[13px] font-semibold hover:bg-[#007A52] transition-colors cursor-pointer"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            /* ── Article list ── */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              {/* Count label */}
              <p className="text-[12px] text-[#9CA5A0] font-medium">
                {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              </p>

              {filtered.map((article, i) => {
                const Icon = article.icon;
                return (
                  <motion.button
                    key={article.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => onSelectArticle && onSelectArticle(article)}
                    className="w-full text-left bg-white border border-[#E3EAE6] rounded-2xl p-4 hover:border-[#009966]/30 hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: article.iconBg }}
                      >
                        <Icon className="w-5 h-5" style={{ color: article.iconColor }} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        {/* Category tag */}
                        <span
                          className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5"
                          style={{
                            color: article.categoryColor,
                            backgroundColor: article.iconBg,
                          }}
                        >
                          {article.category}
                        </span>

                        {/* Headline */}
                        <h3 className="text-[14px] font-semibold text-[#17211D] leading-snug mb-1.5 group-hover:text-[#009966] transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-[12px] text-[#76837D] leading-relaxed line-clamp-2 mb-2.5">
                          {article.summary}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-3 text-[11px] text-[#9CA5A0]">
                          <span className="font-medium text-[#414D48]">{article.source}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.timeAgo}
                          </span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-[#C9D3CE] flex-shrink-0 mt-1 group-hover:text-[#009966] transition-colors" />
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NewsListPage;
