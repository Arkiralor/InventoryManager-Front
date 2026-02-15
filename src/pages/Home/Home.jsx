import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header.jsx';
import HomeIntro from '../../components/HomeIntro.jsx';
import Footer from '../../components/Footer.jsx';
import { debugLog } from '../../utils/logger.js';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
}));

const MainContent = styled(Container)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 0),
}));

/**
 * Home page component
 * Redirects to dashboard if user is already logged in
 * @returns {JSX.Element} Home page
 */
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleGetStarted = () => {
    navigate('/login', { replace: true });
  };

  const companyName = import.meta.env.COMPANY_NAME;
  debugLog('Home companyName:', companyName);
  return (
    <PageContainer>
      <Header>{companyName || 'Welcome to Inventory Manager'}</Header>
      <MainContent>
        <HomeIntro onGetStarted={handleGetStarted} />
      </MainContent>
      <Footer />
    </PageContainer>
  );
}

export default Home;
