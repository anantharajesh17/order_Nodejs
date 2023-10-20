const mongoose = require("mongoose");

const addressschema = mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pinCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    is_active:{
        type:Boolean,
        default:true
    }
});

const address = mongoose.model("address",addressschema);
module.exports = address;