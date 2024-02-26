import  express  from "express";
import { Activity }  from "../models/Activity.js"
 const router = express.Router();

 router.post('/addActivity' , async(req,res) =>{
  const activityName = req.body.name;
  const kidName = req.body.name;
  const dayOfActivity = req.body.name;
  const recurringIndicator = req.body.name;
  const paidIndicator = req.body.name;

  const newActivity = new Activity({activityName, kidName,dayOfActivity,recurringIndicator,paidIndicator});
  await newActivity.save();
  res.status(201).send({ message: "New Activity Added Successfully !", success: true });
 });

export {router as KidRouter}