import mongoose, { Types } from "mongoose";

const foodScheama = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image: {
        type: String, 
        required: true,
    },
})
const foodModel = mongoose.models.food || mongoose.model("food",foodScheama)

export default foodModel;