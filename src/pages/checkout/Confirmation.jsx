import React from 'react'
import HelpBtn from "../../components/HelpBtn";
import { Link, useParams } from "react-router-dom";
import pin_loc from "../../../public/assets/pin-location.png"

const Confirmation = () => {

  return (
    <>
      <div className="bg-kedua px-20 py-12">
        <div className="text-black">
          <div className="flex justify-center mb-4">
            <h1 className="text-2xl font-bold">Confirmation</h1>
          </div>

          <div className="bg-white w-full rounded-sm px-24 py-8">
            <div className='flex'>
              <div className='basis-1/2'>
                <div className='mb-4'>
                  <h1 className='font-bold'>Alamat</h1>
                  <div className='flex'>
                    <img src={pin_loc} className='mx-2 w-4 h-6'/>
                    <div>
                      <p>Jl. Adiyaksa Bali</p>
                      <p>Kec. Denpasar Bali,</p>
                      <p>80113</p>
                    </div>
                  </div>
                </div>

                <div className='mb-4'>
                  <h1 className='font-bold'>Payment</h1>
                  <div className='flex'>
                    <img src="../../../public/assets/cod.png" className='mx-2 w-4 h-6'/>
                    <div>
                      <p>Cod</p>
                    </div>
                  </div>
                </div>

                <div className='mb-4'>
                  <h1 className='font-bold'>Tanggal</h1>
                  <div className='flex'>
                    <img src="../../../public/assets/waktu.png" className='mx-2 w-4 h-6'/>
                    <div>
                      <p>23 November 2023</p>
                      <p>15:00</p>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className='basis-1/2'>
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
                </div>
            </div>

            <div className="flex justify-between">
              <Link to="/payment">
                <button className="btn btn-sm btn-outline rounded-md px-8 text-base text-black">
                  Kembali
                </button>
              </Link>
              <div className='flex gap-2 font-bold text-xl '>
                <h1>Total:</h1>
                <h1>Rp.100.000</h1>
              </div>
              <Link to="/orderprocess">
                <button className="btn btn-sm btn-outline rounded-md px-8 text-base text-white bg-utama">
                  Checkout
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

export default Confirmation