import React from 'react'
import bintang from "../../public/assets/bintang.png";
import bintang1 from "../../public/assets/bintang1.png";
import rating from "../../public/assets/rating/rating";
import RatingImg from "../components/RatingImg";
import profile from "../../public/assets/profile-img.png";
import anon from "../../public/assets/anon.png";
import BioToko from '../components/BioToko';

const PenilaianProduk = () => {
  return (
    <div className='bg-kedua px-20 py-12'>
      <BioToko></BioToko>
      <div className="flex flex-col items-center mt-12">
          <h1 className="mb-8 text-black font-bold text-2xl">
            Penilaian Produk
          </h1>
          <div className=" flex w-9/12 bg-white p-6 rounded-md">
            <div className="flex flex-col basis-2/5 text-black">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">4.8 dari 5</h1>
                <div className="flex">
                  <img src={bintang} className="w-8" />
                  <img src={bintang} className="w-8" />
                  <img src={bintang} className="w-8" />
                  <img src={bintang} className="w-8" />
                  <img src={bintang1} className="w-8" />
                </div>
              </div>
            </div>

            <div className="basis-3/5 ">
              <div className="flex gap-4 mb-4">
                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  Semua
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl w-auto h-auto text-black">
                  5 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  4 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  3 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  2 Bintang
                </button>
              </div>

              <div className="flex gap-4">
                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  1 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  Dengan Media
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className=" flex flex-col w-9/12 bg-white p-6 rounded-md text-black">
            <div className="flex gap-4 mb-8">
              <img src={profile} className="w-16 h-16" />
              <div>
                <h1 className="text-lg font-bold">Julia Ningsih</h1>
                <div className="flex">
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang1} className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <p>2023-11-09</p>
                  <p>Kualitas: Terbaik</p>
                  <p>Sepadan dengan harga: Terjangkau</p>
                </div>
                <h1 className="font-bold">
                  Pengalaman luar biasa dengan layanan catering dari Food To Go
                  Katering! Menu yang lezat dan pelayanan yang sangat
                  profesional. Membuat acara kami benar-benar istimewa. Terima
                  kasih Food To Go Katering
                </h1>
                <div className="flex gap-4 mt-4">
                  {rating.slice(0, 3).map((ratingImg, i) => {
                    return (
                      <RatingImg
                        key={i}
                        id={ratingImg.id}
                        image={ratingImg.image}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={anon} className="w-16 h-16" />
              <div>
                <h1 className="text-lg font-bold">Andi Prayoga</h1>
                <div className="flex">
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang1} className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <p>2023-11-09</p>
                  <p>Kualitas: Terbaik</p>
                  <p>Sepadan dengan harga: Terjangkau</p>
                </div>
                <h1 className="font-bold">
                  Pakai catering dari Food To Go Katering tuh bener-bener jadi
                  pilihan paling oke deh buat acara gue. Makanannya enak banget,
                  terus pelayanannya juga top banget. Tamu-tamu pada seneng,
                  acaranya jadi lebih istimewa berkat mereka.
                </h1>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default PenilaianProduk