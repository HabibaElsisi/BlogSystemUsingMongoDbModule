import express from "express"
import { getAllPostsForSpecificUser, getAllUser, signUp } from "./user.controller.js"
let userRouter=express.Router()
userRouter.route("/")
    .post(signUp)
    .get(getAllUser)
userRouter.route("/:id")
    .get(getAllPostsForSpecificUser)






export default userRouter