const express= require("express");
const { connection } = require("./configs/db");
const { browseRouter } = require("./routes/browse.route");
const { postRouter } = require("./routes/post.route");

const app= express();

app.use(express.json());

require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to Homepage");
})

app.use("/post", postRouter);
app.use("/browse", browseRouter);





app.listen( process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log("Unable to connect to DB")
    }
    console.log(`Running at port ${process.env.port}`)
})