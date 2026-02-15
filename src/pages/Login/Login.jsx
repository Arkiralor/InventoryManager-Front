import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoginContainer from '../../components/LoginContainer.jsx';
import LoginForm from '../../components/LoginForm.jsx';

const FormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const RegisterLinkSection = styled(Box)({
  marginTop: 8,
  textAlign: 'center',
  fontSize: '1rem',
});

const StyledLink = styled(Link)({
  color: '#2d8cff',
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'underline',
  },
});

/**
 * Login page component
 * @returns {JSX.Element} Login page
 */
function Login() {
  return (
    <LoginContainer>
      <FormWrapper>
        <LoginForm />
        <RegisterLinkSection>
          <span>Don&apos;t have an account? </span>
          <StyledLink to="/register">Register now.</StyledLink>
        </RegisterLinkSection>
      </FormWrapper>
    </LoginContainer>
  );
}

export default Login;
