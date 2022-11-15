import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from '../../components/Portfolio/Portfolio'

const HomePage = () => {
  return (
    <div className='w-full min-w-min'>
        <Hero/>
        <Navbar/>
        <About/>
        <Portfolio/>
    </div>
  )
}

export default HomePage