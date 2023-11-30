import React from "react";
import BreadCrum from "./pages/BreadCrum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CariMenu from "./pages/CariMenu";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ListMenu from "./pages/ListMenu";
import Bantuan from "./pages/Bantuan";
import BantuanScs from "./pages/BantuanScs";
import Keranjang from "./pages/Keranjang"
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Address from "./pages/Address"
import Payment from "./pages/Payment";

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
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/address" element={<Address />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
