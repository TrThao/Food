import mongoose, { Types } from "mongoose";

const userScheama = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    cartData:{
        type:Object,
        default:{}
    },

},{minimize:false})
const userModel = mongoose.models.user || mongoose.model("user",userScheama)

export default userModel;