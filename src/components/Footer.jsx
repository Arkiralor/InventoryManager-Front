import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { debugLog } from '../utils/logger.js';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(3, 0),
  textAlign: 'center',
}));

const CompanyInfoSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const CompanyName = styled(Typography)({
  fontWeight: 700,
});

/**
 * Gets company information from environment variables
 * @returns {Object} Company information
 */
function getCompanyInfo() {
  debugLog('Environment variables:', {
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

/**
 * Footer component - displays company information
 * @returns {JSX.Element} Footer component
 */
function Footer() {
  const info = getCompanyInfo();
  return (
    <FooterContainer component="footer">
      <CompanyInfoSection>
        <CompanyName variant="subtitle1">{info.name}</CompanyName>
        <Typography variant="body2" color="inherit">
          {info.address}
        </Typography>
      </CompanyInfoSection>
      <Typography variant="body2" color="inherit">
        Email:{' '}
        <MuiLink href={`mailto:${info.email}`} color="inherit">
          {info.email}
        </MuiLink>
        {' | '}Phone:{' '}
        <MuiLink href={`tel:${info.phone}`} color="inherit">
          {info.phone}
        </MuiLink>
      </Typography>
    </FooterContainer>
  );
}

export default Footer;
