import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000
const URI = process.env.MongoDBURI;

//connect to mongoDB
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to MongoDB");
}catch(err){
    console.log("Error: ", error);
    
};

//Defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})