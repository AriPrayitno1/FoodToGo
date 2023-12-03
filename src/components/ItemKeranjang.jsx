import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const ItemKeranjang = () => {

  // const {all_menu, cartItems, removeFromCart} = useContext(ShopContext)

  return (
    <>
      {/* {all_menu.map((e)=>{
        if(cartItems[e.id]>0){
          return <div>
            <img src={e.image} alt="" />
            <button onClick={()=>{removeFromCart()}}>hapus</button>
          </div>
        }
      })} */}
    </>
  )
}

export default ItemKeranjang