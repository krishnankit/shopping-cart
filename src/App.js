import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' exact element={< Home  />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App