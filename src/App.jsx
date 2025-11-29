import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServiceSection from './components/ServiceSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import HowIWorkSection from './components/HowIWorkSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>,
      <AboutSection/>,
      <ServiceSection/>,
      <ExperienceSection/>,
      <EducationSection/>
      <HowIWorkSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
