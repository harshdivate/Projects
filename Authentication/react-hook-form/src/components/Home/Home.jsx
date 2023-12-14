import React, { useContext, useEffect } from 'react'
import './Home.css'
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

    <div id="container" className='w-full h-screen bg-white-500 '>
          {/* Movie Set Time out  */}
          <div className='h-fit'>
                Set time out 
          </div>
          {/* Now Playing */}
          <div className='w-full h-fit border border-black'>
                <div className='w-full h-fit text-2xl '>Now Playing &gt;</div>
                {/* Caraousel Div */}
                <div className='border border-white'>
                      <div className='border border-white'>
                            <div >
                              <img src='https://image.tmdb.org/t/p/original/zpbgktIR7GkOS83PBAzLlzLSQ5W.jpg' className='h-56 w-56'/> 
                            </div>
                      </div>
                </div>
          </div>
    </div>
  )
}

export default Home