
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Registration from './pages/Registration/Registration.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Home from './pages/Home/Home.jsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import baseTheme from './themes/BaseTheme.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  // Example toggle function (could be triggered from UI)
  const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={baseTheme[mode]}>
      <CssBaseline />
      {/* Example toggle button, remove or style as needed */}
      <button style={{position:'absolute',top:10,right:10,zIndex:999}} onClick={toggleMode}>
        Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard user={user} /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
