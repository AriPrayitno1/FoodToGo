import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sliceAction } from "../Store";
import loginImg from "../../public/assets/login.png";
import coloredLogo from "../../public/assets/colored_logo.png";

const Login = () => {
  const dispatch = useDispatch();

  const Handle = () => {
    dispatch(sliceAction.Login());
  };

  return (
    <>
      <div className="bg-kedua flex justify-center min-h-screen">
        <div className="flex bg-white w-3/5 h-3/4 mt-16 text-black">
          <div className="basis-2/5">
            <img src={loginImg} className="h-full" />
          </div>

          <div className="flex-col basis-3/5 p-6">
            <div className="flex justify-between items-end mb-4">
              <h1 className="text-xl font-bold mb-6">Login</h1>
              <img src={coloredLogo} className="w-24" />
            </div>

            <div className="flex flex-col mb-4">
              <input
                type="text"
                placeholder="Alamat Email"
                className="bg-white mb-4 border-solid border-2 
              border-gray-300 p-1 rounded-md"
              />

              <input
                type="password"
                placeholder="Password"
                className="bg-white border-solid border-2 
              border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="mb-4">
              <Link to="/">
                <button
                  className="w-full p-1 text-lg bg-blue-600 text-white rounded-md "
                  onClick={Handle}
                >
                  Login
                </button>
              </Link>
            </div>

            <div className="flex justify-between mb-4">
              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="../../public/assets/google.png" className="w-6 h-6 mr-2" />
                Login with Google
              </button>
              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="../../public/assets/fb.png" className="w-6 h-6 mr-2" />
                Login with Facebook
              </button>
            </div>

            <p className="text-sm">
              Belum punya akun?{" "}
              <Link to="/signup" className="text-red-700 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
