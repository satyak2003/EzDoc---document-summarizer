import { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Summarize from './pages/Summarize'
import LandingPage from './pages/LandingPage'
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signin from './pages/Signin'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        {/* <Route path='/home' element={<Home/>}/>
        <Route path='/summarize' element={<Summarize/>}/> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signin/>} />
      </Routes>
      <ToastContainer/>
      {/* <Footer/> */}
      </div>
    </Router>
    
  );
}

export default App
