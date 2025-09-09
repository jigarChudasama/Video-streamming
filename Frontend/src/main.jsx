import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AuthLayout from './layout/authLayout'
import DashboardPage from './pages/dashboardPage'
import DashboardLayout from './layout/DashboardLayout'
import LikedVideoPage from './pages/LikedVideoPage'
import VideoHistoryPage from './pages/VideoHistoryPage'
import MyChannelPage from './pages/MyChannelPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Route>
      <Route element={<DashboardLayout />} >
        <Route path="/" element={<DashboardPage />} />
        <Route path="/liked-video-page" element={<LikedVideoPage />} />
        <Route path="/video-history-page" element={<VideoHistoryPage />} />
        <Route path="/my-channel-page" element={<MyChannelPage />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)