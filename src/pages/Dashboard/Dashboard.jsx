import React from 'react';
import './Dashboard.css';
import Header from '../../components/Header.jsx';
import NavigationMenu from '../../components/NavigationMenu.jsx';
import UserDetails from '../../components/UserDetails.jsx';
import Footer from '../../components/Footer.jsx';

function Dashboard({ user }) {
  return (
    <div className="dashboard-container">
      <Header>User Dashboard</Header>
      <NavigationMenu />
      <main className="dashboard-main">
        <UserDetails user={user} />
        <section className="dashboard-content">Main Content Area</section>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
