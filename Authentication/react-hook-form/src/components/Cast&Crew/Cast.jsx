import React,{useEffect,useState} from 'react'
import getCastDetails from '../../utils/movie-db/getCastDetails'
import { useAsyncError } from 'react-router-dom'

function Cast(props) {
    const [data,setData] = useState([]);
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
    <div className='w-full h-auto'>
        <div>
            {data.map((c)=>(
                <div></div>
            ))}
        </div>
    </div>
  )
}

export default Cast