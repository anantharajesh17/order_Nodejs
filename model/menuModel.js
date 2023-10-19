const mongoose = require("mongoose");

const menuschema = mongoose.Schema({
    itemName: {
        type: String
    },
    description: String,
    price: {
        type: Number
    },
    category: {
        type: String
    },
    cuisineType: {
        type: String
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },
    isSpicy: {
        type: Boolean,
        default: false,
    },
    imageURL: String,
})

const menu = mongoose.model("menu",menuschema);
module.exports = menu;