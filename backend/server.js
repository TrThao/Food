import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config.js"
const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

//db config
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
   res.send("APT Worrking")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

/// mongodb+srv://EcomMern:30012002@cluster0.gxnqa.mongodb.net/?