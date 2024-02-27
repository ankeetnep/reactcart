const initialState = {
    cart: [],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0
}
export const CartRedux=(state=initialState,action)=>{
    switch(action.type){
        case "add":
            const itemToAdd = action.payload
            const iscartExist = state.cart.find((item)=> item.id === itemToAdd.id)
            if(iscartExist){
                const updateCart = state.cart.map((item)=> item.id===itemToAdd.id?{...item,quantity: item.quantity+1}:item);
                // create a new state object with update
                return{
                    ...state,
                    cart: updateCart
                }
            }else{
                return{
                    ...state,
                    cart: [...state.cart,{...itemToAdd,quantity:1}]
                }
            }
            case "decre":
                const itemToRemove = state.cart.find((item) => item.id === action.payload);

      if (itemToRemove && itemToRemove.quantity > 1) {
        const updatedCart = state.cart.map((item) =>
          item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
        );

        return {
          ...state,
          cart: updatedCart,
        };
      } else if (itemToRemove && itemToRemove.quantity === 1) {
        // If quantity is 1, remove the item from the cart
        const updatedCartWithoutItem = state.cart.filter((item) => item.id !== action.payload);

        return {
          ...state,
          cart: updatedCartWithoutItem,
        };
      }
        case "deletehandle":
            const delect= state.cart.filter((item)=> item.id !== action.payload)

            return{
                ...state,
                cart: delect
            }
            case "amount":
                let sum = 0;
                state.cart.forEach((item)=> (sum+= item.price * item.quantity))
                const updateshipping = state.shipping>1000?0:200
                const updatetax = parseFloat((state.tax*0.16).toFixed(2))
                const updateTotal = sum+state.tax+ state.shipping

                return{
                    ...state,
                    subTotal: sum,
                    shipping: updateshipping,
                    tax: updatetax,
                    total: updateTotal
                }

            default: return state
    }
}