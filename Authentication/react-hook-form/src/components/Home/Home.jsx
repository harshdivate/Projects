import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import configureAppWrite from '../../appwrite/configureAppwrite';
import userContext from '../../context/userContext';

function Home() {
    const navigate = useNavigate();
    const {isUserLoggedIn} = useContext(userContext);

    const getUserDetails = async () =>{
      const account = configureAppWrite();
      try {
        const session = await account.getSession('current');
        if(session){
          console.log('Session');
        }
      } catch (error) {
          console.log(error);
      }
    }
    useEffect(()=>{
        const isLoggedIn = isUserLoggedIn();
        if(isLoggedIn){
            navigate("/")
        }
        getUserDetails();
    },[])
  return (
    <div className='w-full h-screen text-3xl bg-green-500'>Home</div>
  )
}

export default Home