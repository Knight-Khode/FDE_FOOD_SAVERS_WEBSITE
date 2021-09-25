import {PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST} from "./constants/productConstants"
import axios from "axios"

export const listProducts = ()=> async (dispatach)=>{
    try{
        dispatach({
            type:PRODUCT_LIST_REQUEST
        })

        const {data} = await axios.get("/api/products")

        dispatach({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatach({
            type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message
        })
    }
}