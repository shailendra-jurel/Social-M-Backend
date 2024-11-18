import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
    const connectionInstance =  await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    // console.log(connectionInstance);   // just for assignment purpose

    console.log(`/n  MongoDb  connect  db Host  :: ${connectionInstance.connection.host} `)

    
        
    } catch (error) {

        console.log("MongoDB  connection error" , error)
        process.exit(1)      // node js  give excess to the process object and exit method is used to exit the process
        //1 is  some exit code  (overloading)
    }

}

export default connectDB;