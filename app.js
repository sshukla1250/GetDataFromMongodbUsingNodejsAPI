const express=require('express');
const dbConnect=require('./mongodb');
const app=express();

app.get('/',async(req,res)=>{
    let data = await dbConnect();
    const result=await data.find().toArray();
    res.send(result);
});
app.listen(4500);