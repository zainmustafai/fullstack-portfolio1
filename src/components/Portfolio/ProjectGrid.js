import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectGrid = ({projectArry,}) => {
  return (
    <div className='grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '
    >
        {
            projectArry.map((obj)=>{
                return <ProjectCard projectObject={obj} />
            })
        }
    </div>
  )
}

export default ProjectGrid