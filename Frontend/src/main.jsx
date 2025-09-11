import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AuthLayout from './layout/authLayout'
import DashboardLayout from './layout/DashboardLayout'
import LikedVideoPage from './pages/LikedVideoPage'
import VideoHistoryPage from './pages/VideoHistoryPage'
import MyChannelPage from './pages/MyChannelPage'
import DashboardPage from './pages/DashboardPage'
import VideoDetailPage from './pages/VideoDetailPage'
import PlaylistDetailPage from './pages/PlaylistDetailPage'
import MyContentPage from './pages/MyContentPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />

        <Route path="video-detail" element={<VideoDetailPage />} />

        <Route path="liked-video-page">
          <Route index element={<LikedVideoPage />} />
          <Route path="video-detail" element={<VideoDetailPage />} />
        </Route>

        <Route path="video-history-page">
          <Route index element={<VideoHistoryPage />} />
          <Route path="video-detail" element={<VideoDetailPage />} />
        </Route>

        <Route path="my-channel-page">
          <Route index element={<MyChannelPage />} />
          <Route path="video-detail" element={<VideoDetailPage />} />
          <Route path="playlist-detail">
            <Route index element={<PlaylistDetailPage />} />
            <Route path="video-detail" element={<VideoDetailPage />} />
          </Route>
        </Route>

        <Route path='my-content-page' >
          <Route index element={<MyContentPage />} />
          <Route path='video-detail' element={<VideoDetailPage />} />
        </Route>

      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)