import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const NavContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: theme.spacing(2, 3),
  fontSize: '1.1rem',
}));

/**
 * NavigationMenu component - displays navigation menu
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Navigation menu content
 * @returns {JSX.Element} NavigationMenu component
 */
function NavigationMenu({ children }) {
  return (
    <NavContainer component="nav">{children || 'Navigation Menu'}</NavContainer>
  );
}

NavigationMenu.propTypes = {
  children: PropTypes.node,
};

export default NavigationMenu;
