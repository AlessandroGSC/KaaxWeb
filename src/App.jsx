import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './screens/Home'
import AuthCheck from './context/AuthCheck'
import { AuthProvider } from './context/AuthContext'
import { Login } from './screens/Login'
import { Error404 } from './screens/Error404'
import { Toaster } from 'react-hot-toast'
import { Error403 } from './screens/Error403'
import { Publicaciones } from './screens/Publicaciones'
import Cookies from 'js-cookie'

function App() {
  const userCookie = Cookies.get('userCookie');
  const userValues = userCookie ? JSON.parse(userCookie) : {};
  return (
    <AuthProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="unauthorized" element={<Error403 />} />
        <Route
          path="/home"
          element={<AuthCheck userValues={userValues}><Home /></AuthCheck>}
        />
        <Route path="*" element={<Login />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
