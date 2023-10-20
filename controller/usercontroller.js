const addressTable = require("../model/addressModel");
const adminTabele = require("../model/adminModel");
const deliveryTable = require("../model/deliveryModel");
const menuTable = require("../model/menuModel");
const orderTable = require("../model/orderModel");
const paymentTable  = require("../model/paymentModel");
const restaurantTable = require("../model/restaurantModel");
const userTable = require("../model/usersModel");
const createToken = require("../middleware/jwt");
const auth = require("../middleware/auth");
//userTable
const user = async(req,res)=>{
    try{
    const {firstName, lastName, email, mobile, otp, ip_Address} = req.body;
    const user = await userTable.findOne({ email });
    if(user === req.body.email){
    res.status(401).json({message:"user already avilable in db"})
    }
    const newUser = await userTable.create({
       firstName,lastName,email,mobile,otp,ip_Address
      });
      const token = createToken.generateToken(newUser._id)
      res.status(200).json({message:"user create ok!!", newUser, token });
    }catch(error){
        console.log('error',error);
        res.status(500).json({message:"internal server error"})
    }
}

//adminTable
const admin = async(req,res)=>{
    try{
    const {firstName, lastName, email, password, mobile, country, otp, gender} = req.body;
    const admin = await adminTabele.findOne({ email });
    if(admin === req.body.email){
    res.status(401).json({message:"user already avilable in db"})
    }
    const newadmin = await adminTabele.create({
        firstName,lastName,email,password,mobile,country,otp,gender
      });
    res.status(200).json({message:'admin create sucessfully', newadmin});
    }
    catch(error){
        console.log("Error",error);
        res.status(500).json({message:'internal server is error'});
    }
}

//address
const address = async(req,res)=>{
    try{
    const {
        street,
        city,
        state,
        pinCode,
        country,
        is_Active,
    }=req.body;
    const userid = req.user.userId;
    const address = await addressTable.create({
        street,city,state,pinCode,country,is_Active,userid
    })
    res.status(200).json({message:"address create ok!!!", address})
    }catch(error){
        console.log('Error',error)
        res.status(500).json({message:"internal server error"})
    }
}

//menu
const menuitam = async(req,res)=>{
    try{
        const {itemName,description,price,category,cuisineType,isVegetarian,isSpicy,imageURL}=req.body;
        const menu = await menuTable.create({
            itemName,description,price,category,cuisineType,isVegetarian,isSpicy,imageURL
        })
        res.status(200).json({message:"menuiteam added ok!!!", menu})
    }catch(error){
        console.log("Error",error);
        res.status(500).json({message:"internal server errrrrror"})
    }
}

//restaurent
const restaurant = async(req,res)=>{
    try{
    const {reservationDate,numberOfGuests,specialRequests,status,createdAt}= req.body;
    const restaurant = await restaurantTable.create({
        userid:user._id,reservationDate,numberOfGuests,specialRequests,status,createdAt
    })
    res.status(200).json({message:"restaurent create ok!!", restaurant});
}
catch(error){
    console.log('Error',error);
    res.status(500).json({message:'internal server error'})
}
}

//payment table
const payment = async(req,res)=>{
    try{
    const {restaurant_id,amount,paymentMethod,paymentStatus,transactionId,paymentDate}=req.body;
    const payment = await paymentTable.create({
        restaurant_id,amount,paymentMethod,paymentStatus,transactionId,paymentDate
    })
    res.status(200).json({message:"payment created sucess", payment});
}catch(error){
    res.status(500).json({message:"internal server error"})
}
}
//deliverytable 
const delivery = async(req,res)=>{
    try{
        const {restaurant_id,admin_id,user_id,name,mobile,vehicleType,avilable,currentLocation} = req.body;
    const delivery = await deliveryTable.create({
        restaurant_id,admin_id,user_id,name,mobile,vehicleType,avilable,currentLocation 
    })
    res.status(200).json({message:"delivery create ok!!!", delivery})
}
catch(error){
    console.log('Error', error);
    res.status(500).json({message:'internal server error'})
}
}
//order
const order = async(req,res)=>{
    try {
        const order = await orderTable.create({});
        res.status(200).json({message:"order creation ok!!!", order})
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

const getAddress = async (req, res) => {
    try {
      const userId = req.user.userId;
      console.log(userId, "get")
      const addresses = await addressTable.findOne({ userid: userId });
      res.status(200).json({ message: "User addresses retrieved successfully", addresses });
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = {user, admin, address, menuitam, restaurant, payment, delivery, order, getAddress};