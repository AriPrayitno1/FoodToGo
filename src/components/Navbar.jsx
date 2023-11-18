import React from 'react'
import Button from './Button'

const  Navbar = () => {
  return (
    <div className='flex justify-between align-middle bg-utama px-8 py-4 sticky top-0'>
      <img className="w-24 h-12" src="./src/assets/logo.png" alt="logo" />
        <ul className='flex gap-6 text-white text-lg'>
          <li className='cursor-pointer'>Beranda</li>
          <li className='cursor-pointer'>Daftar Menu</li>
          <li className='cursor-pointer'>Layanan</li>
        </ul>
      <Button/>
    </div>
  )
}

export default Navbar