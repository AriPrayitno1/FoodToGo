import React from 'react'

const Banner = (props) => {
  return (
    <div>
      <img src={`${props.bannerImg}`} className='w-screen h-56 bg-cover'/>
    </div>
  )
}

export default Banner