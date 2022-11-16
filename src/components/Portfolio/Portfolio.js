import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Portfolio.css'
import ProjectGrid from './ProjectGrid';
import {AllProjects,csharpProjects,nodeProjects,reactProjects} from './Projects.js'

const tabs=["all",'react','node','c#'];
const Portfolio = () => {
  const [isTabActive,setIsTabActive]=useState(false);
  const [gridItems,setGridItems]=useState(AllProjects); //portfolio items
  // change grid items on tab click
  const handleTabClick=(e)=>{
    if(e.target.id==='node')
    {
      setGridItems(nodeProjects);
    }else if(e.target.id==='c#'){
      setGridItems(csharpProjects)
    }else if(e.target.id==='react'){
      setGridItems(reactProjects);
    }else if(e.target.id==='all'){
      setGridItems(AllProjects);
    }
  }
  return (
    <section 
    id='portfolio' 
    className='portfolio-section w-full'
    data-aos="fade-up"
    data-aos-once='true'

    
    >
        <SectionHeading text={"PORTFOLIO"} colorCode={"45474A"}/>
        <div className=' tabs w-full'>
          {/* Tabs */}
          <ul className='flex items-center justify-around'
          >
            {
              tabs.map((item)=>{
                return<li>
                  <button
                  id={item.toString()}
                   onClick={handleTabClick}>
                    {item.toString().toUpperCase()}
                  </button>
                </li>
              })
            }
          </ul>
        </div>
        <div className='px-12 pt-6'>
          {/* Grid Container  */}
          <ProjectGrid projectArry={gridItems}
          data-aos="fade-up"
          />
        </div>
        
    </section>
  )
}

export default Portfolio