import React from 'react'
import './Hero.css';

import Button from '../Button/Button';


const Hero = () => {
  return (
    <div className='hero-container  flex flex-col justify-center items-center text-center '
    id='hero'
    >
        <div className='flex flex-col items-center justify-center gap-4 p-4'>
            <h1 className='text-white text-5xl'>
                Hello, I'm <span className='my-name text-yellow-600 font-medium'>Zain</span>.
            </h1>
            <h1 className='text-white text-5xl'>
                I'm a full stack developer
            </h1>
            <Button text={"View My Work"}/>
        </div>
    </div>
  )
}

export default Hero