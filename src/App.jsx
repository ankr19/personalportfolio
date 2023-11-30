import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Skills from './Pages/Skills'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Education from './Pages/Education'
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Work/>
      <Contact/>
    </>
  )
}

export default App
