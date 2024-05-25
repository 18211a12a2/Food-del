import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://greatstack:Samudrala123@cluster0.r7kfyhi.mongodb.net/food-del").then(() => console.log("DB connected!!"));
}