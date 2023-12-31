import React from "react";
import Card from "../components/Card";
import menu from "../../public/assets/menu/all_menu";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HelpBtn from "../components/HelpBtn";
import { Link } from "react-router-dom";

const Keranjang = () => {
  return (
    <>
      <div className="bg-kedua">
        <Banner bannerImg="../../public/assets/banner/favorite.png"></Banner>
        <div className="px-20 py-12">
          <h1 className="text-white text-4xl text-center font-bold absolute top-36 inset-x-1/3 z-20">
            Keranjang
          </h1>

          <div className="w-full text-black rounded-sm px-24 py-8">
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

          <div className="flex justify-end">
            <HelpBtn></HelpBtn>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Keranjang;
