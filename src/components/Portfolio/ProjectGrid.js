import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectGrid = ({projectArry,}) => {
  return (
    <div className='grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '
    >
        {
            projectArry.map((obj)=>{
              let i=1000,j=500;
              i=i+j;
                return <ProjectCard 
                projectObject={obj}
                animationDuration={i}
                />
            })
        }
    </div>
  )
}

export default ProjectGrid