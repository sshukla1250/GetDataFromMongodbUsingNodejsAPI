const express=require('express');
const dbConnect=require('./mongodb');
const app=express();
app.use(express.json());
app.get('/',async(req,res)=>{
    let data = await dbConnect();
    const result=await data.find().toArray();
    res.send(result);
});

app.post('/',async(req,res)=>{

    let db=await dbConnect();
    //const result = await db.insertMany({title:"Song dabang",artist:"Sonu Nigam",album:"Album34"});

    let result = await db.insertOne(req.body);
    res.send(result);
});

app.delete('/',async(req,res)=>{

    let db=await dbConnect();
    //const result = await db.insertMany({title:"Song dabang",artist:"Sonu Nigam",album:"Album34"});

    let result = await db.deleteOne({artist:req.query.artist});
    res.send(result);
});

app.put('/',async(req,res)=>{

    let db=await dbConnect();
    //const result = await db.insertMany({title:"Song dabang",artist:"Sonu Nigam",album:"Album34"});
    let result = await db.updateOne({artist:req.query.artist},{$set:req.body}); //or use req.params.artist
    res.send(result);
});
app.listen(4500); 