import React from 'react'
import config from '../../config/config';
import {Client,Account , ID} from "appwrite";
import { NavLink } from 'react-router-dom'
import './Register.css';
import {useForm} from "react-hook-form";
import useHandleRegistration from '../../hooks/useHandleRegistration';

function RegisterForm() {
    const {register,handleSubmit,formState :{errors}} = useForm();
    const registerUser = useHandleRegistration();

    const onSubmit = async (data) =>{
        console.log(data)
        const {username,email,password}= data
        try{
            const response = await registerUser(username,email,password);
            console.log(response)
        }catch(err){
            console.log(err)
        }
       
    }

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
                    <form
                    onSubmit={handleSubmit(onSubmit)}
                    >
                        <div >
                            
                            <label className='m-2'>Username</label>
                            <input 
                            type='text' 
                            {...register("username",{required:true,
                                minLength:{value:3,message:"Username should be atleast 3 characters"},
                                maxLength: {value:16,message: "Username must be 3 to 16 characters"}
                            })}
                            placeholder='Enter Username' 
                            className='p-5 '/>
                            {errors.username?.message && (<small>{errors.username.message}</small>)}

                        </div>
                        <div>
                            <label className='m-2'>Email</label>
                            <input 
                            {...register("email",{required:true,maxLength:v=>v.length<30,pattern:{
                                value :  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message :"Email address must be a vaild address."
                            }
                            })}
                            type='text' 
                            placeholder='Enter Email' 
                            className='p-5'/>
                            {errors.email?.message && (<small>{errors.email.message}</small>)}
                        </div>
                        <div >
                            <label 
                            className='m-2'>
                                Password</label>
                            <input 
                            {...register("password",{required:true,pattern : {
                                value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m,
                                message : 'Password should contain uppercase, lowercase and min length 8 with special characters'
                              }
                            })}
                            type='text' 
                            placeholder='Enter Password' 
                            className='p-5'/>
                            {errors.password?.message && (<small>{errors.password.message}</small>)}
                        </div>
                        <div >
                            <button 
                            id="register" 
                            type="submit"
                            className='font-bold text-xl'>
                                Register</button>
                        </div>
                    </form>
                    {/* Already have an account */}
                    <div className='flex  justify-center items-center m-2'>
                        Already have an account?<NavLink to="/login">Sign in</NavLink>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default RegisterForm