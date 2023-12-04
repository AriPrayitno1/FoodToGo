import React from 'react'
import mitra from "../../public/assets/mitra.png";
import { Link } from "react-router-dom";

const BioToko = () => {
  return (
    <div>
      <div className="flex justify-center">
          <div className=" flex w-11/12 bg-white p-6 rounded-md">
            <div className="flex flex-col basis-2/5 text-black">
              <div className="flex items-center gap-2 mb-2">
                <img src={mitra} className="w-16" />
                <h1 className="text-xl font-bold">Bunda Berkah</h1>
              </div>

              <div className="flex gap-2">
                <button className="btn btn-sm btn-outline rounded-none text-black">
                  +Ikuti
                </button>
                <button className="flex btn btn-sm btn-outline rounded-none text-black">
                  <img src="../../public/assets/chat.png" />
                  Chat Sekarang
                </button>
              </div>
            </div>

            <div className="basis-3/5 ">
              <div className="grid grid-cols-2 gap-y-4 gap-x-12 font-bold">
                <div className="flex justify-between text-black">
                  <Link to="/rating">
                    <div className="flex gap-4">
                      <img
                        src="../../public/assets/penilaian.png"
                        className="w-6 h-6"
                      />
                      <h1>Penilaian</h1>
                    </div>
                  </Link>
                  <div className="text-red-600">100</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/pengikut.png"
                      className="w-6 h-6"
                    />
                    <h1>Pengikut</h1>
                  </div>
                  <div className="text-red-600">250</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/produk.png"
                      className="w-6 h-6"
                    />
                    <h1>Produk</h1>
                  </div>
                  <div className="text-red-600">55</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/bergabung.png"
                      className="w-6 h-6"
                    />
                    <h1>Bergabung</h1>
                  </div>
                  <div className="text-red-600">1 Bulan yang lalu</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/chat.png"
                      className="w-6 h-6"
                    />
                    <h1>Performa Chat</h1>
                  </div>
                  <div className="text-red-600">92%</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/pin-location.png"
                      className="w-4 h-6"
                    />
                    <h1>Jl. Adiyakasa Bali</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BioToko