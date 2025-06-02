import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://coupanapp:3498835134p857@cluster0.ja1fqap.mongodb.net/project').then(()=>console.log("DB Connected"));
}