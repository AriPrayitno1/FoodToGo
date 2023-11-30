import React from "react";
import Banner from "../components/Banner";
import DisplayCard from "../components/DisplayCard";
import display from "../assets/menu/display"
import Footer from "../components/Footer";
import HelpBtn from "../components/HelpBtn";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <>
      <div className="bg-kedua">
        <Banner bannerImg="./src/assets/banner/home.png"></Banner>
        <div className="px-20 py-12">
          <div className="mb-12">
            <h1 className="text-white text-4xl text-center font-bold absolute top-36 inset-x-1/3 z-20">
              Makanan Terbaik untuk Seleramu
            </h1>
            <h1 className="text-black text-2xl font-bold text-center">
              Daftar Menu
            </h1>
            <div className="grid grid-cols-4 gap-y-8 justify-items-center pt-12">
              {display.map((displayCard, i) => {
                return <DisplayCard key={i} id={displayCard.id} name={displayCard.name} image={displayCard.image} mitra={displayCard.mitra} price={displayCard.price}/>
              })}
            </div>

            <div className="flex align-baseline justify-center text-black h-8 gap-1 mt-6">
              <Link to="/menu" className="font-bold">
                Lihat Semua
              </Link>
              <img src="./src/assets/right-arrow.png" />
            </div>
          </div>

          <div className="flex text-black">
            <div className="basis-1/2">
              <h1 className="text-2xl font-bold">About Us</h1>
              <p className="text-lg">
                Berdiri sejak 9 November 2023. FoodToGo adalah jawaban bagi anda
                yang ingin mencari jasa catering yang lengkap, mudah, dan
                terpercaya
              </p>
            </div>

            <div className="flex justify-end items-center">
              <img className="w-3/4" src="./src/assets/about-us.png" />
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

export default Beranda;
