import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './views/landing/Landing'
import Home from './views/homee/Home'


function App() {
  

  return (
  <div>

    <Routes>
      <Route path='/' element={<Landing/>} ></Route>
      <Route path='/home' element={<Home/>} ></Route>
    </Routes>
  </div>
  )
}

export default App
