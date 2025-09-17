import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
