import React from 'react'

const SearchBar = () => {
  return (
    <>
      <div className='bg-white text-black flex items-center w-72 gap-4 rounded-full py-2 px-4'>
        <img src="../../public/assets/search.png" className='w-4 h-4'/>
        <input type="text" placeholder='Cari menu...' className='bg-transparent outline-none rounded-full w-full'/>
      </div>
    </>
    
  )
}

export default SearchBar