import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header.jsx';
import NavigationMenu from '../../components/NavigationMenu.jsx';
import UserDetails from '../../components/UserDetails.jsx';
import Footer from '../../components/Footer.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { debugLog } from '../../utils/logger.js';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
}));

const MainContent = styled(Container)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4, 0),
}));

const ContentGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const UserDetailsPaper = styled(Paper)(({ theme }) => ({
  minWidth: 200,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[2],
}));

const MainContentPaper = styled(Paper)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[2],
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
  },
}));

/**
 * Dashboard page component
 * @returns {JSX.Element} Dashboard page
 */
function Dashboard() {
  const { user } = useAuth();
  const companyName = import.meta.env.COMPANY_NAME;
  debugLog('Dashboard companyName:', companyName);
  return (
    <PageContainer>
      <Header>{companyName || 'User Dashboard'}</Header>
      <NavigationMenu />
      <MainContent>
        <ContentGrid>
          <UserDetailsPaper>
            <UserDetails user={user} />
          </UserDetailsPaper>
          <MainContentPaper>Main Content Area</MainContentPaper>
        </ContentGrid>
      </MainContent>
      <Footer />
    </PageContainer>
  );
}

export default Dashboard;
