import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Navbar from '../Components/Navbar/Navbar'
import Signup from '../Components/SignUp'

export default function AllRoutes() {
  return (
    <div>
<Routes>
<Route path="/" element={<Navbar/>}/>
<Route path="/login" element={<Login/>}/>   
<Route path="/signup" element={<Signup/>}/>
 </Routes>
    </div>
  )
}
