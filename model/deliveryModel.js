const mongoose = require("mongoose");

const deliverypersonschema = mongoose.Schema({
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurant"
    },
    admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"admin"
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String
    },
    mobile:{
        type:Number,
        Validate:{
            Validate:function(number){
                return /^(\+91)[0-9]{10}$/.test(number);
            },
            message:"invalid phone number must start with +91"
        },
        required:[true, 'phone number must required']
    },
    vehicleType: {
        type: String,
        enum:["bike", "car", "flight"],
        default: 'car',
    },
    available: {
        type: Boolean,
        default: true,
    },
    currentLocation: {
            type: String,    
        },
    })

const deliveryperson = mongoose.model("deliveryperson",deliverypersonschema);
module.exports = deliveryperson;