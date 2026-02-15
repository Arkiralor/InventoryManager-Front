import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

function getCompanyInfo() {
  console.log('Environment variables:', {
    name: import.meta.env.COMPANY_NAME,
    address: import.meta.env.COMPANY_ADDRESS,
    email: import.meta.env.COMPANY_EMAIL,
    phone: import.meta.env.COMPANY_PHONE,
  });
  return {
    name: import.meta.env.COMPANY_NAME,
    address: import.meta.env.COMPANY_ADDRESS,
    email: import.meta.env.COMPANY_EMAIL,
    phone: import.meta.env.COMPANY_PHONE,
  };
}

function Footer() {
  const info = getCompanyInfo();
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'primary.contrastText', py: 3, textAlign: 'center' }}>
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {info.name}
        </Typography>
        <Typography variant="body2" color="inherit">
          {info.address}
        </Typography>
      </Box>
      <Typography variant="body2" color="inherit">
        Email: <MuiLink href={`mailto:${info.email}`} color="inherit">{info.email}</MuiLink>
        {' | '}Phone: <MuiLink href={`tel:${info.phone}`} color="inherit">{info.phone}</MuiLink>
      </Typography>
    </Box>
  );
}

export default Footer;
