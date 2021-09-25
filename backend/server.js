import express  from "express"
import dotenv from "dotenv"
import products from  "./data/products.js"
import connectDB from "./config/db.js"
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import users from "./data/users.js"

dotenv.config()

connectDB()

const app = express()

app.get("/",(req,res)=>{
    res.send("api is running")
})

app.get("/api/products",(req,res)=>{
    res.json(products)
})

app.get("/api/products/:id",(req,res)=>{
    const product = products.find(p=>p._id===req.params.id)
    res.json(product)
})


const importData = async ()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers= await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product =>{
            return {...product,user:adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log("Data Imported!")
        process.exit()
    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

const destroyData = async ()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("Data Destroyed!")
        process.exit()
    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

importData()

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))