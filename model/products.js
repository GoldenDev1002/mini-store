let mongoose = require("mongoose");
let productSchema1 = mongoose.Schema;

let productSchema = new productSchema1({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    featured: {
        type:Boolean,
        default: false
    },
    rating: {
        type:Number,
        default:  4.5
    },
    createdAt : {
        type: Date,
        required: Date.now(),
    },
    company: {
        type: String,
        enum: {
       values: ["ikea", "liddy", "marcos", "caressa"], // provides a limited number of options to be used within the select element
       // an error message if none of the values provided exist
       message: "<VALUE> is not supported"
    },

}

   
})


let productModel = mongoose.model("product", productSchema);
module.exports = productModel;
