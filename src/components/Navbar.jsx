import React from 'react'
import Logo from "/logo.jpg";

const Navbar = () => {
  return (
    <header className='h-16 shadow-md'>
       <nav className='flex justify-between items-center w-9/12 mx-auto'>
        <a href='#' className='flex items-center space-x-1'>
            <img src={Logo} alt='logo' className='w-14 rounded-full'></img>
        </a>

        {/* Navbar items  */}
        <div className='flex space-x-10 items-center'>
        <ul className='sm:flex space-x-5 items-center hidden'>
            <li><a href=''>How it works?</a></li>
            <li><a href=''>Features</a></li>
            <li><a href=''>About us</a></li>
        </ul>
        <button className='px-5 py-1 border-2 border-[primary] text-yellow-500
        font-md rounded-lg'>Login</button>
        </div>
       </nav>
    </header>
  )
}

export default Navbar
