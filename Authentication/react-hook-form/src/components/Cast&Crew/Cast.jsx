import React,{useEffect,useState} from 'react'
import getCastDetails from '../../utils/movie-db/getCastDetails'
import { useAsyncError } from 'react-router-dom'
import './Cast.css'

function Cast(props) {
    const [data,setData] = useState([]);
    const [imageURL,setimageURL] = useState('https://image.tmdb.org/t/p/w200');
    useEffect(()=>{
        const {movieId} = props 
        const fetchData = async () => {
            const {getCastDetailsData} = getCastDetails();
            const d = await getCastDetailsData(movieId);
            setData(d);
        }   
        fetchData()
    },[])
    console.log(data)
  return (
    <div className='w-full h-auto  border border-white'>
        <div id="scroll-container">
            {data.map((c)=>(
                <div id={c.id}  >
                    <img className='rounded-[10px] w-full h-auto p-5' src={imageURL+c.profile_path}></img>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cast