import React,{useState} from 'react'
import './LoginForm.css';
import {useForm} from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import usehandleLogin from '../../hooks/useHandleLogin';

function LoginForm() {
    const navigate = useNavigate();
    const {register,handleSubmit,formState :{errors}} = useForm();
    const {handleLogin} = usehandleLogin();
    
    
    const onSubmit =async (data) => {
      const email = data.firstname;
      const password = data.password
      try {
        const loginObject =await handleLogin(email,password);
        if (loginObject) {
          console.log(loginObject);
          console.log("Successfully Logged In");
          localStorage.setItem("isLoggedIn",true);
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
              <img src="login1.svg" ></img>
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
            <div>
                <button id="register" type="submit">Sign In</button>
            </div>
          </form>
          {/* Dont Have an account ? */}
          <div className='flex items-center justify-center '>
            <p className=''>Dont have an account ? <NavLink>Sign Up</NavLink></p>
          </div>
        </div>

      </div>

    </div>
    
   
  )
}

export default LoginForm


{/* <form onSubmit={handleSubmit(onSubmit)} className='border border-black justify-around bg-[#007200] sticky' id="container">
<div>
<label className='block w-full text-start text-2xl m-2 text-white font-bold'>Name</label>
<input
type="text"
className=' px-2 py-2 mx-2 my-1 w-full rounded-lg outline-none'
placeholder='Enter Username'
{...register("firstname",{required:true})}
>
</input>
<p>{errors.firstname?.message}</p>
</div>
<div>
<label className='block text-2xl m-2 text-white font-bold'>Password</label>
<input
className=' px-2 py-2 mx-2 my-1 w-full rounded-lg outline-none'
placeholder='Enter Password'
{...register("password",{required:true,pattern : {
  value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m,
  message : 'Password should contain uppercase, lowercase and min length 8 with special characters'
}
})}
>
</input>
<p className='text-white'>{errors.password?.message}</p>
</div>
<div className='flex items-center justify-center m-2'>
<button type='submit'
className='bg-[#da1e37] w-1/3 rounded-full py-2  text-white border-none font-bold '
>Submit</button>
</div>
</form> */}