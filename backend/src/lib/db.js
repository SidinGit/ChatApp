import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo DB connected successfully with", result.connection.host)
    } catch (error) {
        console.log("MongoDB connection error!! ",error)
    }
}