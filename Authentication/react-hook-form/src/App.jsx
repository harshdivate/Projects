import LoginForm from "./components/LoginForm/LoginForm";
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import config from './config/config';
import {Client,Account} from "appwrite";
import './App.css'
import Navigation from "./components/Navigation-Bar/Navigation";

function App() {
 
  return (
    <div  id="main" className='w-full h-screen bg-white-600  border border-black'>   
       <Navigation/>
      {/* <LoginForm/>   */}
    </div>
  )
}

export default App
