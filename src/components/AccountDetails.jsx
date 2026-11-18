import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight, Check, AlertTriangle, KeyRound } from 'lucide-react';

export const AccountDetails = ({ userEmail, onBack, onSignOut }) => {
  const [showDeleteFlow, setShowDeleteFlow] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);
  const [otherReasonText, setOtherReasonText] = useState('');
  
  // Password change state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const deleteReasons = [
    "I don’t know how to use StockWatcha",
    "I already have an account on StockWatcha",
    "Prefer not to say",
    "Others(please specify)",
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) return;
    setPasswordSuccess(true);
    setTimeout(() => {
      setPasswordSuccess(false);
      setShowPasswordModal(false);
      setOldPassword('');
      setNewPassword('');
    }, 1500);
  };

  const handleDeleteAccount = () => {
    if (onSignOut) onSignOut();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="min-h-screen bg-[#F7FAF9] pb-24 pt-4 px-4 sm:px-6 max-w-[440px] mx-auto"
      data-node-id="1981:5513"
      data-name="Account Details"
    >
      <AnimatePresence mode="wait">
        {!showDeleteFlow ? (
          <motion.div
            key="details-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6 pt-2">
              <button
                type="button"
                onClick={onBack}
                className="w-10 h-10 rounded-full bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-[20px] font-bold text-[#17211D] tracking-tight">
                Account Details
              </h1>
            </div>

            {/* Profile Section */}
            <div className="mb-6">
              <h2 className="text-[13px] font-bold text-[#76837D] uppercase tracking-wider mb-2.5 px-1">
                Profile
              </h2>
              <div className="bg-white border border-[#E3EAE6] rounded-2xl divide-y divide-[#E3EAE6] shadow-sm overflow-hidden">
                {/* Email Address */}
                <div className="p-4 sm:p-4.5 flex items-center justify-between">
                  <span className="text-[14.5px] font-medium text-[#17211D]">
                    Email Address
                  </span>
                  <span className="text-[14px] text-[#414D48] font-normal truncate max-w-[200px]">
                    {userEmail || 'Perry@example.com'}
                  </span>
                </div>

                {/* Update Password */}
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full p-4 sm:p-4.5 flex items-center justify-between hover:bg-[#F7FAF9] transition-colors text-left cursor-pointer"
                >
                  <span className="text-[14.5px] font-medium text-[#17211D]">
                    Update Password
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#76837D]" />
                </button>
              </div>
            </div>

            {/* Danger Zone: Delete Account */}
            <div>
              <h2 className="text-[13px] font-bold text-[#DC2626] uppercase tracking-wider mb-2.5 px-1">
                Danger Zone
              </h2>
              <div className="bg-white border border-red-100 rounded-2xl shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowDeleteFlow(true)}
                  className="w-full p-4 sm:p-4.5 flex items-center justify-between hover:bg-red-50/50 transition-colors text-left cursor-pointer"
                >
                  <span className="text-[14.5px] font-semibold text-[#DC2626]">
                    Delete Account
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#DC2626]" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Delete Account Confirmation Flow (Figma node 1981:5660) */
          <motion.div
            key="delete-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-2"
          >
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <button
                type="button"
                onClick={() => setShowDeleteFlow(false)}
                className="w-10 h-10 rounded-full bg-white border border-[#E3EAE6] flex items-center justify-center text-[#17211D] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-[20px] font-bold text-[#17211D] tracking-tight">
                Delete Account
              </h1>
            </div>

            {/* Title / Prompt */}
            <div className="mb-6">
              <h2 className="text-[19px] font-bold text-[#17211D] leading-snug">
                Tell us why you are deleting your account
              </h2>
              <p className="text-[13px] text-[#76837D] mt-1 leading-relaxed">
                We're sorry to see you go. Help us understand how we can improve StockWatcha.
              </p>
            </div>

            {/* Reason Options */}
            <div className="space-y-3 mb-6">
              {deleteReasons.map((reason, idx) => {
                const isSelected = selectedReason === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedReason(idx)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                      isSelected
                        ? 'border-[#009966] bg-[#E6F5F0]/30 shadow-sm'
                        : 'border-[#E3EAE6] bg-white hover:border-[#009966]/40'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'border-[#009966] bg-[#009966]'
                          : 'border-[#CBD5E1] bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    </div>
                    <span className="text-[14px] font-medium text-[#17211D]">
                      {reason}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Optional text area for Other reason */}
            {selectedReason === 3 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6"
              >
                <textarea
                  value={otherReasonText}
                  onChange={(e) => setOtherReasonText(e.target.value)}
                  placeholder="Please tell us a bit more..."
                  rows={3}
                  className="w-full p-3.5 bg-white border border-[#E3EAE6] rounded-xl text-[14px] text-[#17211D] focus:outline-none focus:border-[#009966] resize-none"
                />
              </motion.div>
            )}

            {/* Delete button (Node 1981:5931) */}
            <button
              type="button"
              disabled={selectedReason === null}
              onClick={handleDeleteAccount}
              className={`w-full h-[53px] rounded-xl text-[16px] font-semibold transition-all cursor-pointer ${
                selectedReason !== null
                  ? 'bg-[#DC2626] hover:bg-red-700 text-white shadow-md active:scale-[0.99]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Delete Account
            </button>

            <button
              type="button"
              onClick={() => setShowDeleteFlow(false)}
              className="w-full h-11 text-[14px] font-medium text-[#76837D] hover:text-[#17211D] mt-2 cursor-pointer"
            >
              Cancel and keep account
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Update Password Modal Overlay */}
      <AnimatePresence>
        {showPasswordModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-[380px] bg-white rounded-2xl p-6 shadow-2xl border border-[#E3EAE6]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F0] text-[#009966] flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#17211D]">
                    Update Password
                  </h3>
                  <p className="text-[12px] text-[#76837D]">
                    Choose a strong, unique password
                  </p>
                </div>
              </div>

              {passwordSuccess ? (
                <div className="p-4 bg-emerald-50 rounded-xl text-center text-emerald-800 text-sm font-semibold my-4">
                  Password updated successfully!
                </div>
              ) : (
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#414D48] mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      required
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-11 px-3.5 bg-[#F7FAF9] border border-[#E3EAE6] rounded-xl text-[14px] text-[#17211D] focus:outline-none focus:border-[#009966]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12.5px] font-semibold text-[#414D48] mb-1">
                      New Password (min 6 characters)
                    </label>
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-11 px-3.5 bg-[#F7FAF9] border border-[#E3EAE6] rounded-xl text-[14px] text-[#17211D] focus:outline-none focus:border-[#009966]"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowPasswordModal(false)}
                      className="flex-1 h-11 rounded-xl border border-[#E3EAE6] text-[#76837D] text-[14px] font-semibold hover:bg-gray-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 h-11 rounded-xl bg-[#009966] hover:bg-[#008055] text-white text-[14px] font-semibold shadow-sm transition-colors cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccountDetails;
