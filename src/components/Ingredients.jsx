import React from 'react'

const Ingredients = (props) => {
  return (
    <div className=' flex rounded-full shadow-lg items-center'>
      <img src={props.image}/>
    </div>
  )
}

export default Ingredients