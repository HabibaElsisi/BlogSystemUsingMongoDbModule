import { ObjectId } from "bson"
import { db } from "../../../database/db_Connection.js"

const addPost=async(req,res,next)=>{
    let isUserExists=await db.collection("users").findOne({_id:req.body.userId})
    if(!isUserExists) return res.json({message:"this user not found"})
    let post=await db.collection("posts").insertOne(req.body)
    res.json({message:"post added successfully",post})
}
const getAllPosts=async(req,res,next)=>{
    let posts=await db.collection("posts").find().toArray()
    res.json({message:"this is all posts",posts})
}
const updatePost=async(req,res,next)=>{
    if(req.body.userId){
        let isUserExists=await db.collection("users").findOne({_id:new ObjectId(req.body.userId)})
        if(!isUserExists)return res.json({message:"this user not found"})
    }
    let post=await db.collection("posts").updateOne({_id:new ObjectId(req.params.id)},{$set:req.body})
    res.json({message:"post updated successfully",post})
}
const deletePost=async(req,res,next)=>{
    await db.collection("posts").deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:"post deleted successfully"})
}




export{
    addPost,
    getAllPosts,
    updatePost,
    deletePost
}