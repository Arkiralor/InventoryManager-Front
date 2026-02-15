import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import './Dashboard.css';
import Header from '../../components/Header.jsx';
import NavigationMenu from '../../components/NavigationMenu.jsx';
import UserDetails from '../../components/UserDetails.jsx';
import Footer from '../../components/Footer.jsx';

function Dashboard({ user }) {
  const companyName = import.meta.env.COMPANY_NAME;
  console.log('Dashboard companyName:', companyName);
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <Header>{companyName || 'User Dashboard'}</Header>
      <NavigationMenu />
      <Container sx={{ flex: 1, py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          <Paper sx={{ minWidth: 200, p: 2, borderRadius: 2, boxShadow: 2 }}>
            <UserDetails user={user} />
          </Paper>
          <Paper sx={{ flex: 1, p: 2, borderRadius: 2, boxShadow: 2, ml: { md: 3 } }}>
            Main Content Area
          </Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Dashboard;
