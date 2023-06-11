import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Validation from './Validation';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home';
function App() {

 
  

  return (
    <>
      
  <Router>
    
        <Routes>
          <Route path="/validation" element={<Validation />}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        
      </Router>

</>

  )
}

export default App
