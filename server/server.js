require("dotenv").config()
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=express()

const PORT=process.env.PORT || 5000
const MONGO_URI=process.env.MONGO_URI

cors({
    origin:process.env.CLIENT_URL,
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:["Content-Type","Authorization"]
})

// handle MiddleWare
app.use(express.json())


// Global Sever Error

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).json({
        success:false,
        message:"Something Went Wrong"
    })
})

// connect Database

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Database is Connected")
})
.catch((error)=>{
   console.log(error)
})

app.listen(PORT,()=>{
  console.log(`Server is Runnig on ${PORT}`)
})