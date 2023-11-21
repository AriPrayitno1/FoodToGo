import React from 'react'
import Favorit from './Favorit'

const Card2 = (props) => {
  return (
    <div className='bg-white text-black rounded-2xl w-40 h-60 p-2'>
      <img src={props.cardImg} className='w-36 h-24 rounded-lg'/>
      <h1 className='truncate ... mb-2'>{props.cardTitle}</h1>
      <img src="./src/assets/rating.png" alt="rating" />
      <p className='text-sm mt-5'>By You Catering</p>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold'>{props.cardPrice}</h1>
          <Favorit></Favorit>
        </div>
    </div>
  )
}

export default Card2