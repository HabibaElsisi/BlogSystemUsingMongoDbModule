import { db } from "../../../database/db_Connection.js"

const signUp=async(req,res,next)=>{
    let isUserExists=await db.collection("users").findOne({email:req.body.email})
    if(isUserExists)return res.json({message:"this user already exists"})
    let user= await db.collection("users").insertOne(req.body)
    res.json({message:"user added successfully",user})
}
const getAllUser=async(req,res,next)=>{
    let users=await db.collection("users").find().toArray()
    if(users.length==0)return res.json({message:"there is no users"})
    res.json({message:"this is all users",users})
}
const getAllPostsForSpecificUser=async(req,res,next)=>{
    let Posts=await db.collection("posts").find({userId:req.params.id}).toArray()
    if (Posts.length==0)return res.json({message:"there is no posts for this user"})
    res.json({message:"this is all posts for this user",Posts})
    
}



export{
    signUp,
    getAllUser,
    getAllPostsForSpecificUser
}