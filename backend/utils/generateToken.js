import jwt from "jsonwebtoken"

const generateToken = (id) =>{
    return jwt.sign({id},"FOODSAVERS",{expiresIn:"30d"})
}

export default generateToken