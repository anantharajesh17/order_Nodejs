const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    restaurant_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurant'
    }],
    admin_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'admin'
    }],
    payment_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'payment'
    }],
    deliveryPerson_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'deliveryperson'
    }],
    menu_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'menu'
    }],
    address_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'address'
    }]
});

const order = mongoose.model("order", orderSchema);
module.exports = order;