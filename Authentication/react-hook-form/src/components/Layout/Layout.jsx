import React, { useEffect } from 'react'
import Navigation from '../Navigation-Bar/Navigation'
import { Outlet } from 'react-router-dom'

function Layout() {
  
  return (
    <>
        <Navigation/>
        <Outlet/>
    </>
  )
}

export default Layout