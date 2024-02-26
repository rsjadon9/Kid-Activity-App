import  express  from "express";
import {Users} from "../models/Users"
import { Jwt } from "jsonwebtoken";
import bcrypt from  "bcrypt";
 const router = express.Router();

 router.post('/login' , async(req,res) =>{
    const username = req.body.username;
    const password =    req.body.password;
    const existingUserInfo = await userModel.findOne({ username: username });
    if (!existingUserInfo) {
      return res
        .status(404)
        .send({ message: "No user with "+username+" found !", success: false });
    }
    const userAndDbPasswordMatch = await bcrypt.compare(password, existingUserInfo.password);
    if (!userAndDbPasswordMatch) {
      return res
        .status(401)
        .send({ message: "Authorization Error: User/Password Not Valid !", success: false });
    }
    const jwtTokenWith30MinExpiry = jwt.sign({ id: existingUserInfo._id }, process.env.JWT_SECRET, {
        expiresIn: "30m",
      });
    return res
        .status(200)
        .send({ message: "Successful Login !", success: true, jwtTokenWith30MinExpiry });

 })

 