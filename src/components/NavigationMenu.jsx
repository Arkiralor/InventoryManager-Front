import React from 'react';

function NavigationMenu({ children }) {
  return <nav className="dashboard-nav">{children || 'Navigation Menu'}</nav>;
}

export default NavigationMenu;
