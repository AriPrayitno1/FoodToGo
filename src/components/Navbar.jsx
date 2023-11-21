import {Link} from 'react-router-dom'
import React from 'react'
import LoginBtn from './LoginBtn'

const  Navbar = () => {
  return (
    <div className='flex justify-between align-middle bg-utama px-8 py-4 z-30 sticky top-0'>
      <img className="w-24 h-12" src="./src/assets/logo.png" alt="logo" />
        <div className='flex gap-6 text-white text-lg'>
          <Link to="/" className='cursor-pointer'>Beranda</Link>
          <Link to="/menu" className='cursor-pointer'>Daftar Menu</Link>
        </div>
      <Link to="../login"><LoginBtn/></Link>
    </div>
  )
}

export default Navbar