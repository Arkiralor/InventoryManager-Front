import React from 'react';


function Header({ children }) {
  return (
    <header className="dashboard-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <img
        src="/logo.svg"
        alt="Logo"
        style={{ height: '2.2rem', width: '2.2rem', marginRight: '0.7rem' }}
      />
      <span>{children}</span>
    </header>
  );
}

export default Header;
