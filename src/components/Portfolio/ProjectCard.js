import React from 'react'

const ProjectCard = ({projectObject}) => {
  return (
    <div className='w-full overflow-hidden'>
        <img src={projectObject.img} className='h-full' />
    </div>
  )
}

export default ProjectCard