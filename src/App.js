import React from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import {Toaster} from "react-hot-toast"
import Cart from './components/Cart'
import Login from './components/Login'
import AuthCart from "./auth/AuthCart.jsx"
import './styles/app.scss'
import './styles/cart.scss'
import './styles/media.scss'
import './styles/header.scss'
import './styles/color.scss'
import './styles/home.scss'

const authWrapper=[{
  path: "/cart",
  element: <Cart/>
},

]
const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {authWrapper.map((ele)=>{
          return(
<Route element={<AuthCart><Outlet/></AuthCart>}>
  {<Route path={ele.path} element={ele.element}/>}
  </Route>
          )
        })}
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Toaster/>
    </Router>
    </>
  )
}
export default App;