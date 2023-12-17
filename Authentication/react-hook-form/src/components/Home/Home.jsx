import React, { useContext, useEffect,useState } from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import configureAppWrite from '../../appwrite/configureAppwrite';
import userContext from '../../context/userContext';

import TrendingMovies from '../TredingMovies/TrendingMovies';
import ComedyMovies from '../ComedyMovies/ComedyMovies';
import TopRated from '../TopRated/TopRated';
import Upcoming from '../UpcomingMovies/Upcoming';
import ActionMovies from '../ActionMovies/ActionMovies';


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

    <div  className=' bg-white-500 bg-[#010100] text-white '>
          {/* Movie Set Time out  */}
          <div className=''>
                Set time out 
          </div>
          {/* Now Playing */}

         <div>
         <TrendingMovies/>
          <Upcoming/>
          <ComedyMovies/>
          <TopRated/>
          <ActionMovies/>
         </div>

         <div className='text-xl text-white'>
          sdfas
         </div>
          


    </div>
  )
}

export default Home


