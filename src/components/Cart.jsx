import React from 'react'
import '../styles/cart.scss'
import {AiFillDelete} from "react-icons/ai"
import {useSelector,useDispatch} from "react-redux"

const Cart = () => {
const {cart,subTotal,tax,shipping,total} = useSelector((state)=> state.addToCart)
const dispatch = useDispatch()
  const increment=(id)=>{
      dispatch({
        type: "add",
        payload: {id}
      })
      dispatch({
        type: "amount"
      })
  }
  const decrement=(id)=>{
    dispatch({
      type: "decre",
      payload: id
    })
    dispatch({
      type: "amount"
    })
  }
  const deleteHandler=(id)=>{
    dispatch({
      type: "deletehandle",
      payload: id
    })
    dispatch({
      type: "amount"
    })
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
        <h2>SubTotal:{subTotal}</h2>
        <h2>Shipping:{shipping}</h2>
        <h2>Tax:{tax}</h2>
        <h2>Total:{total}</h2>
      </aside>
    </div>
  )
}
const CartItem=({imgSrc,name,price,deleteHandler,id,qty,increment,decrement})=>{
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