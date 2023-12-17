import React, { useContext, useEffect } from 'react'
import './LoginForm.css';
import userContext from '../../context/userContext';
import {useForm} from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import usehandleLogin from '../../hooks/useHandleLogin';
import configureAppWrite from '../../appwrite/configureAppwrite';

function LoginForm() {
    const navigate = useNavigate();
    const {register,handleSubmit,formState :{errors}} = useForm();
    const {handleLogin} = usehandleLogin();
    const {addUser,removeUser,isUserLoggedIn,addUserLoginDetails} = useContext(userContext)

    // useEffect(()=>{
    //   removeUser();
    // })
    const handleSignInWithGoogle = () => {
      const account = configureAppWrite();
      addUser();
      console.log(account.createOAuth2Session('google','http://localhost:5173/','http://localhost:5173/login'))
    }

    const onSubmit =async (data) => {
      const email = data.firstname;
      const password = data.password
      try {
        const loginObject =await handleLogin(email,password);
        if (loginObject) {
          // console.log(typeof loginObject)
          // console.log("Successfully Logged In");
          addUser();
          addUserLoginDetails(loginObject.$id)
          // localStorage.setItem("isLoggedIn",true);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
      
    }  

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#0e1620] text-white '>
      {/* Center Form Div */}
      <div className='border border-white h-fit w-3/12 p-4 rounded-lg '>
        {/* Logo */}
        <div className='flex justify-center'>
              <img className='img' src="login1.svg" ></img>
        </div>
        {/* Welcome Text */}
        <div className='flex flex-col  items-center justify-center '>
          <p className='text-2xl font-bold'>Welcome</p>
          <p>Please sign in to your account.</p>
        </div>
        <div className='h-3/4  '>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className='w-full flex flex-col justify-evenly '>
            {/* Email */}
            <div >
                <label>Email</label>
                <input
                {...register("firstname",{required:true})}
                type="text" 
                placeholder='Enter Email'/>
                {errors.firstname?.message  && (<small>{errors.firstname.message}</small>)}
            </div>
            {/* Password */}
            <div>
                <label>Password</label>
                <input 
                {...register("password",{required:true,pattern : {
                  value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m,
                  message : 'Password should contain uppercase, lowercase and min length 8 with special characters'
                }
                })}
                type="text" 
                placeholder='Enter Password'/>
                {errors.password?.message && (<small>{errors.password.message}</small>)}
            </div>
            {/* Forgot Password */}
            <div className='flex items-end'>
                  <NavLink>Forgot Password?</NavLink>
            </div>
            {/* Button */}
            <div className='font-bold text-lg'>
                <button id="register" type="submit">Sign In</button>
            </div>
          </form>
          {/* Dont Have an account ? */}
          <div className='flex items-center justify-center '>
            <p className=''>Dont have an account ? <NavLink>Sign Up</NavLink></p>
          </div>
          <div className='flex justify-center m-4'>
            <button
            className='bg-white text-black py-1 px-4 rounded-full flex items-center justify-center google'
            onClick={handleSignInWithGoogle}>
             <img src='google-logo.png' className='h-6 w-6'/>  
            Sign in with Google</button>
          </div>
        </div>

      </div>

    </div>
    
   
  )
}

export default LoginForm


