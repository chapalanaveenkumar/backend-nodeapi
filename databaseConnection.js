const mongoose=require("mongoose");

const connectDB=async (req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected successfully");
    }catch(error){
        console.log(error);
    }
}

module.exports={connectDB};