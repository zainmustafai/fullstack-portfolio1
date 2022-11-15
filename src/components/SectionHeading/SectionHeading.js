import React from 'react'

const SectionHeading = ({text,colorCode}) => {
  return (
    <div className='w-full text-center' style={{paddingTop:'5%',}}>
        <h2 className='about-container w-full text-center text-5xl font-bold' style={{color:`#${colorCode}`}}>
            {text}
        </h2>
        <div className='w-24 m-auto mt-4' style={{border: `2px #${colorCode} solid`,}} >

        </div>
    </div>
  )
}

export default SectionHeading