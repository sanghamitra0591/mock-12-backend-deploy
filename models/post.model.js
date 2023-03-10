const mongoose= require("mongoose");

const postSchema= ({
	"name": String,
	"description" : String,
	"category" : String,
	"image" : String,
	"location" : String,
	"postedAt" : String,
	"price" : Number
})

const PostModel= mongoose.model("post", postSchema);

module.exports= {
    PostModel
}