import React from 'react'
import Footer from "../components/Footer";
import HelpBtn from "../components/HelpBtn";
import profile from "../../public/assets/profile-img.png"

const Profile = () => {
  return (
    <>
      <div className='bg-kedua px-20 py-12'>
        <div className='flex justify-center'>
          <div className=' flex w-4/5 bg-white'>
            <div className='flex flex-col basis-2/5 text-black font-bold'>
              <div className='flex items-center gap-2 p-6'>
                <img src={profile} className='w-16'/>
                <h1>Julia Ningsih</h1>
              </div>
              
              <ul> 
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
          </div>
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