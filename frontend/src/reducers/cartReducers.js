import {CART_ADD_ITEM} from "../constants/cardConstants"

export const cartReducer = (state={cardItems:[]},action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item =action.payload
            const existItem = state.cardItems.find(x=>x.product === item.products)
            if(existItem){
                return{
                    ...state,
                    cardItems:state.cartItems.map(x=>x.product === existItem.product ? item:x)
                }
            }else{
                return{
                    ...state,
                    cardItems:[...state.cardItems,item]
                }
            }
        default:
            return state
    }
}