import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getMovieDetails from '../../utils/movie-db/getMovieDetails';
import './MovieDetails.css'



function MovieDetails() {
  const [movieDetails,setMovieDetails] = useState({})
  const [imageURL ,setImgUrl] = useState('https://image.tmdb.org/t/p/w1280')
  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async () => {
        const {getDetailsWithId} = getMovieDetails();
        const data =await  getDetailsWithId(id);
        setMovieDetails(data);
        console.log(data)
        setImgUrl(`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`)
    }
    fetchData();
  },[])
  
  return (
    <div className='bg-[#010100] p-20 h-screen w-full text-white' style={{height:'auto'}}>
        <div className='' >
            <div id='image-container' >
                  <img id="image-container-img" src={imageURL} ></img>
                  <div id='overlay-text' >
                    <div id='original-language'>
                      {movieDetails.original_language}
                    </div>
                    <div>
                      <div id='title'>{movieDetails.title}</div>
                    </div>
                    <div>
                      <div>{movieDetails.overview}</div>
                    </div>
                    <div>
                      <div>{movieDetails.release_date}</div>
                    </div>
                    <div className='flex items-center border border-white'>
                      <img src='/star.svg' id='star' />
                      <small>{movieDetails.vote_average}</small>
                    </div>
                    <div>
                      <div className='flex items-center'>
                        <img src='/money.svg' id='star'/>
                        <div>{movieDetails.revenue}</div>
                      </div>
                    </div>
                    <div>
                      <button id='watch-now'>Watch Now</button>
                    </div>

                  </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails




// style={{backgroundImage:`url(${imageURL})`,backgroundRepeat:'no-repeat'}}

{/* <div className='h-2/3  border border-white flex' style={{height:'auto'}}  >
            <div className='w-1/3 border border-red-600 '>
                <div>
                <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} >
                </img>
                </div>
            </div>
            <div className='w-2/3 border border-purple-500'> 
               
                <div>
                  <div></div>
                </div>
            </div>
         
        </div> */}