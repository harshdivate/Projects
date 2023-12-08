import LoginForm from "./components/LoginForm/LoginForm";
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import config from './config/config';
import {Client,Account} from "appwrite";
import './App.css'

function App() {
 
  return (
    <div  id="main" className='w-full h-screen bg-white-600 flex items-center justify-center border border-black'>    
      <LoginForm/>  
    </div>
  )
}

export default App
