import React, { useState } from 'react';
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
import Navigation from './components/Navigation';
import { MOCK_STOCKS } from './data/mockStocks';

function App() {
  // Authentication & Onboarding state
  const [currentUser, setCurrentUser] = useState(null);
  const [authView, setAuthView] = useState('signin'); // 'signin' | 'signup' | 'forgot' | 'experience' | 'welcome'

  // Main App Navigation state
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'stocks' | 'guide' | 'watchlist' | 'profile'
  const [selectedStock, setSelectedStock] = useState(null);

  // Watchlist state (default with Dangote Cement and GTCO)
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
    setAuthView('signin');
  };

  // --- Auth & Onboarding Flow ---
  if (!currentUser) {
    if (authView === 'signup') {
      return (
        <SignUp
          onBack={() => setAuthView('signin')}
          onNavigateToSignIn={() => setAuthView('signin')}
          onGoogleSignUp={() => {
            setCurrentUser('Investor');
            setAuthView('experience');
          }}
          onSignUpSuccess={(email) => {
            setCurrentUser(email);
            setAuthView('experience');
          }}
        />
      );
    }

    if (authView === 'forgot') {
      return (
        <ResetPassword
          onBack={() => setAuthView('signin')}
          onResetSent={(email) => console.log('Reset link sent to:', email)}
        />
      );
    }

    if (authView === 'experience') {
      return (
        <Experience
          onSkip={() => setAuthView('welcome')}
          onContinue={(level) => {
            console.log('Selected level:', level);
            setAuthView('welcome');
          }}
        />
      );
    }

    if (authView === 'welcome') {
      return (
        <Welcome
          userName={currentUser || 'there'}
          onStartExploring={() => {
            // Once user finishes welcome, they are fully inside the app
            setActiveTab('home');
          }}
        />
      );
    }

    // Default: Sign In
    return (
      <SignIn
        onBack={() => console.log('Back clicked')}
        onNavigateToSignUp={() => setAuthView('signup')}
        onForgotPassword={() => setAuthView('forgot')}
        onGoogleSignIn={() => {
          setCurrentUser('Investor');
          setAuthView('experience');
        }}
        onSignInSuccess={(email) => {
          setCurrentUser(email);
          setAuthView('experience');
        }}
      />
    );
  }

  // --- Authenticated Main App ---

  // When a stock detail is open, show detail view overlay
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

  return (
    <div className="min-h-screen bg-[#F7FAF9]">
      {/* Active Tab Screen */}
      {activeTab === 'home' && (
        <Home
          onSelectStock={handleSelectStock}
          onViewAllStocks={() => setActiveTab('stocks')}
          onOpenGuide={() => setActiveTab('guide')}
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
        <Profile userEmail={currentUser} onSignOut={handleSignOut} />
      )}

      {/* Persistent Bottom Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        onTabChange={(tab) => {
          setSelectedStock(null);
          setActiveTab(tab);
        }}
      />
    </div>
  );
}

export default App;
