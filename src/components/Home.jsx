import React from 'react'
import Hello from '../assets/hello.png'
import Image_background from '../assets/image_background.png'
import Image from '../assets/image.png'


const Home = () => {
  return (
    <div name='home' className='w-full flex-col px-5 justify-between items-center bg-[#222831] text-[#FDE7EF] md:px-20 pb-20'>
        <div className='flex justify-between pt-20 pb-5 md:pt-30'>
            <img src={Hello} alt="" className='h-auto w-[80%]' />
            <div className='flex-col'>
                <p style={{writingMode: 'vertical-rl'}} className='rotate-360 pb-5 ' >Follow Me</p> 
                <hr className='w-[5%] h-[90px] border-solid border-2 border-[#00ADB5] rounded ml-2' />

            </div>
        </div>
        <div className='md:flex justify-between '>
            <div className='justify-start'>
                <h2 className='text-5xl md:text-7xl font-bold py-2'>I'm</h2>
                <h1 className='text-5xl font-bold py-4 md:text-7xl'>Magyar <span className='text-[#00ADB5]'>Màtè</span> </h1>
                <hr className='w-[30%] border-solid border-2 border-[#00ADB5] rounded' />
                <div className='py-4 tracking-wide md:text-xl text-[#afb2b6]'>
                    <p>UI/UX Designer and Graphics</p>
                    <p>Designer</p>
                </div>
                
                <hr className='w-full border-[#00adb5] border-1' />
                <div className='py-12'>
                    <p className='text-[#8E96A1] text-bold text-base pb-2'>Steve Jobs, co-founder of Apple, Inc.</p>
                    <p >"Design is not just what it looks like and feels</p>
                    <p>like.  Design i how it works" </p>
                </div>
                
            </div>
            <div className='relative hidden md:flex'>
                <img src={Image_background} alt="" className='w-[80%]' />
                <img src={Image} alt="" className='absolute w-[80%]' style={{marginTop: '-100px'}}/>
            </div>
        </div>
    </div>
  )
}

export default Home