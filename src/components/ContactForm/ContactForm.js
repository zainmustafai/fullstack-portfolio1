import React from 'react'
import Button from '../Button/Button'
import SectionHeading from '../SectionHeading/SectionHeading'
import TriangleClipPath from '../TriangleClipPath/TriangleClipPath'

const ContactForm = () => {
  return (
    
<div classNameName="w-full h-screen">
    
    <div className="bg-[#252934] h-[50vh] mt-6">
    <TriangleClipPath/>
    <SectionHeading text={"CONTACT"} colorCode="ffffff" className="my-[3%]"/>
    </div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <form action="" method="post">
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Name</label>
                        <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-gray-300">Phone</label>
                        <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Subject</label>
                        <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-gray-300">Message</label>
                        <textarea type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-[2%]">
                    <Button text={"Send Messages"}/>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default ContactForm