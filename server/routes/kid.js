import  express  from "express";
import { Kid }  from "../models/Kid.js"
 const router = express.Router();

 router.post('/addKid' , async(req,res) =>{
  const name = req.body.name;
  const gender =    req.body.gender;
  const dateOfBirth =    req.body.dateOfBirth;
  console.log(name)
  console.log(gender)
  console.log(dateOfBirth)
  const newKid = new Kid({name,gender,dateOfBirth});
  await newKid.save();
  res.status(201).send({ message: "New Kid Added Successfully !", success: true });
 });

export {router as KidRouter}