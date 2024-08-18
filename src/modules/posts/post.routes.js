import express from "express"
import { addPost, deletePost, getAllPosts, updatePost } from "./post.controller.js"
let postRouter=express.Router()
postRouter.route("/")
    .post(addPost)
    .get(getAllPosts)
postRouter.route("/:id")
    .put(updatePost)
    .delete(deletePost)



export default postRouter