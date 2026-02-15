import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import './Registration.css';

function Registration() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    alert('Registration submitted!');
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '2rem auto',
        padding: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          variant="outlined"
          fullWidth
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Registration;
