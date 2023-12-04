import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Bantuan = () => {
  return (
    <>
      <div className="bg-kedua">
        <div className='px-20 py-12'>
          <div className='bg-white text-black p-4 text-xl font-bold flex justify-center'>
            <h1>Admin Support</h1>
          </div>
            <form action="" className='py-6 px-24 bg-white text-black '>
              <h1 className='flex justify-center mb-6 text-lg'>Tinggalkan pesan anda di bawah ini dan akan kami hubungi secepatnya</h1>

              <h1 className='mb-2'>Nama:</h1>
              <input type="text" placeholder='Nama lengkap anda' className='w-full outline-none border-solid border-2 border-gray-400 
              px-2.5 py-1.5 mb-8 resize-none rounded-lg bg-white'/>

              <h1 className='mb-2'>Email:</h1>
              <input type="email" placeholder='Email anda'  className='w-full outline-none border-solid border-2 border-gray-400 
              px-2.5 py-1.5 mb-8 resize-none rounded-lg bg-white'/>

              <h1 className='mb-2'>Nomor Telepon:</h1>
              <input type="text" placeholder='Nomor Telepon anda'  className='w-full outline-none border-solid border-2 border-gray-400 
              px-2.5 py-1.5 mb-8 resize-none rounded-lg bg-white'/>

              <h1 className='mb-2'>Pesan:</h1>
              <textarea rows="5" placeholder="Pesan anda"  className='w-full outline-none border-solid border-2 border-gray-400 
              px-2.5 py-1.5 mb-8 resize-none rounded-lg bg-white'></textarea>

              <div className='flex justify-center'>
                <Link to="/bantuanscs">
                  <button className='bg-blue-400 text-white flex items-center gap-1 
                  rounded-md py-1 px-4 w-26 h-8'>
                    Kirim
                  </button>
                </Link>              
              </div>
            </form>
          
        </div>
      </div>
      <Footer></Footer>
    </>
    
  )
}

export default Bantuan