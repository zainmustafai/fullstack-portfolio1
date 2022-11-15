import React from 'react'
import Bar from './Bar';
import profilePicture from './dp.svg';
const skillset=[
    {title:'CSS', score:90},
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
    <section className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-5 text-center'>
        <div className='dp-div flex flex-col items-center gap-4 col-span-2 md:col-span-1 '>
            <img src={profilePicture} alt='Profile Pictur' className='img shadow-md rounded-full'/>
            <h1 className='text-green-800 font-bold text-2xl '>
                Who's this guy?
            </h1>
            <p className='text-green-900'>
                I'm a freelance Full-Stack Developer from Jhelum, Punjab Pakistan. <br/>
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            </p>
            <a href='/'>Let's make something special.</a>
        </div>
        <div className='skill-set h-full col-span-2 md:col-span-1 grid grid-cols-1 gap-4'>
            {
                skillset.map((item)=>
                {
                    return<div
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