import React from 'react'
import '../styles/cart.scss'
import {AiFillDelete} from "react-icons/ai"
import {useSelector,useDispatch} from "react-redux"

const Cart = () => {
const {cart} = useSelector((state)=> state.addToCart)
const dispatch = useDispatch()
  const increment=(id)=>{
      dispatch({
        type: "add",
        payload: {id}
      })
  }
  const decrement=(id)=>{
    dispatch({
      type: "decre",
      payload: id
    })
  }
  const deleteHandler=(id)=>{
  }

  return (
    <div className="cart">
      <main>
        {cart.length>0 ? (cart.map((ele)=> 
          <CartItem name={ele.name} imgSrc={ele.imgSrc} id={ele.id} price={ele.price} qty={ele.quantity} key={ele.id} increment={increment} decrement={decrement} deleteHandler={deleteHandler}/>
        )):
        <h1>No Items </h1>
        }
        </main>
      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${10}</h2>
        <h2>Tax: ${5}</h2>
        <h2>Total: ${2015}</h2>
      </aside>
    </div>
  )
}
const CartItem=({imgSrc,name,price,handle,deleteHandler,id,qty,key,increment,decrement})=>{
  return(
    <>
  <div className="cartitem">
    <img src={imgSrc} alt="Image" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
      </article>
      <div>
        <button onClick={()=> decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=> increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={()=> deleteHandler(id)}/>
  </div>
  </>
  )
}

export default Cart