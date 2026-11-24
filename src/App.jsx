import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Screens & Components
import SplashScreen from './components/SplashScreen';
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
import NewsListPage from './components/NewsListPage';
import Legal from './components/Legal';
import LegalInformation from './components/LegalInformation';
import InvestmentDisclaimer from './components/InvestmentDisclaimer';
import DataSources from './components/DataSources';
import Preferences from './components/Preferences';
import Appearance from './components/Appearance';
import AccountDetails from './components/AccountDetails';
import UpdatePassword from './components/UpdatePassword';
import HelpSupport from './components/HelpSupport';
import About from './components/About';
import GuideSettings from './components/GuideSettings';
import CompanyDetails from './components/CompanyDetails';
import WatchlistGuestEmpty from './components/WatchlistGuestEmpty';
import StockDetailIntermediate from './components/StockDetailIntermediate';
import LiveChat from './components/LiveChat';
import GuideIntermediate from './components/GuideIntermediate';
import HomeGuest from './components/HomeGuest';
import WatchlistIntermediate from './components/WatchlistIntermediate';
import WatchlistEmptyState from './components/WatchlistEmptyState';
import ExperienceLevel from './components/ExperienceLevel';
import HomeIntermediate from './components/HomeIntermediate';
import HomeDarkMode from './components/HomeDarkMode';
import StocksIntermediate from './components/StocksIntermediate';
import GuideExpanded from './components/GuideExpanded';
import GuideQuizModal from './components/GuideQuizModal';
import Navigation from './components/Navigation';

import { MOCK_STOCKS } from './data/mockStocks';

function App() {
  // Authentication & Flow state: 'splash' | 'onboarding' | 'signin' | 'signup' | 'forgot' | 'experience' | 'welcome' | 'app'
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [currentUser, setCurrentUser] = useState(null);
  const [userExperienceLevel, setUserExperienceLevel] = useState('beginner');

  // Main App Navigation state
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'stocks' | 'guide' | 'watchlist' | 'profile'

  // Sub-view overlays (layered stack approach)
  const [selectedStock, setSelectedStock] = useState(null);
  const [showMarketMovers, setShowMarketMovers] = useState(false);
  const [showNewsDetail, setShowNewsDetail] = useState(false);
  const [showNewsList, setShowNewsList] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showLegalInfo, setShowLegalInfo] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showDataSources, setShowDataSources] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showAppearance, setShowAppearance] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [showHelpSupport, setShowHelpSupport] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showGuideSettings, setShowGuideSettings] = useState(false);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showIntermediateDetail, setShowIntermediateDetail] = useState(false);
  const [showExperienceLevel, setShowExperienceLevel] = useState(false);
  const [showGuideQuiz, setShowGuideQuiz] = useState(false);

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
    setShowMarketMovers(false);
    setShowNewsDetail(false);
    setShowNewsList(false);
    setShowLegal(false);
    setShowLegalInfo(false);
    setShowDisclaimer(false);
    setShowDataSources(false);
    setShowPreferences(false);
    setShowAppearance(false);
    setShowAccountDetails(false);
    setShowUpdatePassword(false);
    setShowHelpSupport(false);
    setShowAbout(false);
    setShowGuideSettings(false);
    setShowCompanyDetails(false);
    setShowLiveChat(false);
    setShowIntermediateDetail(false);
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
          {currentScreen === 'splash' && (
            <SplashScreen
              key="splash"
              onDone={() => setCurrentScreen('onboarding')}
            />
          )}

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

        {/* Overlay: News List (browse all articles) */}
        {!selectedStock && !showMarketMovers && showNewsList && (
          <NewsListPage
            key="news-list"
            onBack={() => setShowNewsList(false)}
            onSelectArticle={() => {
              setShowNewsList(false);
              setShowNewsDetail(true);
            }}
          />
        )}

        {/* Overlay: News Detail */}
        {!selectedStock && !showMarketMovers && !showNewsList && showNewsDetail && (
          <NewsDetail key="news-detail" onBack={() => setShowNewsDetail(false)} />
        )}

        {/* Overlay: Legal Information hub */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && showLegalInfo && (
          <LegalInformation
            key="legal-info"
            onBack={() => setShowLegalInfo(false)}
            onOpenTerms={() => { setShowLegalInfo(false); setShowLegal(true); }}
            onOpenDisclaimer={() => { setShowLegalInfo(false); setShowDisclaimer(true); }}
            onOpenDataSources={() => { setShowLegalInfo(false); setShowDataSources(true); }}
          />
        )}

        {/* Overlay: Terms & Privacy (Legal) */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && showLegal && (
          <Legal key="legal" onBack={() => setShowLegal(false)} />
        )}

        {/* Overlay: Investment Disclaimer */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && showDisclaimer && (
          <InvestmentDisclaimer key="disclaimer" onBack={() => setShowDisclaimer(false)} />
        )}

        {/* Overlay: Data Sources */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && showDataSources && (
          <DataSources key="data-sources" onBack={() => setShowDataSources(false)} />
        )}

        {/* Overlay: Appearance */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && showAppearance && (
          <Appearance
            key="appearance"
            onBack={() => setShowAppearance(false)}
            isDarkMode={isDarkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />
        )}

        {/* Overlay: Preferences */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && showPreferences && (
          <Preferences
            key="preferences"
            onBack={() => setShowPreferences(false)}
            isDarkMode={isDarkMode}
            onToggleDarkMode={handleToggleDarkMode}
            onOpenAppearance={() => { setShowPreferences(false); setShowAppearance(true); }}
          />
        )}

        {/* Overlay: Update Password */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && showUpdatePassword && (
          <UpdatePassword
            key="update-password"
            onBack={() => setShowUpdatePassword(false)}
            onSuccess={() => setShowUpdatePassword(false)}
          />
        )}

        {/* Overlay: Account Details */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && showAccountDetails && (
          <AccountDetails
            key="account-details"
            userEmail={currentUser}
            onBack={() => setShowAccountDetails(false)}
            onSignOut={handleSignOut}
            onOpenUpdatePassword={() => { setShowAccountDetails(false); setShowUpdatePassword(true); }}
          />
        )}

        {/* Overlay: Guide Settings */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && showGuideSettings && (
          <GuideSettings
            key="guide-settings"
            initialLevel={userExperienceLevel}
            onBack={() => setShowGuideSettings(false)}
            onSave={({ level }) => setUserExperienceLevel(level)}
          />
        )}

        {/* Overlay: Help & Support */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && !showGuideSettings && showHelpSupport && (
          <HelpSupport
            key="help-support"
            userName={currentUser ? currentUser.split('@')[0] : 'Investor'}
            onBack={() => setShowHelpSupport(false)}
          />
        )}

        {/* Overlay: About Page */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && !showGuideSettings && !showHelpSupport && showAbout && (
          <About
            key="about"
            onBack={() => setShowAbout(false)}
          />
        )}

        {/* Overlay: Company Details Deep Dive (Figma 1722:1218) */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && !showGuideSettings && !showHelpSupport && !showAbout && showCompanyDetails && (
          <CompanyDetails
            key="company-details"
            onBack={() => setShowCompanyDetails(false)}
            isWatchlisted={watchlist.some((s) => s.symbol === 'DANGCEM')}
            onToggleWatchlist={handleToggleWatchlist}
          />
        )}

        {/* Overlay: Intermediate Stock Detail (Figma 1076:1092) */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && !showGuideSettings && !showHelpSupport && !showAbout && !showCompanyDetails && showIntermediateDetail && (
          <StockDetailIntermediate
            key="intermediate-stock-detail"
            onBack={() => setShowIntermediateDetail(false)}
            isWatchlisted={watchlist.some((s) => s.symbol === 'MTNN')}
            onToggleWatchlist={handleToggleWatchlist}
            onViewFullFinancials={() => setShowCompanyDetails(true)}
          />
        )}

        {/* Overlay: Dedicated Live Chat (Figma 1653:1745) */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && !showGuideSettings && !showHelpSupport && !showAbout && !showCompanyDetails && !showIntermediateDetail && showLiveChat && (
          <LiveChat
            key="live-chat"
            userName={currentUser ? currentUser.split('@')[0] : 'Investor'}
            onBack={() => setShowLiveChat(false)}
          />
        )}

        {/* Overlay: Experience Level Selection (Figma 1097:97 & 2098:4719) */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && !showGuideSettings && !showHelpSupport && !showAbout && !showCompanyDetails && !showIntermediateDetail && !showLiveChat && showExperienceLevel && (
          <ExperienceLevel
            key="experience-level"
            currentLevel={userExperienceLevel}
            onSelectLevel={(level) => setUserExperienceLevel(level)}
            onSave={(level) => setUserExperienceLevel(level)}
            onBack={() => setShowExperienceLevel(false)}
          />
        )}

        {/* Overlay: Guide Quiz Modal (Figma 1937:16326) */}
        {!selectedStock && !showMarketMovers && !showNewsList && !showNewsDetail && !showLegalInfo && !showLegal && !showDisclaimer && !showDataSources && !showAppearance && !showPreferences && !showUpdatePassword && !showAccountDetails && !showGuideSettings && !showHelpSupport && !showAbout && !showCompanyDetails && !showIntermediateDetail && !showLiveChat && !showExperienceLevel && showGuideQuiz && (
          <GuideQuizModal
            key="guide-quiz"
            onClose={() => setShowGuideQuiz(false)}
            onCompleteQuiz={() => setShowGuideQuiz(false)}
          />
        )}

        {/* Main Tab Content */}
        {!selectedStock &&
          !showMarketMovers &&
          !showNewsList &&
          !showNewsDetail &&
          !showLegalInfo &&
          !showLegal &&
          !showDisclaimer &&
          !showDataSources &&
          !showAppearance &&
          !showPreferences &&
          !showUpdatePassword &&
          !showAccountDetails &&
          !showGuideSettings &&
          !showHelpSupport &&
          !showAbout &&
          !showCompanyDetails &&
          !showIntermediateDetail &&
          !showLiveChat &&
          !showExperienceLevel &&
          !showGuideQuiz && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {activeTab === 'home' && (
                !currentUser || currentUser === 'Guest Investor' ? (
                  <HomeGuest
                    onExploreCompany={() => setShowCompanyDetails(true)}
                    onViewAllStocks={() => setActiveTab('stocks')}
                    onOpenMarketMovers={() => setShowMarketMovers(true)}
                    onOpenNews={() => setShowNewsList(true)}
                    onOpenGuide={() => setActiveTab('guide')}
                    onCreateAccount={() => setCurrentScreen('signup')}
                    onSelectStock={handleSelectStock}
                  />
                ) : isDarkMode ? (
                  <HomeDarkMode
                    onSelectStock={handleSelectStock}
                    onViewAllStocks={() => setActiveTab('stocks')}
                    onOpenGuide={() => setActiveTab('guide')}
                    onOpenMarketMovers={() => setShowMarketMovers(true)}
                    onOpenNews={() => setShowNewsList(true)}
                    onToggleTheme={() => handleToggleDarkMode(false)}
                  />
                ) : userExperienceLevel === 'intermediate' ? (
                  <HomeIntermediate
                    userName={currentUser ? currentUser.split('@')[0] : 'Investor'}
                    onSelectStock={handleSelectStock}
                    onOpenIntermediateMTN={() => setShowIntermediateDetail(true)}
                    onViewAllStocks={() => setActiveTab('stocks')}
                    onOpenGuide={() => setActiveTab('guide')}
                    onOpenMarketMovers={() => setShowMarketMovers(true)}
                  />
                ) : (
                  <Home
                    onSelectStock={handleSelectStock}
                    onViewAllStocks={() => setActiveTab('stocks')}
                    onOpenGuide={() => setActiveTab('guide')}
                    onOpenMarketMovers={() => setShowMarketMovers(true)}
                    onOpenNews={() => setShowNewsList(true)}
                    onOpenDangoteDetails={() => setShowCompanyDetails(true)}
                    onOpenIntermediateMTN={() => setShowIntermediateDetail(true)}
                  />
                )
              )}

              {activeTab === 'stocks' && (
                userExperienceLevel === 'intermediate' ? (
                  <StocksIntermediate
                    onSelectStock={handleSelectStock}
                    onOpenIntermediateMTN={() => setShowIntermediateDetail(true)}
                    onOpenDangoteDetails={() => setShowCompanyDetails(true)}
                  />
                ) : (
                  <Stocks 
                    onSelectStock={handleSelectStock}
                    onOpenIntermediateMTN={() => setShowIntermediateDetail(true)}
                    onOpenDangoteDetails={() => setShowCompanyDetails(true)}
                  />
                )
              )}

              {activeTab === 'guide' && (
                userExperienceLevel === 'intermediate' ? (
                  <GuideIntermediate
                    onBack={() => setActiveTab('home')}
                    onOpenSettings={() => setShowGuideSettings(true)}
                  />
                ) : (
                  <GuideExpanded
                    onBack={() => setActiveTab('home')}
                    onOpenSettings={() => setShowGuideSettings(true)}
                    onOpenQuiz={() => setShowGuideQuiz(true)}
                  />
                )
              )}

              {activeTab === 'watchlist' && (
                !currentUser || currentUser === 'Guest Investor' ? (
                  <WatchlistEmptyState
                    isGuest={true}
                    onCreateAccount={() => {
                      setCurrentScreen('signup');
                    }}
                    onExploreStocks={() => setActiveTab('stocks')}
                    onAddStock={(stk) => handleToggleWatchlist(stk)}
                  />
                ) : watchlist.length === 0 ? (
                  <WatchlistEmptyState
                    isGuest={false}
                    onExploreStocks={() => setActiveTab('stocks')}
                  />
                ) : userExperienceLevel === 'intermediate' ? (
                  <WatchlistIntermediate
                    watchlist={watchlist}
                    onSelectStock={handleSelectStock}
                    onRemoveFromWatchlist={handleRemoveFromWatchlist}
                    onExploreStocks={() => setActiveTab('stocks')}
                  />
                ) : (
                  <Watchlist
                    watchlist={watchlist}
                    onSelectStock={handleSelectStock}
                    onRemoveFromWatchlist={handleRemoveFromWatchlist}
                    onExploreStocks={() => setActiveTab('stocks')}
                  />
                )
              )}

              {activeTab === 'profile' && (
                <Profile
                  userEmail={currentUser}
                  onSignOut={handleSignOut}
                  onOpenPreferences={() => setShowPreferences(true)}
                  onOpenAccountDetails={() => setShowAccountDetails(true)}
                  onOpenHelp={() => setShowHelpSupport(true)}
                  onOpenLiveChat={() => setShowLiveChat(true)}
                  onOpenAbout={() => setShowAbout(true)}
                  onOpenLegal={() => setShowLegalInfo(true)}
                  onOpenExperienceLevel={() => setShowExperienceLevel(true)}
                />
              )}
            </motion.div>
          )}
      </AnimatePresence>

      {/* Persistent Bottom Navigation Bar (Hidden when inside full overlay) */}
      {!selectedStock &&
        !showMarketMovers &&
        !showNewsList &&
        !showNewsDetail &&
        !showLegalInfo &&
        !showLegal &&
        !showDisclaimer &&
        !showDataSources &&
        !showAppearance &&
        !showPreferences &&
        !showUpdatePassword &&
        !showAccountDetails &&
        !showGuideSettings &&
        !showHelpSupport &&
        !showAbout &&
        !showCompanyDetails &&
        !showIntermediateDetail &&
        !showLiveChat &&
        !showExperienceLevel &&
        !showGuideQuiz && (
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
