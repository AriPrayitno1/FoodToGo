import React from 'react'
import Footer from "../components/Footer";
import HelpBtn from "../components/HelpBtn";
import display from "../../public/assets/menu/display";
import DisplayCard from "../components/DisplayCard";
import all_menu from "../../public/assets/menu/all_menu";
import Card from "../components/Card";
import BioToko from "../components/BioToko";
import { Link } from 'react-router-dom';

const ProfileMitra = () => {
  return (
    <>
      <div className="bg-kedua px-20 py-12">

      <BioToko></BioToko>

      <div className='flex justify-center mt-12'>
        <div className=" flex w-9/12 bg-white p-6 rounded-md">
            <div className="flex flex-col basis-2/5 text-black">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Aktivitas</h1>
                <div className="flex">
                  <h1>250 Pengikut</h1>
                </div>
              </div>
            </div>

            <div className="basis-3/5 ">
              <div className="flex justify-between items-center">
                <h1 className='text-black text-lg font-bold'>Tawarkan menu terbaru anda</h1>
                <Link to="/buatpost">
                  <button className='btn btn-sm btn-outline text-black'>Buat Postingan</button>
                </Link>
              </div>
            </div>
          </div>
      </div>
      
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
  )
}

export default ProfileMitra