import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Service from './Components/Service'
import TechStack from './Components/TechStack'
import Stats from './Components/Stats'
import Why from './Components/Why'
import Test from './Components/Test'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="font-sans">
      <Header/>
      <Hero/>
      <Service/>
      <TechStack/>
      <Stats/>
      <Why/>
      <Test/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
