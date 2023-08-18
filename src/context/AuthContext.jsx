import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userValues, setUser] = useState({});

  const LoginData = (userValues) => {
    console.log(userValues, "userValues")
    setUser(userValues)
    Cookies.set('userCookie', JSON.stringify(userValues), { expires: 2 });
  }

  const logout = () => {
    userValues(null);
    setIsAuthenticated(false);
    Cookies.remove('userCookie');
  }

  const valueContext = {
    isAuthenticated,
    setIsAuthenticated,
    LoginData,
    logout
  }




  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  );
}