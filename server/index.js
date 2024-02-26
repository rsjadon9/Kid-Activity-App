import  express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import   "./db.js";
import cookieParser from "cookie-parser";

import { UserRouter } from './routes/user.js'
import { KidRouter } from './routes/kid.js'
import { ActivityRouter } from './routes/activity.js'
import { Activity } from "./models/Activity.js";

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()

//add routes
app.use("/user", UserRouter);
app.use("/kid", KidRouter);
app.use("/activity", ActivityRouter);




app.listen(process.env.PORT,() =>{
    console.log("Server is Running");
})
