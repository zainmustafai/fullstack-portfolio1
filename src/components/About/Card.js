import React from 'react'
import './Card.css';

const Card = ({title,paragraph,imgSrc}) => {
  return (
    <div className='flex flex-col items-center gap-3 inline-block'>
        <div className='hexagon'>
            <img src={imgSrc} alt='icon'/>
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