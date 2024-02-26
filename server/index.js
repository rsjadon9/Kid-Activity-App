import  express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import   "./db.js";
import cookieParser from "cookie-parser";

import { LoginRouter } from './routes/auth.js'

const app = express();

app.use(express.json)
app.use(cors())
app.use(cookieParser())

dotenv.config()

app.listen(process.env.PORT,() =>{
    console.log("Server is Running");
})

//add routes
app.use("/logon", LoginRouter);