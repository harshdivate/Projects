import { useState } from 'react'
import {useForm} from "react-hook-form";

import './App.css'

function App() {
  
  const {register,handleSubmit,formState :{errors}} = useForm();
  const onSubmit = (data) => {
      console.log(data)
  }
  return (
    <div className='w-full h-full bg-gray-600 flex items-center justify-center border border-black'>      
      <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div>
          <label>Name</label>
          <input
          type="text"
          placeholder='Enter Username'
          {...register("firstname",{required:true})}
          >
          </input>
          <p>{errors.firstname?.message}</p>
          </div>
          <div>
          <label>Name</label>
          <input
          placeholder='Enter Password'
          {...register("password",{required:'Please Enter a Password',pattern : {
            value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m,
            message : 'Password should contain uppercase, lowercase and min length 8 with special characters'
          }
        })}
          >
          </input>
          <p>{errors.password?.message}</p>
          </div>
          <button type='submit'>Submit</button>
      </form>
      </div>
  )
}

export default App
