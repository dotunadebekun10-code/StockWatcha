import React, { useState } from 'react';

const EXPERIENCE_LEVELS = [
  {
    id: 'beginner',
    title: "I'm completely new",
    description: 'Starts from the very basics in plain language',
  },
  {
    id: 'basics',
    title: 'I understand the basics',
    description: 'Builds on the fundamentals you already know',
  },
  {
    id: 'intermediate',
    title: "I've invested before",
    description: 'Focuses on deeper research concepts and financial metrics.',
  },
  {
    id: 'explorer',
    title: "I'm here to explore",
    description: "I'm curious and want to explore at my own pace.",
  },
];

export const Experience = ({
  onSkip,
  onContinue,
}) => {
  const [step, setStep] = useState('intro'); // 'intro' | 'select'
  const [selectedLevel, setSelectedLevel] = useState(null);

  // --- Intro Screen ---
  if (step === 'intro') {
    return (
      <div
        className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-start p-4 sm:p-6"
        data-node-id="2098:4638"
        data-name="Experience"
      >
        <div className="w-full max-w-[402px] flex flex-col relative h-full min-h-[85vh]">
          {/* Skip */}
          <div className="flex justify-end pt-4 sm:pt-6">
            <button
              type="button"
              onClick={onSkip}
              className="text-[16px] text-[#76837D] opacity-80 hover:opacity-100 font-normal tracking-[0.1px] cursor-pointer"
              data-node-id="2104:4842"
            >
              Skip
            </button>
          </div>

          {/* Content — vertically centered */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4" data-node-id="2098:4650">
              <h1
                className="text-[28px] font-bold text-[#17211D] leading-tight tracking-[0.18px] mb-4"
                data-node-id="2098:4651"
              >
                Let's personalize your experience
              </h1>
              <p
                className="text-[16px] text-[#414D48] opacity-80 leading-[21px] tracking-[0.1px]"
                data-node-id="2098:4652"
              >
                Determine what you want to understand
              </p>
            </div>
          </div>

          {/* Continue Button — pinned to bottom */}
          <div className="pb-10">
            <button
              type="button"
              onClick={() => setStep('select')}
              className="w-full h-[48px] bg-[#009966] hover:bg-[#008055] active:bg-[#007049] text-white text-[16px] font-semibold rounded-[12px] shadow-[0px_9.68px_14.52px_-2.9px_rgba(0,153,102,0.2),0px_3.87px_5.81px_-3.87px_rgba(0,153,102,0.15)] transition-all flex items-center justify-center active:scale-[0.99] cursor-pointer"
              data-node-id="2098:4706"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Experience Level Selection Screen ---
  return (
    <div
      className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-start p-4 sm:p-6"
      data-node-id="2098:4719"
      data-name="Experience Level"
    >
      <div className="w-full max-w-[402px] flex flex-col relative">
        {/* Skip */}
        <div className="flex justify-end pt-4 sm:pt-6 mb-10">
          <button
            type="button"
            onClick={onSkip}
            className="text-[16px] text-[#76837D] opacity-80 hover:opacity-100 font-normal tracking-[0.1px] p-2.5 cursor-pointer"
            data-node-id="2104:4844"
          >
            Skip
          </button>
        </div>

        {/* Header */}
        <div className="mb-8" data-node-id="2098:4743">
          <h2
            className="text-[18px] font-semibold text-[#17211D] leading-[19px] tracking-[-0.036px] mb-2"
            data-node-id="2098:4745"
          >
            About You
          </h2>
          <p
            className="text-[15px] text-[#76837D] font-normal leading-[19px] tracking-[-0.03px]"
            data-node-id="2098:4746"
          >
            How familiar are you with the stock market?
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3" data-node-id="2098:4747">
          {EXPERIENCE_LEVELS.map((level) => {
            const isSelected = selectedLevel === level.id;
            return (
              <button
                key={level.id}
                type="button"
                onClick={() => setSelectedLevel(level.id)}
                className={`
                  w-full bg-white border rounded-[12px] flex items-center gap-4 px-6 py-4
                  transition-all text-left cursor-pointer
                  ${isSelected
                    ? 'border-[#009966] ring-2 ring-[#009966]/20 bg-[#F3FAF7]'
                    : 'border-[#E5E7EB] hover:border-[#C9CCC9]'
                  }
                `}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-semibold text-[#17211D] leading-[16px] mb-1">
                    {level.title}
                  </p>
                  <p className="text-[13.5px] font-normal text-[#76837D] leading-[19px]">
                    {level.description}
                  </p>
                </div>
                {/* Radio circle */}
                <div className={`
                  w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors
                  ${isSelected ? 'border-[#009966] bg-[#009966]' : 'border-[#D1D5DB]'}
                `}>
                  {isSelected && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue button — appears when a level is selected */}
        {selectedLevel && (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => onContinue && onContinue(selectedLevel)}
              className="w-full h-[48px] bg-[#009966] hover:bg-[#008055] active:bg-[#007049] text-white text-[16px] font-semibold rounded-[12px] shadow-[0px_9.68px_14.52px_-2.9px_rgba(0,153,102,0.2),0px_3.87px_5.81px_-3.87px_rgba(0,153,102,0.15)] transition-all flex items-center justify-center active:scale-[0.99] cursor-pointer"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
