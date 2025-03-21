import connectDB from "./db/index.js";
import Dotenv from "dotenv";
import { app } from "./app.js";
Dotenv.config({
    path:'./env'
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