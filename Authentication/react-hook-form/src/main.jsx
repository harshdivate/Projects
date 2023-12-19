import React from 'react'
import Layout from './components/Layout/Layout.jsx'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import Protected from './components/ProtectedRoutes/Protected.jsx'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'
import AccountDetails from './components/AccountDetails/AccountDetails.jsx'
import MovieDetails from './components/MovieDetails/MovieDetails.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="" element={<Protected Component={Home} />}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/register" element={<RegisterForm/>}></Route>
      <Route path="/accountDetails" element={<AccountDetails/>}></Route>
      <Route path="movieDetails/:id" element={<MovieDetails/>}></Route>
      </Route>  
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
