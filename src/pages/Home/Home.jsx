import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import './Home.css';
import Header from '../../components/Header.jsx';
import HomeIntro from '../../components/HomeIntro.jsx';
import Footer from '../../components/Footer.jsx';
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
  console.log('Home companyName:', companyName);
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <Header>{companyName || 'Welcome to Inventory Manager'}</Header>
      <Container sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
        <HomeIntro onGetStarted={handleGetStarted} />
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
