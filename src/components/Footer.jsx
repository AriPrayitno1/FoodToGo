import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-utama px-16 py-8 text-white'>
      <div className='basis-1/4'>
        <img className="w-32 h-18" src="./src/assets/logo.png" alt="logo" />
      </div>

      <div className='text-center basis-3/6'>
        <h1 className='text-lg font-bold'>Welcome To FoodToGo</h1>
        <p>FoodtoGo adalah Website dan Aplikasi pencarian catering makanan, yang menyediakan 
          kemudahan untuk menemukan pilihan catering terbaik. </p>
        <p>Gajahmada Blok B5 No. 09, Villa Pontianak Pontianak – Kalbar</p>
      </div>

      <div className='flex flex-col basis-1/4 align-'>
        <h1 className='font-bold'>Follow</h1>
        <div className='flex'>
          <img src="./src/assets/whatsapp.png" alt="whatsapp" className='w-8'/>
          <img src="./src/assets/facebook.png" alt="facebook" />
          <img src="./src/assets/instagram.png" alt="instagram" />
          <img src="./src/assets/linkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Footer