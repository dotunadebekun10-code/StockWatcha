import React, { useState } from 'react';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import googleIcon from '../assets/icons/google.svg';
import passwordIcon from '../assets/icons/password.svg';
import { EyeOff } from 'lucide-react';

export const SignIn = ({
  onBack,
  onNavigateToSignUp,
  onForgotPassword,
  onGoogleSignIn,
  onSignInSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!password) {
      setError('Please enter your password');
      return;
    }

    setIsLoading(true);
    // Simulate auth action
    setTimeout(() => {
      setIsLoading(false);
      if (onSignInSuccess) {
        onSignInSuccess(email);
      }
    }, 600);
  };

  return (
    <div 
      className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6"
      data-node-id="1734:19468"
      data-name="Sign In Screen"
    >
      {/* Container - matching standard mobile frame (402px) from Figma */}
      <div className="w-full max-w-[402px] flex flex-col relative pt-4 sm:pt-0">
        
        {/* Back Button */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            className="inline-flex items-center justify-center w-[40px] h-[35px] bg-[#F3FAF7] hover:bg-[#EAF5F1] rounded-[14px] shadow-[0px_3.34px_1.67px_rgba(145,158,171,0.12)] transition-colors active:scale-95"
            data-node-id="1763:1455"
          >
            <img 
              src={arrowLeftIcon} 
              alt="Back" 
              className="w-[20px] h-[20px]" 
            />
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-7" data-node-id="1763:1350">
          <h1 
            className="text-[24px] font-semibold text-[#17211D] leading-tight tracking-[0.18px] mb-2"
            data-node-id="1763:1351"
          >
            Sign in
          </h1>
          <p 
            className="text-[16px] text-[#414D48] opacity-80 leading-[21px] tracking-[0.1px]"
            data-node-id="1763:1352"
          >
            Sign in to see your watchlists and progress
          </p>
        </div>

        {/* Google Sign-In Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onGoogleSignIn}
            className="w-full h-[46px] bg-white border border-[#E3EAE6] rounded-[10px] flex items-center justify-center gap-3 hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-sm cursor-pointer"
            data-node-id="1763:1432"
          >
            <img src={googleIcon} alt="Google" className="w-[19px] h-[19px]" />
            <span className="text-[14.5px] font-normal text-[#3A3541] tracking-[0.12px]">
              Continue with Google
            </span>
          </button>

          {/* Divider with "or" */}
          <div className="flex items-center my-4" data-node-id="1763:1450">
            <div className="flex-1 h-[0.8px] bg-[#E3EAE6]"></div>
            <span className="px-3 text-[13px] text-[#3A3541]/70 font-normal">or</span>
            <div className="flex-1 h-[0.8px] bg-[#E3EAE6]"></div>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-[8px]">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div className="flex flex-col gap-1.5" data-node-id="1734:20332">
            <label 
              htmlFor="email" 
              className="text-[15.5px] font-normal text-[#3A3541] tracking-[0.13px]"
            >
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full h-[48px] px-3.5 bg-white border border-[#E3EAE6] rounded-[10px] text-[15px] text-[#17211D] placeholder:text-[#A5B2AC] focus:outline-none focus:ring-2 focus:ring-[#009966]/20 focus:border-[#009966] transition-all"
                data-node-id="1734:20316"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5" data-node-id="1734:20333">
            <label 
              htmlFor="password" 
              className="text-[15.5px] font-normal text-[#3A3541] tracking-[0.13px]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="your password"
                required
                className="w-full h-[48px] pl-3.5 pr-11 bg-white border border-[#E3EAE6] rounded-[10px] text-[15px] text-[#17211D] placeholder:text-[#A5B2AC] focus:outline-none focus:ring-2 focus:ring-[#009966]/20 focus:border-[#009966] transition-all"
                data-node-id="1734:20338"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A5B2AC] hover:text-[#5B6862] transition-colors p-1 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-[18px] h-[18px]" />
                ) : (
                  <img src={passwordIcon} alt="Toggle password" className="w-[18px] h-[12px]" />
                )}
              </button>
            </div>
            
            {/* Forgot Password Link */}
            <div className="flex justify-end pt-0.5">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-[14px] text-[#009966] hover:text-[#008055] font-normal tracking-[0.13px] hover:underline cursor-pointer"
                data-node-id="1734:20376"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Primary Sign In Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[48px] bg-[#009966] hover:bg-[#008055] active:bg-[#007049] text-white text-[16px] font-semibold rounded-[12px] shadow-[0px_9.68px_14.52px_-2.9px_rgba(0,153,102,0.2),0px_3.87px_5.81px_-3.87px_rgba(0,153,102,0.15)] transition-all flex items-center justify-center active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              data-node-id="1734:20346"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Sign in'
              )}
            </button>
          </div>

          {/* Create Account Link */}
          <div className="text-center pt-2" data-node-id="1734:20325">
            <span className="text-[15px] text-[#76837D]">
              New to StockWatcha?{' '}
            </span>
            <button
              type="button"
              onClick={onNavigateToSignUp}
              className="text-[15px] font-medium text-[#009966] hover:text-[#008055] hover:underline transition-colors cursor-pointer"
            >
              Create account
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SignIn;
