import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productListReducer } from "./reducers/productReducers"

const reducer = combineReducers({
    productList:productListReducer,
})

const initialSate ={}

const midleware = [thunk]

const store = createStore(reducer,initialSate,composeWithDevTools(applyMiddleware(...midleware)))

export default store