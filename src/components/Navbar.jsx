import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../public/assets/logo.png";
import profile from "../../public/assets/icon-profile.png";
import LoginBtn from "../components/LoginBtn";
import { userAction, mitraAction } from "../Store";

const Navbar = () => {
  const isUserLogin = useSelector((state) => state.user.isLogin);
  const isMitraLogin = useSelector((state) => state.mitra.isLogin);

  const [menu, setMenu] = useState("beranda");

  return (
    <>
      <div className="flex justify-between align-middle bg-utama px-8 py-4 z-30 sticky top-0">
        <img src={logo} className="w-24 h-12" />

        <div className="flex gap-6 text-white text-lg items-center">
          <Link
            to="/"
            className="cursor-pointer"
            onClick={() => {
              setMenu("beranda");
            }}
          >
            Beranda{" "}
            {menu === "beranda" ? (
              <hr className="h-1 bg-white border-0 rounded md:my-2" />
            ) : (
              <></>
            )}
          </Link>

          <Link
            to="/listmenu"
            className="cursor-pointer"
            onClick={() => {
              setMenu("list");
            }}
          >
            List Menu{" "}
            {menu === "list" ? (
              <hr className="h-1 bg-white border-0 rounded md:my-2" />
            ) : (
              <></>
            )}
          </Link>

          <Link
            to="/menu"
            className="cursor-pointer"
            onClick={() => {
              setMenu("cari");
            }}
          >
            Cari Menu{" "}
            {menu === "cari" ? (
              <hr className="h-1 bg-white border-0 rounded md:my-2" />
            ) : (
              <></>
            )}
          </Link>

          <Link
            to="/keranjang"
            className="cursor-pointer"
            onClick={() => {
              setMenu("keranjang");
            }}
          >
            Keranjang{" "}
            {menu === "keranjang" ? (
              <hr className="h-1 bg-white border-0 rounded md:my-2" />
            ) : (
              <></>
            )}
          </Link>
        </div>

        {isUserLogin || isMitraLogin ? (
          <div className="w-12 cursor-pointer">
            <Link
              to={isUserLogin ? "/profile" : "/profilemitra"}
              onClick={() => {
                setMenu(isUserLogin ? "profile" : "profileMitra");
              }}
            >
              <img src={profile} alt="Profile" />
              {menu === (isUserLogin ? "profile" : "profileMitra") ? (
                <></>
              ) : (
                <></>
              )}
            </Link>
          </div>
        ) : (
          <Link to="/Login">
            <LoginBtn></LoginBtn>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
