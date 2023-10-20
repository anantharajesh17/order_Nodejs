const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
// const token = require("../middleware/jwt")
const auth = async(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]; 
    if(!token){
        res.status(404).json({message:"token authentication failed"})
    }
    console.log(token)
    const decode = jwt.decode(token, `anantharajesh`);
    console.log(decode,"happy")
    req.user = decode;
    console.log(decode)
    next()
}

module.exports = {auth}