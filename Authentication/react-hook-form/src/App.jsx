import LoginForm from "./components/LoginForm/LoginForm";
import './App.css'
import Navigation from "./components/Navigation-Bar/Navigation";
// import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
 
  return (
    <div  id="main">   
       <Navigation/>
       {/* <RegisterForm/> */}
      <LoginForm/>  
    </div>
  )
}

export default App


//Class name for future reference.
// className='w-full h-screen bg-white-600  border border-black'
