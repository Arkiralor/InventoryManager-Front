import React from 'react';
import './Login.css';
import LoginContainer from '../../components/LoginContainer.jsx';
import LoginForm from '../../components/LoginForm.jsx';

function Login({ onLogin }) {
  return (
    <LoginContainer>
      <LoginForm onLogin={onLogin} />
    </LoginContainer>
  );
}

export default Login;
