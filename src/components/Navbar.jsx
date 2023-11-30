import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from '../assets/logo.png'
import profile from '../assets/icon-profile.png'
import LoginBtn from '../components/LoginBtn'

const Navbar = () => {
  const isLogin = useSelector((state) => state.isLogin);

  const [menu, setMenu] = useState("beranda")

  return (
    <>
      <div className="flex justify-between align-middle bg-utama px-8 py-4 z-30 sticky top-0">
        <img src={logo} className="w-24 h-12"/>

        <div className="flex gap-6 text-white text-lg items-center">
          <Link to="/" className="cursor-pointer" 
          onClick={()=>{setMenu("beranda")}}>Beranda {menu==="beranda" ? <hr className="h-1 bg-white border-0 rounded md:my-2"/> : <></>}</Link>

          <Link to="/listmenu" className="cursor-pointer" 
          onClick={()=>{setMenu("list")}}>List Menu {menu==="list" ? <hr className="h-1 bg-white border-0 rounded md:my-2"/> : <></>}</Link>

          <Link to="/menu" className="cursor-pointer" 
          onClick={()=>{setMenu("cari")}}>Cari Menu {menu==="cari" ? <hr className="h-1 bg-white border-0 rounded md:my-2"/> : <></>}</Link>

          <Link to="/keranjang" className="cursor-pointer" 
          onClick={()=>{setMenu("keranjang")}}>Keranjang {menu==="keranjang" ? <hr className="h-1 bg-white border-0 rounded md:my-2"/> : <></>}</Link>
          </div>
          {isLogin ? (
              <div className="w-12 cursor-pointer">
                <Link to="/profile" onClick={()=>{setMenu("profile")}}><img src={profile} />{menu==="profile" ? <></> : <></>}</Link>
              </div>
          ) : (
              <Link to="/Login"><LoginBtn></LoginBtn></Link>           
          )}
      </div>
    </>
  );
};

export default Navbar;
