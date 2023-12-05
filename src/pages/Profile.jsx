import React from 'react'
import Footer from "../components/Footer";
import HelpBtn from "../components/HelpBtn";
import profile from "../../public/assets/profile-img.png"
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <div className='bg-kedua px-20 py-12'>
        <div className='flex flex-col items-center'>
          <div className=' flex w-2/3 bg-white text-black font-bold mb-4'>
            <div className='flex flex-col basis-2/5'>
              <div className='flex items-center gap-2 p-6'>
                <img src={profile} className='w-16'/>
                <h1>Julia Ningsih</h1>
              </div>
              
              <ul className='cursor-pointer'> 
                <li className='flex items-center p-8 gap-4 hover:bg-slate-200 duration-300'>
                  <img src="../../public/assets/edit-profile.png" className='w-8'/>
                  <h1>Edit Profile</h1>
                </li>
                <li className='flex items-center p-8 gap-4 hover:bg-slate-200 duration-300'>
                  <img src="../../public/assets/notification.png" className='w-8'/>
                  <h1>Notifikasi</h1>
                </li>
                <li className='flex items-center p-8 gap-4 hover:bg-slate-200 duration-300'>
                  <img src="../../public/assets/histori.png" className='w-8'/>
                  <h1>Histori</h1>
                </li>
              </ul>
            </div>

            <div className='basis-3/5'>
              <div className='flex items-center gap-2 p-6'>
                <h1>Lihat/Edit</h1>
              </div>
              <ul className='w-full cursor-pointer'> 
                <li className='flex items-center p-8 gap-4 hover:bg-slate-200 duration-300'>
                  <img src="../../public/assets/email.png" className='w-8'/>
                  <h1>Email</h1>
                </li>
                <li className='flex items-center p-8 gap-4 hover:bg-slate-200 duration-300'>
                  <img src="../../public/assets/password.png" className='w-8'/>
                  <h1>Password</h1>
                </li>
                <li className='flex items-center p-8 gap-4 hover:bg-slate-200 duration-300'>
                  <img src="../../public/assets/phone.png" className='w-8'/>
                  <h1>No Hp</h1>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/Login">
            <button className="btn btn-sm btn-outline rounded-md px-8 text-base text-white bg-utama">
            Keluar</button>
          </Link>
          
        </div>
        
        <div className="flex justify-end">
          <HelpBtn></HelpBtn>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Profile