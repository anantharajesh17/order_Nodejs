const jwt = require('jsonwebtoken');
// const controller = require("../controller/usercontroller");
const secretKey = process.env.sk;

function generateToken(userId) {
    const payload = { userId };
    const token = jwt.sign(payload, secretKey, { expiresIn: '10h' }); 
    return token;
  }
  const verifyToken = (token) => {
    try {
      const decoded = jwt.verify(token, sk);
      return decoded;
      // console.log(decoded,'decoded');
    } catch (err) {
      return null;
    }
  }
module.exports = { generateToken, verifyToken};
