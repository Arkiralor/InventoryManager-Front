import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { debugError } from '../utils/logger.js';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 60%, ${theme.palette.secondary.main} 100%)`,
  borderRadius: '0 0 1.5rem 1.5rem',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 72,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ToolbarContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  width: '100%',
});

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.background.paper,
  borderRadius: '50%',
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
  padding: theme.spacing(1),
  marginRight: theme.spacing(2),
  height: 48,
  width: 48,
  justifyContent: 'center',
}));

const LogoImage = styled('img')({
  height: '2.2rem',
  width: '2.2rem',
  display: 'block',
});

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: '0.04em',
  color: theme.palette.getContrastText(theme.palette.primary.main),
  flexGrow: 1,
  textShadow: '0 1px 8px rgba(0,0,0,0.10)',
}));

/**
 * Header component - displays app bar with logo and title
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Header title text
 * @returns {JSX.Element} Header component
 */
function Header({ children }) {
  return (
    <StyledAppBar position="static" color="primary" elevation={2}>
      <Container maxWidth="lg" disableGutters>
        <StyledToolbar>
          <ToolbarContent>
            <LogoContainer>
              <LogoImage
                src="/logo.svg"
                alt="Logo"
                onError={(e) => {
                  debugError('Logo failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </LogoContainer>
            <HeaderTitle variant="h5" component="span">
              {children || 'Default Title'}
            </HeaderTitle>
          </ToolbarContent>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
