import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getMovieDetails from '../../utils/movie-db/getMovieDetails';


function MovieDetails() {
  const [movieDetails,setMovieDetails] = useState({})
  const [imageURL ,setImgUrl] = useState('https://image.tmdb.org/t/p/w1280')
  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async () => {
        const {getDetailsWithId} = getMovieDetails();
        const data =await  getDetailsWithId(id);
        setMovieDetails(data);
        setImgUrl(`https://image.tmbd.org/t/p/w1280${data.backdrop_path}`)
    }
    fetchData();
  },[])
  
  return (
    <div className='back-drop' style={{backgroundImage:`url(${imageURL})`}}>
        <div className='bg-[#010100] text-white h-screen cont' >
            <div className='bg-red'>{movieDetails.budget} sfds</div>
        </div>
    </div>
  )
}

export default MovieDetails

// style={{backgroundImage:`url(${imageURL}/${id})`}}