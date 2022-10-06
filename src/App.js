import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Document_Library from './pages/Document_Library.js';
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Register from './pages/Register';


const App = () => {
  return (

<BrowserRouter>


  {/* <Sidebar/> */}

    <Routes>

    <Route element={<Sidebar/>}>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path = "/Document_Library" element = {<Document_Library/>}/>
     </Route>

     <Route path = "/Login" element = {<Login/>}/>
     <Route path = "/Register" element = {<Register/>}/>
        
    </Routes>
 



</BrowserRouter>
    
    
  )
}

export default App