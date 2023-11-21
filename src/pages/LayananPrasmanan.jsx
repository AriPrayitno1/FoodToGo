import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayananPrasmanan = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-kedua">
        <Banner bannerImg="./src/assets/banner/catering-prasmanan.png"></Banner>
        <div className="px-20 py-12">
          <div className="text-white text-center font-bold absolute top-36 inset-x-1/3 z-20">
            <h1 className=" text-4xl ">
              Catering Prasmanan
            </h1>
            <p className="text-base">Citarasa yang Mengesankan, Pengalaman yang Tak Terlupakan</p>
          </div>
          
          <div className="flex mb-8">
            <div className="text-black basis-3/5">
              <h1 className="text-2xl font-bold">Bersih, Praktis, dan Berkualitas</h1>
              <p className="text-lg">Catering prasmanan adalah solusi yang populer dan praktis bagi 
                banyak orang dalam menghadirkan hidangan lezat dan bervariasi 
                pada acara-acara khusus, mulai dari pertemuan bisnis hingga perayaan pribadi.
                Catering Prasmanan dari FoodtoGo adalah pilihan yang cerdas bagi anda yang ingin 
                memanjakan lidah para tamu undangan dengan berbagai macam hidangan khas Nusantara, 
                dan kami juga menyediakan pelayan untuk melayani tamu undangan.</p>
            </div>

            <div className="flex basis-2/5 justify-center">
              <img src="./src/assets/layanan/catering-prasmanan/img1.png" className="w-96 h-80"/>
            </div> 
          </div>

        <div>
          <h1 className="text-black text-2xl font-bold text-center">
            Daftar Menu
          </h1>
          <div className="grid grid-cols-3 gap-y-8 justify-items-center pt-12 text-black ">
              <div>
                <img src="./src/assets/layanan/catering-prasmanan/img1.png" className="mb-4 w-72 h-72"/>
                <h1 className="font-bold text-xl">Paket A</h1>
                <ul>
                  <li>Nasi Putih</li>
                  <li>1 Lauk Utama</li>
                  <li>1 Lauk Tambahan</li>
                  <li>Sayur</li>
                  <li>Sambal</li>
                  <li>Kerupuk</li>
                  <li>Buah</li>
                  <li>Air Mineral Gelas</li>
                </ul>
                <h1  className="font-bold text-lg">Rp. 32.000,-/Porsi</h1>
              </div>

              <div>
                <img src="./src/assets/layanan/catering-prasmanan/img2.png" className="mb-4 w-72 h-72"/>
                <h1 className="font-bold text-xl">Paket B</h1>
                <ul>
                  <li>Nasi Putih</li>
                  <li>2 Lauk Utama</li>
                  <li>1 Lauk Tambahan</li>
                  <li>Sayur</li>
                  <li>Sambal</li>
                  <li>Kerupuk</li>
                  <li>Buah</li>
                  <li>Air Mineral Gelas</li>
                </ul>
                <h1  className="font-bold text-lg">Rp. 40.000,-/Porsi</h1>
              </div>

              <div>
                <img src="./src/assets/layanan/catering-prasmanan/img3.png" className="mb-4 w-72 h-72"/>
                <h1 className="font-bold text-xl">Paket A</h1>
                <ul>
                  <li>Nasi Putih</li>
                  <li>3 Lauk Utama</li>
                  <li>1 Lauk Tambahan</li>
                  <li>Sayur</li>
                  <li>Sambal</li>
                  <li>Kerupuk</li>
                  <li>Buah</li>
                  <li>Air Mineral Gelas</li>
                </ul>
                <h1  className="font-bold text-lg">Rp. 48.000,-/Porsi</h1>
              </div>
            </div>
        </div>
          
          
        </div>

        
      </div>
      <Footer></Footer>
    </>
  );
};

export default LayananPrasmanan;
