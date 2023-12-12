import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component} = props
    console.log(Component);
    const navigate = useNavigate();
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem("isLoggedIn") || false;
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