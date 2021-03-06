import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productListReducer,productDetailReducer } from "./reducers/productReducers"
import {cartReducer} from "./reducers/cartReducers"
import {userLoginReducer,userRegisterReducer,userDetailsReducer,userProfileUpdateReducer} from "./reducers/userReducer"
import {orderCreateReducer} from "./reducers/orderReducers"

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailReducer,
    cart:cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userProfileUpdateReducer,
    orderCreate: orderCreateReducer,
})

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null


const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")):{}

const initialState ={
    cart:{cartItems:cartItemsFromStorage,shippingAddress:shippingAddressFromStorage},
    userLogin:{userInfo: userInfoFromStorage}
}

const midleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...midleware)))

export default store