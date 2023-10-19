const mongoose = require("mongoose");

const restaurantschema = mongoose.Schema({
    userid:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    reservationDate: {
        type: Date,
        default:Date.now(),
    },
    numberOfGuests: {
        type: Number
    },
    specialRequests: {
        type: Boolean,
        default:true
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const restaurant =mongoose.model("restaurant",restaurantschema);

module.exports = restaurant;