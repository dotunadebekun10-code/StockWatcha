import React, { useState } from 'react';
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
import Navigation from './components/Navigation';
import { MOCK_STOCKS } from './data/mockStocks';

function App() {
  // Authentication & Entry state: 'onboarding' | 'signin' | 'signup' | 'forgot' | 'experience' | 'welcome' | 'app'
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [currentUser, setCurrentUser] = useState(null);

  // Main App Navigation state
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'stocks' | 'guide' | 'watchlist' | 'profile'
  
  // Modal / Detail sub-views
  const [selectedStock, setSelectedStock] = useState(null);
  const [showMarketMovers, setShowMarketMovers] = useState(false);
  const [showNewsDetail, setShowNewsDetail] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

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
    setCurrentScreen('onboarding');
  };

  // --- Initial Flow: Onboarding Carousel ---
  if (currentScreen === 'onboarding') {
    return (
      <Onboarding
        onStartExploring={() => {
          setCurrentUser('Guest Investor');
          setCurrentScreen('app');
        }}
        onCreateAccount={() => setCurrentScreen('signup')}
        onSignIn={() => setCurrentScreen('signin')}
      />
    );
  }

  // --- Sign In ---
  if (currentScreen === 'signin') {
    return (
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
    );
  }

  // --- Sign Up ---
  if (currentScreen === 'signup') {
    return (
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
    );
  }

  // --- Reset Password ---
  if (currentScreen === 'forgot') {
    return (
      <ResetPassword
        onBack={() => setCurrentScreen('signin')}
        onResetSent={(email) => console.log('Reset link sent to:', email)}
      />
    );
  }

  // --- Experience Personalization ---
  if (currentScreen === 'experience') {
    return (
      <Experience
        onSkip={() => setCurrentScreen('welcome')}
        onContinue={(level) => {
          console.log('Selected level:', level);
          setCurrentScreen('welcome');
        }}
      />
    );
  }

  // --- Welcome Banner ---
  if (currentScreen === 'welcome') {
    return (
      <Welcome
        userName={currentUser ? currentUser.split('@')[0] : 'there'}
        onStartExploring={() => {
          setCurrentScreen('app');
          setActiveTab('home');
        }}
      />
    );
  }

  // --- Main App Sub-Views (Overlays) ---

  if (selectedStock) {
    const isWatchlisted = watchlist.some((s) => s.symbol === selectedStock.symbol);
    return (
      <StockDetail
        stock={selectedStock}
        onBack={() => setSelectedStock(null)}
        isWatchlisted={isWatchlisted}
        onToggleWatchlist={handleToggleWatchlist}
      />
    );
  }

  if (showMarketMovers) {
    return (
      <MarketMovers
        onBack={() => setShowMarketMovers(false)}
        onSelectStock={(stock) => {
          setShowMarketMovers(false);
          setSelectedStock(stock);
        }}
      />
    );
  }

  if (showNewsDetail) {
    return (
      <NewsDetail onBack={() => setShowNewsDetail(false)} />
    );
  }

  if (showLegal) {
    return (
      <Legal onBack={() => setShowLegal(false)} />
    );
  }

  // --- Main Tabs ---
  return (
    <div className="min-h-screen bg-[#F7FAF9]">
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
          onOpenLegal={() => setShowLegal(true)}
          onOpenHelp={() => alert('StockWatcha Support: email support@stockwatcha.com')}
        />
      )}

      {/* Persistent Bottom Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        onTabChange={(tab) => {
          setSelectedStock(null);
          setShowMarketMovers(false);
          setShowNewsDetail(false);
          setShowLegal(false);
          setActiveTab(tab);
        }}
      />
    </div>
  );
}

export default App;
