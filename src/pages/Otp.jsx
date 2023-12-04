import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { mitraAction } from "../Store";

const Otp = () => {
  const dispatch = useDispatch();

  const HandleMitra = () => {
    dispatch(mitraAction.Login());
  };

  return (
    <div>
      <div className="bg-kedua flex justify-center min-h-screen">
        <div className="flex flex-col text-2xl font-bold justify-center items-center bg-white w-3/5 h-80 mt-16 text-black">
          <h1>Masukkan kode verifikasi.</h1>
          <p>Kode verifikasi telah dikirimkan melalui SMS ke nomor</p>
          <p>(+628xxxxxxxxxx)</p>
          <div className='flex gap-8 text-4xl font-bold mb-8'>
            <h1>_</h1>
            <h1>_</h1>
            <h1>_</h1>
            <h1>_</h1>
          </div>
          <Link to="/">
            <button onClick={HandleMitra} className='px-4 py-2 text-lg bg-blue-600 text-white rounded-md'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Otp