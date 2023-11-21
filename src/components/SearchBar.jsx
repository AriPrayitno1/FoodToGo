import React from 'react'

const SearchBar = () => {
  return (
    <>
      <div className='flex align-middle w-32 rounded-full py-2 px4'>
        <img src="./src/assets/search.png" className='w-6'/>
        <input type="text" placeholder='Cari makanan...' className='bg-white w-full'/>
      </div>
    </>
    
  )
}

export default SearchBar