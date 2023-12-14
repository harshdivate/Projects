import React, { useEffect } from 'react'
import Navigation from '../Navigation-Bar/Navigation'
import { Outlet } from 'react-router-dom'
import UserContextProvider from '../../context/UserContextProvider'

function Layout() {
  return (
    
    <div className=''>
      <UserContextProvider>
        <Navigation/>
        <Outlet/>
      </UserContextProvider>  
      
    </div>
  )
}

export default Layout