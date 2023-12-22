import React,{useEffect,useState} from 'react'
import getReccomandation  from '../../utils/movie-db/getReccomandation.js'
import { settings } from '../../config/sliderSetting'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MovieReccomandation(props) {
    const [baseImgUrl,setbaseImgUrl] = useState('https://image.tmdb.org/t/p/w300');
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        const {movieId} = props
        const fetchData = async () => {
            const {getReccomandationData} = getReccomandation();
            const data = await getReccomandationData(movieId);
            setData(data)
        }
        fetchData();
    },[])
    
  return (
    <div className='m-10'>

    <div className='text-4xl'>Similar &gt;</div>
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

export default MovieReccomandation