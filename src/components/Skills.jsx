import React from 'react'
import WhatIDo from '../assets/whatido.png'
import PD from '../assets/pd.png'
import ID from '../assets/ID.png'
import LD from '../assets/LD.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full flex-col justify-center px-5 content-center bg-[#1D222A] text-[#FDE7EF] md:px-20 pb-20'>
        <div className='flex justify-center mb-8' >
            <img src={WhatIDo} alt="" className='w-[50%] md:w-[30%]' style={{marginTop: '-25px'}} />
            <p className='text-center absolute text-lg md:text-2xl' style={{marginTop: '-10px'}}>What I Do</p>
        </div>
        <div className='lg:hidden w-full flex flex-col justify-center items-center'>
          <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-8'>
            <img src={PD} alt=""  className="my-5" />
            <p className="my-5">Product Design</p>
          </div>
          <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-5'>
            <h1 className='font-bold text-3xl my-5 text-[#00ADB5]'>UI/UX</h1>
            <p className="my-5">UI/UX</p>
          </div>
          <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-5'>
            <img src={ID} alt=""  className="my-5"/>
            <p className="my-5">Icon Design</p>
          </div>
          <div className='w-[200px] h-[200px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-5'>
            <img src={LD} alt="" className="my-5" />
            <p className="my-5">Logo Design</p>
          </div>
        </div>
        <div className='hidden lg:flex justify-around items-center'>
          <div className='w-[150px] h-[150px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-8'>
            <img src={PD} alt=""  className="my-3"/>
            <p className="my-3">Product Design</p>
          </div>
          <div className='w-[150px] h-[150px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-5'>
            <h1 className='font-bold text-2xl my-3 text-[#00ADB5]'>UI/UX</h1>
            <p className="my-3">UI/UX</p>
          </div>
          <div className='w-[150px] h-[150px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-5'>
            <img src={ID} alt=""  className="my-3"/>
            <p className="my-3">Icon Design</p>
          </div>
          <div className='w-[150px] h-[150px] flex flex-col items-center justify-center bg-[#222831] rounded-2xl my-5'>
            <img src={LD} alt=""  className="my-3"/>
            <p className="my-3">Logo Design</p>
          </div>
        </div>
    </div>
  )
}

export default Skills