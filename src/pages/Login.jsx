import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from './src/AuthContext';

const Login = () => {

  const {login} = useAuth();

  const handleLogin = () => {
    login()
  }

  return (
    <>
      <div className="bg-kedua flex justify-center min-h-screen">
        <div className="bg-white w-3/4 flex text-black">
          <div className="basis-2/4">
            <img src="./src/assets/login.png" />
          </div>

          <div className="flex-col basis-2/4 p-8">
            <div className="flex flex-col mb-6">
              <h1 className="text-2xl font-bold mb-6">Login</h1>
              <input
                type="text"
                placeholder="Alamat Email"
                className="bg-white mb-4 border-solid border-2 
              border-gray-300 p-2 rounded-md"
              />

              <input
                type="password"
                placeholder="Password"
                className="bg-white mb-2 border-solid border-2 
              border-gray-300 p-2 rounded-md"
              />
            </div>

            <div className="flex justify-between mb-4">
              <div>
                <input type="radio" name="remember" />
                <label className="ml-4" htmlFor="remember">
                  Remember Me
                </label>
              </div>

              <p className="text-sm">Forgot Password</p>
            </div>
            <div className="mb-8">
              <Link to="/">
                <button onClick={handleLogin} className="w-full p-2 bg-blue-600 text-white rounded-md ">
                    Login
                </button>
              </Link>
                
            </div>

            <div className="flex justify-between mb-8">
              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="./src/assets/google.png" className="w-6 h-6 mr-2" />
                Login with Google
              </button>
              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="./src/assets/fb.png" className="w-6 h-6 mr-2" />
                Login with Facebook
              </button>
            </div>

            <p className="text-sm ">
              Belum punya akun? <Link to="/signup"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
