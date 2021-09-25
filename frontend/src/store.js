import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

const reducer = combineReducers({})

const initialSate ={}

const midleware = [thunk]

const store = createStore(reducer,initialSate,composeWithDevTools(applyMiddleware(...midleware)))

export default store