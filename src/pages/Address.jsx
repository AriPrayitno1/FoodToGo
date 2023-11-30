import React from 'react'
import HelpBtn from '../components/HelpBtn'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <>
      <div className='bg-kedua px-20 py-12'>
        <div className='text-black'>
          <div className='flex justify-center '>
            <h1 className='text-2xl font-bold'>Checkout</h1>
          </div>
          
          <div className='bg-white w-full rounded-sm px-16 py-8'>
            {/* ADDRESS FORM */}
            <div className='grid grid-cols-3 gap-y-4 mb-8'>
              <div>
                <h1>Nama</h1>
                <input type="text" className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
              <div>
                <h1>Alamat</h1>
                <input type="text" className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
              <div>
                <h1>Tanggal</h1>
                <input type="date" className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
              <div>
                <h1>Email</h1>
                <input type="email" className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
              <div>
                <h1>Kecamatan/Kelurahan</h1>
                <input type="text" className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
              <div>
                <h1>Waktu</h1>
                <input type="time" className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
              <div>
                <h1>No Hp</h1>
                <input type="tel" pattern='(62) [0-9] {12,15}' className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
              <div>
                <h1>Kode Pos</h1>
                <input type="number" className='bg-white shadow-md p-2 outline-none rounded-md'/>
              </div>
            </div>
            
            <div className='flex justify-between'>
              <button className="btn btn-sm btn-outline rounded-md px-8 text-base text-black">Kembali</button>
              <Link to="/payment"><button className='btn btn-sm btn-outline rounded-md px-8 text-base text-white bg-utama'>Selanjutnya</button></Link>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <HelpBtn></HelpBtn>
        </div>
      </div>
    </>
  )
}

export default Address