
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Document_Library from './Pages/Document_Library.js';

export const Routing = () => {
  return (
   
    <Routes>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path = "/Document_Library" element = {<Document_Library/>}/>
    </Routes>
  )
}
