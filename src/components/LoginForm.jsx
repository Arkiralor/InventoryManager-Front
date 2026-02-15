import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: 350,
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const ErrorAlert = styled(Alert)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

/**
 * LoginForm component for user authentication
 * @returns {JSX.Element} Login form component
 */
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Simulate login - TODO: Replace with actual API call
    if (email === 'user@example.com' && password === 'password') {
      const userData = { email };
      const token = 'mock-jwt-token'; // TODO: Get from API response
      login(userData, token);
      navigate('/dashboard');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit}>
      <FormTitle variant="h5" component="h2">
        Login
      </FormTitle>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        required
        fullWidth
      />
      {error && <ErrorAlert severity="error">{error}</ErrorAlert>}
      <SubmitButton
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
      >
        Login
      </SubmitButton>
    </FormContainer>
  );
}

export default LoginForm;
