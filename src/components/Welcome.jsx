import React from 'react';
import checkIcon from '../assets/icons/check.png';

export const Welcome = ({
  userName = 'there',
  onStartExploring,
}) => {
  return (
    <div
      className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-start p-4 sm:p-6"
      data-node-id="1758:2949"
      data-name="welcome"
    >
      <div className="w-full max-w-[402px] flex flex-col items-center relative h-full min-h-[85vh]">
        {/* Content — vertically centered */}
        <div className="flex-1 flex flex-col items-center justify-center gap-9">
          {/* Check mark icon */}
          <div
            className="w-[100px] h-[100px] flex items-center justify-center"
            data-node-id="1763:1344"
          >
            <img
              src={checkIcon}
              alt="Success"
              className="w-[100px] h-[100px] object-contain"
            />
          </div>

          {/* Welcome text */}
          <h1
            className="text-[24px] font-semibold text-[#17211D] leading-[33px] text-center tracking-[0.18px]"
            data-node-id="1763:1348"
          >
            You're all set {userName}!
          </h1>
        </div>

        {/* Start Exploring Button — near bottom */}
        <div className="w-full max-w-[332px] pb-14" data-node-id="1763:1393">
          <button
            type="button"
            onClick={onStartExploring}
            className="w-full h-[60px] bg-[#009966] hover:bg-[#008055] active:bg-[#007049] text-[#F7FAF9] text-[17px] font-semibold rounded-full shadow-[0px_9.18px_13.77px_-2.75px_rgba(0,153,102,0.2),0px_3.67px_5.51px_-3.67px_rgba(0,153,102,0.15)] transition-all flex items-center justify-center active:scale-[0.99] cursor-pointer"
            data-node-id="1763:1395"
          >
            Start exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
