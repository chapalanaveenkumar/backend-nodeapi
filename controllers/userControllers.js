const User=require("../models/users");

const getAllUsers=async (req,res)=>{
    const users=await User.find();
    try{
        if(users){
            res.status(200).send(users);
        }else{
            res.status(404).send("No users found");
        }
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports={getAllUsers};