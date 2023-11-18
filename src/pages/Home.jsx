import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
    <div className='bg-kedua'>
      <Banner bannerImg="./src/assets/banner/home.png"></Banner>
        <div className='px-20'>
          <h1 className='text-black text-2xl font-bold text-center'>Daftar Menu</h1>          
              <div className='grid grid-cols-4 justify-items-center'>
                <Card cardImg="./src/assets/layanan/daftar-menu/nasi-ayam-goreng.png" 
                cardTitle="Nasi Ayam Goreng"></Card>

                <Card cardImg="./src/assets/layanan/daftar-menu/ayam-gulai.png" 
                cardTitle="Ayam Gulai"></Card>

                <Card cardImg="./src/assets/layanan/daftar-menu/ayam-goreng.png" 
                cardTitle="Ayam Goreng"></Card>
                
                <Card cardImg="./src/assets/layanan/daftar-menu/kentang-balado.png" 
                cardTitle="Kentang Balado"></Card>

                <Card cardImg="./src/assets/layanan/daftar-menu/ikan-fillet.png" 
                cardTitle="Ikan Fillet Saos Asam Manis"></Card>

                <Card cardImg="./src/assets/layanan/daftar-menu/udang-goreng.png" 
                cardTitle="Udang Goreng Tepung"></Card>

                <Card cardImg="./src/assets/layanan/daftar-menu/ayam-rendang.png" 
                cardTitle="Ayam Goreng"></Card>

                <Card cardImg="./src/assets/layanan/daftar-menu/ayam-rendang.png" 
                cardTitle="Ayam Goreng"></Card>
              </div>
        </div>
    </div>
    </>
  )
}

export default Home