import React, { useEffect,useState } from 'react'
import getComedy from '../../utils/movie-db/getComedy';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { settings  } from '../../config/sliderSetting';
import Slider from "react-slick";

function ComedyMovies() {
    const [data,setData] = useState([]);
    const [baseImgUrl,setbaseImgUrl] = useState('https://image.tmdb.org/t/p/w300')
 

    useEffect(()=>{
        const fetchData = async () =>{
            const {getComdeyMovies} = getComedy();
            const d = await getComdeyMovies();
            setData(d);
        }
        fetchData();
    },[])

  return (
    <div className='m-10'>
        <div className='text-4xl'>Comedy &gt;</div>
            <div>
            {/* Slider Tag Below */}
                <Slider{...settings}>

                {data.map((m)=>(
                    <div key={m.id} className='movie-main-div '>
                
                    <div className='  flex justify-center items-center '>
                        <img src={baseImgUrl+m.poster_path} className='rounded-lg hover:rounded-xl' /> 
                        </div>
                        <div className='flex flex-col m-2 '>
                        <div className='text-xl font-bold'>{m.title}</div>
                        <div className='text-md'>{(m.release_date).split('-')[0]}</div>
                        <small className='text-xs'>{m.vote_average}</small>
                    </div>
                </div>

                ))}
                </Slider>
        </div>
          
    </div>
  )
}

export default ComedyMovies