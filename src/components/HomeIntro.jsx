import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const IntroContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.spacing(2),
}));

const IntroTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const IntroDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

/**
 * HomeIntro component - displays introduction section on home page
 * @param {Object} props - Component props
 * @param {Function} props.onGetStarted - Callback function when Get Started button is clicked
 * @returns {JSX.Element} HomeIntro component
 */
function HomeIntro({ onGetStarted }) {
  return (
    <IntroContainer elevation={3}>
      <IntroTitle variant="h4">Manage your inventory efficiently</IntroTitle>
      <IntroDescription variant="body1">
        Track, update, and analyze your inventory with ease.
      </IntroDescription>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onGetStarted}
      >
        Get Started
      </Button>
    </IntroContainer>
  );
}

HomeIntro.propTypes = {
  onGetStarted: PropTypes.func.isRequired,
};

export default HomeIntro;
