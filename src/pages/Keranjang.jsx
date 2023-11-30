import React from "react";
import Card from "../components/Card";
import menu from "../assets/menu/all_menu";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HelpBtn from "../components/HelpBtn";

const Keranjang = () => {
  return (
    <>
      <div className="bg-kedua">
        <Banner bannerImg="./src/assets/banner/favorite.png"></Banner>
        <div className="px-20 py-12">
          <h1 className="text-white text-4xl text-center font-bold absolute top-36 inset-x-1/3 z-20">
            Keranjang
          </h1>

          <div className="grid grid-cols-5 gap-x-8 gap-y-8 justify-center pt-12">
            {/* {menu.map((card, i) => {
              return <Card key={i} id={card.id} name={card.name} image={card.image} mitra={card.mitra} price={card.price}/>
            })} */}
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
