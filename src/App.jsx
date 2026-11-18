import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Screens & Components
import Onboarding from './components/Onboarding';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import Experience from './components/Experience';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Stocks from './components/Stocks';
import StockDetail from './components/StockDetail';
import Watchlist from './components/Watchlist';
import Guide from './components/Guide';
import Profile from './components/Profile';
import MarketMovers from './components/MarketMovers';
import NewsDetail from './components/NewsDetail';
import Legal from './components/Legal';
import Preferences from './components/Preferences';
import AccountDetails from './components/AccountDetails';
import HelpSupport from './components/HelpSupport';
import About from './components/About';
import Navigation from './components/Navigation';

import { MOCK_STOCKS } from './data/mockStocks';

function App() {
  // Authentication & Flow state: 'onboarding' | 'signin' | 'signup' | 'forgot' | 'experience' | 'welcome' | 'app'
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [currentUser, setCurrentUser] = useState(null);
  const [userExperienceLevel, setUserExperienceLevel] = useState('beginner');

  // Main App Navigation state
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'stocks' | 'guide' | 'watchlist' | 'profile'

  // Sub-view overlays
  const [selectedStock, setSelectedStock] = useState(null);
  const [showMarketMovers, setShowMarketMovers] = useState(false);
  const [showNewsDetail, setShowNewsDetail] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showHelpSupport, setShowHelpSupport] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // App Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Watchlist state (defaults with Dangote Cement and GTCO)
  const [watchlist, setWatchlist] = useState([MOCK_STOCKS[0], MOCK_STOCKS[2]]);

  const handleToggleWatchlist = (stock) => {
    const exists = watchlist.some((s) => s.symbol === stock.symbol);
    if (exists) {
      setWatchlist(watchlist.filter((s) => s.symbol !== stock.symbol));
    } else {
      setWatchlist([...watchlist, stock]);
    }
  };

  const handleRemoveFromWatchlist = (symbol) => {
    setWatchlist(watchlist.filter((s) => s.symbol !== symbol));
  };

  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setSelectedStock(null);
    setShowPreferences(false);
    setShowAccountDetails(false);
    setShowHelpSupport(false);
    setShowAbout(false);
    setShowLegal(false);
    setCurrentScreen('onboarding');
  };

  const handleToggleDarkMode = (enabled) => {
    setIsDarkMode(enabled);
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Helper page transition configuration
  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.22, ease: 'easeInOut' }
  };

  // ----------------------------------------------------
  // Initial Auth Flow with AnimatePresence
  // ----------------------------------------------------
  if (currentScreen !== 'app') {
    return (
      <div className="min-h-screen bg-[#F7FAF9]">
        <AnimatePresence mode="wait">
          {currentScreen === 'onboarding' && (
            <motion.div key="onboarding" {...pageVariants}>
              <Onboarding
                onStartExploring={() => {
                  setCurrentUser('Guest Investor');
                  setCurrentScreen('app');
                }}
                onCreateAccount={() => setCurrentScreen('signup')}
                onSignIn={() => setCurrentScreen('signin')}
              />
            </motion.div>
          )}

          {currentScreen === 'signin' && (
            <motion.div key="signin" {...pageVariants}>
              <SignIn
                onBack={() => setCurrentScreen('onboarding')}
                onNavigateToSignUp={() => setCurrentScreen('signup')}
                onForgotPassword={() => setCurrentScreen('forgot')}
                onGoogleSignIn={() => {
                  setCurrentUser('Investor');
                  setCurrentScreen('experience');
                }}
                onSignInSuccess={(email) => {
                  setCurrentUser(email);
                  setCurrentScreen('experience');
                }}
              />
            </motion.div>
          )}

          {currentScreen === 'signup' && (
            <motion.div key="signup" {...pageVariants}>
              <SignUp
                onBack={() => setCurrentScreen('onboarding')}
                onNavigateToSignIn={() => setCurrentScreen('signin')}
                onGoogleSignUp={() => {
                  setCurrentUser('Investor');
                  setCurrentScreen('experience');
                }}
                onSignUpSuccess={(email) => {
                  setCurrentUser(email);
                  setCurrentScreen('experience');
                }}
              />
            </motion.div>
          )}

          {currentScreen === 'forgot' && (
            <motion.div key="forgot" {...pageVariants}>
              <ResetPassword
                onBack={() => setCurrentScreen('signin')}
                onResetSent={(email) => console.log('Reset link sent to:', email)}
              />
            </motion.div>
          )}

          {currentScreen === 'experience' && (
            <motion.div key="experience" {...pageVariants}>
              <Experience
                onSkip={() => setCurrentScreen('welcome')}
                onContinue={(level) => {
                  setUserExperienceLevel(level || 'beginner');
                  setCurrentScreen('welcome');
                }}
              />
            </motion.div>
          )}

          {currentScreen === 'welcome' && (
            <motion.div key="welcome" {...pageVariants}>
              <Welcome
                userName={currentUser ? currentUser.split('@')[0] : 'there'}
                onStartExploring={() => {
                  setCurrentScreen('app');
                  setActiveTab('home');
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ----------------------------------------------------
  // Main App Flow with Overlays & Tabs in AnimatePresence
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F7FAF9] text-[#17211D]">
      <AnimatePresence mode="wait">
        {/* Detail: Stock Detail */}
        {selectedStock && (
          <StockDetail
            key="stock-detail"
            stock={selectedStock}
            onBack={() => setSelectedStock(null)}
            isWatchlisted={watchlist.some((s) => s.symbol === selectedStock.symbol)}
            onToggleWatchlist={handleToggleWatchlist}
          />
        )}

        {/* Overlay: Market Movers */}
        {!selectedStock && showMarketMovers && (
          <MarketMovers
            key="market-movers"
            onBack={() => setShowMarketMovers(false)}
            onSelectStock={(stock) => {
              setShowMarketMovers(false);
              setSelectedStock(stock);
            }}
          />
        )}

        {/* Overlay: News Detail */}
        {!selectedStock && !showMarketMovers && showNewsDetail && (
          <NewsDetail key="news-detail" onBack={() => setShowNewsDetail(false)} />
        )}

        {/* Overlay: Legal Information */}
        {!selectedStock && !showMarketMovers && !showNewsDetail && showLegal && (
          <Legal key="legal" onBack={() => setShowLegal(false)} />
        )}

        {/* Overlay: Preferences */}
        {!selectedStock && !showMarketMovers && !showNewsDetail && !showLegal && showPreferences && (
          <Preferences
            key="preferences"
            onBack={() => setShowPreferences(false)}
            isDarkMode={isDarkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />
        )}

        {/* Overlay: Account Details */}
        {!selectedStock && !showMarketMovers && !showNewsDetail && !showLegal && !showPreferences && showAccountDetails && (
          <AccountDetails
            key="account-details"
            userEmail={currentUser}
            onBack={() => setShowAccountDetails(false)}
            onSignOut={handleSignOut}
          />
        )}

        {/* Overlay: Help & Support */}
        {!selectedStock && !showMarketMovers && !showNewsDetail && !showLegal && !showPreferences && !showAccountDetails && showHelpSupport && (
          <HelpSupport
            key="help-support"
            userName={currentUser ? currentUser.split('@')[0] : 'Investor'}
            onBack={() => setShowHelpSupport(false)}
          />
        )}

        {/* Overlay: About Page */}
        {!selectedStock && !showMarketMovers && !showNewsDetail && !showLegal && !showPreferences && !showAccountDetails && !showHelpSupport && showAbout && (
          <About
            key="about"
            onBack={() => setShowAbout(false)}
          />
        )}

        {/* Main Tab Content */}
        {!selectedStock &&
          !showMarketMovers &&
          !showNewsDetail &&
          !showLegal &&
          !showPreferences &&
          !showAccountDetails &&
          !showHelpSupport &&
          !showAbout && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {activeTab === 'home' && (
                <Home
                  onSelectStock={handleSelectStock}
                  onViewAllStocks={() => setActiveTab('stocks')}
                  onOpenGuide={() => setActiveTab('guide')}
                  onOpenMarketMovers={() => setShowMarketMovers(true)}
                  onOpenNews={() => setShowNewsDetail(true)}
                />
              )}

              {activeTab === 'stocks' && (
                <Stocks onSelectStock={handleSelectStock} />
              )}

              {activeTab === 'guide' && (
                <Guide onBack={() => setActiveTab('home')} />
              )}

              {activeTab === 'watchlist' && (
                <Watchlist
                  watchlist={watchlist}
                  onSelectStock={handleSelectStock}
                  onRemoveFromWatchlist={handleRemoveFromWatchlist}
                  onExploreStocks={() => setActiveTab('stocks')}
                />
              )}

              {activeTab === 'profile' && (
                <Profile
                  userEmail={currentUser}
                  onSignOut={handleSignOut}
                  onOpenPreferences={() => setShowPreferences(true)}
                  onOpenAccountDetails={() => setShowAccountDetails(true)}
                  onOpenHelp={() => setShowHelpSupport(true)}
                  onOpenAbout={() => setShowAbout(true)}
                  onOpenLegal={() => setShowLegal(true)}
                />
              )}
            </motion.div>
          )}
      </AnimatePresence>

      {/* Persistent Bottom Navigation Bar (Hidden when inside full overlay) */}
      {!selectedStock &&
        !showMarketMovers &&
        !showNewsDetail &&
        !showLegal &&
        !showPreferences &&
        !showAccountDetails &&
        !showHelpSupport &&
        !showAbout && (
          <Navigation
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
            }}
          />
        )}
    </div>
  );
}

export default App;
