import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    activityName:{type:String, required:true}, 
    kidName:{type:String, required:true},
    dayOfActivity:{type:String, required:true},
    recurringIndicator:{type:String, required:true},
    paidIndicator:{type:String, required:true}
});

const activityModel = mongoose.model('Activity' , activitySchema)

export {activityModel as Activity}