import mongoose from "mongoose";
const admin_schema=new mongoose.Schema({
    usename:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String}
})

export default mongoose.model.Admins||mongoose.model("admin",admin_schema)