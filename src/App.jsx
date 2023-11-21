import Menu2 from './pages/Menu2'
import Home from './pages/Home'
import React from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu2/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
        </>
      </Router>
  )
}

export default App
