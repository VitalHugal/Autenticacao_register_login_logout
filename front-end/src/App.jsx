import React, { useState } from 'react'

// importando react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importanto componentes
import Login from "./components/Login";
import Register from './components/Register';
import Home from './components/Home';
import './App.css'

function App() {
  
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registre-se" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
    </Router>
  )
}

export default App
