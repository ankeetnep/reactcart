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
                    ...state,cart: updateCart
                }
            }else{
                return{
                    ...state,
                    cart: [...state.cart,{...itemToAdd,quantity:1}]
                }
            }
            case "decre":
                const updateremoveCart= state.cart.map((item)=>{
                    if(item.id === action.payload && item.quantity > 1){
                        return{
                            ...item, quantity: item.quantity -1
                        };
                    }
                    return item
                })
                // If quantity is 1 or less, remove the item fron the cart
                const updateCartfromCart = state.cart.filter((item)=> item.id!==action.payload)

                return{
                    ...state, cart:updateCartfromCart.length>0?updateremoveCart:updateCartfromCart
                }
            default: return state
    }
}