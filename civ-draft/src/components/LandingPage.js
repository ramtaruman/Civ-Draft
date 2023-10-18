import React from 'react';
import './LandingPage.css'; // Import your CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Civilization 6 Drafter</h1>
        <p>The most crucial part of the game, simplified.</p>
        <a href="/draft" className="start-button">Start Draft</a>
      </div>
    </div>
  );
};

export default LandingPage;