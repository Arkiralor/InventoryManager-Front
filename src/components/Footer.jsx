import React from 'react';

function getCompanyInfo() {
  // Support both VITE_ and plain env vars for compatibility
  return {
    name: import.meta.env.VITE_COMPANY_NAME || import.meta.env.COMPANY_NAME,
    address: import.meta.env.VITE_COMPANY_ADDRESS || import.meta.env.COMPANY_ADDRESS,
    email: import.meta.env.VITE_COMPANY_EMAIL || import.meta.env.COMPANY_EMAIL,
    phone: import.meta.env.VITE_COMPANY_PHONE || import.meta.env.COMPANY_PHONE,
  };
}


function Footer() {
  const info = getCompanyInfo();
  return (
    <footer className="dashboard-footer company-footer">
      <div className="company-info">
        <div className="company-name">{info.name}</div>
        <div className="company-address">{info.address}</div>
        <div className="company-contact">
          <span>Email: <a href={`mailto:${info.email}`}>{info.email}</a></span>
          <span> | Phone: <a href={`tel:${info.phone}`}>{info.phone}</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
