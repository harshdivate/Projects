import React,{useContext} from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'
import './Navigation.css'
import userContext from '../../context/userContext'

function Navigation() {
  const navigate = useNavigate();
  const {isUserLoggedIn,removeUser,addUser} = useContext(userContext); 
  

  return (
    <div className='h-fit flex flex-row bg-[#1E2837] '>
        <nav className='flex m-3  w-full items-center justify-between  text-xl text-white'>
            {/* For Image and Heading */}
            <div className='flex font-bold text-3xl items-center '>
                <img src="code.svg"></img>
                <div className='mx-4'>&lt;Code/&gt;</div>
            </div>
            {/* For Nav Links */}
            <div className='w-1/2  flex justify-around '>
                <NavLink>Home</NavLink>
                <NavLink>Products</NavLink>
                <NavLink
                to = "/register"
                >SignUp</NavLink>
                <NavLink
                
                >{isUserLoggedIn() ? "Logout" : "Logout"}</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navigation