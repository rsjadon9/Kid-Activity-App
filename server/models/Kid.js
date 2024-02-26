import mongoose from "mongoose";

const kidSchema = new mongoose.Schema({
    name:{type:String, required:true},
    gender:{type:String, required:true},
    dateOfBirth:{type:String, required:true},
});

const kidModel = mongoose.model('Kid' , kidSchema)

export {kidModel as Kid}