import connectDB from "./db/index.js";
import Dotenv from "dotenv";
import { app } from "./app.js";
Dotenv.config({
    path:'./.env'
})   


connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(` Server is running at port:${process.env.PORT}`);  
    })
})
.catch((error)=>{
    console.log("mongo db connection failed!!", error);
})



// another way to connect db 

// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// const app=express()

// ;(async()=>{
//     try {
//        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       
//         app.on("error",(error)=>{
//             console.log("error in connection")
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listen at${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("error")
//         throw error
//     }
// })()