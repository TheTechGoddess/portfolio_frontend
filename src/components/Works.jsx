import React from 'react'
import works from '../assets/RecentWorks.png'

const Works = () => {
  return (
    <div className='w-full flex-col justify-center px-5 content-center bg-[#1D222A] text-[#FDE7EF] md:px-20 pb-20'>
        <div className='flex justify-center mb-8' >
            <img src={works} alt="" className='w-[70%] md:w-[50%] -mt-5 md:-mt-10'/>
            <p className='text-center absolute text-lg md:text-2xl' style={{marginTop: '-10px'}}>Recent Works</p>
        </div>
    </div>
  )
}

export default Works