import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import {useSelector} from "react-redux"

const Header = () => {
  const nav = useNavigate()
  const select =useSelector((state)=> state.login)
  const {cart} = useSelector((state)=> state.addToCart)
  const {isLogged} = select
    const handleLogout=()=>{
    localStorage.removeItem("_token_")
    nav("/login")
  }
  return (
    <>
    <nav>
      <h2>Cart</h2>
      <div>
        <Link to="/">Home</Link>
        {isLogged&& 
        (<Link to="/login" onClick={handleLogout}>Logout</Link>)
        }
        {isLogged&& 
        (<Link to="/dashboard">Dashboard</Link>)
        }
{!isLogged&&(<Link to="/login">Login</Link>)}
<Link to="/cart"><FiShoppingBag/><p>{cart.length}</p></Link>
      </div>
    </nav>
    </>
  )
}
export default Header;