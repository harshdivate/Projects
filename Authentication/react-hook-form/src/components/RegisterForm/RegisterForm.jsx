import React from 'react'
import { NavLink } from 'react-router-dom'
import './Register.css';
import {useForm} from "react-hook-form";

function RegisterForm() {
    const {register,handleSubmit,formState :{errors}} = useForm();
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#0e1620] text-white'>
        {/* Form Part */}
        
            <div className='border border-[#798797] rounded-lg w-1/4 h-fit'>
                {/* Logo Image */}
                <div className='flex  justify-center m-2'>
                    <img src="register.svg" />
                </div>
                {/* Create Account Text */}
                <div className='flex justify-center flex-col items-center m-2'>
                    <p className='font-bold text-xl'>Create your Account</p>
                    <p className='text-[#a0a0a1]'>To use our services you have to create an account.</p>
                </div>
                {/* Form */}
                <div>
                    <form>
                        <div >
                            
                            <label className='m-2'>Username</label>
                            <input 
                            type='text' 
                            {...register("username",{required:"This is required"})}
                            placeholder='Enter Username' 
                            className='p-5 '/>
                        </div>
                        <div>
                            <label className='m-2'>Email</label>
                            <input 
                            {...register("email")}
                            type='email' 
                            placeholder='Enter Email' 
                            className='p-5'/>
                        </div>
                        <div >
                            <label 
                            className='m-2'>
                                Password</label>
                            <input 
                            type='text' 
                            placeholder='Enter Password' 
                            className='p-5'/>
                        </div>
                        <div >
                            <button 
                            id="register" 
                            className='font-bold text-xl'>
                                Register</button>
                        </div>
                    </form>
                    {/* Already have an account */}
                    <div className='flex  justify-center items-center m-2'>
                        Already have an account?<NavLink>Sign in</NavLink>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default RegisterForm