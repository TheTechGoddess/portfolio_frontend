import React from 'react'
import skills from '../assets/Skills.png'

const Skills2 = () => {
  return (
    <div className='w-full flex-col justify-center px-5 content-center bg-[#222831] text-[#FDE7EF] md:px-20'>
        <div className='flex justify-center mb-8' >
            <img src={skills} alt="" className='w-[40%] md:w-[20%]' style={{marginTop: '-40px'}} />
            <p className='text-center absolute text-lg md:text-2xl' style={{marginTop: '-10px'}}>Skills</p>
        </div>
    </div>
  )
}

export default Skills2