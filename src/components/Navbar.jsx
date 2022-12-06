import React, {useState} from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import download from '../assets/download_button.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#222831] text-[#EEEEEE] md:px-20'>
      <div>
        <img src={Logo} alt="" style={{width: '150px'}} />
      </div>

       {/* menu */}
      <div>
       <ul  className='hidden md:flex'>
            <li>Home</li>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li><img src={download} alt="" /></li>
            
        </ul>
      </div>  
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars className='text-2xl' /> : <FaTimes className='text-2xl' />}
        </div>    

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#222831] flex flex-col items-center justify-start'}>
            <li className='py-3 text-lg'>Home</li>
            <li className='py-3 text-lg'>About Me</li>
            <li className='py-3 text-lg'>Portfolio</li>
            <li className='py-3 text-lg'>Contact</li>
            <li className='py-3 text-lg'>
                <img src={download} alt="" />
                </li>
        </ul>
    </div>
  )
}

export default Navbar