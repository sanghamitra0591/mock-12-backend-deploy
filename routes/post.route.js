const express= require("express");
const { PostModel } = require("../models/post.model");

const postRouter= express.Router();

postRouter.post("/", async(req, res)=>{
    const data= req.body;
    try {
        const newData= new PostModel(data);
        await newData.save();
        res.send("Successfully added new Post")
    } catch (error) {
        console.log({"error":error});
        res.send("Unable to add the post")
    }
})



module.exports= {
    postRouter
}