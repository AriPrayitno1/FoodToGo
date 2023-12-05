import React from "react";
import Footer from "../components/Footer";
import HelpBtn from "../components/HelpBtn";
import display from "../../public/assets/menu/display";
import DisplayCard from "../components/DisplayCard";
import all_menu from "../../public/assets/menu/all_menu";
import Card from "../components/Card";
import BioToko from "../components/BioToko";

const ProfilToko = () => {
  return (
    <>
      <div className="bg-kedua px-20 py-12">

        <BioToko></BioToko>

        <div className="grid grid-cols-4 gap-y-8 justify-items-center pt-12">
          {display.slice(0, 4).map((Rating, i) => {
            return (
              <DisplayCard
                key={i}
                id={Rating.id}
                name={Rating.name}
                image={Rating.image}
              />
            );
          })}
        </div>

        <div className="pt-12">
          <h1 className="text-black text-3xl font-bold relative left-1/2 mb-12">Produk</h1>
          <div className="grid grid-cols-4 gap-x-8 gap-y-8 justify-items-center">
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
        </div>

        <div className="flex justify-end">
          <HelpBtn></HelpBtn>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProfilToko;
