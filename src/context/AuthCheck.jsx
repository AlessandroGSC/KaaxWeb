import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Error404 } from '../screens/Error404';
import { useNavigate } from 'react-router-dom';
import { Login } from '../screens/Login';
import { Error403 } from '../screens/Error403';
import Cookies from 'js-cookie';

function AuthCheck({ children, userValues }) {
  const navigate = useNavigate();

  if (Cookies.get('userCookie') && userValues.role === 'ROLE_ADMIN') {
    return children;
  } else {
    navigate('/login');
    return <Error404 />;
  }
}

export default AuthCheck;
