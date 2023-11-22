import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLogin = useSelector((state) => state.isLogin);

  const isSignedUp = useSelector((state) => state.isSignedUp)

  return (
    <>
      <div className="flex justify-between align-middle bg-utama px-8 py-4 z-30 sticky top-0">
        <img className="w-24 h-12" src="./src/assets/logo.png" alt="logo" />
        {/* perhatikan ada yg diubah */}
        <div className="flex gap-6 text-white text-lg items-center">
          <Link to="/" className="cursor-pointer">
            Beranda
          </Link>
          <Link to="/listmenu" className="cursor-pointer">
            List Menu
          </Link>
          <Link to="/menu" className="cursor-pointer">
            Cari Menu
          </Link>
          {isLogin ? (
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.scdn.co/image/ab67706c0000da84251322a38841c235935752b7" />
              </div>
            </div>
          ) : (
            <div>
              <Link to="/Login">Login</Link>
              <Link to="/SignUp">SignUp</Link>
            </div>            
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
