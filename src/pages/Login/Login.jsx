import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import LoginContainer from '../../components/LoginContainer.jsx';
import LoginForm from '../../components/LoginForm.jsx';

function Login({ onLogin }) {
  return (
    <LoginContainer>
      <LoginForm onLogin={onLogin} />
      <div className="login-register-link">
        <span>Don't have an account? </span>
        <Link to="/register">Register now.</Link>
      </div>
    </LoginContainer>
  );
}

export default Login;
