const express=require("express");
const app=express();
const port=4700;

app.get("/",(req,res)=>{
    res.send("Hello peeps");

    })

app.listen(port,()=>{
    console.log("post is running on 4700")
})    