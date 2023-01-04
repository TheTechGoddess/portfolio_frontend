import React from 'react'
import skills from '../assets/Skills.png'
import figma from '../assets/figma.png'
import adobe1 from '../assets/adobe1.png'
import adobe2 from '../assets/adobe2.png'
import html from '../assets/html.png'
import css from '../assets/css.png'


const Skills2 = () => {
  return (
    <div className='w-full flex-col justify-center px-5 content-center bg-[#222831] text-[#FDE7EF] md:px-20 pb-20'>
        <div className='flex justify-center mb-8' >
            <img src={skills} alt="" className='w-[40%] md:w-[20%]' style={{marginTop: '-40px'}} />
            <p className='text-center absolute text-lg md:text-2xl' style={{marginTop: '-10px'}}>Skills</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full xl:px-40 l:px-32 md:20 px-4 py-5'>
            <div className='w-full py-3 justify-between flex'>
                <p className='text-l font-bold self-start'>Figma</p>
                <img src={figma} alt="" className='self-end w-60 sm:w-72 md:w-96 lg:w-auto '/>
            </div>
            <div className='w-full py-3 justify-between flex'>
                <p className='text-l font-bold self-start'>Adobe Illustrator</p>
                <img src={adobe1} alt="" className='self-end w-60 sm:w-72 md:w-96 lg:w-auto '/>
            </div>
            <div className='w-full py-3 justify-between flex'>
                <p className='text-l font-bold self-start'>Adobe Photoshop</p>
                <img src={adobe2} alt="" className='self-end w-60 sm:w-72 md:w-96 lg:w-auto '/>
            </div>
            <div className='w-full py-3 justify-between flex'>
                <p className='text-l font-bold self-start'>HTML</p>
                <img src={html} alt="" className='self-end w-60 sm:w-72 md:w-96 lg:w-auto '/>
            </div>
            <div className='w-full py-3 justify-between flex'>
                <p className='text-l font-bold self-start'>CSS</p>
                <img src={css} alt="" className='self-end w-60 sm:w-72 md:w-96 lg:w-auto '/>
            </div>
        </div>
    </div>
  )
}

export default Skills2