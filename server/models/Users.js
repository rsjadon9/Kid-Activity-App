import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{type:Number, unique:true},
    name:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    email:{type:String, required:false},
    cell:{type:Number, required:false}
})

const userModel = mongoose.model('Users' , userSchema)

export {userModel}