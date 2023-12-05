import React from 'react'
import arrow from '../../public/assets/right-arrow.png'
import { Link } from 'react-router-dom'

const LengkapiData = () => {
  return (
    <>
      <div className='bg-kedua text-black min-h-screen px-20 py-12'>
        <Link to="/verif1">
          <div className='flex justify-center '>
            <div className='bg-white flex justify-between items-center py-2 px-4 rounded-md font-bold w-1/2'>
              <h1>Lengkapi data anda untuk mulai memasarkan produk</h1>
              <img src={arrow} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default LengkapiData