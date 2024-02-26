import  express  from "express";
import { Activity }  from "../models/Activity.js"
 const router = express.Router();

 router.post('/addActivity' , async(req,res) =>{
  const activityName = req.body.activityName;
  const kidName = req.body.kidName;
  const dayOfActivity = req.body.dayOfActivity;
  const recurringIndicator = req.body.recurringIndicator;
  const paidIndicator = req.body.paidIndicator;

  const newActivity = new Activity({activityName, kidName,dayOfActivity,recurringIndicator,paidIndicator});
  console.log(newActivity)
  await newActivity.save();
  res.status(201).send({ message: "New Activity Added Successfully !", success: true });
 });

 router.get('/viewActivity' , async(req,res) =>{
    const activityFromDB = await Activity.find({});
    res.status(200).send(activityFromDB);
   });
  
export {router as ActivityRouter}