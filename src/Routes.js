
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'

export const Routing = () => {
  return (
   
    <Routes>
        <Route path = "/Home" element = {<Home/>}/>
    </Routes>
  )
}
