import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productListReducer,productDetailReducer } from "./reducers/productReducers"
import {cartReducer} from "./reducers/cartReducers"

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailReducer,
    cart:cartReducer
})

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]

const initialSate ={
    cart:{cartItems:cartItemsFromStorage},
}

const midleware = [thunk]

const store = createStore(reducer,initialSate,composeWithDevTools(applyMiddleware(...midleware)))

export default store