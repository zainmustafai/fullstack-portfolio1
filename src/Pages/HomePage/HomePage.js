import React, { useEffect } from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from '../../components/Portfolio/Portfolio'
//const About = React.lazy(()=> import('../../components/About/About'));
import Aos from 'aos'; // animate on scroll
import "aos/dist/aos.css"; // aos css file
// npm i aos --save 
//Possible  ANIMATION PROPS data-aos="fade-left", fade-right, up, down etc....

const HomePage = () => {
  useEffect(()=>{
    Aos.init({
        //duration:1000,

        mirror:true, // reverse animation when scroll past the component.
        anchorPlacement: 'top',

    })
    },[]);
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