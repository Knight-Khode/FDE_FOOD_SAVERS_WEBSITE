import bcrypt from "bcryptjs"

const users= [
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true
    },
    {
        name:"John DOe",
        email:"john@example.com",
        password:bcrypt.hashSync("123456",10)
    },
    {
        name:"Jane Doe",
        email:"admin123@example.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true
    }
]

export default users