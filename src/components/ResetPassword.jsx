import React, { useState } from 'react';

export const ResetPassword = ({
  onBack,
  onResetSent,
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSent(true);
      if (onResetSent) onResetSent(email);
    }, 600);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6">
        <div className="w-full max-w-[402px] flex flex-col pt-4 sm:pt-0">
          <div className="flex flex-col items-center text-center mt-32">
            <div className="w-16 h-16 bg-[#E6F5F0] text-[#009966] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              ✉️
            </div>
            <h1 className="text-[24px] font-semibold text-[#17211D] leading-tight tracking-[0.18px] mb-3">
              Check your email
            </h1>
            <p className="text-[16px] text-[#414D48] opacity-80 leading-[21px] tracking-[0.1px] mb-8">
              We sent a password reset link to <span className="font-medium text-[#17211D]">{email}</span>
            </p>
            <button
              type="button"
              onClick={onBack}
              className="text-[15px] font-medium text-[#009966] hover:text-[#008055] hover:underline transition-colors cursor-pointer"
            >
              ← Back to Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6"
      data-node-id="1734:20510"
      data-name="Reset your password"
    >
      <div className="w-full max-w-[402px] flex flex-col relative pt-4 sm:pt-0">

        {/* Header */}
        <div className="mb-7 mt-16 sm:mt-0" data-node-id="1734:20522">
          <h1
            className="text-[24px] font-semibold text-[#17211D] leading-tight tracking-[0.18px] mb-3"
            data-node-id="1734:20523"
          >
            Reset your password
          </h1>
          <p
            className="text-[16px] text-[#414D48] opacity-80 leading-[21px] tracking-[0.1px]"
            data-node-id="1734:20524"
          >
            Enter your email and we'll send you a link to choose a new password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-[8px]">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div className="flex flex-col gap-1.5" data-node-id="1734:20553">
            <label
              htmlFor="reset-email"
              className="text-[15.5px] font-normal text-[#3A3541] tracking-[0.13px]"
            >
              Email
            </label>
            <input
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full h-[48px] px-3.5 bg-white border border-[#E3EAE6] rounded-[10px] text-[15px] text-[#17211D] placeholder:text-[#A5B2AC] focus:outline-none focus:ring-2 focus:ring-[#009966]/20 focus:border-[#009966] transition-all"
              data-node-id="1734:20558"
            />
          </div>

          {/* Send Reset Link Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-[48px] bg-[#009966] hover:bg-[#008055] active:bg-[#007049] text-white text-[16px] font-semibold rounded-[12px] shadow-[0px_9.68px_14.52px_-2.9px_rgba(0,153,102,0.2),0px_3.87px_5.81px_-3.87px_rgba(0,153,102,0.15)] transition-all flex items-center justify-center active:scale-[0.99] disabled:opacity-60 cursor-pointer"
            data-node-id="1734:20578"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Send reset link'
            )}
          </button>

          {/* Back to Sign In */}
          <div className="text-center pt-1">
            <button
              type="button"
              onClick={onBack}
              className="text-[15px] font-medium text-[#009966] hover:text-[#008055] hover:underline transition-colors cursor-pointer"
            >
              ← Back to Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
