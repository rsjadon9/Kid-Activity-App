import  express  from "express";
import { Users }  from "../models/Users.js"
import jwt from "jsonwebtoken";
import bcrypt from  "bcrypt";
 const router = express.Router();

 router.post('/signup' , async(req,res) =>{
  const username = req.body.username;
  const email =    req.body.email;
  const cell =    req.body.cell;
  const existingUserInfo = await Users.findOne({ username: username });
  if (existingUserInfo) {
    return res
      .status(200)
      .send({ message: "User already signed up. Please login !", success: false });
  }
  const salt = await bcrypt.genSalt(10);
  const bcryptPassword = await bcrypt.hash(req.body.password, salt);
  const password =   bcryptPassword;
  const signupUser = new Users({username,password,email,cell});
  await signupUser.save();
  res.status(201).send({ message: "Signup Successful !", success: true });


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

 router.post('/login' , async(req,res) =>{
    const username = req.body.username;
    const password =    req.body.password;
    const existingUserInfo = await Users.findOne({ username: username });
    if (!existingUserInfo) {
      return res
        .status(200)
        .send({ message: "No user with "+username+" found !", success: false });
    }
    console.log(existingUserInfo)
    console.log(password)
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

export {router as UserRouter}