import React from 'react'
import   './Bar.css'
// Score 
const Bar = ({title,score}) => {
  return (
    <div className={'bar-bg w-full h-8 overflow-hidden flex items-center justify-between' } >
        <div className='filler h-full'
        style={{ width:`${score}%`}}
        >
            
        </div>
        <p className='mr-8'>
                {score}%
        </p>
        <p className='font-bold title py-1 w-32 z-1 absolute text-white flex items-center pl-6'>
                {title}
        </p>
    </div>
  )
}

export default Bar
