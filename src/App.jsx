import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Registration from './pages/Registration/Registration.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Home from './pages/Home/Home.jsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import baseTheme from './themes/BaseTheme.jsx';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import './App.css';

/**
 * ProtectedRoute component that requires authentication
 * Redirects to login if user is not authenticated
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  // Example toggle function (could be triggered from UI)
  const toggleMode = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AuthProvider>
      <ThemeProvider theme={baseTheme[mode]}>
        <CssBaseline />
        {/* Example toggle button, remove or style as needed */}
        <button
          style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }}
          onClick={toggleMode}
        >
          Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
