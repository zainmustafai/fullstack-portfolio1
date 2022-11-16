import React from 'react'
import   './Bar.css'
// Score 
const Bar = ({title,score}) => {
  
  return (
    <div className={'bar-bg w-full h-8 overflow-hidden flex items-center justify-start' }
    data-aos="fade-up"
    >
        <p className='font-bold title py-1 text-center  z-1 text-white flex items-center pl-6 w-full sm:w-3/12 '>
                {title}
        </p>
        <div className='w-full h-full flex items-center justify-between' >
          <div className=' h-full' style={{ width:`${score}%`}}
          >
            <div className='filler fill-animation'>
              {/* Animated filler bar */}
            </div>
          </div>
          <p className='mr-2 text-green-600' >
            {score}%
          </p>
        </div>
        
    </div>
  )
}

export default Bar
