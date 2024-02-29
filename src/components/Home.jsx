// import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { toast } from "react-hot-toast"
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.webp'
import image7 from '../assets/7.webp'
import image8 from '../assets/8.webp'

const Home = () => {
  const dispatch = useDispatch()
  const addtoCart=(options)=>{
    dispatch({
      type: "add",
      payload: options
    })
    dispatch({
      type: "amount"
    })
    toast.success("Item")
  }
  const productItem=[
    {
      id: 1,
      name: "Iphone",
      price: 1200,
      imgSrc : image1
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 2300,
      imgSrc: image2
    },
    {
      id: 3,
      name: "Canon",
      price: 1200,
      imgSrc : image3
    },
    {
      id: 4,
      name: "Jacket",
      price: 230,
      imgSrc: image4
    },
    {
      id: 5,
      name: "Strip Light",
      price: 180,
      imgSrc : image5
    },
    {
      id: 6,
      name: "Summer Jack",
      price: 100,
      imgSrc: image6
    },
    ,
    {
      id: 7,
      name: "T-shirt",
      price: 120,
      imgSrc: image7
    },
    ,
    {
      id: 8,
      name: "Trip Cap",
      price: 30,
      imgSrc: image8
    },
  ]
  return (
    <>
    <div className="home">
      {productItem.map((item)=>
      (<Design key={item.id} name={item.name} price={item.price} imgSrc={item.imgSrc} id={item.id} handle={addtoCart}/>)
      )}
    </div>
    </>
  )
}
const Design=({name,price,imgSrc,id,handle})=>{
  return(
    <>
    <div className="productCard">
  <h2>{name}</h2>
  <p>${price}</p>
  <img src={imgSrc} alt="Images"/>
  <button onClick={()=> handle({name,price,imgSrc,quantity:1,id})}>Add to Cart</button>
  </div>
    </>
  )
}

export default Home