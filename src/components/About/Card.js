import React from 'react'
import './Card.css';

const Card = ({title,paragraph,imgSrc}) => {
  return (
    <div className='p-1 flex flex-col items-center gap-2'>
        <div className='hexagon flex flex-cols items-center justify-center'>
            <img src={imgSrc} alt='icon' className='h-auto w-9/12'/>
        </div>
        <h2 className='font-bold text-green-800 text-2xl'>
            {title}
        </h2>
        <p className='w-full text-green-800 font-normal'>
            {paragraph}
        </p>
    </div>
  )
}

export default Card