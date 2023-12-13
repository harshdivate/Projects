import React, { useEffect } from 'react'
import Navigation from '../Navigation-Bar/Navigation'
import { Outlet } from 'react-router-dom'
import UserContextProvider from '../../context/UserContextProvider'

function Layout() {
  return (
    
    <>
      <UserContextProvider>
        <Navigation/>
        <Outlet/>
      </UserContextProvider>  
      
    </>
  )
}

export default Layout