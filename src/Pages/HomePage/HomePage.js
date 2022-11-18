import React, { useEffect, useState } from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from '../../components/Portfolio/Portfolio'
//const About = React.lazy(()=> import('../../components/About/About'));
import Aos from 'aos'; // animate on scroll
import "aos/dist/aos.css"; // aos css file
import { useInView} from "react-intersection-observer"; // ANimate on Visibility 
import { motion, useAnimation } from "framer-motion"; // Animation Hooks.
import BlogsSection from '../../components/BlogsSection/BlogsSection'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
// npm i aos --save 
//Possible  ANIMATION PROPS data-aos="fade-left", fade-right, up, down etc....

const HomePage = () => {

  useEffect(()=>{
    Aos.init({
        duration:1000,
        mirror:true, // reverse animation when scroll past the component.
        anchorPlacement: 'top',

    })
    },[]);
    // Control Nav Bar.
  const control = useAnimation();
  const [navbarRef, navbarInView] = useInView();
  const [topBarStyle, setTopBarStyle]=useState({});

  const navAnimation = {
    // variant for navbar animation 
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1 }
  };
  useEffect(()=>{
    if(navbarInView){
      console.log('Inview');
      control.start('hidden');
      setTopBarStyle({
        display:'none',
        transition: '1s'

      });
    }else{
      console.log('out of view');
      control.start('visible');
      setTopBarStyle({
          position:'fixed',
          width:'100%',
          zIndex:2,
          top:0,
        });
    }
  },[navbarInView,control])

  return (
    <div className='w-full min-w-min'>
      <motion.div 
      style={topBarStyle}
      variants={navAnimation}
      initial='hidden'
      animate={control}
      >
        <Navbar/>
      </motion.div>
      <Hero/>
      <div
      ref={navbarRef} // ref for Inview Intersection observer
      >
        <Navbar/>
      </div>
      <About/>
      <Portfolio/>
      <BlogsSection/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default HomePage


