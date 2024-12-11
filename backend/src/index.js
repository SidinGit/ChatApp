import express from "express"
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { connectDB } from "./lib/db.js"
import {app, server} from "./lib/socket.js"
dotenv.config()
const PORT = process.env.PORT
const __dirname = path.resolve()

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true //^ allow the cokookies or authorizatoion headers to be sent with the request
})) //^ allow cross-origin-resource-sharing(cors)

app.use(express.json({ limit: "10mb" })) //^ allow us to access json body send as request
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser()) //^ alloq us to parse the cookie



app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/messages", messageRoutes)

if(process.env.NODE_ENV==="production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

server.listen(PORT, () => {
    console.log("app is listening on port number",PORT)
    connectDB()
})


