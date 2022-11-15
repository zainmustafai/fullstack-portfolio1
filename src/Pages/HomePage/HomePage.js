import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className='w-full min-w-min'>
        <Hero/>
        <Navbar/>
        <About/>
    </div>
  )
}

export default HomePage