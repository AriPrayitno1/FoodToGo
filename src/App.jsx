import CariMenu from './pages/CariMenu'
import Home from './pages/Home'
import React from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ListMenu from './pages/ListMenu'
import Bantuan from './pages/Bantuan'
import BantuanScs from './pages/BantuanScs'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './AuthContext'

function App() {
  return (
      <Router>
        <>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<CariMenu/>}></Route>
            <Route path='/listmenu' element={<ListMenu/>}></Route>
            <Route path='/bantuan' element={<Bantuan/>}></Route>
            <Route path='/bantuanscs' element={<BantuanScs/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
          
        </>
        <AuthProvider></AuthProvider>
      </Router>
  )
}

export default App
