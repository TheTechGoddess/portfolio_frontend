import React from 'react'
import skills from '../assets/Skills.png'
import figma from '../assets/figma.png'
import adobe1 from '../assets/adobe1.png'
import adobe2 from '../assets/adobe2.png'
import html from '../assets/html.png'
import css from '../assets/css.png'


const Skills2 = () => {
  return (
    <div className='w-full h-screen flex-col justify-center px-5 content-center bg-[#222831] text-[#FDE7EF] md:px-20'>
        <div className='flex justify-center mb-8' >
            <img src={skills} alt="" className='w-[40%] md:w-[20%]' style={{marginTop: '-40px'}} />
            <p className='text-center absolute text-lg md:text-2xl' style={{marginTop: '-10px'}}>Skills</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full bg-orange-500'>
            <div className='lg:flex justify-between'>
                <p className='text-xl self-start'>Figma</p>
                <img src={figma} alt="" className='self-end'/>
            </div>
            <div className='lg:flex justify-between'>
                <p className='text-xl self-start'>Adobe Illustrator</p>
                <img src={adobe1} alt="" className='self-end'/>
            </div>
            <div className='lg:flex justify-between'>
                <p className='text-xl self-start'>Adobe Photoshop</p>
                <img src={adobe2} alt="" className='self-end'/>
            </div>
            <div className='lg:flex justify-between'>
                <p className='text-xl self-start'>HTML</p>
                <img src={html} alt="" className='self-end'/>
            </div>
            <div className='lg:flex justify-between'>
                <p className='text-xl self-start'>CSS</p>
                <img src={css} alt="" className='self-end'/>
            </div>
        </div>
    </div>
  )
}

export default Skills2