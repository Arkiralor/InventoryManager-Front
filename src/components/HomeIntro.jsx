import React from 'react';
import { Button, Typography, Paper } from '@mui/material';

function HomeIntro({ onGetStarted }) {
  return (
    <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Manage your inventory efficiently
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Track, update, and analyze your inventory with ease.
      </Typography>
      <Button variant="contained" color="primary" size="large" onClick={onGetStarted}>
        Get Started
      </Button>
    </Paper>
  );
}

export default HomeIntro;
