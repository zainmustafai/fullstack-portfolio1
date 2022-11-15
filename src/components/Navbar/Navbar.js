import React from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import { motion } from 'framer-motion';



const menuItems=[
  {text:'Home',id: '#hero'},
  {text:'ABOUT',id: '#about'},
  {text:'PORTFOLIO',id: '#portfolio'},
  {text:'BLOG',id: '#blog'},
  {text:'CONTACT',id: '#contact'},
]

const Navbar = () => {
  return (
    <div className='nav-container w-full py-3  md:pl-8 lg:pl-11 xl:pl-14 flex items-center justify-between shadow-sm'>
        <ul className=' menu text-xl text-white font-medium hidden lg:flex  sm:gap-6 md:gap-8 lg:gap-10 '>
            
          {
            menuItems.map((item)=>{
              return <motion.div
              whileHover={{ scale: 1.1, }}
              whileTap={{ scale: 0.9 }}
              >
                  <li><a href={item.id} key={item.id} >{item.text}</a></li>
              </motion.div> 
            })
          }
            
        </ul>
        <GiHamburgerMenu className=' text-white text-2xl mx-12 lg:hidden'/>
    </div>
  )
}

export default Navbar