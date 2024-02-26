import  express  from "express";
import { Users }  from "../models/Users.js"
import jwt from "jsonwebtoken";
import bcrypt from  "bcrypt";
 const router = express.Router();

 router.post('/login' , async(req,res) =>{
    console.log(req.username)
    const username = req.body.username;
    const password =    req.body.password;
    const existingUserInfo = await Users.findOne({ username: username });
    if (!existingUserInfo) {
      return res
        .status(200)
        .send({ message: "No user with "+username+" found !", success: false });
    }
    const userAndDbPasswordMatch = await bcrypt.compare(password, existingUserInfo.password);
    if (!userAndDbPasswordMatch) {
      return res
        .status(200)
        .send({ message: "Authorization Error: User/Password Not Valid !", success: false });
    }
    const jwtTokenWith30MinExpiry = jwt.sign({ id: existingUserInfo._id }, process.env.JWT_SECRET, {
        expiresIn: "30m",
      });
    return res
        .status(200)
        .send({ message: "Successful Login !", success: true, jwtTokenWith30MinExpiry });

 })

export {router as LoginRouter}