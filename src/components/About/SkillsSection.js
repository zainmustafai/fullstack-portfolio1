import { motion } from 'framer-motion';
import React from 'react'
import Bar from './Bar';
import profilePicture from './dp.svg';
import './Animation.css'

const skillset=[
    {title:'Design', score:90},
    {title:'HTML', score:90},
    {title:'React', score:80},
    {title:'JavaScript', score:75},
    {title:'NodeJS', score:65},
    {title:'UI Design', score:50},
    {title:'Photoshop', score:50},
    {title:'Figma', score:50},
    {title:'CSS', score:90},
    {title:'MongoDB', score:80}
];

const SkillsSection = () => {
  return (
    <section className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-5 text-center'>
        <div className='dp-div flex flex-col items-center gap-4 col-span-2 md:col-span-1 p-1 '
        data-aos="fade-right"
        >
            <motion.div
            whileHover={{ scale: 1.1, }}
            className=' w-full px-[16%]'>
                <img src={profilePicture} alt='Profile Pictur' className='img shadow-md rounded-full'  />
            </motion.div>
            <h1 className='text-green-800 font-bold text-2xl '>
                Who's this guy?
            </h1>
            <p className='text-green-900'>
                I'm a freelance Full-Stack Developer from Jhelum, Punjab Pakistan. <br/>
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            </p>
            <a href='/'>Let's make something special.</a>
        </div>
        {/* Skillset Bars */}
        <div className='skill-set h-full col-span-2 md:col-span-1 grid grid-cols-1 gap-4'
        data-aos="fade-left"
        >
            {
                skillset.map((item)=>
                {
                    return<div
                    key={item.title}
                    >
                        <Bar title={item.title} score={item.score} />
                    </div>
                })
            }
        </div>

    </section>
  )
}

export default SkillsSection