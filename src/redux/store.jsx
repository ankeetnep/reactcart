import {configureStore} from "@reduxjs/toolkit"
import { Reducer } from "../redux/reducer.jsx"
import { CartRedux } from "./cart.jsx"

const store=configureStore({
    reducer:{
      login: Reducer,
      addToCart: CartRedux
    }
})
export default store