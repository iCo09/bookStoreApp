import React from 'react'
import Home from './home/Home'
import {Navigate, Route, Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser,setAuthUser] = useAuth()
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/course" element ={authUser ? <Courses/>: <Navigate to="/signup"/>}/>
      <Route path="/signup" element ={<Signup/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
