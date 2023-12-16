import React, { useContext, useEffect,useState } from 'react'
import Slider from "react-slick";
import './Home.css';
import { useNavigate } from 'react-router-dom';
import configureAppWrite from '../../appwrite/configureAppwrite';
import userContext from '../../context/userContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import getTrending from '../../utils/movie-db/getTrending';
import { settings  } from '../../config/sliderSetting';


function Home() { 
  const [data,setData]= useState([]);
  const [baseImgUrl,setbaseImgUrl] =useState('https://image.tmdb.org/t/p/w300')
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
        const {getTrendingData} = getTrending();
        const t= await getTrendingData();
        setData(t)
    };

    fetchData();  
    },[])

    console.log(data)
    
  return (

    <div id="container" className='h-screen bg-white-500 '>
          {/* Movie Set Time out  */}
          <div className=''>
                Set time out 
          </div>
          {/* Now Playing */}
          <div className='m-10'>
            <div className='text-2xl'>Trending  &gt;</div>
            <div>
            {/* Slider Tag Below */}
            <Slider {...settings}>

              {data.map((m)=>(
                <div key={m.id} className='  border border-white'>
            
                <div className='  flex justify-center items-center '>
                      <img src={baseImgUrl+m.backdrop_path} /> 
                    </div>
                    <div className='flex flex-col m-2 '>
                      <div className=''>{m.title}</div>
                      <div className=''>{m.release_data}</div>
                      <small className='text-xs'>{m.vote_average}</small>
                </div>
              </div>

              ))}
            </Slider>
          </div>
          
          </div>
    </div>
  )
}

export default Home


