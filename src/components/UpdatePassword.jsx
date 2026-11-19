import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Lock, CheckCircle } from 'lucide-react';

/**
 * UpdatePassword — Figma nodes: 1996:6835, 1997:6922
 * Standalone change/update password screen accessible from Account Details.
 */
export const UpdatePassword = ({ onBack, onSuccess }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const getStrengthLevel = (pwd) => {
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = getStrengthLevel(newPassword);
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColors = ['', '#EF4444', '#F59E0B', '#3B82F6', '#009966'];
  const strengthColor = strengthColors[strength];

  const validate = () => {
    const errs = {};
    if (!currentPassword) errs.currentPassword = 'Current password is required';
    if (!newPassword) errs.newPassword = 'New password is required';
    else if (newPassword.length < 8) errs.newPassword = 'Password must be at least 8 characters';
    if (!confirmPassword) errs.confirmPassword = 'Please confirm your new password';
    else if (newPassword !== confirmPassword) errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setIsLoading(false);
    setIsSuccess(true);
    // Auto-close after success
    setTimeout(() => {
      if (onSuccess) onSuccess();
    }, 1800);
  };

  if (isSuccess) {
    return (
      <motion.div
        className="min-h-screen bg-[#F7FAF9] flex items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        >
          <div className="w-20 h-20 rounded-full bg-[#E6F5EF] flex items-center justify-center mb-5">
            <CheckCircle className="w-10 h-10 text-[#009966]" />
          </div>
          <h2 className="text-[22px] font-bold text-[#17211D] mb-2">Password updated!</h2>
          <p className="text-[14px] text-[#76837D]">Your password has been changed successfully.</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-[#F7FAF9]"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      data-node-id="1996:6835"
      data-name="Update your password"
    >
      {/* Header */}
      <div className="bg-white border-b border-[#E3EAE6] px-4 pt-5 pb-5 max-w-[440px] mx-auto">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back"
            className="w-10 h-10 rounded-xl bg-[#F7FAF9] border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-[#F3FAF7] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-[20px] font-bold text-[#17211D] leading-tight">Update Password</h1>
            <p className="text-[12px] text-[#76837D] mt-0.5">Keep your account secure</p>
          </div>
        </div>
      </div>

      <div className="max-w-[440px] mx-auto px-4 pt-6">
        {/* Lock icon header */}
        <div className="flex flex-col items-center mb-7">
          <div className="w-16 h-16 rounded-2xl bg-[#E6F5EF] border border-[#B3DFD0] flex items-center justify-center mb-3">
            <Lock className="w-8 h-8 text-[#009966]" />
          </div>
          <p className="text-[13px] text-[#76837D] text-center max-w-[240px] leading-relaxed">
            Your new password must be at least 8 characters with a mix of letters and numbers.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Current Password */}
          <div>
            <label className="block text-[13px] font-semibold text-[#17211D] mb-1.5">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter your current password"
                className={`w-full bg-white border rounded-xl px-4 py-3 text-[14px] text-[#17211D] placeholder-[#9CA5A0] focus:outline-none focus:ring-2 pr-11 ${
                  errors.currentPassword
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-[#E3EAE6] focus:ring-[#009966]/30 focus:border-[#009966]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowCurrent((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA5A0] hover:text-[#414D48] cursor-pointer"
              >
                {showCurrent ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-[11px] text-red-500 mt-1">{errors.currentPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-[13px] font-semibold text-[#17211D] mb-1.5">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Create a strong password"
                className={`w-full bg-white border rounded-xl px-4 py-3 text-[14px] text-[#17211D] placeholder-[#9CA5A0] focus:outline-none focus:ring-2 pr-11 ${
                  errors.newPassword
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-[#E3EAE6] focus:ring-[#009966]/30 focus:border-[#009966]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowNew((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA5A0] hover:text-[#414D48] cursor-pointer"
              >
                {showNew ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-[11px] text-red-500 mt-1">{errors.newPassword}</p>
            )}
            {/* Strength meter */}
            {newPassword.length > 0 && (
              <div className="mt-2">
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="h-1 flex-1 rounded-full transition-all"
                      style={{
                        backgroundColor: strength >= n ? strengthColor : '#E3EAE6',
                      }}
                    />
                  ))}
                </div>
                <p className="text-[11px] font-medium" style={{ color: strengthColor }}>
                  {strengthLabel}
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[13px] font-semibold text-[#17211D] mb-1.5">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your new password"
                className={`w-full bg-white border rounded-xl px-4 py-3 text-[14px] text-[#17211D] placeholder-[#9CA5A0] focus:outline-none focus:ring-2 pr-11 ${
                  errors.confirmPassword
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-[#E3EAE6] focus:ring-[#009966]/30 focus:border-[#009966]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA5A0] hover:text-[#414D48] cursor-pointer"
              >
                {showConfirm ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-[11px] text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
            {/* Match indicator */}
            {confirmPassword && newPassword && confirmPassword === newPassword && (
              <div className="flex items-center gap-1.5 mt-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#009966]" />
                <p className="text-[11px] text-[#009966] font-medium">Passwords match</p>
              </div>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#006B48] text-white py-3.5 rounded-2xl text-[15px] font-semibold mt-2 disabled:opacity-60 cursor-pointer hover:bg-[#005A3C] transition-colors"
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Updating...
              </span>
            ) : (
              'Update Password'
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default UpdatePassword;
