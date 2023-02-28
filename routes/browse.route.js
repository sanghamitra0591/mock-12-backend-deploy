const express= require("express");
const { PostModel } = require("../models/post.model");

const browseRouter= express.Router();

browseRouter.get("/", async(req, res)=>{
    const {sort, category, input}= req.query;
    try {
        if(sort && category){
            if(sort==="asc" && category){
                const data= await PostModel.find({category}).sort({postedAt : 1});
                res.send(data);
            }else if(sort==="desc" && category){
                const data= await PostModel.find({category}).sort({postedAt : -1});
                res.send(data);
            }
        }else if(sort){
            if(sort==="asc"){
                const data= await PostModel.find().sort({postedAt : 1});
                res.send(data);
            }else if(sort==="desc"){
                const data= await PostModel.find().sort({postedAt : -1});
                res.send(data);
            }
        }else if(category){
            const data= await PostModel.find({category});
            res.send(data);
        }else if(input){
            const data= await PostModel.find({"name" : {"$regex" : input, "$options" : "i"}});
            res.send(data);
        }else{
            const data= await PostModel.find();
            res.send(data);
        }
    } catch (error) {
        console.log({"error":error});
        res.send("Unable to get the posts")
    }
})

browseRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
        await PostModel.findByIdAndDelete({"_id": id});
        res.send("Successfully Bought")
    } catch (error) {
        console.log({"error":error});
        res.send("Unable to buy the post")
    }
})



module.exports= {
    browseRouter
}