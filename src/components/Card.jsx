import React from 'react'
import {Link} from 'react-router-dom'
import rating from '../assets/rating.png'

const Card = (props) => {
  return (
    <div className='bg-white text-black rounded-2xl w-40 h-60 p-2'>
      <Link to={`/menu/${props.id}`}>
        <img src={props.image} className='w-36 h-24 rounded-lg'/>
        <h1 className='truncate ... mb-2'>{props.name}</h1>
        <img src={rating}/>
        <p className='text-sm mt-5'>{props.mitra}</p>

          <div className='flex justify-between items-center'>
            <h1 className='font-bold'>Rp {props.price}.000</h1>
            <button className='bg-utama rounded-full p-2'>
              <img src="./src/assets/heart.png" className='w-6'/></button>
          </div>
      </Link>
    </div>
  )
}

export default Card