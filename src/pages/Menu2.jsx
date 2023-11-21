import React from 'react'
import Card2 from '../components/Card2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const ResultMenu = () => {
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
          <div className="grid grid-cols-5 gap-x-8 gap-y-8 justify-center pt-12">
            <Card2
              cardImg="./src/assets/layanan/daftar-menu/nasi-ayam-goreng.png"
              cardTitle="Nasi Ayam Goreng"
              cardPrice="Rp 25.000"
            ></Card2>

            <Card2
              cardImg="./src/assets/layanan/daftar-menu/ayam-gulai.png"
              cardTitle="Ayam Gulai"
              cardPrice="Rp 25.000"
            ></Card2>

            <Card2
              cardImg="./src/assets/layanan/daftar-menu/ayam-goreng.png"
              cardTitle="Ayam Goreng"
              cardPrice="Rp 25.000"
            ></Card2>

            <Card2
              cardImg="./src/assets/layanan/daftar-menu/kentang-balado.png"
              cardTitle="Kentang Balado"
              cardPrice="Rp 25.000"
            ></Card2>

            <Card2
              cardImg="./src/assets/layanan/daftar-menu/ikan-fillet.png"
              cardTitle="Ikan Fillet Saos Asam Manis"
              cardPrice="Rp 25.000"
            ></Card2>

            <Card2
              cardImg="./src/assets/layanan/daftar-menu/udang-goreng.png"
              cardTitle="Udang Goreng Tepung"
              cardPrice="Rp 25.000"
            ></Card2>

            <Card2
              cardImg="./src/assets/layanan/daftar-menu/ayam-rendang.png"
              cardTitle="Ayam Rendang"
              cardPrice="Rp 25.000" 
            ></Card2>

            <Card2
              cardImg="./src/assets/layanan/daftar-menu/daging-sapi.png"
              cardTitle="Daging Sapi Lada Hitam"
              cardPrice="Rp 25.000"
            ></Card2>
          </div>
          </div>
        </div>
        <Footer></Footer>
    </>
  )
}

export default ResultMenu