const token = localStorage.getItem("_token_")??null

const initialstate = {
    isLogged: token!==null?true:false,
    token: token,
}

export const Reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                isLogged: action.payload.isLogged,
                token: action.payload.token,
            }
        default:
            return state
    }
}