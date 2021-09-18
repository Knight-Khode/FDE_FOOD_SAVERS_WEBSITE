import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    //we want to know which user(admin) created a product
    user
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

export default User