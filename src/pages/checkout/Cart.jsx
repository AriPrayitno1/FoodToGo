import React from 'react'
import HelpBtn from "../../components/HelpBtn";
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <div className="bg-kedua min-h-screen px-20 py-12">
        <div className="text-black">
          <div className="flex justify-center mb-4">
            <h1 className="text-2xl font-bold">Keranjang</h1>
          </div>

          <div className="bg-white w-full rounded-sm px-24 py-8">
            <div className='grid grid-cols-5'>
              <p>Produk</p>
              <p>Nama</p>
              <p>Harga</p>
              <p>Jumlah</p>
              <p>Total</p>
            </div>
            <hr className='h-1 bg-black border-none mb-4'/>
              <div className='grid grid-cols-5'>
                <img src="../../../../public/assets/menu/daging-sapi.png" className='w-16 h-16 rounded-lg'/>
                <p>Daging Sapi Lada Hitam</p>
                <p>Rp 25.000</p>
                <p>2</p>
                <p>Rp 50.000</p>
              </div>   

            <div className="flex justify-end">
              <Link to="/address">
                <button className="btn btn-sm btn-outline rounded-md px-8 text-base text-white bg-utama">
                  Selanjutnya
                </button>
              </Link>
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

export default Cart