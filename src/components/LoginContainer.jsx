import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

/**
 * LoginContainer component - provides centered layout for login page
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Container for login page
 */
function LoginContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

LoginContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginContainer;
