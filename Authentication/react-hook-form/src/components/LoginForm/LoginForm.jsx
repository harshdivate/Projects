import React,{useState} from 'react'
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import usehandleLogin from '../../hooks/useHandleLogin';

function LoginForm() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {register,handleSubmit,formState :{errors}} = useForm();
    const {handleLogin} = usehandleLogin();
    
    
    const onSubmit =async (data) => {
      const email = data.firstname;
      const password = data.password
      setEmail(email)
      setPassword(password)
      try {
        const loginObject =await handleLogin(email,password);
        if (loginObject) {
          console.log(loginObject);
          console.log("Successfully Logged In");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
      
    }  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='border border-black justify-around bg-[#007200] sticky' id="container">
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
  )
}

export default LoginForm