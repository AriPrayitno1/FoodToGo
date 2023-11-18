import React from 'react'
import Button from './Button'

const  Navbar = () => {
  return (
    <div className='flex justify-between align-middle bg-utama px-8 py-4'>
      <img className="w-24 h-12" src="./src/assets/logo.png" alt="logo" />
        <ul className='flex gap-6 text-white text-lg'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Food Menu</li>
          <li className='cursor-pointer'>Services</li>
        </ul>
      <Button/>
    </div>
  )
}

export default Navbar