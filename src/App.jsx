import React, { useState } from 'react';
import SignIn from './components/SignIn';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [view, setView] = useState('signin');

  if (currentUser) {
    return (
      <div className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-[#E3EAE6]">
          <div className="w-16 h-16 bg-[#E6F5F0] text-[#009966] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-2xl font-semibold text-[#17211D] mb-2">Welcome to StockWatcha</h2>
          <p className="text-[#414D48] mb-6 text-sm">Signed in as <span className="font-medium text-[#17211D]">{currentUser}</span></p>
          <button
            onClick={() => setCurrentUser(null)}
            className="w-full h-11 bg-[#009966] hover:bg-[#008055] text-white font-medium rounded-xl transition-colors cursor-pointer"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  if (view === 'signup') {
    return (
      <div className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-[#E3EAE6]">
          <h2 className="text-2xl font-semibold text-[#17211D] mb-2">Create Account</h2>
          <p className="text-[#414D48] mb-6 text-sm">Sign up view will be linked here.</p>
          <button
            onClick={() => setView('signin')}
            className="text-sm font-medium text-[#009966] hover:underline cursor-pointer"
          >
            ← Back to Sign in
          </button>
        </div>
      </div>
    );
  }

  if (view === 'forgot') {
    return (
      <div className="min-h-screen bg-[#F7FAF9] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-[#E3EAE6]">
          <h2 className="text-2xl font-semibold text-[#17211D] mb-2">Reset Password</h2>
          <p className="text-[#414D48] mb-6 text-sm">Enter your email to receive recovery instructions.</p>
          <button
            onClick={() => setView('signin')}
            className="text-sm font-medium text-[#009966] hover:underline cursor-pointer"
          >
            ← Back to Sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <SignIn
      onBack={() => console.log('Back clicked')}
      onNavigateToSignUp={() => setView('signup')}
      onForgotPassword={() => setView('forgot')}
      onGoogleSignIn={() => alert('Google Sign-In clicked')}
      onSignInSuccess={(email) => setCurrentUser(email)}
    />
  );
}

export default App;
