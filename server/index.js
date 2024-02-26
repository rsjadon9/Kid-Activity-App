import  express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import   "./db.js";
import cookieParser from "cookie-parser";

import { LoginRouter } from './routes/auth.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()

//add routes
app.use("/auth", LoginRouter);

app.listen(process.env.PORT,() =>{
    console.log("Server is Running");
})
