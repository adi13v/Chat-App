import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage' 
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import { useThemeStore } from './store/useThemeStore'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
function App() {
  const {authUser,checkAuth} = useAuthStore();
 const {theme} = useThemeStore();
 console.log(theme)
  useEffect(()=>{
    checkAuth();
  },[checkAuth]);
   
  return (
  <div data-theme={theme} >
  <Navbar/>
  <Toaster/>
  <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
  </div>

  )
}

export default App