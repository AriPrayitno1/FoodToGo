import React, { useContext } from 'react'
import rating from '../../public/assets/rating.png'
import pinLoc from '../../public/assets/pin-location.png'
import nutrition from '../../public/assets/nutrition.png'
import mitra from '../../public/assets/mitra.png'
import Ingredients from '../components/Ingredients'
import { Link } from 'react-router-dom'
import data_ingredients from "../../public/assets/ingredients/data_ingredients"
import { ShopContext } from '../Context/ShopContext'

const MenuDetail = (props) => {

  const {menu} = props
  // const {addToCart} = useContext(ShopContext)

  return (
    <>
      <div className="flex text-black min-h-screen">
        <div className="flex flex-col basis-2/5 bg-kedua items-center p-8">
          <div>
            <img src={menu.image} className="w-80 h-72 mb-4" />
            <div className="flex justify-between w-full">
              <img src={menu.image} className="w-16 h-16" />
              <img src={menu.image} className="w-16 h-16" />
              <img src={menu.image} className="w-16 h-16" />
              <img src={menu.image} className="w-16 h-16" />
            </div>
          </div>
        </div>

        <div className="basis-3/5 bg-white p-8">
          <div>
            <h1 className="font-bold text-3xl mb-4">{menu.name}</h1>
            <div className="flex">
              <img src={rating} />
              <p className="ml-2">(200) |</p>
              <p className="ml-2"> (230) Terjual |</p>
              <img src={pinLoc} className="mx-2 w-4 h-6" />
              <p>Jl. Adiyaksa Bali</p>
            </div>
          </div>

          <h1 className="font-bold text-2xl my-12">Rp {menu.price}.000</h1>

          <div className="flex flex-row mb-8">
            <div className="px-4 border-r-2 border-black">
              <h1 className="font-bold">Calorie</h1>
              <div className="flex">
                <img src={nutrition} alt="" />
                <p>500 cal</p>
              </div>
            </div>

            <div className="px-4 border-r-2 border-black">
              <h1 className="font-bold">Protein</h1>
              <div className="flex">
                <img src={nutrition} alt="" />
                <p>30 g</p>
              </div>
            </div>

            <div className="px-4 border-r-2 border-black">
              <h1 className="font-bold">Fat</h1>
              <div className="flex">
                <img src={nutrition} alt="" />
                <p>10 g</p>
              </div>
            </div>

            <div className="px-4 border-r-2 border-black">
              <h1 className="font-bold">Carbs</h1>
              <div className="flex">
                <img src={nutrition} alt="" />
                <p>80 g</p>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <img src={mitra} className="w-12 mr-2" />
            <h1 className="font-bold text-base mr-6">Bunda Berkah</h1>
            <Link to="/profiltoko">
              <button className="btn btn-sm btn-outline text-black">
                Lihat Toko
              </button>
            </Link>
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => {
                addToCart(menu.id);
              }}
              className="btn btn-sm btn-outline rounded-none text-black"
            >
              Tambahkan ke Keranjang
            </button>
            <Link to="/address">
              <button className="btn btn-sm btn-outline rounded-none text-white bg-utama">
                Beli Sekarang
              </button>
            </Link>
          </div>

          <div className="mb-6">
            <h1 className="font-bold">Description</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eaque dolorum esse laborum earum corporis ullam pariatur in
              consequatur numquam.
            </p>
          </div>

          <div>
            <h1 className="font-bold">Ingredients</h1>
            <div className="flex gap-4">
              {data_ingredients.map((ingredients, i) => {
                return (
                  <Ingredients
                    key={i}
                    id={ingredients.id}
                    image={ingredients.image}
                  ></Ingredients>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuDetail