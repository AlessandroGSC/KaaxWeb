import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Error404 } from '../screens/Error404';
import { useNavigate } from 'react-router-dom';
import { Login } from '../screens/Login';

function AuthCheck({ children }) {
  const { isAuthenticated, userValues } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated && userValues.role === 'ROLE_ADMIN\r\n') {
    return children;
  } else {
    navigate('/home')
  }
}

export default AuthCheck;
