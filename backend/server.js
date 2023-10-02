const express = require ("express")
const mongoose = require("mongoose");
const cors = require ("cors")



const app = express();
app.use(cors())
app.use (express.json())


mongoose.connect("mongodb://0.0.0.0:27017/studentProject").then((response)=>{
    console.log("connected manGodb database!")
}).catch((error)=>{
    console.log("error")
})
const nodeModel = require("./model/nodeModel")
const signRoute =require("./Routes/signUPRoute");
const adminRoute = require("./Routes/adminRoute");
const comRoute= require("./Routes/createComRoute")

// insert or create data

app.post("/register/data",async (req,res)=>{
  const newData = nodeModel({
    name:req.body.name,
    age:req.body.age,
    phone:req.body.phone,
    address:req.body.address,
    parentName:req.body.parentName,
    className:req.body.className,
    fvSubject:req.body.fvSubject

  })
  const savedData = await newData.save();
  res.send(savedData)
})


//Read or get Data

app.get("/students",async (req,res)=>{
    const getData = await nodeModel.find();
    res.send(getData)
})


//update data
app.put("/students/update/:id",async(req,res)=>{
    const updateData = await nodeModel.updateOne(
    { _id: req.params.id},
    {$set: req.body})
res.send(updateData)
})


app.get("/students/:id", async(req,res) =>{
    const getSingleData =  await nodeModel.find({_id: req.params.id})
    res.send(getSingleData)
  })


//delete data
// app.delete("/students/delete/:id",async(req,res)=>{
//     const deleteData =await nodeModel.deleteOne(
//         {_id: req.params.id})
//         res.send(deleteData)
// })

app.delete("/students/delete/:id", async(req,res)=>{
    const deleteData = await nodeModel.deleteOne({
      _id: req.params.id });
    res.send(deleteData)
  })






















app.use(signRoute);
app.use (adminRoute);
app.use (comRoute);



app.listen(3000,()=>{

    console.log("server is runing on port 3000")
})
