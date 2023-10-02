const express = require("express")
const signModel = require("../model/signModel");
const router = express.Router();


////insert

router.post("/singIN",async(req,res)=>{
    const SignData = signModel(req.body)
    const result = await SignData.save();
    res.send(result)
  })


  //Read or get Data
  
  router.get("/Users",async (req,res)=>{
      const getData = await signModel.find();
      res.send(getData)
  })
  
  router.delete("/Users/delete/:id", async(req,res)=>{
    const deleteData = await signModel.deleteOne({
      _id: req.params.id });
    res.send(deleteData)
  })
  /////////////////////

  //update data
router.put("/Users/update/:id",async(req,res)=>{
    const updateData = await signModel.updateOne(
    { _id: req.params.id},
    {$set: req.body})
res.send(updateData)
})


router.get("/Users/:id", async(req,res) =>{
    const getSingleData =  await signModel.find({_id: req.params.id})
    res.send(getSingleData)
  })


//// total Users

router.get("/total",async(req,res)=>{
  const data = await signModel.find().countDocuments();
  res.send({data})
})


  module.exports= router;