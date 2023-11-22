import React from 'react'
import { Link } from 'react-router-dom'

const HelpBtn = () => {
  return (
    <>
      <div>
        <Link to="../bantuan">
          <button className='bg-blue-400 text-white flex items-center gap-1 
          rounded-md py-1 px-2 w-26 h-8 relative right-8 bottom-8'>
            <img src="./src/assets/help.png" className='w-6 h-6'/>
            <p>Bantuan</p>
          </button>
        </Link>
       
      </div>
    </>
   
  )
}

export default HelpBtn