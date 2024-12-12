import express from "express"; 
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()

import {connectDB} from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.routes.js"
import {app,io,server} from "./lib/socket.js"

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}
));
app.get("/" , (req,res)=>{
    res.send("hello in home");
})  
app.use("/api/auth" , authRoutes)
app.use("/api/messages" , messageRoutes);
server.listen(PORT , async ()=>{
    console.log("Server is running on port", PORT)
   await connectDB();
})