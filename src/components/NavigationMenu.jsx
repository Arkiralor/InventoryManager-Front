import React from 'react';
import { Box } from '@mui/material';

function NavigationMenu({ children }) {
  return (
    <Box component="nav" sx={{ bgcolor: 'secondary.light', py: 2, px: 3, fontSize: '1.1rem' }}>
      {children || 'Navigation Menu'}
    </Box>
  );
}

export default NavigationMenu;
