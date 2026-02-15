/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { debugError } from '../utils/logger.js';

const AuthContext = createContext(null);

/**
 * Custom hook to access auth context
 * @returns {Object} Auth context value containing user state and auth methods
 * @throws {Error} If used outside of AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * AuthProvider component that manages user authentication state
 * Persists user data to localStorage and restores on mount
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('jwt');

      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      debugError('Error loading user from localStorage:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('jwt');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Login function to set user and persist to localStorage
   * @param {Object} userData - User data object
   * @param {string} token - JWT token
   */
  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    if (token) {
      localStorage.setItem('jwt', token);
    }
  };

  /**
   * Logout function to clear user state and localStorage
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
  };

  /**
   * Check if user is authenticated
   * @returns {boolean} True if user is logged in
   */
  const isAuthenticated = () => {
    return !!user && !!localStorage.getItem('jwt');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
