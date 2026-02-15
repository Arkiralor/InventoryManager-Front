import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Simulate login
    if (email === 'user@example.com' && password === 'password') {
      onLogin && onLogin(email);
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 350,
        mx: 'auto',
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        variant="outlined"
        required
        fullWidth
      />
      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>{error}</Alert>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 2 }}
        fullWidth
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
