import {Link} from 'react-router-dom'
import { useAuth } from './src/AuthContext'
import React from 'react'

const  Navbar = () => {

  const {isLogin, login} = useAuth()

  return (
    <>
    {isLogin ? (
      <div className='flex justify-between align-middle bg-utama px-8 py-4 z-30 sticky top-0'>
        <img className="w-24 h-12" src="./src/assets/logo.png" alt="logo" />
          <div className='flex gap-6 text-white text-lg'>
              <Link to="/" className='cursor-pointer'>Beranda</Link>
              <Link to="/listmenu" className='cursor-pointer'>List Menu</Link>
              <Link to="/menu" className='cursor-pointer'>Cari Menu</Link>          
          </div>
        
      </div>
    ) : (
        <Link to="../login"><button onClick={login} className="border-solid border-2 border-kedua text-white w-20 h-10 rounded-md">
        Login</button></Link>
    )}
      {isLogin && <img src='./src/assets/fb.png'/>}
     
    </>
    
  )
}

export default Navbar