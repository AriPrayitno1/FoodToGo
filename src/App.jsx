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
import Keranjang from "./pages/Keranjang";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Address from "./pages/checkout/Address";
import Payment from "./pages/checkout/Payment";
import Cart from "./pages/checkout/Cart";
import Confirmation from "./pages/checkout/Confirmation";
import OrderProcess from "./pages/checkout/OrderProcess";
import ProfileToko from "./pages/ProfileToko";
import LengkapiData from "./pages/LengkapiData";
import PenilaianProduk from "./pages/PenilaianProduk";
import Verif1 from "./pages/Verif1";
import Verif2 from "./pages/Verif2";
import Verif3 from "./pages/Verif3";
import Verif4 from "./pages/Verif4";
import VerifBerhasil from "./pages/VerifBerhasil";
import ProfileMitra from "./pages/ProfileMitra";
import BuatPost from "./pages/BuatPost";
import Notifikasi from "./pages/Notifikasi";

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
            <Route path=":menuId" element={<Menu />} />
          </Route>
          <Route path="/bantuan" element={<Bantuan />}></Route>
          <Route path="/bantuanscs" element={<BantuanScs />}></Route>
          <Route path="/profiletoko" element={<ProfileToko />}></Route>
          <Route path="/lengkapidata" element={<LengkapiData />}></Route>
          <Route path="/rating" element={<PenilaianProduk />}></Route>
          <Route path="/loginMitra" element={<LoginMitra />}></Route>
          <Route path="/pilihansignup" element={<PilihanSignUp />}></Route>
          
        
          <Route path="/signupUser" element={<SignUpUser />}></Route>
          <Route path="/login" element={<Login />}></Route>
          
          
          <Route path="/signupMitra" element={<SignUpMitra />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/address" element={<Address />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
          <Route path="/orderprocess" element={<OrderProcess />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/verif1" element={<Verif1 />}></Route>
          <Route path="/verif2" element={<Verif2 />}></Route>
          <Route path="/verif3" element={<Verif3 />}></Route>
          <Route path="/verif4" element={<Verif4 />}></Route>
          <Route path="/verifberhasil" element={<VerifBerhasil />}></Route>
          <Route path="/profilemitra" element={<ProfileMitra />}></Route>
          <Route path="/buatpost" element={<BuatPost />}></Route>
          <Route path="/notifikasi" element={<Notifikasi />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
