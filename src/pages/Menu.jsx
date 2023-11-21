import React from 'react'
import Banner from "../components/Banner";
import Card from "../components/Card";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"

const Menu = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-kedua">
        <Banner bannerImg="./src/assets/banner/home.png"></Banner>
        <div className="px-20 py-12">
          <h1 className="text-white text-4xl text-center font-bold absolute top-36 inset-x-1/3 z-20">Daftar Menu</h1>
          <h1 className="text-black text-2xl font-bold text-center">
            Berikut beberapa contoh masakan kami:
          </h1>
          <div className="grid grid-cols-4 gap-y-8 justify-items-center pt-12">
            <Card
              cardImg="./src/assets/layanan/daftar-menu/nasi-ayam-goreng.png"
              cardTitle="Nasi Ayam Goreng"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ayam-gulai.png"
              cardTitle="Ayam Gulai"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ayam-goreng.png"
              cardTitle="Ayam Goreng"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/kentang-balado.png"
              cardTitle="Kentang Balado"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ikan-fillet.png"
              cardTitle="Ikan Fillet Saos Asam Manis"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/udang-goreng.png"
              cardTitle="Udang Goreng Tepung"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ayam-rendang.png"
              cardTitle="Ayam Rendang"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/daging-sapi.png"
              cardTitle="Daging Sapi Lada Hitam"
            ></Card>
          </div>

          <hr className='w-full h-px my-8 border-0 bg-black'/>

          <div className='pt-12 text-black'>
            <h1 className="text-2xl font-bold text-center">
              Daftar Lauk
            </h1>

            <div className='flex'>
              <div className='basis-3/6 py-12'>
                <h1 className='font-bold text-xl text-center'>Lauk Daging</h1>
                <div className='flex py-12'>
                  <div className='basis-3/6'>
                    <ul className='list-disc'>
                      <li>Ayam Goreng Kalasan</li>
                      <li>Ayam Rendang</li>
                      <li>Ayam Gulai Kare</li>
                      <li>Ayam Goreng Tepung</li>
                      <li>Ayam Bakar Padang</li>
                      <li>Ayam Bakar Kecap</li>
                      <li>Ayam Bakar Bumbu Tomat</li>
                      <li>Ayam Goreng Kecap</li>
                      <li>Ayam Masak Kalio</li>
                      <li>Ayam Rica-rica</li>
                    </ul>
                  </div>

                  <div className='basis-3/6'>
                    <ul  className='list-disc'>
                      <li>Ayam Kremes</li>
                      <li>Ayam Goreng Pletok</li>
                      <li>Dendeng Balado</li>
                      <li>Daging Sapi Lada Hitam</li>
                      <li>Rendang</li>
                      <li>Daging Bumbu Bali</li>
                      <li>Sate</li>
                      <li>Opor Ayam</li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className='basis-3/6 py-12'>
                <h1 className='font-bold text-xl text-center'>Lauk Seafood</h1>
                <div className='flex py-12'>
                  <div className='basis-3/6'>
                    <ul  className='list-disc'>
                      <li>Ikan Rica-rica</li>
                      <li>Ikan Fillet Asam Manis</li>
                      <li>Ikan Bakar Kecap</li>
                      <li>Ikan Asam Pedas</li>
                      <li>Ikan Bandeng presto</li>
                      <li>Ikan Gulai Kuning</li>
                    </ul>
                  </div>

                  <div className='basis-3/6'>
                    <ul  className='list-disc'>
                      <li>Pepes Ikan</li>
                      <li>Ikan Sambal Kacang</li>
                      <li>Sotong Goreng Tepung</li>
                      <li>Udang Goreng Tepung</li>
                      <li>Sotong Pedas</li>
                      <li>Udang Masak Cabe</li>
                      <li>Sotong Gulai</li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <hr className='w-full h-px my-8 border-0 bg-black'/>
          
          <div className='pt-12 text-black'>
            <h1 className="text-2xl font-bold text-center">
              Daftar Sayur, Lauk Tambahan, Sambal, dan Buah
            </h1>

            <div className='flex'>
              <div className='basis-3/6 py-0'>
                <div className='flex py-12'>
                  <div className='basis-3/6'>
                    <h1 className='font-bold text-xl mb-8'>Sayur</h1>
                    <ul className='list-disc'>
                      <li>Ayam Goreng Kalasan</li>
                      <li>Ayam Rendang</li>
                      <li>Ayam Gulai Kare</li>
                      <li>Ayam Goreng Tepung</li>
                      <li>Ayam Bakar Padang</li>
                      <li>Ayam Bakar Kecap</li>
                      <li>Ayam Bakar Bumbu Tomat</li>
                      <li>Ayam Goreng Kecap</li>
                      <li>Ayam Masak Kalio</li>
                      <li>Ayam Rica-rica</li>
                    </ul>
                  </div>

                  <div className='basis-3/6'>
                    <h1 className='font-bold text-xl mb-8'>Lauk Tambahan</h1>
                    <ul  className='list-disc'>
                      <li>Ayam Kremes</li>
                      <li>Ayam Goreng Pletok</li>
                      <li>Dendeng Balado</li>
                      <li>Daging Sapi Lada Hitam</li>
                      <li>Rendang</li>
                      <li>Daging Bumbu Bali</li>
                      <li>Sate</li>
                      <li>Opor Ayam</li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className='basis-3/6 py-0'>
                <div className='flex py-12'>
                  <div className='basis-3/6'>
                    <h1 className='font-bold text-xl mb-8'>Sambal</h1>
                    <ul  className='list-disc'>
                      <li>Ikan Rica-rica</li>
                      <li>Ikan Fillet Asam Manis</li>
                      <li>Ikan Bakar Kecap</li>
                      <li>Ikan Asam Pedas</li>
                      <li>Ikan Bandeng presto</li>
                      <li>Ikan Gulai Kuning</li>
                    </ul>
                  </div>

                  <div className='basis-3/6'>
                  <h1 className='font-bold text-xl mb-8'>Buah</h1>
                    <ul  className='list-disc'>
                      <li>Pepes Ikan</li>
                      <li>Ikan Sambal Kacang</li>
                      <li>Sotong Goreng Tepung</li>
                      <li>Udang Goreng Tepung</li>
                      <li>Sotong Pedas</li>
                      <li>Udang Masak Cabe</li>
                      <li>Sotong Gulai</li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Menu