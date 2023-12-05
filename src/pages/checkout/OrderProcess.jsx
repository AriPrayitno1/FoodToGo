import React from 'react'
import { Link } from 'react-router-dom'

const OrderProcess = () => {
  return (
    <>
      <div className='bg-kedua px-20 py-12 min-h-screen'>
        <div className='flex justify-center'>
          <div className='bg-white w-1/2 text-black p-8 font-bold flex flex-col items-center gap-8'>
            <img src="../../public/assets/checklist.png" className='w-20'/>
            <h1 className='text-2xl'>Pesan anda telah diproses</h1>
            <Link to='/'>
              <button className='text-sm bg-blue-400 text-white rounded-md w-48 py-2 '>
                Kembali ke Beranda
              </button>
            </Link>
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default OrderProcess