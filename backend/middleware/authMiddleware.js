import jwt  from "jsonwebtoken";
import User from "../models/userModel.js"
import expressAsyncHandler from "express-async-handler";

const protect = expressAsyncHandler(async (req,res,next)=>{
   
    const token = req.headers.authorization
    //check if no token
    if(!token)return res.status(401).json({msg:'No token, authorization denied'})

    try{
        const decoded= jwt.verify(JSON.parse(token),"FOODSAVERS")
        console.log("Hello")
        req.user = decoded.id
        next()
        
    }catch(ex){
        res.status('401').json({msg:'Token is not valid'})
    }
   
  
})

export{
    protect
}