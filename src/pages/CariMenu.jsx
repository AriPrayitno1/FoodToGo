import React from "react";
import Card from "../components/Card";
import all_menu from "../assets/menu/all_menu";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import HelpBtn from "../components/HelpBtn";

const CariMenu = () => {
  return (
    <>
      <div className="bg-kedua">
        <Banner bannerImg="./src/assets/banner/home.png"></Banner>
        <div className="px-20 py-12">
          <h1 className="text-white text-4xl text-center font-bold absolute top-36 inset-x-1/3 z-20">
            Cari Menu
          </h1>
          <div className="flex justify-center">
            <SearchBar></SearchBar>
          </div>
          <div className="grid grid-cols-5 gap-x-8 gap-y-8 justify-center pt-12">
            {all_menu.map((card, i) => {
              return (
                <Card
                  key={i}
                  id={card.id}
                  name={card.name}
                  image={card.image}
                  mitra={card.mitra}
                  price={card.price}
                />
              );
            })}
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

export default CariMenu;
