import { useState } from 'react'
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import config from './config/config';
import {Client,Account} from "appwrite";
import './App.css'

function App() {
  const navigate = useNavigate();
  const client = new Client().setEndpoint(config.appWriteURL).setProject(config.appWriteProjectID)
  const account = new Account(client);
  
  const handleLogin = async (email,password) => {
    try{
      const loginObject =   await  account.createEmailSession(email,password)
      if(loginObject){
        navigate('/login')
        console.log('Successfully Loged In')
      }
    }catch(error){
      console.log(error)
    }
  }

  const {register,handleSubmit,formState :{errors}} = useForm();
  const onSubmit = (data) => {
    const email = data.firstname;
    const password = data.password
    handleLogin(email,password)
  }
  return (
    <div  id="main" className='w-full h-screen bg-white-600 flex items-center justify-center border border-black'>      
      <form onSubmit={handleSubmit(onSubmit)} className='border border-black justify-around bg-[#007200]' id="container">
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
      </form>
      </div>
  )
}

export default App
