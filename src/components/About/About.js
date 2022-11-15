import React from 'react'
import './About.css';
import Card from './Card';
import polgon from './polygon.svg';
import SkillsSection from './SkillsSection';
import {motion} from 'framer-motion'
const About = () => {
    const features = [
        {title:'Fast', paragraph:'Fast load times and lag free interaction, my highest priority.'},
        {title:'Intuitive', paragraph:'Fast load times and lag free interaction, my highest priority.'},
        {title:'Responsive', paragraph:'Fast load times and lag free interaction, my highest priority.'},
        {title:'Dynamic', paragraph:'Fast load times and lag free interaction, my highest priority.'},

    ]
  return (
    <div className='about-container w-full text-center '
    id='about' >
        <div className='about-div w-full'>
            <h2 className='text-5xl font-bold '>
                ABOUT
            </h2>
            <div className='border-div  w-24 m-auto mt-4'>
            </div>
        </div>
        <div className='cards mt-16 w-full px-20 sm:px-10 md:px-14 lg:px-52 xl:px-56'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5 '>
                {
                    features.map((items)=>{
                        
                        return <motion.div
                        whileHover={{ scale: 1.1, }}
                        
                        >
                            <Card
                            imgSrc={polgon}
                            className="inline-block" 
                            title={items.title}
                            paragraph={items.paragraph}
                            />
                        </motion.div>
                    })
                }
            </div>
            <SkillsSection/>
        </div>
    </div>
  )
}

export default About