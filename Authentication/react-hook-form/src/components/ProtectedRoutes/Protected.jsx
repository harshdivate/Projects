import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../../context/userContext';

function Protected(props) {
    const {isUserLoggedIn} = useContext(userContext)
    const {Component} = props
    const navigate = useNavigate();
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        console.log('Local storage is'+isLoggedIn)
        console.log(isLoggedIn )
        if(!isLoggedIn){
            navigate('/login')
        }
    },[localStorage.getItem('isLoggedIn')])
  return (

    <Component/>
  )
}

export default Protected