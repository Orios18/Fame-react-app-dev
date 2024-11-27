import React, { useState } from 'react';
import './styles.css';

function App() {
  const [activePage, setActivePage] = useState('profile'); // Track active page

  return (
    <div className="app">
      {/* Header */}
      <header className="header">Fame Project</header>

      {/* Main Content */}
      <main className="main-content">
        {activePage === 'profile' && <ProfileSection />}
        {activePage === 'hall' && <HallOfFame />}
        {activePage === 'stats' && <FameStats />}
      </main>

      {/* Bottom Navigation Bar */}
      <BottomBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

function ProfileSection() {
  return (
    <section className="profile-section">
      <h1>User Name</h1>
      <p>Fame Level: </p>
    </section>
  );
}

function FameStats() {
  return (
    <section className="fame-stats">
      <h2>Fame Stats</h2>
      <p>Current Fame: </p>
      <p>Hall of Fame Rank: </p>
    </section>
  );
}

function HallOfFame() {
  return (
    <section className="hall-of-fame">
      <h3>Hall of Fame</h3>
      <ul>
        <li>1. Alice - 200 Fame</li>
        <li>2. Bob - 180 Fame</li>
        <li>3. Charlie - 150 Fame</li>
      </ul>
    </section>
  );
}

function BottomBar({ activePage, setActivePage }) {
  return (
    <nav className="bottom-bar">
      <button
        className={activePage === 'profile' ? 'active' : ''}
        onClick={() => setActivePage('profile')}
      >
        Profile
      </button>
      <button
        className={activePage === 'hall' ? 'active' : ''}
        onClick={() => setActivePage('hall')}
      >
        Hall of Fame
      </button>
      <button
        className={activePage === 'stats' ? 'active' : ''}
        onClick={() => setActivePage('stats')}
      >
        Stats
      </button>
    </nav>
  );
}

export default App;
