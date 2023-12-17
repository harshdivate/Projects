import React, { useContext, useEffect,useState } from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import configureAppWrite from '../../appwrite/configureAppwrite';
import userContext from '../../context/userContext';

import TrendingMovies from '../TredingMovies/TrendingMovies';


function Home() { 
  const navigate = useNavigate();
  const {isUserLoggedIn} = useContext(userContext);
  
    const getUserDetails = async () =>{
      const account = configureAppWrite();
      try {
        const session = await account.getSession('current');
        if(session){
          // console.log('Session');
        }
      } catch (error) {
          // console.log(error);
      }
    }
    useEffect(()=>{
      const fetchData = async () => {
        const isLoggedIn = isUserLoggedIn();
        if (isLoggedIn) {
            navigate("/");
        }
        getUserDetails();
    };

    fetchData();  
    },[])

  
    
  return (

    <div id="container" className='h-screen bg-white-500 '>
          {/* Movie Set Time out  */}
          <div className=''>
                Set time out 
          </div>
          {/* Now Playing */}

          <TrendingMovies/>
          


    </div>
  )
}

export default Home


