import  express  from "express";
import {Users} from "../models/Users"
import { Jwt } from "jsonwebtoken";
import bcrypt from  "bcrypt";
 const router = express.Router();

 router.post('/login' , async(req,res) =>{
    const {username , password } = req.body;


 })

 