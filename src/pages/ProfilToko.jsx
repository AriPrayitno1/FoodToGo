import React from "react";
import Footer from "../components/Footer";
import HelpBtn from "../components/HelpBtn";
import mitra from "../../public/assets/mitra.png";
import display from "../../public/assets/menu/display";
import all_menu from "../../public/assets/menu/all_menu";
import Rating from "../components/RatingImg";
import Card from "../components/Card";
import profile from "../../public/assets/profile-img.png";
import anon from "../../public/assets/anon.png";
import bintang from "../../public/assets/bintang.png";
import bintang1 from "../../public/assets/bintang1.png";
import rating from "../../public/assets/rating/rating";
import RatingImg from "../components/RatingImg";

const ProfilToko = () => {
  return (
    <>
      <div className="bg-kedua px-20 py-12">
        <div className="flex justify-center">
          <div className=" flex w-11/12 bg-white p-6 rounded-md">
            <div className="flex flex-col basis-2/5 text-black">
              <div className="flex items-center gap-2 mb-2">
                <img src={mitra} className="w-16" />
                <h1 className="text-xl font-bold">Bunda Berkah</h1>
              </div>

              <div className="flex gap-2">
                <button className="btn btn-sm btn-outline rounded-none text-black">
                  +Ikuti
                </button>
                <button className="flex btn btn-sm btn-outline rounded-none text-black">
                  <img src="../../public/assets/chat.png" />
                  Chat Sekarang
                </button>
              </div>
            </div>

            <div className="basis-3/5 ">
              <div className="grid grid-cols-2 gap-y-4 gap-x-12 font-bold">
                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/penilaian.png"
                      className="w-6 h-6"
                    />
                    <h1>Penilaian</h1>
                  </div>
                  <div className="text-red-600">100</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/pengikut.png"
                      className="w-6 h-6"
                    />
                    <h1>Pengikut</h1>
                  </div>
                  <div className="text-red-600">250</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/produk.png"
                      className="w-6 h-6"
                    />
                    <h1>Produk</h1>
                  </div>
                  <div className="text-red-600">55</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/bergabung.png"
                      className="w-6 h-6"
                    />
                    <h1>Bergabung</h1>
                  </div>
                  <div className="text-red-600">1 Bulan yang lalu</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/chat.png"
                      className="w-6 h-6"
                    />
                    <h1>Performa Chat</h1>
                  </div>
                  <div className="text-red-600">92%</div>
                </div>

                <div className="flex justify-between text-black">
                  <div className="flex gap-4">
                    <img
                      src="../../public/assets/pin-location.png"
                      className="w-4 h-6"
                    />
                    <h1>Jl. Adiyakasa Bali</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-12">
          <h1 className="mb-8 text-black font-bold text-2xl">
            Penilaian Produk
          </h1>
          <div className=" flex w-9/12 bg-white p-6 rounded-md">
            <div className="flex flex-col basis-2/5 text-black">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">4.8 dari 5</h1>
                <div className="flex">
                  <img src={bintang} className="w-8" />
                  <img src={bintang} className="w-8" />
                  <img src={bintang} className="w-8" />
                  <img src={bintang} className="w-8" />
                  <img src={bintang1} className="w-8" />
                </div>
              </div>
            </div>

            <div className="basis-3/5 ">
              <div className="flex gap-4 mb-4">
                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  Semua
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl w-auto h-auto text-black">
                  5 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  4 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  3 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  2 Bintang
                </button>
              </div>

              <div className="flex gap-4">
                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  1 Bintang
                </button>

                <button className="btn btn-sm btn-outline rounded-2xl text-black">
                  Dengan Media
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className=" flex flex-col w-9/12 bg-white p-6 rounded-md text-black">
            <div className="flex gap-4 mb-8">
              <img src={profile} className="w-16 h-16" />
              <div>
                <h1 className="text-lg font-bold">Julia Ningsih</h1>
                <div className="flex">
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang1} className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <p>2023-11-09</p>
                  <p>Kualitas: Terbaik</p>
                  <p>Sepadan dengan harga: Terjangkau</p>
                </div>
                <h1 className="font-bold">
                  Pengalaman luar biasa dengan layanan catering dari Food To Go
                  Katering! Menu yang lezat dan pelayanan yang sangat
                  profesional. Membuat acara kami benar-benar istimewa. Terima
                  kasih Food To Go Katering
                </h1>
                <div className="flex gap-4 mt-4">
                  {rating.slice(0, 3).map((ratingImg, i) => {
                    return (
                      <RatingImg
                        key={i}
                        id={ratingImg.id}
                        image={ratingImg.image}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={anon} className="w-16 h-16" />
              <div>
                <h1 className="text-lg font-bold">Andi Prayoga</h1>
                <div className="flex">
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang} className="w-4 h-4" />
                  <img src={bintang1} className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <p>2023-11-09</p>
                  <p>Kualitas: Terbaik</p>
                  <p>Sepadan dengan harga: Terjangkau</p>
                </div>
                <h1 className="font-bold">
                  Pakai catering dari Food To Go Katering tuh bener-bener jadi
                  pilihan paling oke deh buat acara gue. Makanannya enak banget,
                  terus pelayanannya juga top banget. Tamu-tamu pada seneng,
                  acaranya jadi lebih istimewa berkat mereka.
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-4 gap-y-8 justify-items-center pt-12">
          {display.slice(0, 4).map((Rating, i) => {
            return (
              <Rating
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
        </div> */}

        <div className="flex justify-end">
          <HelpBtn></HelpBtn>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProfilToko;
