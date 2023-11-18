import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <div className="bg-kedua">
        <Banner bannerImg="./src/assets/banner/home.png"></Banner>
        <div className="px-20 py-12">
          <h1 className="text-black text-2xl font-bold text-center">
            Daftar Menu
          </h1>
          <div className="grid grid-cols-4 gap-y-8 justify-items-center pt-12">
            <Card
              cardImg="./src/assets/layanan/daftar-menu/nasi-ayam-goreng.png"
              cardTitle="Nasi Ayam Goreng"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ayam-gulai.png"
              cardTitle="Ayam Gulai"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ayam-goreng.png"
              cardTitle="Ayam Goreng"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/kentang-balado.png"
              cardTitle="Kentang Balado"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ikan-fillet.png"
              cardTitle="Ikan Fillet Saos Asam Manis"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/udang-goreng.png"
              cardTitle="Udang Goreng Tepung"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/ayam-rendang.png"
              cardTitle="Ayam Rendang"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/daftar-menu/daging-sapi.png"
              cardTitle="Daging Sapi"
            ></Card>
          </div>

          <div className="flex align-baseline justify-center text-black h-8 gap-1 mt-6">
            <p className="font-bold">Lihat Semua</p>
            <img src="./src/assets/right-arrow.png" alt="" />
          </div>
        </div>

        <div className="px-20 pb-12">
          <div className="px-32 text-black text-center">
            <h1 className="text-black text-2xl font-bold text-center mb-4">
              Layanan Kami
            </h1>
            <p>
              Manjakan diri Anda dengan layanan eksklusif dari FoodtoGo Katering
              untuk momen istimewa pernikahan Anda. Kami menghadirkan pengalaman
              prasmanan yang istimewa dengan menu lezat dan pelayanan yang ramah
              dan responsif untuk memastikan kenyamanan para tamu undangan Anda.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-y-8 justify-items-center pt-12">
            <Card
              cardImg="./src/assets/layanan/catering-prasmanan/catering-prasmanan.png"
              cardTitle="Catering Prasmanan"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/nasi-kotak/nasi-kotak.png"
              cardTitle="Nasi Kotak"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/snack/snack.png"
              cardTitle="Snack"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/catering-kantor/catering-kantor.png"
              cardTitle="Catering Kantor"
            ></Card>

            <Card
              cardImg="./src/assets/layanan/catering-biasa/catering-biasa.png"
              cardTitle="Catering Biasa"
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
