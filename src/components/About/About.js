import Card from './Card';
import polgon from './polygon.svg';
import SkillsSection from './SkillsSection';
import {motion} from 'framer-motion'
import SectionHeading from '../SectionHeading/SectionHeading';
import {IoIosSpeedometer} from 'react-icons/io';
import {MdDevices} from 'react-icons/md';
import {FaRocket} from 'react-icons/fa';
import {AiFillBulb} from 'react-icons/ai';


const About = () => {
    
    const features = [
        {title:'Fast', paragraph:'Fast load times and lag free interaction, my highest priority.', icon: <IoIosSpeedometer/>,},
        {title:'Intuitive', paragraph:'Fast load times and lag free interaction, my highest priority.',icon:<AiFillBulb/>},
        {title:'Responsive', paragraph:'Fast load times and lag free interaction, my highest priority.',icon:<MdDevices/>, },
        {title:'Dynamic', paragraph:'Fast load times and lag free interaction, my highest priority.', icon: <FaRocket/>},

    ]
  return (
    <div className='about-container w-full text-center '
    id='about' >
        <SectionHeading text={"ABOUT" } colorCode={"45474A"} />
        <div className='cards mt-16 w-full px-20 sm:px-10 md:px-14 lg:px-52 xl:px-56'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5 '
            data-aos="fade-up"
            data-aos-once='true'
            >
                {
                    features.map((items)=>{
                        
                        return <motion.div
                        whileHover={{ scale: 1.1, }}
                        
                        >
                            <Card
                            key={items.title}
                            imgSrc={polgon}
                            className="inline-block" 
                            title={items.title}
                            paragraph={items.paragraph}
                            icon={items.icon}
                            
                            />
                        </motion.div>
                    })
                }
            </div>
            <SkillsSection/>
        </div>
    </div>
  )
}

export default About