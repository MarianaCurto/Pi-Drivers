import './App.css'
import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './views/landing/Landing'
import Home from './views/homee/Home'
import Detail from './views/detail/Detail'
import Nav from './components/navbar/Nav'


function App() {

  const { pathname } = useLocation();
  

  return (
  <div>

{pathname !== "/" && <Nav />}

    <Routes>
      <Route path='/' element={<Landing/>} ></Route>
      <Route path='/home' element={<Home/>} ></Route>
      <Route path='/detail/:id' element= {<Detail />}></Route>
    </Routes>
  </div>
  )
}

export default App
