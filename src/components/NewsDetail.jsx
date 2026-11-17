import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Building2 } from 'lucide-react';

export const NewsDetail = ({ onBack }) => {
  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1734:22869"
      data-name="News Page"
    >
      {/* Top Bar */}
      <div className="flex items-center gap-3.5 mb-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="w-10 h-10 rounded-xl bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[18px] font-semibold text-[#17211D]">
          Market News
        </h1>
      </div>

      {/* Hero Visual Card */}
      <div className="bg-gradient-to-tr from-[#006B48] to-[#33AD82] text-white rounded-2xl p-6 mb-5 shadow-md relative overflow-hidden">
        <div className="relative z-10">
          <span className="text-xs font-semibold px-2.5 py-1 bg-white/20 rounded-md uppercase tracking-wider backdrop-blur-sm">
            Energy & Infrastructure
          </span>
          <h2 className="text-[20px] font-bold leading-snug mt-3">
            Aliko Dangote, Ethiopia and Djibouti to build $600m fuel pipeline
          </h2>
        </div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
      </div>

      {/* Metadata */}
      <div className="flex items-center gap-4 text-xs text-[#76837D] mb-4 pb-3 border-b border-[#E3EAE6]">
        <div className="flex items-center gap-1.5 font-semibold text-[#17211D]">
          <Building2 className="w-4 h-4 text-[#009966]" />
          <span>BBC Business</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>Fri, Sept 25, 2026</span>
        </div>
      </div>

      {/* Article Body */}
      <div className="bg-white border border-[#E3EAE6] rounded-2xl p-5 shadow-sm mb-6">
        <div className="text-[14.5px] text-[#414D48] leading-relaxed flex flex-col gap-3.5">
          <p>
            Nigerian industrialist Aliko Dangote has confirmed financial backing and partnership for a landmark $660m (£500m) cross-border fuel pipeline between Ethiopia and Djibouti.
          </p>
          <p>
            The critical energy project will span a 120km (75-mile) high-capacity pipeline connecting Djibouti's strategic Damerjog deep-water port directly to an inland distribution facility in Dewele, Ethiopia.
          </p>
          <p>
            The project also incorporates a massive storage depot capable of holding over 400 million litres of refined petroleum products, drastically reducing transport logistics costs and strengthening regional supply chains.
          </p>
        </div>

        {/* External Link */}
        <div className="pt-4 mt-4 border-t border-[#E3EAE6]">
          <a
            href="https://www.bbc.com/news/articles/c6z9z7lv41wgo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#009966] hover:text-[#008055] transition-colors"
          >
            <span>Read full story on BBC</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
