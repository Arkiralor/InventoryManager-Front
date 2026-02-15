import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, useTheme } from '@mui/material';


function Header({ children }) {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={2}
      sx={{
        mb: 3,
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 60%, ${theme.palette.secondary.main} 100%)`,
        borderRadius: '0 0 1.5rem 1.5rem',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ minHeight: 72, px: { xs: 1, sm: 2 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                background: theme.palette.background.paper,
                borderRadius: '50%',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                p: 1,
                mr: 2,
                height: 48,
                width: 48,
                justifyContent: 'center',
              }}
            >
              <img
                src="/logo.svg"
                alt="Logo"
                style={{ height: '2.2rem', width: '2.2rem', display: 'block' }}
                onError={(e) => {
                  console.error('Logo failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </Box>
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: theme.palette.getContrastText(theme.palette.primary.main),
                flexGrow: 1,
                textShadow: '0 1px 8px rgba(0,0,0,0.10)',
              }}
            >
              {children || 'Default Title'}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
