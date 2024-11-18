// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
import connectDB from "./database/index.js";
import dotenv from "dotenv";


dotenv.config({
  path : './.env'
})





// calling the function
connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
})

















//const app = express();   // app have power of express and have many listeners and methods

/*
;( async () => {                  // semicolon for  cleaning purpose professional apprach
  try {
    await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
    app.on("errors" , (error) =>{ console.log("connect successfully but some error" , error);

      throw error
    })
    app.listen(process.env.PORT , () => {
      console.log("server is running on port" , process.env.PORT)
    })
  } catch (error) {
    console.log("error" , error)
    throw error
  }
})()         // IIFE


*/