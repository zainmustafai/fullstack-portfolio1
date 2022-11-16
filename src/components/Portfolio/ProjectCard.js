import React from 'react'

const ProjectCard = ({projectObject, animationDuration}) => {
  return (
    <div className='w-full overflow-hidden'
    >
        <img src={projectObject.img} alt={'project-img'} className='h-full'
        data-aos="fadeInUp"
        data-aos-duration={animationDuration}
        />
    </div>
  )
}

export default ProjectCard