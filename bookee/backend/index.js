import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
import bookRoute from './routes/book.route.js'

dotenv.config();

const PORT = process.env.PORT || 3000;
const dburi = process.env.MongoDBUri;

try {
    mongoose.connect(dburi)
    console.log("connected to db");
} catch (error) {
    console.log("error:",error);
}

// app.get('/',(req,res)=>{
//     res.send("hello");
// })

app.use('/book',bookRoute);

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})