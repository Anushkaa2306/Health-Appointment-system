import React from 'react'
import Logo from '../../pages/Logo.png'
import profile from '../../pages/profile.png'
const Navbar = () => {
  return (
    <div className='flex items-center h-20 '>
      <div className='flex items-center gap-0 '>
        <img src={Logo} alt="" className='h-20' />
        <h1 className='text-4xl font-medium'>Do Care</h1>
      </div>
      <div className='flex items-center border-2 h-10 ml-24 p-3 w-96 rounded-4xl'>
        <i className="fa-solid fa-magnifying-glass text-gray-500 mr-2"></i>
        <input type="text" placeholder='search' />
      </div>
      <div className='flex items-center ml-auto gap-7 mr-5'>
        <i className='fa-regular fa-bell font-bold text-xl'></i>
        <img src={profile} alt="" className='w-12 rounded-full' />
      </div>
    </div>
  )
}

export default Navbar

