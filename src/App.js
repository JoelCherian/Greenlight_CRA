import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import {Routing} from './Routes'

const App = () => {
  return (

    <BrowserRouter>
    <Sidebar>
      <Routing></Routing>
    </Sidebar>
    </BrowserRouter>
    
    
  )
}

export default App