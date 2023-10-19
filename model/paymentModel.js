const mongoose = require("mongoose");

const paymentschema = mongoose.Schema({
    restaurant_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurant'
    }],
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum:['gpay','phonepay','visa'],
        default:'visa',
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending',
    },
    transactionId: {
        type: String,
        unique: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now,
    }
})
const payment = mongoose.model("payment",paymentschema);
module.exports = payment;