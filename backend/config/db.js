import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://EcomMern:30012002@cluster0.gxnqa.mongodb.net/food-t').then(()=>console.log("DB Connected"));
}