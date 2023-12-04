import React from 'react'
import { Link } from 'react-router-dom'

const VerifBerhasil = () => {
  return (
    <>
      <div className="bg-kedua min-h-screen">
          <div className='px-96 py-12'>
            <div className='bg-white text-black p-8 font-bold flex flex-col items-center gap-8'>
              <img src="../../public/assets/checklist.png" className='w-20'/>
              <h1 className='text-2xl'>Pndaftaran anda telah kami proses</h1>
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

export default VerifBerhasil