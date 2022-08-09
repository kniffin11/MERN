// title price description
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    // the id is generated automatically
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "price must be higher than 0"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [8, "Description must be atleast 8 letters"]
    }
}, {timestamps: true})

// match this function name with 1st parameter, second is the schema name
const product = mongoose.model("product", ProductSchema);

// this needs to make the above function name
module.exports = product;