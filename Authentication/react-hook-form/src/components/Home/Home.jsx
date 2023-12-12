import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem("isLoggedIn") || false;
        if(isLoggedIn){
            navigate("/")
        }
    },[])
  return (
    <div className='w-full h-screen text-3xl bg-green-500'>Home</div>
  )
}

export default Home