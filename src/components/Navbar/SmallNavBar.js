import React from 'react'
import { motion } from 'framer-motion'
const SmallNavBar = ({menuArray,}) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className='w-screen max-h-max bg-[#1B242F] shadow-lg rounded-md sm:hidden'
    >
        <ul className='p-[4%]'>
            {
                menuArray.map((item)=>{
                    return <li
                    className='p-[1%] max-w-max max-h-max text-white font-semibold hover:text-yellow-800'
                    key={item.id}
                    >
                    <a href='/'>{item.text}</a>
                    </li>
                })
            }
        </ul>
    </motion.div>
  )
}

export default SmallNavBar