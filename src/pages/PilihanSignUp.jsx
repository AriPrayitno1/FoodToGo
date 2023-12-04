import React from 'react'
import { Link } from "react-router-dom";

import signupImg from "../../public/assets/signup.png"
import coloredLogo from "../../public/assets/colored_logo.png"

const PilihanSignUp = () => {

  return (
    <>
      <div className="bg-kedua flex justify-center min-h-screen">
        <div className="flex bg-white w-3/5 h-3/4 mt-16 text-black">
          <div className="basis-2/5">
            <img src={signupImg} className="h-full" />
          </div>

          <div className="flex-col basis-3/5 p-6">
            <div className='flex justify-end'>
              <img src={coloredLogo} className="w-24"/>
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="text-xl font-bold mb-6">Sign Up</h1>
              <h1>Anda ingin mendaftar sebagai apa?</h1>
            </div>

            <div className="flex flex-col mb-4">
              
            </div>

            <div className="mb-4">
              <Link to="/signupUser">
                <button
                  className="w-full p-1 text-lg bg-blue-600 text-white rounded-md mb-4"
                  >
                  Pembeli
                </button>
              </Link>
              <Link to="/signupMitra">
                <button
                  className="w-full p-1 text-lg bg-utama text-white rounded-md "
                  >
                  Mitra
                </button>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default PilihanSignUp