import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import { motion } from "framer-motion"; // Animation Hooks.



const menuItems=[
  {text:'HOME',id: '#hero'},
  {text:'ABOUT',id: '#about'},
  {text:'PORTFOLIO',id: '#portfolio'},
  {text:'BLOG',id: '#blog'},
  {text:'CONTACT',id: '#contact'},
]

const Navbar = () => {
  

  return (
    <motion.div className='nav-container w-full py-3  md:pl-8 lg:pl-11 xl:pl-14 flex items-center justify-between shadow-lg'
    
    >
        <ul className=' menu text-xl text-white font-medium hidden lg:flex  sm:gap-6 md:gap-8 lg:gap-10 '>
            
          {
            menuItems.map((item)=>{
              return <motion.div
              key={item.id}
              whileHover={{ scale: 1.1, }}
              whileTap={{ scale: 0.9 }}
              >
                  <li className='hover:text-yellow-600'
                  ><a href={item.id} key={item.id} >{item.text}</a></li>
              </motion.div> 
            })
          }
            
        </ul>
        <GiHamburgerMenu className=' text-white text-2xl mx-12 lg:hidden'/>
    </motion.div>
  )
}

export default Navbar