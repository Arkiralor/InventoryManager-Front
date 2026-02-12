import React from 'react';
import './Home.css';
import HomeHeader from '../../components/HomeHeader.jsx';
import HomeIntro from '../../components/HomeIntro.jsx';
import Footer from '../../components/Footer.jsx';

function Home() {
  return (
    <div className="home-container">
      <HomeHeader>Welcome to Inventory Manager</HomeHeader>
      <main className="home-main">
        <HomeIntro onGetStarted={() => alert('Get Started!')} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
