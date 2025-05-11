import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
