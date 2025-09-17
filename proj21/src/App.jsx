import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
