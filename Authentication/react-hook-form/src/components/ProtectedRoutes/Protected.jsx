import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../../context/userContext';

function Protected(props) {
    const {isUserLoggedIn} = useContext(userContext)
    const {Component} = props
    console.log(Component);
    const navigate = useNavigate();
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        console.log('Local storage is'+isLoggedIn)
        console.log(isLoggedIn )
        if(!isLoggedIn){
            navigate('/login')
        }
    },[])
  return (

    <Component/>
  )
}

export default Protected