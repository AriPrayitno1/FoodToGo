import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {

  const signUpBtn = () => {
        <Link to="/"></Link>
  }

  return (
    <>
      <div className="bg-kedua flex justify-center min-h-screen">
        <div className="bg-white w-3/4 flex text-black">
          <div className="basis-2/4">
            <img src="./src/assets/signup.png" />
          </div>

        <div className="flex-col basis-2/4 p-8"> 
          <div className="flex flex-col mb-6">
              <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
              <div className='flex justify-between'>
                <input type="text" placeholder="Nama Depan" className="bg-white mb-4 border-solid border-2 
                border-gray-300 p-2 rounded-md"/>

                <input type="password" placeholder="Nama Belakang" className="bg-white mb-4 border-solid border-2 
                border-gray-300 p-2 rounded-md"/>
              </div>
              <input type="text" placeholder="Alamat Email" className="bg-white mb-4 border-solid border-2 
              border-gray-300 p-2 rounded-md"/>

              <input type="password" placeholder="Password" className="bg-white mb-4 border-solid border-2 
              border-gray-300 p-2 rounded-md"/>

              <input type="phone" placeholder="No.Handphone" className="bg-white mb-2 border-solid border-2 
              border-gray-300 p-2 rounded-md"/>
              <p className="text-xs">
                It must be a combination of minimum 8 letters, numbers, and
                symbols.
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <div>
                <input type="radio" name="remember"/>
                <label className="ml-4" htmlFor="remember">Remember Me</label>
              </div>
              
              <p className="text-sm">Forgot Password</p>
            </div>


            <div className="mb-8">
              <Link to="/"><button onClick={() => {signUpBtn}} className="w-full p-2 bg-blue-600 text-white rounded-md ">Sign Up</button></Link>
            </div>

            <div className="flex justify-between mb-8">
              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="./src/assets/google.png" className="w-6 h-6 mr-2"/>Sign Up with Google</button>

              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="./src/assets/fb.png" className="w-6 h-6 mr-2"/>Sign Up with Facebook</button>
            </div>

            <p className="text-sm ">Sudah punya akun? <Link to='/login'>Login</Link></p>
        </div>
          
        </div>
      </div>
    </>
  );
}

export default SignUp