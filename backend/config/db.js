import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://aakashgarg:AakashFeedFood@cluster0.8vtnqzd.mongodb.net/FeedFood').then(()=>{
       console.log('DB connected') ;
    })
}
