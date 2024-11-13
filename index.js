const express=require("express");
const morgan=require("morgan");
const dotenv=require("dotenv");
const {connectDB}=require("./databaseConnection");
const userRoute=require("./routers/userRouter");
dotenv.config();
const app=express();
connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use("/",userRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server is created http://localhost:${process.env.PORT} `);
})