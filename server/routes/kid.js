import  express  from "express";
import { Kid }  from "../models/Kid.js"
 const router = express.Router();

 router.post('/addKid' , async(req,res) =>{
  const name = req.body.username;
  const gender =    req.body.email;
  const dateOfBirth =    req.body.cell;

  const newKid = new Kid({name,pgenderassword,dateOfBirth});
  await newKid.save();
  res.status(201).send({ message: "New Kid Added Successfully !", success: true });
 });

export {router as KidRouter}