import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import './App.css'
import Dashboard from './pages/Dashboard'
import Classic from './pages/Classic'

function App() {

  return (
    <div id='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/classic" element={<Classic />} />
          <Route exact path="/quote" element={<Classic />} />
          <Route exact path="/devil_fruit" element={<Classic />} />
          <Route exact path="/image" element={<Classic />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
