const express = require("express")
const comModel = require("../model/comModel");
const router = express.Router();


////insert

router.post("/story",async(req,res)=>{
    const SignData = comModel(req.body)
    const result = await SignData.save();
    res.send(result)
  })


  //Read or get Data
  
  router.get("/stories",async (req,res)=>{
      const getData = await comModel.find();
      res.send(getData)
  })
  /////



  router.delete("/stories/delete/:id", async(req,res)=>{
    const deleteData = await comModel.deleteOne({
      _id: req.params.id });
    res.send(deleteData)
  })
  /////////////////////

  //update data
router.put("/stories/update/:id",async(req,res)=>{
    const updateData = await comModel.updateOne(
    { _id: req.params.id},
    {$set: req.body})
res.send(updateData)
})


router.get("/stories/:id", async(req,res) =>{
    const getSingleData =  await comModel.find({_id: req.params.id})
    res.send(getSingleData)
  })





  module.exports= router;