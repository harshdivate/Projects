import React from 'react'
import Layout from './components/Layout/Layout.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import Protected from './components/ProtectedRoutes/Protected.jsx'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="" element={<Protected Component={Home} />}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/register" element={<RegisterForm/>}></Route>
      </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
