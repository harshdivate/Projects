import React, { useContext, useEffect,useState } from 'react'
import Slider from "react-slick";
import './Home.css';
import { useNavigate } from 'react-router-dom';
import configureAppWrite from '../../appwrite/configureAppwrite';
import userContext from '../../context/userContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import getTrending from '../../utils/movie-db/getTrending';


function Home() { 
  
  const [data,setData]= useState([]);
  const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // cssEase: "linear",
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
};

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
    useEffect(async()=>{
        const isLoggedIn = isUserLoggedIn();
        if(isLoggedIn){
            navigate("/")
        }
        getUserDetails();
        const {getTrendingData} = getTrending();
       
        
    },[])
    const trending =  getTrending();
    setData(getTrendingData());
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
            <div className=' '>
              <div className='  flex justify-center items-center '>
                    <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
                  </div>
                  <div className='flex flex-col m-2 '>
                    <div className=''>If I cant</div>
                    <div className=''>2023</div>
                    <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div>
              <div className='  flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
              </div>flex justify-center items-center
              <div className='flex flex-col m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div>
              <div className='  flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
              </div>
              <div className='flex flex-col m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div>
              <div className='  flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
              </div>
              <div className='flex flex-col m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div>
              <div className=' flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
              </div>
              <div className='flex flex-col m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div>
              <div className='  flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
              </div>
              <div className='flex flex-col m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div>
              <div className='  flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
              </div>
              <div className='flex flex-col m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div>
              <div className='  flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' /> 
              </div>
              <div className='flex flex-col m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>

            <div className='border border-white'>
              <div className='  flex justify-center items-center'>
                  <img src='https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg' className='rounded-lg' /> 
              </div>
              <div className='flex flex-col justify-start items-start m-2'>
                <div className=''>If I cant</div>
                <div className=''>2023</div>
                <small className='text-xs'>Thriller Crime Drama</small>
              </div>
            </div>
          
              </Slider>
          </div>

          </div>
    </div>
  )
}

export default Home


