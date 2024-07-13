import mongoose from "mongoose"

const Bschema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
});

const Book=mongoose.model("Book",Bschema);

export default Book;
