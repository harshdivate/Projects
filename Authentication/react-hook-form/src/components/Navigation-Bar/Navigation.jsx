import React,{useContext} from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'
import './Navigation.css'
import userContext from '../../context/userContext'


function Navigation() {
  const navigate = useNavigate();
  const {isUserLoggedIn,removeUser} = useContext(userContext); 
  
  const handleLogout = () => {
    if(isUserLoggedIn()){
      removeUser();
      navigate('/')
    }else{
      navigate('/')
    }
  }

  return (
    <div className='h-fit flex flex-row bg-[#1E2837] '>
        <nav className='flex m-3  w-full items-center justify-between  text-xl text-white'>
            {/* For Image and Heading */}
            <div className='flex font-bold text-3xl items-center '>
                <img className='img' src="code.svg"></img>
                <div className='mx-4'>&lt;Code/&gt;</div>
            </div>
            {/* For Nav Links */}
            {isUserLoggedIn() ? (<div className='w-1/2  flex justify-around '>
              {/* User is Logged In */}
                <NavLink>Home</NavLink>
                <NavLink>Favourite</NavLink>     
                <NavLink><button onClick={handleLogout}>Logout</button></NavLink>
                <NavLink>Account</NavLink>
            </div>):(<div className='w-1/2 flex justify-around'>
                <NavLink className='disabled'>Home</NavLink>
                <NavLink to = "/register">SignUp</NavLink>
                <NavLink to="/login">Login</NavLink>

                     
            </div>)}
            
        </nav>
    </div>
  )
}

export default Navigation