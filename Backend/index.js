import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

import cors from 'cors';


const app = express()

// It is a middleware
app.use(cors());
// This converts the data coming from body to change into json form
app.use(express.json());

dotenv.config();

const PORT= process.env.PORT || 4000;

// connect to MongoDB
const URI = process.env.MongoDBURI
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected To MongoDB")
} catch (error) {
    console.log("Error: ", error);
}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})