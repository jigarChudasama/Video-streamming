import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthHeader from '../components/AuthHeader'

function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  )
}

export default AuthLayout
