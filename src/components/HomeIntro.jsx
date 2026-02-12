import React from 'react';

function HomeIntro({ onGetStarted }) {
  return (
    <section className="home-intro">
      <h2>Manage your inventory efficiently</h2>
      <p>Track, update, and analyze your inventory with ease.</p>
      <button className="home-cta" onClick={onGetStarted}>Get Started</button>
    </section>
  );
}

export default HomeIntro;
