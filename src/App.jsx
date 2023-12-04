import React from "react";
import BreadCrum from "./pages/BreadCrum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CariMenu from "./pages/CariMenu";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import LoginMitra from "./pages/LoginMitra";
import PilihanSignUp from "./pages/PilihanSignUp";
import SignUpUser from "./pages/SignUpUser";
import SignUpMitra from "./pages/SignUpMitra";
import Otp from "./pages/Otp";
import ListMenu from "./pages/ListMenu";
import Bantuan from "./pages/Bantuan";
import BantuanScs from "./pages/BantuanScs";
import Keranjang from "./pages/Keranjang"
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Address from "./pages/Address"
import Payment from "./pages/Payment";
import ProfileToko from "./pages/ProfileToko";
import ProfileMitra from "./pages/ProfileMitra";
import PenilaianProduk from "./pages/PenilaianProduk";

function App() {
  return (
    <>
      <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Beranda />}></Route>
            <Route path="/menu" element={<CariMenu />}></Route>
            <Route path="/listmenu" element={<ListMenu />}></Route>
            <Route path="/keranjang" element={<Keranjang />}></Route>
            <Route path="/menu" element={<Menu />}>
              <Route path=":menuId" element={<Menu/>}/>
            </Route>
            <Route path="/bantuan" element={<Bantuan />}></Route>
            <Route path="/bantuanscs" element={<BantuanScs />}></Route>
            <Route path="/profiletoko" element={<ProfileToko />}></Route>
            <Route path="/profilemitra" element={<ProfileMitra />}></Route>
            <Route path="/rating" element={<PenilaianProduk />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/loginMitra" element={<LoginMitra />}></Route>
            <Route path="/pilihansignup" element={<PilihanSignUp />}></Route>
            <Route path="/signupUser" element={<SignUpUser />}></Route>
            <Route path="/signupMitra" element={<SignUpMitra />}></Route>
            <Route path="/otp" element={<Otp />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/address" element={<Address />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
