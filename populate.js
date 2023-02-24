//dynamically adds values from products.json to the database

require("dotenv").config();
let connectDB = require("./db/connect");
let Product = require("./model/products.js");

let jsonProducts = require("./products.json");

let start = async ()=> {
    try{
    await connectDB(process.env.MONGO_URI)
    //to add the data form the product.json 1st 
    await Product.deleteMany() // removes all the current data in the model wheneever the data need sto be updated
    //dynamically create product
    await Product.create();
    console.log("Success !!!~");
    }catch(err){
    console.log(err)
    }
}

start()